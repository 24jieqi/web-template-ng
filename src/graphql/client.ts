import type { DefaultContext } from '@apollo/client'
import debounce from 'lodash/debounce'

import { History } from '@/app/components/navigate-setter'
import { getAccess } from '@/chunfen'
import { modal, message } from '@/constants/global'
import { LOGIN } from '@/pages/auth/route'
import useUser from '@/stores/user'
import makeApolloClient from '@/utils/graphql/client'

let isTrigger = false

const messageKey = 'permission_change_message'
let loginModalIsShown = false

const errorTip = debounce(message.error, 500, {
  leading: true,
  trailing: false,
})

/**
 * 处理有token但token失效的情形
 * @param token
 */
const noAuthHandlers = (token: string) => {
  const hasToken = !!token
  // 过滤掉无 token 导致的鉴权失败（由路由拦截处理）
  if (!loginModalIsShown && hasToken) {
    loginModalIsShown = true
    modal.warning({
      title: '系统提示',
      content: '登录状态已失效，请重新登录',
      onOk() {
        sessionStorage.setItem(
          'REDIRECT_URL',
          `${location.pathname}${location.search}`,
        )
        loginModalIsShown = false
        useUser.getState().clear()
        History.navigate(LOGIN)
      },
      okText: '确定',
    })
  }
}

/**
 * 处理权限变更
 */
const permissionChangeHandler = async () => {
  if (!isTrigger) {
    isTrigger = true
    message.open({
      type: 'loading',
      content: '检测到权限变更，更新中...',
      duration: 0,
      key: messageKey,
    })
    const access = getAccess()
    await access.updateAccess(true)
    message.destroy(messageKey)
    isTrigger = false
  }
}
/**
 * graphql异常处理
 * @param code
 * @param msg
 * @param context
 */
function handleGraphqlError(
  code: string,
  msg: string,
  context: DefaultContext,
) {
  switch (code) {
    case '401':
      noAuthHandlers(context.token)
      break
    case '602':
      permissionChangeHandler()
      break
    default:
      errorTip(msg)
  }
}

const client = makeApolloClient({
  onGraphqlError: handleGraphqlError,
  getToken: () => ({
    accessToken: useUser.getState().token,
    refreshToken: useUser.getState().token,
  }),
  setToken: (newToken: string) => useUser.getState().setToken(newToken),
})

export default client
