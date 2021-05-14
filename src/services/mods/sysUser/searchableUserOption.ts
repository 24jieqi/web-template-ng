/**
 * @desc 用户下拉选择
 */
import request from '@/utils/request'
export class IQueryParams {
  /** q */
  q?: string
}

export interface IParams {
  queryParams: IQueryParams
}

export function searchableUserOption({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.SelectOption>>>({
    url: `/sys/user/option/search`,
    method: 'get',
    params: queryParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function searchableUserOptionRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await searchableUserOption(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
