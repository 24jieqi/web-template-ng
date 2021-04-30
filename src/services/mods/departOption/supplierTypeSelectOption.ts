/**
 * @desc 供应商类型接口
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {}

export function supplierTypeSelectOption({}: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.SelectOption>>>({
    url: `/sys/depart/option/supplier/type`,
    method: 'get'
  })
}
