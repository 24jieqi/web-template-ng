/**
 * @desc 商品SPU-新增SPU
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.ProductSpuAddDTO
}

export function addSpu({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<number>>({
    url: `/business/product/spu/add`,
    method: 'post',
    data: bodyParams
  })
}
