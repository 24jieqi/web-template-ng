/**
 * @desc 批量修改 SKU
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.UpdateBatchProductSkuVO
}

export function updateBatchInfo({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<void>>({
    url: `/business/product/sku/batch_info`,
    method: 'put',
    data: bodyParams
  })
}
