/**
 * @desc 国际发货-发货编辑-进口报关信息编辑
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.DeliveryEditImportDeclareInfoVO
}

export function editImportInfo({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.DeliveryEditInfoVO>>({
    url: `/modules/deliveryPlan/edit/editImportInfo`,
    method: 'put',
    data: bodyParams
  })
}
