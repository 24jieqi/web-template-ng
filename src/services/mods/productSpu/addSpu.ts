/**
 * @desc 商品SPU-新增SPU
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.ProductSpuAddDTO
}

export function addSpu({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<number>>({
    url: `/business/product/spu/add`,
    method: 'post',
    data: bodyParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function addSpuRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    bodyParams: restParamsData[0]
  }
  try {
    const res = await addSpu(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
