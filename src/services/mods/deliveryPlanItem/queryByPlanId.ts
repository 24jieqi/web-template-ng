/**
 * @desc 根据计划ID获取发货计划明细
 */
import request from '@/utils/request'
export class IQueryParams {
  /** planId */
  planId: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function queryByPlanId({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.DeliveryPlanItem>>>({
    url: `/business/deliveryPlanItem/queryByPlanId`,
    method: 'get',
    params: queryParams
  })
}
