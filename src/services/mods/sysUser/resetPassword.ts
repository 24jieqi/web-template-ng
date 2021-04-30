/**
 * @desc 重置密码-用于第一次进入修改
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.UpdatePasswordVO
}

export function resetPassword({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<void>>({
    url: `/sys/user/resetPassword`,
    method: 'put',
    data: bodyParams
  })
}
