/**
 * @desc 根据planId查询订舱信息（新增/编辑）
 */
import request from '@/utils/request'
export class IQueryParams {
  /** planId */
  planId: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function queryById({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.DeclareInfoEditVO>>({
    url: `/business/declareInfo/queryBookingByPlanId`,
    method: 'get',
    params: queryParams
  })
}
