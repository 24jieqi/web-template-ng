/**
 * @desc 商品SPU-SPU详情
 */
import request from '@/utils/request'
export class IQueryParams {
  /** 商品Spu ID */
  spuId: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function queryDetailInfo({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.ProductSpuDetailInfoResultVO>>({
    url: `/business/product/spu/detail`,
    method: 'get',
    params: queryParams
  })
}
