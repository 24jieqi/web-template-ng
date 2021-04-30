/**
 * @desc 头程运输信息（新增/编辑）
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
  return request<defs.Result<defs.HeadTransportEditVO>>({
    url: `/business/head/transport/queryHeadByPlanId`,
    method: 'get',
    params: queryParams
  })
}
