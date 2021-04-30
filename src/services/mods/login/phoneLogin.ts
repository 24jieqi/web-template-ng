/**
 * @desc 手机号登录接口
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: ObjectMap<any, object>
}

export function phoneLogin({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.LoginedVO>>({
    url: `/sys/phoneLogin`,
    method: 'post',
    data: bodyParams
  })
}
