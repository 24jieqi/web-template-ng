/**
 * @desc sku选项聚合接口
 */
import request from '@/utils/request'
export class IQueryParams {
  /** spuId */
  spuId: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function skuOptions({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.ProductSkuOptionVO>>>({
    url: `/business/product/sku/options`,
    method: 'get',
    params: queryParams
  })
}
