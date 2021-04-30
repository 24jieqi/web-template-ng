/**
 * @desc 报关口岸下拉列表
 */
import request from '@/utils/request'
export class IQueryParams {
  /** portId */
  portId: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function listPortDeclareOption(
  { queryParams }: IParams = {} as IParams
) {
  return request<defs.Result<Array<defs.SelectOption>>>({
    url: `/business/port/declare/option`,
    method: 'get',
    params: queryParams
  })
}
