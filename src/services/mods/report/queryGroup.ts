/**
 * @desc 柱状图
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {}

export function queryGroup({}: IParams = {} as IParams) {
  return request<defs.Result<defs.ReportGroupVO>>({
    url: `/business/report/queryGroup`,
    method: 'get'
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function queryGroupRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {}
  try {
    const res = await queryGroup(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
