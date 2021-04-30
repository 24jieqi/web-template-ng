/**
 * @desc 商品品类管理-分页列表查询
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.ProductListDTO
}

export function queryPageList({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.IPage<defs.ProductListVO>>>({
    url: `/business/product/list`,
    method: 'post',
    data: bodyParams
  })
}
