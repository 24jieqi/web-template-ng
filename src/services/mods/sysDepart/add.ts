/**
 * @desc 组织新增
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.OrganizationsCreateEntity
}

export function add({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.SysDepart>>({
    url: `/sys/sysDepart/add`,
    method: 'post',
    data: bodyParams
  })
}
