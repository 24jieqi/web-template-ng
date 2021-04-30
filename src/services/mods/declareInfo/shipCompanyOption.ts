/**
 * @desc 船公司下拉列表
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {}

export function shipCompanyOption({}: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.SelectTextOption>>>({
    url: `/business/declareInfo/ship/company/option`,
    method: 'get'
  })
}
