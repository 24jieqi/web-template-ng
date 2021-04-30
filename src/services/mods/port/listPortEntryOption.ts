/**
 * @desc 出口港下拉列表
 */
import request from '@/utils/request'
export class IQueryParams {
  /** departId */
  departId: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function listPortEntryOption({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.SelectOption>>>({
    url: `/business/port/export/option`,
    method: 'get',
    params: queryParams
  })
}
