/**
 * @desc 根据id获取口岸信息
 */
import request from '@/utils/request'
export class IQueryParams {
  /** id */
  id: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function queryById({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.PortEditVO>>({
    url: `/business/port/queryById`,
    method: 'get',
    params: queryParams
  })
}
