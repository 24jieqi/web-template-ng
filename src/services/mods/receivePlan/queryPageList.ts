/**
 * @desc 销地收货-分页列表查询
 */
import request from '@/utils/request'
export class IQueryParams {
  /** 柜次号 */
  cabinetBatchCode?: string
  /** 柜号 */
  cabinetCode?: string
  /** 截止时间，格式yyyy-MM-dd */
  endDate?: string
  /** 页码 */
  pageNo: number
  /** 每页条数 */
  pageSize: number
  /** 商品品类ID */
  productId?: number
  /** 收货区域Id */
  receiveAreaId?: number
  /** 起始时间，格式yyyy-MM-dd */
  startDate?: string
  /** 状态编码 */
  state?: string
}

export interface IParams {
  queryParams: IQueryParams
}

export function queryPageList({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.IPage<defs.ReceiveWebListVO>>>({
    url: `/business/receivePlan/list`,
    method: 'get',
    params: queryParams
  })
}
