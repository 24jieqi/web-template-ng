/**
 * @desc 组织修改
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.SysDepartEditDTO
}

export function edit({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.SysDepart>>({
    url: `/sys/sysDepart/edit`,
    method: 'put',
    data: bodyParams
  })
}
