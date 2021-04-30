/**
 * @desc 国际发货-发货编辑-尾程运输信息编辑
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.DeliveryEditFinalTransportInfoVO
}

export function editFinalTransportInfo(
  { bodyParams }: IParams = {} as IParams
) {
  return request<defs.Result<defs.DeliveryEditInfoVO>>({
    url: `/modules/deliveryPlan/edit/editFinalTransportInfo`,
    method: 'put',
    data: bodyParams
  })
}
