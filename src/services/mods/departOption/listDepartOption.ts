/**
 * @desc 进口出口组织供应商下拉列表
 */
import request from '@/utils/request'
export class IQueryParams {
  /** departId */
  departId: number
  /** orgCategory */
  orgCategory: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function listDepartOption({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.SelectOption>>>({
    url: `/sys/depart/option/depart/list`,
    method: 'get',
    params: queryParams
  })
}
