/**
 * @desc 商品信息-保存
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.ProductSaveDTO
}

export function save({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<string>>({
    url: `/business/product/save`,
    method: 'post',
    data: bodyParams
  })
}
