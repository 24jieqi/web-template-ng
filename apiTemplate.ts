import { CodeGenerator, Interface } from 'pont-engine'

function formatPath(rawPath: string) {
  const reg = /\{(\w+)\}/ // 匹配{something}
  const res = reg.exec(rawPath)
  if (res) {
    const index = res.index
    const params = res[1]
    return [rawPath.substr(0, index) + '$' + rawPath.substr(index), params]
  }
  return [rawPath, '']
}

function getRequestParams(params: string) {
  if (!params) {
    return ''
  }
  return `, ${params}: string | number`
}

function getParamsShapeCode(
  queryParams: string,
  bodyParams: string,
  showQueryParams: boolean,
  showBodyParams: boolean
) {
  const paramsInterface = `
  interface IParams{
    ${showQueryParams ? queryParams : ''}
    ${showBodyParams ? bodyParams : ''}
  }
  `
  const propsName = []
  if (showQueryParams) {
    propsName.push('queryParams')
  }
  if (showBodyParams) {
    propsName.push('bodyParams')
  }
  const paramsDestructureStr = `{${propsName.join(',')}}`
  return [paramsInterface, paramsDestructureStr]
}

export default class MyGenerator extends CodeGenerator {
  getInterfaceContent(inter: Interface) {
    const queryParamsType = 'IQueryParams'
    const bodyParmas = inter.getBodyParamsCode()
    const queryParams = inter.getParamsCode(queryParamsType)
    const hasQueryParams = inter.parameters.filter(({ in: paramsIn }) => paramsIn === 'query').length > 0
    const queryParamsTmp = `queryParams:${queryParamsType}`
    const bodyParamsTmp = `bodyParams:${bodyParmas}`
    const [paramsInterface, paramsDestructureStr] = getParamsShapeCode(
      queryParamsTmp,
      bodyParamsTmp,
      hasQueryParams,
      !!bodyParmas
    )
    const [path, params] = formatPath(inter.path)
    const requestParamsCode = [bodyParmas ? 'data: bodyParams' : '', hasQueryParams ? 'params: queryParams' : '']
      .filter(Boolean)
      .join(',\n')
    return `
    /**
     * @desc ${inter.description}
     */
    import request from '@/utils/request'
    export ${queryParams}
    export ${paramsInterface}
    export function ${inter.name}(${paramsDestructureStr}:IParams = {} as IParams${getRequestParams(params)}) {
      return request<${inter.response.generateCode()}>({
        url: \`${path}\`,
        method: '${inter.method}',
        ${requestParamsCode}
      });
    }
   `
  }
}
