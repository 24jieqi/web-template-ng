/**
 * @desc SPU下拉菜单
 */
import request from '@/utils/request'
export class IQueryParams {
  /** 商品品类ID */
  productId: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function listOptions({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.SelectTextOption>>>({
    url: `/business/product/spu/list/options`,
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
