/**
 * @desc 分页列表接口
 */
import request from '@/utils/request'
export class IQueryParams {
  /** pageNo */
  pageNo?: number
  /** pageSize */
  pageSize?: number
}

export interface IParams {
  queryParams: IQueryParams
  bodyParams: defs.TempMonitorQueryDTO
}

export function pageList({ queryParams, bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.Page<defs.TempMonitorListVO>>>({
    url: `/transiting/temp/monitor/list`,
    method: 'post',
    data: bodyParams,
    params: queryParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function pageListRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0],
    bodyParams: restParamsData[1]
  }
  try {
    const res = await pageList(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
