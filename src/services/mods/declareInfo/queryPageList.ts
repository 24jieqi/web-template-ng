/**
 * @desc 产地订舱列表查询接口
 */
import request from '@/utils/request'
export class IQueryParams {
  /** 进口港 */
  arrivePortId?: number
  /** 订舱结束时间 */
  bookingEndTime?: string
  /** 订舱开始时间 */
  bookingStartTime?: string
  /** 柜次 */
  cabinetBatchCode?: string
  /** 柜号 */
  cabinetCode?: string
  /** 出口报关公司 */
  declareCompanyId?: number
  /** pageNo */
  pageNo?: number
  /** pageSize */
  pageSize?: number
  /** planEndTime */
  planEndTime?: string
  /** planStartTime */
  planStartTime?: string
  /** state */
  state?: string
}

export interface IParams {
  queryParams: IQueryParams
}

export function queryPageList({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.IPage<defs.DeclareInfoListVO>>>({
    url: `/business/declareInfo/list`,
    method: 'get',
    params: queryParams
  })
}
