/**
 * @desc 查询所有系统用户
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {}

export function queryAllSysUser({}: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.SysUser>>>({
    url: `/sys/user/queryAllSysUser`,
    method: 'get'
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function queryAllSysUserRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {}
  try {
    const res = await queryAllSysUser(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
