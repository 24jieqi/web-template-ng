/**
 * @desc 根据id查询发货计划
 */
import request from '@/utils/request'
export class IQueryParams {
  /** id */
  id: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function queryById({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.DeliveryPlanEditVO>>({
    url: `/modules/deliveryPlan/queryById`,
    method: 'get',
    params: queryParams
  })
}
