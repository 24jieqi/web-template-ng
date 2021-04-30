/**
 * @desc 用户下拉选择
 */
import request from '@/utils/request'
export class IQueryParams {
  /** q */
  q?: string
}

export interface IParams {
  queryParams: IQueryParams
}

export function searchableUserOption({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.SelectOption>>>({
    url: `/sys/user/option/search`,
    method: 'get',
    params: queryParams
  })
}
