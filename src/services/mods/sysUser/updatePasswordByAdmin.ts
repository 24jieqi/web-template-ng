/**
 * @desc 管理员-修改用户密码
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.AdminUpdatePwdDTO
}

export function updatePasswordByAdmin({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<void>>({
    url: `/sys/user/updatePasswordByAdmin`,
    method: 'put',
    data: bodyParams
  })
}
