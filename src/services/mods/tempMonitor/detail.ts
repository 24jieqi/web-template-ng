/**
 * @desc 详情接口
 */
import request from '@/utils/request'
export class IQueryParams {
  /** planId */
  planId: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function detail({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.TempMonitorDetailVO>>({
    url: `/transiting/temp/monitor/detail`,
    method: 'get',
    params: queryParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function detailRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await detail(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
