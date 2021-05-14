/**
 * @desc 根据 token 获取用户明细
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {}

export function getInfo({}: IParams = {} as IParams) {
  return request<defs.Result<defs.UserInfoVO>>({
    url: `/sys/user/info`,
    method: 'get'
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function getInfoRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {}
  try {
    const res = await getInfo(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
