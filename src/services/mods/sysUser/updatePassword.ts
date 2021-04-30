/**
 * @desc 用户自身-修改密码
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.UserUpdatePwdDTO
}

export function updatePassword({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<void>>({
    url: `/sys/user/updatePassword`,
    method: 'put',
    data: bodyParams
  })
}
