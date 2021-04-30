/**
 * @desc 根据id查询客户信息
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
  return request<defs.Result<defs.CustomerEditVO>>({
    url: `/business/customer/queryById`,
    method: 'get',
    params: queryParams
  })
}
