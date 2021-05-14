/**
 * @desc 查询已经生成SKU的option
 */
import request from '@/utils/request'
export class IQueryParams {
  /** 商品Spu ID */
  spuId: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function listSkuOption({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<Array<Array<defs.ProductUsedOptionVO>>>>({
    url: `/business/product/sku/list/skuOption`,
    method: 'get',
    params: queryParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function listSkuOptionRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await listSkuOption(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
