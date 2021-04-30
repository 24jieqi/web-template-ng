/**
 * @desc 分页列表接口
 */
import request from '@/utils/request'
export class IQueryParams {
  /** pageNo */
  pageNo?: number
  /** pageSize */
  pageSize?: number
}

export interface IParams {
  queryParams: IQueryParams
  bodyParams: defs.TempMonitorQueryDTO
}

export function pageList({ queryParams, bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.Page<defs.TempMonitorListVO>>>({
    url: `/transiting/temp/monitor/list`,
    method: 'post',
    data: bodyParams,
    params: queryParams
  })
}
