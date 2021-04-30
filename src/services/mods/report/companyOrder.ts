/**
 * @desc 销地分公司月度排名
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

export function companyOrder({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.IPage<defs.CompanyOrder>>>({
    url: `/business/report/companyOrder`,
    method: 'get',
    params: queryParams
  })
}
