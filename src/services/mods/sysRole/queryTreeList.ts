/**
 * @desc 查询菜单权限树
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {}

export function queryTreeList({}: IParams = {} as IParams) {
  return request<object>({
    url: `/sys/role/queryTreeList`,
    method: 'get'
  })
}
