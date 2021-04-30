/**
 * @desc 新增国际发货计划
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.DeliveryPlanAddDTO
}

export function add({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<string>>({
    url: `/modules/deliveryPlan/add`,
    method: 'post',
    data: bodyParams
  })
}
