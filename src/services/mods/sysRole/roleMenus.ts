/**
 * @desc 查询角色菜单权限
 */
import request from '@/utils/request'
export class IQueryParams {
  /** roleId */
  roleId: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function roleMenus({ queryParams }: IParams = {} as IParams) {
  return request<Array<object>>({
    url: `/sys/role/roleMenus`,
    method: 'get',
    params: queryParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function roleMenusRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await roleMenus(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
