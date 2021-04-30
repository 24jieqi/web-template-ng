/**
 * @desc 许可消耗记录-分页列表查询
 */
import request from '@/utils/request'
export class IQueryParams {
  /** 页码 */
  pageNo: number
  /** 每页条数 */
  pageSize: number
  /** 许可明细ID */
  quotaId: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function queryPageList({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.IPage<defs.ProductQuotaRecordResult>>>({
    url: `/business/productQuotaRecord/list`,
    method: 'get',
    params: queryParams
  })
}
