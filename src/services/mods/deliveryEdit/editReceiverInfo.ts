/**
 * @desc 国际发货-发货编辑-收货方信息编辑
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.DeliveryEditReceiverInfoVO
}

export function editReceiverInfo({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.DeliveryEditInfoVO>>({
    url: `/modules/deliveryPlan/edit/editReceiverInfo`,
    method: 'put',
    data: bodyParams
  })
}
