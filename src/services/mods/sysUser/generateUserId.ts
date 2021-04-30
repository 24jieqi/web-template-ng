/**
 * @desc 根据部门id查询用户信息
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {}

export function generateUserId({}: IParams = {} as IParams) {
  return request<defs.Result<string>>({
    url: `/sys/user/generateUserId`,
    method: 'get'
  })
}
