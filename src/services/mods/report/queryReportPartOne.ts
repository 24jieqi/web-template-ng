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
