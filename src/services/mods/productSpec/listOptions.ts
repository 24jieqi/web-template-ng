/**
 * @desc 商品规格类型下拉菜单(SKU动态筛选)
 */
import request from '@/utils/request'
export class IQueryParams {
  /** 商品SPU ID */
  spuId: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function listOptions({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.SpecSelectOptionVO>>>({
    url: `/business/product/spec/list/options`,
    method: 'get',
    params: queryParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function listOptionsRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await listOptions(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
