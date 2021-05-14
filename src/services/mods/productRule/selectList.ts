/**
 * @desc 下拉选择列表
 */
import request from '@/utils/request'
export class IQueryParams {
  /** 启用，0：查询全部；1：只查询生效的，默认查询全部 */
  isEnabled?: number
  /** 商户品类ID */
  productId?: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function selectList({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.SelectOption>>>({
    url: `/business/product/rule/select`,
    method: 'get',
    params: queryParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function selectListRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await selectList(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
