/**
 * @desc 纳税放行-提交纳税
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.ImportDeclareTaxDTO
}

export function tax({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<string>>({
    url: `/business/importDeclare/tax/commit`,
    method: 'post',
    data: bodyParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function taxRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    bodyParams: restParamsData[0]
  }
  try {
    const res = await tax(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
