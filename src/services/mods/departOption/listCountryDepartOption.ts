/**
 * @desc 根据国家和组织类型获取组织下拉列表
 */
import request from '@/utils/request'
export class IQueryParams {
  /** country */
  country: number
  /** orgCategory */
  orgCategory: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function listCountryDepartOption(
  { queryParams }: IParams = {} as IParams
) {
  return request<defs.Result<Array<defs.SelectOption>>>({
    url: `/sys/depart/option/country/depart/list`,
    method: 'get',
    params: queryParams
  })
}
