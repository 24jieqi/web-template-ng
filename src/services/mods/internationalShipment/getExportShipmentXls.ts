/**
 * @desc 国际发货明细-导出
 */
import request from '@/utils/request'
export class IQueryParams {
  /** 柜次(不超过12个字符 模糊查询) */
  cabinetBatchCode?: string
  /** 柜号 (不超过11个字符 模糊查询) */
  cabinetCode?: string
  /** 创建时间-结束 */
  createTimeEnd?: string
  /** 创建时间-开始 */
  createTimeStart?: string
  /** 发运方式 1_陆运 2_海运 3_铁运 */
  deliveryMethod?: 1 | 2 | 3 | 1 | 2 | 3
  /** 发货时间-结束 */
  deliveryTimeEnd?: string
  /** 发货时间-开始 */
  deliveryTimeStart?: string
  /** map */
  map?: any
  /** 页码 */
  pageNo: number
  /** 每页条数 */
  pageSize: number
  /** 进口港ID */
  portId?: number
  /** 商品品类ID */
  productId?: number
  /** 商品SPU ID */
  productSpuId?: number
  /** 收货时间-结束 */
  receivingTimeEnd?: string
  /** 收货时间-开始 */
  receivingTimeStart?: string
  /** 状态 查询全部时不传 */
  status?: string
}

export interface IParams {
  queryParams: IQueryParams
}

export function getExportShipmentXls({ queryParams }: IParams = {} as IParams) {
  return request<any>({
    url: `/reportFormsCenter/internationalShip/exportShipmentXls`,
    method: 'get',
    params: queryParams
  })
}
