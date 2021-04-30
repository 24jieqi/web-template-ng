/**
 * @desc 国内报关-获取状态类型
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {}

export function queryStateOptions({}: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.SelectTextOption>>>({
    url: `/business/importDeclare/state`,
    method: 'get'
  })
}
