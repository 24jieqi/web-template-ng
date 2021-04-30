/**
 * @desc 供应商占比
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {}

export function querySupplierOrder({}: IParams = {} as IParams) {
  return request<defs.Result<defs.SupplierOrderVO>>({
    url: `/business/report/querySupplierOrder`,
    method: 'get'
  })
}
