/**
 * @desc 根据订单ID获取商品明细
 */
import request from '@/utils/request'
export class IQueryParams {
  /** orderId */
  orderId: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function queryByOrderId({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.DeliveryOrderItem>>>({
    url: `/business/deliveryOrderItem/queryByOrderId`,
    method: 'get',
    params: queryParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function queryByOrderIdRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await queryByOrderId(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
