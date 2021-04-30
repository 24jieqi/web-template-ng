/**
 * @desc 企业组织类型接口
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {}

export function businessTypeSelectOption({}: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.SelectOption>>>({
    url: `/sys/depart/option/business/type`,
    method: 'get'
  })
}
