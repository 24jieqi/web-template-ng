/**
 * @desc 客户管理-分页列表查询
 */
import request from '@/utils/request'
export class IQueryParams {
  /** 服务区域名称 */
  departName?: string
  /** 客户名称 */
  name?: string
  /** 页码 */
  pageNo: number
  /** 每页条数 */
  pageSize: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function queryPageList({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.IPage<defs.CustomerListVO>>>({
    url: `/business/customer/list`,
    method: 'get',
    params: queryParams
  })
}
