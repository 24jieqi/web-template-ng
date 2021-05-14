/**
 * @desc 报表第一部分数据
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {}

export function queryReportPartOne({}: IParams = {} as IParams) {
  return request<defs.Result<defs.ReportSalesVO>>({
    url: `/business/report/queryReportPartOne`,
    method: 'get'
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function queryReportPartOneRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {}
  try {
    const res = await queryReportPartOne(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
