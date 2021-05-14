/**
 * @desc 供应商占比
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {}

export function querySupplierOrder({}: IParams = {} as IParams) {
  return request<defs.Result<defs.SupplierOrderVO>>({
    url: `/business/report/querySupplierOrder`,
    method: 'get'
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function querySupplierOrderRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {}
  try {
    const res = await querySupplierOrder(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
