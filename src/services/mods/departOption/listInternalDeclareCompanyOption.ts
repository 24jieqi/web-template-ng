/**
 * @desc 国内报关公司下拉列表
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {}

export function listInternalDeclareCompanyOption({}: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.SelectOption>>>({
    url: `/sys/depart/option/internal/declare/company`,
    method: 'get'
  })
}
