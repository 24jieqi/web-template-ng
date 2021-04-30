/**
 * @desc 批量删除指定机构的用户关系
 */
import request from '@/utils/request'
export class IQueryParams {
  /** depId */
  depId: string
  /** userIds */
  userIds: string
}

export interface IParams {
  queryParams: IQueryParams
}

export function deleteUserInDepartBatch(
  { queryParams }: IParams = {} as IParams
) {
  return request<defs.Result<defs.SysUserDepart>>({
    url: `/sys/user/deleteUserInDepartBatch`,
    method: 'delete',
    params: queryParams
  })
}
