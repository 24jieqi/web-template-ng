/**
 * @desc 新增 SKU
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.ProductSkuSaveVO
}

export function save({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<string>>({
    url: `/business/product/sku/save`,
    method: 'put',
    data: bodyParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function saveRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    bodyParams: restParamsData[0]
  }
  try {
    const res = await save(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
