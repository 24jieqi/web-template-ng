/**
 * @desc 许可核销-获取生效许可列表
 */
import request from '@/utils/request'
export class IQueryParams {
  /** entryPortId */
  entryPortId: number
  /** productId */
  productId: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function getQuota({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.ProductQuotaValidVo>>>({
    url: `/business/productQuota/verified/quota`,
    method: 'get',
    params: queryParams
  })
}
