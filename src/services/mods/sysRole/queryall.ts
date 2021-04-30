/**
 * @desc 查询全部
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {}

export function queryall({}: IParams = {} as IParams) {
  return request<defs.Result>({
    url: `/sys/role/queryall`,
    method: 'get'
  })
}
