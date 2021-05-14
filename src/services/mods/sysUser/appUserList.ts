/**
 * @desc 获取用户列表  根据用户名和真实名 模糊匹配
 */
import request from '@/utils/request'
export class IQueryParams {
  /** keyword */
  keyword?: string
  /** pageNo */
  pageNo?: number
  /** pageSize */
  pageSize?: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function appUserList({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.IPage<defs.SysUser>>>({
    url: `/sys/user/appUserList`,
    method: 'get',
    params: queryParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function appUserListRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await appUserList(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
