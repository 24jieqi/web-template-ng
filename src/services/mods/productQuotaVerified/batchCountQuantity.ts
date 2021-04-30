/**
 * @desc 许可核销-批量核销计算总量加许可明细
 */
import request from '@/utils/request'
export class IQueryParams {
  /** ids */
  ids: Array<number>
}

export interface IParams {
  queryParams: IQueryParams
}

export function batchCountQuantity({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.ProductQuotaVerifiedBatchVo>>({
    url: `/business/productQuota/verified/count`,
    method: 'get',
    params: queryParams
  })
}
