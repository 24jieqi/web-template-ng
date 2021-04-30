/**
 * @desc 修改 SKU
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.ProductSkuUpdateVO
}

export function updateInfo({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<void>>({
    url: `/business/product/sku/info`,
    method: 'put',
    data: bodyParams
  })
}
