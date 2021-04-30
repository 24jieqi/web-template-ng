/**
 * @desc 品种下拉菜单
 */
import request from '@/utils/request'
export class IQueryParams {
  /** 商品品类ID */
  productId: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function varietyOptions({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.SelectTextOption>>>({
    url: `/business/product/spu/variety/options`,
    method: 'get',
    params: queryParams
  })
}
