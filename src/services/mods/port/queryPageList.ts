/**
 * @desc 口岸管理信息-分页列表查询
 */
import request from '@/utils/request'
export class IQueryParams {
  /** 1 中国 2 越南 3 泰国 */
  country?: number
  /** name */
  name?: string
  /** pageNo */
  pageNo?: number
  /** pageSize */
  pageSize?: number
  /** 口岸运输方式(1陆运，2海运，3海铁) */
  transportMode?: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function queryPageList({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.Page<defs.PortListVO>>>({
    url: `/business/port/list`,
    method: 'get',
    params: queryParams
  })
}
