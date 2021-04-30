/**
 * @desc 海外报关公司（出口报关公司）下拉列表
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {}

export function listForeignDeclareCompanyOption({}: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.SelectOption>>>({
    url: `/sys/depart/option/foreign/declare/company`,
    method: 'get'
  })
}
