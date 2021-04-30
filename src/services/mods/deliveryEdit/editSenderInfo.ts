/**
 * @desc 国际发货-发货编辑-发货方信息编辑
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.DeliveryEditSenderInfoVO
}

export function editSenderInfo({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.DeliveryEditInfoVO>>({
    url: `/modules/deliveryPlan/edit/editSenderInfo`,
    method: 'put',
    data: bodyParams
  })
}
