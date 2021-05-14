/**
 * @desc 查询当前用户的所有部门/当前部门编码
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {}

export function getCurrentUserDeparts({}: IParams = {} as IParams) {
  return request<defs.Result<defs.ObjectMap<string, ObjectMap>>>({
    url: `/sys/user/getCurrentUserDeparts`,
    method: 'get'
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function getCurrentUserDepartsRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {}
  try {
    const res = await getCurrentUserDeparts(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
