/**
 * @desc 销售单号-根据ID查询详情
 */
import request from '@/utils/request'
export class IQueryParams {
  /** id */
  id: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function info({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.BillCodeVO>>({
    url: `/finance/billCode/info`,
    method: 'get',
    params: queryParams
  })
}
