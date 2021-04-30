/**
 * @desc 修改菜单权限
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.RolePermissionEditDTO
}

export function editRoleMenus({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result>({
    url: `/sys/role/roleMenus`,
    method: 'put',
    data: bodyParams
  })
}
