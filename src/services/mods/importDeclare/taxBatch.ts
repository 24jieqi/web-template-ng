/**
 * @desc 纳税放行-批量提交纳税
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.ImportDeclareTaxBatchDTO
}

export function taxBatch({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<string>>({
    url: `/business/importDeclare/tax/commit/batch`,
    method: 'post',
    data: bodyParams
  })
}
