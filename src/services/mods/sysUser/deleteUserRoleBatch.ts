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
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function deleteUserRoleBatchRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await deleteUserRoleBatch(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
