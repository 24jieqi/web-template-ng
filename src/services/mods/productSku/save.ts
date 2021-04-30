/**
 * @desc 新增 SKU
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.ProductSkuSaveVO
}

export function save({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<string>>({
    url: `/business/product/sku/save`,
    method: 'put',
    data: bodyParams
  })
}
