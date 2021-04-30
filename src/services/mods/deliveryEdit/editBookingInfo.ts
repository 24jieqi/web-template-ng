/**
 * @desc 国际发货-发货编辑-订舱信息编辑
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.DeliveryEditBookingInfoVO
}

export function editBookingInfo({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.DeliveryEditInfoVO>>({
    url: `/modules/deliveryPlan/edit/editBookingInfo`,
    method: 'put',
    data: bodyParams
  })
}
