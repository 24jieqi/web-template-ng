/**
 * @desc 根据 token 获取用户明细
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {}

export function getInfo({}: IParams = {} as IParams) {
  return request<defs.Result<defs.UserInfoVO>>({
    url: `/sys/user/info`,
    method: 'get'
  })
}
