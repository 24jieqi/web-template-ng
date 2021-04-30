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
