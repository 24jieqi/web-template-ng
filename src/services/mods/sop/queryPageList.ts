/**
 * @desc SOP管理-分页列表查询
 */
import request from '@/utils/request'
export class IQueryParams {
  /** SOP环节 */
  operation?: number
  /** 页码 */
  pageNo: number
  /** 每页条数 */
  pageSize: number
  /** 商品ID */
  productId?: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function queryPageList({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.IPage<defs.SopListResult>>>({
    url: `/business/sop/list`,
    method: 'get',
    params: queryParams
  })
}
