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
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function editRoleMenusRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    bodyParams: restParamsData[0]
  }
  try {
    const res = await editRoleMenus(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
