/**
 * @desc 通过id查询
 */
import request from '@/utils/request'
export class IQueryParams {
  /** id */
  id: string
}

export interface IParams {
  queryParams: IQueryParams
}

export function queryById({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result>({
    url: `/sys/role/queryById`,
    method: 'get',
    params: queryParams
  })
}
