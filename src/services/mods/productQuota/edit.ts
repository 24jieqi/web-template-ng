/**
 * @desc 许可明细管理-编辑
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.ProductQuotaEditRequest
}

export function edit({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<string>>({
    url: `/business/productQuota/edit`,
    method: 'post',
    data: bodyParams
  })
}
