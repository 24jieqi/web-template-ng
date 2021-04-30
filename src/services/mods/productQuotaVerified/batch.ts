/**
 * @desc 许可核销-批量核销
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.ProductQuotaBatchVerifiedVo
}

export function batch({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<string>>({
    url: `/business/productQuota/verified/batch`,
    method: 'post',
    data: bodyParams
  })
}
