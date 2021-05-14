/**
 * @desc 列表状态筛选下拉接口
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {}

export function deliveryPlanStatus({}: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.SelectTextOption>>>({
    url: `/business/pickGoodsInfo/state/option`,
    method: 'get'
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function deliveryPlanStatusRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {}
  try {
    const res = await deliveryPlanStatus(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
