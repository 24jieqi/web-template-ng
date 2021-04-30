/**
 * @desc 更新国际发货计划信息
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.DeliveryPlanEditDTO
}

export function edit({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<string>>({
    url: `/modules/deliveryPlan/edit`,
    method: 'put',
    data: bodyParams
  })
}
