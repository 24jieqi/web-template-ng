/**
 * @desc 进口港下拉列表
 */
import request from '@/utils/request'
export class IQueryParams {
  /** country */
  country: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function listPortOption({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.SelectOption>>>({
    url: `/business/port/entry/option`,
    method: 'get',
    params: queryParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function listPortOptionRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await listPortOption(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
