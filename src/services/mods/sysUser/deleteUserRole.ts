/**
 * @desc 删除指定角色的用户关系
 */
import request from '@/utils/request'
export class IQueryParams {
  /** roleId */
  roleId: string
  /** userId */
  userId: string
}

export interface IParams {
  queryParams: IQueryParams
}

export function deleteUserRole({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.SysUserRole>>({
    url: `/sys/user/deleteUserRole`,
    method: 'delete',
    params: queryParams
  })
}
