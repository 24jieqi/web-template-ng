/**
 * @desc 国际发货-发货编辑-回滚
 */
import request from '@/utils/request'
export class IQueryParams {
  /** id */
  id?: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function rollBack({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<string>>({
    url: `/modules/deliveryPlan/edit/rollBack`,
    method: 'post',
    params: queryParams
  })
}
