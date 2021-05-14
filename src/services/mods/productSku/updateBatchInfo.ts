/**
 * @desc 批量修改 SKU
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.UpdateBatchProductSkuVO
}

export function updateBatchInfo({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<void>>({
    url: `/business/product/sku/batch_info`,
    method: 'put',
    data: bodyParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function updateBatchInfoRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    bodyParams: restParamsData[0]
  }
  try {
    const res = await updateBatchInfo(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
