/**
 * @desc 服务区域下拉选择列表
 */
import request from '@/utils/request'
export class IQueryParams {
  /** customerId */
  customerId: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function selectList({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.SelectOption>>>({
    url: `/business/customer/select`,
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
