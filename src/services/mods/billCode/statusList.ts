/**
 * @desc 销售单号-获取状态下拉菜单
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {}

export function statusList({}: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.SelectTextOption>>>({
    url: `/finance/billCode/statusList`,
    method: 'get'
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function statusListRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {}
  try {
    const res = await statusList(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
