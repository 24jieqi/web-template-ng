/**
 * @desc 详情接口
 */
import request from '@/utils/request'
export class IQueryParams {
  /** planId */
  planId: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function detail({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.TempMonitorDetailVO>>({
    url: `/transiting/temp/monitor/detail`,
    method: 'get',
    params: queryParams
  })
}
