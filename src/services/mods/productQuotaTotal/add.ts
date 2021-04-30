/**
 * @desc 许可管理-添加
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.ProductQuotaTotalAddRequest
}

export function add({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<string>>({
    url: `/business/productQuotaTotal/add`,
    method: 'post',
    data: bodyParams
  })
}
