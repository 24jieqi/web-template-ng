/**
 * @desc 商品信息-启用禁用
 */
import request from '@/utils/request'
export class IQueryParams {
  /** id */
  id: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function enable({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<string>>({
    url: `/business/product/enable`,
    method: 'get',
    params: queryParams
  })
}
