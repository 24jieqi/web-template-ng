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
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function deleteUserRoleRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await deleteUserRole(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
