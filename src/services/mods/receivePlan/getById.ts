/**
 * @desc 销地收货-根据分柜订单ID查询
 */
import request from '@/utils/request'
export class IQueryParams {
  /** id */
  id: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function getById({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.ReceiveWebDetailVO>>({
    url: `/business/receivePlan/getById`,
    method: 'get',
    params: queryParams
  })
}
