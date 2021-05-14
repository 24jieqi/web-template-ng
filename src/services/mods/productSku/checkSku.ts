/**
 * @desc sku检查接口，根据sku选项检查是否有已生成sku,如果已生成返回skuId
 */
import request from '@/utils/request'
export class IQueryParams {
  /** optionIds */
  optionIds: Array<number>
}

export interface IParams {
  queryParams: IQueryParams
}

export function checkSku({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<number>>({
    url: `/business/product/sku/checkSku`,
    method: 'get',
    params: queryParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function checkSkuRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await checkSku(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
