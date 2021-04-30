/**
 * @desc 国际发货-发货编辑-根据ID查询详情
 */
import request from '@/utils/request'
export class IQueryParams {
  /** id */
  id: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function info({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.DeliveryEditInfoVO>>({
    url: `/modules/deliveryPlan/edit/info`,
    method: 'get',
    params: queryParams
  })
}
