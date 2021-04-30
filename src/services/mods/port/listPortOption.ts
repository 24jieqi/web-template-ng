/**
 * @desc 进口港下拉列表
 */
import request from '@/utils/request'
export class IQueryParams {
  /** country */
  country: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function listPortOption({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.SelectOption>>>({
    url: `/business/port/entry/option`,
    method: 'get',
    params: queryParams
  })
}
