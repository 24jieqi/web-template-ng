/**
 * @desc 快照sku
 */
import request from '@/utils/request'
export class IQueryParams {
  /** skuIds */
  skuIds: Array<number>
}

export interface IParams {
  queryParams: IQueryParams
}

export function snapshotSku({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.ProductSkuPO>>>({
    url: `/business/product/sku/snapshot/sku`,
    method: 'get',
    params: queryParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function snapshotSkuRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await snapshotSku(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
