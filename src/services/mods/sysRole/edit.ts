/**
 * @desc 编辑角色
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.SysRole
}

export function edit({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result>({
    url: `/sys/role/edit`,
    method: 'put',
    data: bodyParams
  })
}
