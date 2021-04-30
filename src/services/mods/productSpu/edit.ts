/**
 * @desc 商品SPU-编辑SPU
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.ProductSpuEditDTO
}

export function edit({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<number>>({
    url: `/business/product/spu/edit`,
    method: 'post',
    data: bodyParams
  })
}
