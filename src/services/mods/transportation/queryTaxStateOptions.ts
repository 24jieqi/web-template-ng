/**
 * @desc 尾程运输-获取状态类型
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {}

export function queryTaxStateOptions({}: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.SelectTextOption>>>({
    url: `/business/transportation/state`,
    method: 'get'
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function queryTaxStateOptionsRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {}
  try {
    const res = await queryTaxStateOptions(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
