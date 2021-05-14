/**
 * @desc 查询全部
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {}

export function queryall({}: IParams = {} as IParams) {
  return request<defs.Result>({
    url: `/sys/role/queryall`,
    method: 'get'
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function queryallRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {}
  try {
    const res = await queryall(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
