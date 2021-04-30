/**
 * @desc 快照sku
 */
import request from '@/utils/request'
export class IQueryParams {
  /** skuIds */
  skuIds: Array<number>
}

export interface IParams {
  queryParams: IQueryParams
}

export function snapshotSku({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.ProductSkuPO>>>({
    url: `/business/product/sku/snapshot/sku`,
    method: 'get',
    params: queryParams
  })
}
