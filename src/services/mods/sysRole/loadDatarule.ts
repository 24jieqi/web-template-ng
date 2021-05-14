/**
 * @desc 查询数据规则数据
 */
import request from '@/utils/request'
export class IQueryParams {
  /** permissionId */
  permissionId: number
  /** roleId */
  roleId: number
}

export interface IParams {}

export function loadDatarule(
  {}: IParams = {} as IParams,
  permissionId: string | number
) {
  return request<object>({
    url: `/sys/role/datarule/${permissionId}/{roleId}`,
    method: 'get'
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function loadDataruleRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {}
  try {
    const res = await loadDatarule(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
