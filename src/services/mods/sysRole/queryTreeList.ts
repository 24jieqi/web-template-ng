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
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function queryTreeListRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {}
  try {
    const res = await queryTreeList(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
