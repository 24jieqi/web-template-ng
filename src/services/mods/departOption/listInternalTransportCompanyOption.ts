/**
 * @desc 尾程运输公司下拉列表
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {}

export function listInternalTransportCompanyOption(
  {}: IParams = {} as IParams
) {
  return request<defs.Result<Array<defs.SelectOption>>>({
    url: `/sys/depart/option/internal/transport/company`,
    method: 'get'
  })
}
