/**
 * @desc 商品SPU-分页列表查询
 */
import request from '@/utils/request'
export class IQueryParams {
  /** 页码 */
  pageNo: number
  /** 页大小 */
  pageSize: number
  /** 商品品类ID */
  productId: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function queryPageList({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.IPage<defs.ProductSpuPageResultVO>>>({
    url: `/business/product/spu/page`,
    method: 'get',
    params: queryParams
  })
}
