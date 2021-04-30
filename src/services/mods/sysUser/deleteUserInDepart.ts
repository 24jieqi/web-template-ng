/**
 * @desc 删除指定机构的用户关系
 */
import request from '@/utils/request'
export class IQueryParams {
  /** depId */
  depId: string
  /** userId */
  userId: string
}

export interface IParams {
  queryParams: IQueryParams
}

export function deleteUserInDepart({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.SysUserDepart>>({
    url: `/sys/user/deleteUserInDepart`,
    method: 'delete',
    params: queryParams
  })
}
