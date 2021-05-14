/**
 * @desc sku选项聚合接口
 */
import request from '@/utils/request'
export class IQueryParams {
  /** spuId */
  spuId: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function skuOptions({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.ProductSkuOptionVO>>>({
    url: `/business/product/sku/options`,
    method: 'get',
    params: queryParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function skuOptionsRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await skuOptions(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
