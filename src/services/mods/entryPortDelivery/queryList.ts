/**
 * @desc 入境口岸发货管理-分页列表查询
 */
import request from '@/utils/request'
export class IQueryParams {
  /** 进口港 */
  arrivePortId?: number
  /** 柜次号 */
  cabinetBatchCode?: string
  /** 柜号 */
  cabinetCode?: string
  /** 到港结束日期，格式yyyy-MM-dd */
  endDate?: string
  /** 页码 */
  pageNo: number
  /** 每页条数 */
  pageSize: number
  /** 品类ID */
  productId?: number
  /** 产地ID */
  productPlaceId?: number
  /** 商品ID */
  spuId?: number
  /** 到港开始日期，格式yyyy-MM-dd */
  startDate?: string
}

export interface IParams {
  queryParams: IQueryParams
}

export function queryList({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.IPage<defs.EntryPortDeliveryListVO>>>({
    url: `/entryPortDelivery/list`,
    method: 'get',
    params: queryParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function queryListRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await queryList(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
