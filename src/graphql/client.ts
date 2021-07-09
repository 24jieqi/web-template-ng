import { ApolloClient, InMemoryCache, HttpLink, ApolloLink, concat } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { setContext } from '@apollo/client/link/context'
import { message as antdMessage } from 'antd'
import { debounce } from 'lodash'
import storage from '@/utils/storage'
import { history } from '@/router'
import { LOGIN_PATH } from '@/router/config/basePath'
import config from '@/config'
// 错误提示
const errorTip = debounce(antdMessage.error, 500)

const httpLink = new HttpLink({
  uri: `${config.apiHost}${config.baseUrl}graphql`,
})
const withToken = setContext(() => {
  const token = storage.getItem(config.authKey)
  return { token }
})
// 请求处理
const authMiddleware = new ApolloLink((operation, forward) => {
  const { token } = operation.getContext()
  operation.setContext(({ headers = {} }) => {
    if (token) {
      Object.assign(headers, { Authorization: token })
    }
    return {
      headers,
    }
  })
  return forward(operation)
})
// 响应处理
const responseMiddleware = new ApolloLink((operation, forward) => {
  return forward(operation).map((response) => {
    const errResponse = response as {
      errCode: number
      errMsg: string
      data: Record<string, any>
    }
    if (errResponse.errCode === 500) {
      errorTip(errResponse.errMsg || '服务器异常')
    }
    return response
  })
})
const errorMiddleware = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, extensions, path }) => {
      // eslint-disable-next-line no-console
      console.error(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
      if (extensions) {
        const { message: errMsg, code } = extensions
        if (code === '401') {
          history.replace(LOGIN_PATH)
          errorTip(errMsg)
        } else {
          errorTip(errMsg)
        }
      }
    })
  if (networkError) {
    // eslint-disable-next-line no-console
    console.error(`[Network error]: ${networkError.stack}`)
    errorTip('服务器异常')
  }
})
const link = ApolloLink.from([withToken, concat(authMiddleware, httpLink)])
export default new ApolloClient({
  link: concat(errorMiddleware, concat(responseMiddleware, link)),
  cache: new InMemoryCache({
    // 去掉 __typename
    addTypename: false,
  }),
  defaultOptions: {
    // 禁用缓存
    watchQuery: {
      fetchPolicy: 'network-only',
    },
    query: {
      fetchPolicy: 'network-only',
    },
  },
})
