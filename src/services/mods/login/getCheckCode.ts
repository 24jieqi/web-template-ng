/**
 * @desc 获取验证码
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {}

export function getCheckCode({}: IParams = {} as IParams) {
  return request<defs.Result<defs.ObjectMap<string, string>>>({
    url: `/sys/getCheckCode`,
    method: 'get'
  })
}
