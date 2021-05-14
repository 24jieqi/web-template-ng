/**
 * @desc 许可核销-分页列表查询
 */
import request from '@/utils/request'
export class IQueryParams {
  /** 柜次号 */
  cabinetBatchCode?: string
  /** 柜号 */
  cabinetCode?: string
  /** 进口报关公司ID */
  declareCompanyId?: number
  /** 进口报关口岸ID */
  declarePortId?: number
  /** 运输方式(1, 陆运),(2, 海运),(3, 铁运) */
  deliveryMethod?: number
  /** 许可核销截止时间，格式yyyy-MM-dd HH:mm:ss */
  endDate?: string
  /** 页码 */
  pageNo: number
  /** 每页条数 */
  pageSize: number
  /** 品类ID */
  productId?: number
  /** 商品id */
  spuId?: number
  /** 许可核销起始时间，格式yyyy-MM-dd */
  startDate?: string
  /** 状态编码 */
  state?: string
}

export interface IParams {
  queryParams: IQueryParams
}

export function queryList({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.IPage<defs.ProductQuotaVerifiedVo>>>({
    url: `/business/productQuota/verified/list`,
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
