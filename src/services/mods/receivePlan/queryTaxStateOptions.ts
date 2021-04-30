/**
 * @desc 销地收货-获取状态类型
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {}

export function queryTaxStateOptions({}: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.SelectTextOption>>>({
    url: `/business/receivePlan/state`,
    method: 'get'
  })
}
