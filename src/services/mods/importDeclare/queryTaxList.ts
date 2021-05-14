/**
 * @desc 纳税放行-分页列表查询
 */
import request from '@/utils/request'
export class IQueryParams {
  /** 进口港 */
  arrivePortId?: number
  /** 柜次号 */
  cabinetBatchCode?: string
  /** 柜号 */
  cabinetCode?: string
  /** 放行截止时间，格式yyyy-MM-dd */
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
  /** 放行起始时间，格式yyyy-MM-dd */
  startDate?: string
  /** 状态编码 */
  state?: string
}

export interface IParams {
  queryParams: IQueryParams
}

export function queryTaxList({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.IPage<defs.ImportDeclareListVO>>>({
    url: `/business/importDeclare/tax/list`,
    method: 'get',
    params: queryParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function queryTaxListRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await queryTaxList(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
