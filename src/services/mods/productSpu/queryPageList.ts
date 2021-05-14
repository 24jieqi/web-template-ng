/**
 * @desc 商品SPU-分页列表查询
 */
import request from '@/utils/request'
export class IQueryParams {
  /** 页码 */
  pageNo: number
  /** 页大小 */
  pageSize: number
  /** 商品品类ID */
  productId: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function queryPageList({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.IPage<defs.ProductSpuPageResultVO>>>({
    url: `/business/product/spu/page`,
    method: 'get',
    params: queryParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function queryPageListRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await queryPageList(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
