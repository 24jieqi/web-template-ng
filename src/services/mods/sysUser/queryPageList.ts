/**
 * @desc 用户分页
 */
import request from '@/utils/request'
export class IQueryParams {
  /** 删除状态(0-正常,1-已删除) */
  deleted?: number
  /** 部门IDS */
  departIds?: Array<number>
  /** 用户名称 */
  nickname?: string
  /** pageNo */
  pageNo?: number
  /** pageSize */
  pageSize?: number
  /** 姓名 */
  realname?: string
  /** 角色ID */
  roleId?: number
  /** sortBys */
  sortBys?: string
  /** 状态 */
  status?: number
  /** 登陆账号 */
  username?: string
}

export interface IParams {
  queryParams: IQueryParams
}

export function queryPageList({ queryParams }: IParams = {} as IParams) {
  return request<defs.SysUserVO>({
    url: `/sys/user/list`,
    method: 'get',
    params: queryParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function queryPageListRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await queryPageList(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
