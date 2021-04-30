/**
 * @desc 国内报关-根据国际计划ID查询
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
  return request<defs.Result<defs.ImportDeclareDetailVO>>({
    url: `/business/importDeclare/queryById`,
    method: 'get',
    params: queryParams
  })
}
