/**
 * @desc 商品信息-启用禁用
 */
import request from '@/utils/request'
export class IQueryParams {
  /** id */
  id: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function enable({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<string>>({
    url: `/business/product/enable`,
    method: 'get',
    params: queryParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function enableRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await enable(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
