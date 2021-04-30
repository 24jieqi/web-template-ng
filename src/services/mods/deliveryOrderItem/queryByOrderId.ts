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
