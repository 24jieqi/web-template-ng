/**
 * @desc 海外头程运输公司下拉列表
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {}

export function listForeignTransportCompanyOption({}: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.SelectOption>>>({
    url: `/sys/depart/option/foreign/transport/company`,
    method: 'get'
  })
}
