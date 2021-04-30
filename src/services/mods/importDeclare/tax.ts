/**
 * @desc 纳税放行-提交纳税
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.ImportDeclareTaxDTO
}

export function tax({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<string>>({
    url: `/business/importDeclare/tax/commit`,
    method: 'post',
    data: bodyParams
  })
}
