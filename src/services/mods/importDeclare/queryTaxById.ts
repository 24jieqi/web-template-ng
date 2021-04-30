/**
 * @desc 纳税放行-根据国际计划ID查询
 */
import request from '@/utils/request'
export class IQueryParams {
  /** id */
  id: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function queryTaxById({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.ImportDeclareTaxDetailVO>>({
    url: `/business/importDeclare/tax/queryById`,
    method: 'get',
    params: queryParams
  })
}
