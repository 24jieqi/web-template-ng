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
