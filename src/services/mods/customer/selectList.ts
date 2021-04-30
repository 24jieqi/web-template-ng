/**
 * @desc 服务区域下拉选择列表
 */
import request from '@/utils/request'
export class IQueryParams {
  /** customerId */
  customerId: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function selectList({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.SelectOption>>>({
    url: `/business/customer/select`,
    method: 'get',
    params: queryParams
  })
}
