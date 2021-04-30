/**
 * @desc 国际发货-发货编辑-基本信息编辑
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.DeliveryEditBaseInfoVO
}

export function editBaseInfo({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.DeliveryEditInfoVO>>({
    url: `/modules/deliveryPlan/edit/editBaseInfo`,
    method: 'put',
    data: bodyParams
  })
}
