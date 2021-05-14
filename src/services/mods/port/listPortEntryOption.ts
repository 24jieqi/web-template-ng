/**
 * @desc 出口港下拉列表
 */
import request from '@/utils/request'
export class IQueryParams {
  /** departId */
  departId: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function listPortEntryOption({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.SelectOption>>>({
    url: `/business/port/export/option`,
    method: 'get',
    params: queryParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function listPortEntryOptionRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await listPortEntryOption(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
