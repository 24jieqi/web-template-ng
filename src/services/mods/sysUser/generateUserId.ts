/**
 * @desc 根据部门id查询用户信息
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {}

export function generateUserId({}: IParams = {} as IParams) {
  return request<defs.Result<string>>({
    url: `/sys/user/generateUserId`,
    method: 'get'
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function generateUserIdRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {}
  try {
    const res = await generateUserId(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
