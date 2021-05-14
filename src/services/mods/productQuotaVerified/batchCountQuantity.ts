/**
 * @desc 许可核销-批量核销计算总量加许可明细
 */
import request from '@/utils/request'
export class IQueryParams {
  /** ids */
  ids: Array<number>
}

export interface IParams {
  queryParams: IQueryParams
}

export function batchCountQuantity({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.ProductQuotaVerifiedBatchVo>>({
    url: `/business/productQuota/verified/count`,
    method: 'get',
    params: queryParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function batchCountQuantityRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await batchCountQuantity(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
