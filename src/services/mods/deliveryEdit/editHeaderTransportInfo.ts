/**
 * @desc 国际发货-发货编辑-头程运输信息编辑
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.DeliveryEditHeaderTransportInfoVO
}

export function editHeaderTransportInfo(
  { bodyParams }: IParams = {} as IParams
) {
  return request<defs.Result<defs.DeliveryEditInfoVO>>({
    url: `/modules/deliveryPlan/edit/editHeaderTransportInfo`,
    method: 'put',
    data: bodyParams
  })
}
