/**
 * @desc 客户排行
 */
import request from '@/utils/request'
export class IQueryParams {
  /** pageNo */
  pageNo?: number
  /** pageSize */
  pageSize?: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function selectCustomerCabinetOrder(
  { queryParams }: IParams = {} as IParams
) {
  return request<defs.Result<defs.IPage<defs.CustomerCabinetOrderVO>>>({
    url: `/business/report/selectCustomerCabinetOrder`,
    method: 'get',
    params: queryParams
  })
}
