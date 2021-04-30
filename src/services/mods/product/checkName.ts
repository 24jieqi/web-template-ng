/**
 * @desc 商品信息-校验名称 编辑时需要传主键ID+名称
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.ProductCheckDTO
}

export function checkName({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<string>>({
    url: `/business/product/checkName`,
    method: 'post',
    data: bodyParams
  })
}
