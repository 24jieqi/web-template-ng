/**
 * @desc 发货计划详情
 */
import request from '@/utils/request'
export class IQueryParams {
  /** id */
  id: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function detail({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.DeliveryPlanDetailVO>>({
    url: `/modules/deliveryPlan/detail`,
    method: 'get',
    params: queryParams
  })
}
