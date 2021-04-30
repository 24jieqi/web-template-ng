/**
 * @desc 添加角色
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.SysRole
}

export function add({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result>({
    url: `/sys/role/add`,
    method: 'post',
    data: bodyParams
  })
}
