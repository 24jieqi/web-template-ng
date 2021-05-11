/**
 * @desc 质量管理SOP-分页列表查询
 */
import request from '@/utils/request'
export class IQueryParams {
  /** 柜次 */
  cabinetBatchCode?: string
  /** 柜号 */
  cabinetCode?: string
  /** 创建结束时间,格式yyyy-MM-dd */
  endDate?: string
  /** 页码 */
  pageNo: number
  /** 每页条数 */
  pageSize: number
  /** 品类idID */
  productId?: number
  /** 产地ID */
  productPlaceId?: number
  /** 收货方ID */
  receiveAreaId?: number
  /** 发货方ID */
  senderId?: number
  /** 商品ID */
  spuId?: number
  /** 创建开始时间，格式yyyy-MM-dd */
  startDate?: string
  /** 状态 */
  state?: string
}

export interface IParams {
  queryParams: IQueryParams
}

export function queryPageList({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.IPage<defs.SopResultListVO>>>({
    url: `/business/result/list`,
    method: 'get',
    params: queryParams
  })
}
