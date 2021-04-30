/**
 * @desc 许可核销-根据ID查询
 */
import request from '@/utils/request'
export class IQueryParams {
  /** id */
  id?: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function getById({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.ProductQuotaVerifiedDetailVO>>({
    url: `/business/productQuota/verified/getById`,
    method: 'get',
    params: queryParams
  })
}
