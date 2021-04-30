/**
 * @desc 国内报关-分页列表查询
 */
import request from '@/utils/request'
export class IQueryParams {
  /** 进口港 */
  arrivePortId?: number
  /** 柜号 */
  cabinetCode?: string
  /** 报关截止时间，格式yyyy-MM-dd */
  declareEndDate?: string
  /** 进口报关口岸ID */
  declarePortId?: number
  /** 报关起始时间，格式yyyy-MM-dd */
  declareStartDate?: string
  /** 运输方式 */
  deliveryMethod?: number
  /** 报关单号 */
  deliveryOrderCode?: string
  /** 进口报关公司ID（国内） */
  domesticDeclareCompanyId?: number
  /** 页码 */
  pageNo: number
  /** 每页条数 */
  pageSize: number
  /** 品类ID */
  productId?: number
  /** 商品ID */
  spuId?: number
  /** 状态编码 */
  state?: string
}

export interface IParams {
  queryParams: IQueryParams
}

export function queryList({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.IPage<defs.ImportDeclareListVO>>>({
    url: `/business/importDeclare/list`,
    method: 'get',
    params: queryParams
  })
}
