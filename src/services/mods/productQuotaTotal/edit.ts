/**
 * @desc 许可管理-编辑
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.ProductQuotaTotalEditRequest
}

export function edit({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<string>>({
    url: `/business/productQuotaTotal/edit`,
    method: 'post',
    data: bodyParams
  })
}
