/**
 * @desc 根据港口类型，获取国内港口列表
 */
import request from '@/utils/request'
export class IQueryParams {
  /** portType */
  portType?: string
}

export interface IParams {
  queryParams: IQueryParams
}

export function queryArrivePortByType(
  { queryParams }: IParams = {} as IParams
) {
  return request<defs.Result<Array<defs.PortVO>>>({
    url: `/business/port/queryArrivePortByType`,
    method: 'get',
    params: queryParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function queryArrivePortByTypeRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await queryArrivePortByType(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
