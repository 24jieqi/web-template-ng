/**
 * @desc 国际发货-发货编辑-获取回滚到状态
 */
import request from '@/utils/request'
export class IQueryParams {
  /** id */
  id: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function getRollBackState({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<string>>({
    url: `/modules/deliveryPlan/edit/getRollBackState`,
    method: 'get',
    params: queryParams
  })
}
