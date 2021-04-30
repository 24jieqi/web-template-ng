/**
 * @desc 查询 SKU 列表
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.ProductSkuQueryVO
}

export function findPage({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.IPage<defs.ProductSkuVO>>>({
    url: `/business/product/sku/page`,
    method: 'post',
    data: bodyParams
  })
}
