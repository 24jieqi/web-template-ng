/**
 * @desc 尾程运输-分页列表查询
 */
import request from '@/utils/request'
export class IQueryParams {
  /** 柜号 */
  cabinetCode?: string
  /** 发车截止时间，格式yyyy-MM-dd */
  endDate?: string
  /** 物流公司ID */
  logisticsCompanyId?: number
  /** 页码 */
  pageNo: number
  /** 每页条数 */
  pageSize: number
  /** 品类ID */
  productId?: number
  /** 收货区域ID */
  receiveAreaId?: number
  /** 装柜方式1：原柜 2：转柜 3：装柜 */
  shipmentMethod?: number
  /** 发车起始时间，格式yyyy-MM-dd */
  startDate?: string
  /** 状态编码 */
  state?: string
}

export interface IParams {
  queryParams: IQueryParams
}

export function queryPageList({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.Page<defs.DomesticTransportationListVO>>>({
    url: `/business/transportation/list`,
    method: 'get',
    params: queryParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function queryPageListRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await queryPageList(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
