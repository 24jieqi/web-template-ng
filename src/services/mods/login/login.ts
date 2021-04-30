/**
 * @desc 登录接口
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.SysLoginModel
}

export function login({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.LoginedVO>>({
    url: `/sys/login`,
    method: 'post',
    data: bodyParams
  })
}
