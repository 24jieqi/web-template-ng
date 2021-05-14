/**
 * @desc 国内报关-获取状态类型
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {}

export function queryStateOptions({}: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.SelectTextOption>>>({
    url: `/business/importDeclare/state`,
    method: 'get'
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function queryStateOptionsRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {}
  try {
    const res = await queryStateOptions(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
