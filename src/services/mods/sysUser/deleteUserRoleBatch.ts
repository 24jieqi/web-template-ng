/**
 * @desc 批量删除指定角色的用户关系
 */
import request from '@/utils/request'
export class IQueryParams {
  /** roleId */
  roleId: string
  /** userIds */
  userIds: string
}

export interface IParams {
  queryParams: IQueryParams
}

export function deleteUserRoleBatch({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.SysUserRole>>({
    url: `/sys/user/deleteUserRoleBatch`,
    method: 'delete',
    params: queryParams
  })
}
