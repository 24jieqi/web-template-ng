/**
 * @desc 部门用户列表
 */
import request from '@/utils/request'
export class IQueryParams {
  /** pageNo */
  pageNo?: number
  /** pageSize */
  pageSize?: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function departUserList({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.IPage<defs.SysUser>>>({
    url: `/sys/user/departUserList`,
    method: 'get',
    params: queryParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function departUserListRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await departUserList(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
