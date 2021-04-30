/**
 * @desc 国际发货-发货编辑-出口报关信息编辑
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.DeliveryEditExportDeclareInfoVO
}

export function editExportInfo({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.DeliveryEditInfoVO>>({
    url: `/modules/deliveryPlan/edit/editExportInfo`,
    method: 'put',
    data: bodyParams
  })
}
