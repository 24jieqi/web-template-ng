/**
 * @desc 查询用户角色
 */
import request from '@/utils/request'
export class IQueryParams {
  /** id */
  id: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function queryUserRole({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<Array<number>>>({
    url: `/sys/user/queryUserRole`,
    method: 'get',
    params: queryParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function queryUserRoleRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await queryUserRole(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
