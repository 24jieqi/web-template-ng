/**
 * @desc 产地报关信息（新增/编辑）
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
  return request<defs.Result<defs.DeclareCustomEditVO>>({
    url: `/business/declareCustoms/queryDeclareByPlanId`,
    method: 'get',
    params: queryParams
  })
}
