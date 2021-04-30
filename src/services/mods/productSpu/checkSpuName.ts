/**
 * @desc 商品SPU-SPU名称校验
 */
import request from '@/utils/request'
export class IQueryParams {
  /** 商品品类ID */
  productId: number
  /** 商品SPU ID */
  spuId?: number
  /** SPU名称 */
  spuName: string
}

export interface IParams {
  queryParams: IQueryParams
}

export function checkSpuName({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<boolean>>({
    url: `/business/product/spu/check/spuName`,
    method: 'get',
    params: queryParams
  })
}
