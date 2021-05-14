/**
 * @desc 质量管理SOP-导出excel
 */
import request from '@/utils/request'
export class IQueryParams {
  /** 柜次 */
  cabinetBatchCode?: string
  /** 柜号 */
  cabinetCode?: string
  /** 创建结束时间,格式yyyy-MM-dd */
  endDate?: string
  /** map */
  map?: any
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

export function exportXls({ queryParams }: IParams = {} as IParams) {
  return request<any>({
    url: `/business/result/exportXls`,
    method: 'get',
    params: queryParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function exportXlsRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await exportXls(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
