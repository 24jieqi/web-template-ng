/**
 * @desc 编辑用户
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.UserEditDTO
}

export function edit({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<string>>({
    url: `/sys/user/edit`,
    method: 'put',
    data: bodyParams
  })
}
