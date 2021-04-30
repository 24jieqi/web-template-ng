/**
 * @desc 查询 SKU 明细
 */
import request from '@/utils/request'
export class IQueryParams {
  /** id */
  id: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function findInfo({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.ProductSkuVO>>({
    url: `/business/product/sku/info`,
    method: 'get',
    params: queryParams
  })
}
