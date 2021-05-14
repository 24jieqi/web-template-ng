/**
 * @desc 查询 SKU 明细
 */
import request from '@/utils/request'
export class IQueryParams {
  /** id */
  id: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function findInfo({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.ProductSkuVO>>({
    url: `/business/product/sku/info`,
    method: 'get',
    params: queryParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function findInfoRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await findInfo(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
