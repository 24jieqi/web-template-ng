/**
 * @desc 查询所有系统用户-下拉框
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {}

export function queryAllSysUserForSelect({}: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.SelectOption>>>({
    url: `/sys/user/queryAllSysUserForSelect`,
    method: 'get'
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function queryAllSysUserForSelectRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {}
  try {
    const res = await queryAllSysUserForSelect(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
