/**
 * @desc 国际发货-发货编辑-商品信息编辑
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.DeliveryEditProductDTO
}

export function editProductInfo({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.DeliveryEditInfoVO>>({
    url: `/modules/deliveryPlan/edit/editProductInfo`,
    method: 'put',
    data: bodyParams
  })
}
