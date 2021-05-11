/**
 * @desc 三方-登录获取token
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.ThirdLoginModel
}

export function getToken({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<string>>({
    url: `/api/token`,
    method: 'post',
    data: bodyParams
  })
}
