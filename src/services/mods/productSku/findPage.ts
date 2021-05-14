/**
 * @desc 查询 SKU 列表
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.ProductSkuQueryVO
}

export function findPage({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.IPage<defs.ProductSkuVO>>>({
    url: `/business/product/sku/page`,
    method: 'post',
    data: bodyParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function findPageRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    bodyParams: restParamsData[0]
  }
  try {
    const res = await findPage(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
