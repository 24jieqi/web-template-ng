/**
 * @desc 批量删除
 */
import request from '@/utils/request'
export class IQueryParams {
  /** ids */
  ids: string
}

export interface IParams {
  queryParams: IQueryParams
}

export function deleteBatch({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result>({
    url: `/sys/role/deleteBatch`,
    method: 'delete',
    params: queryParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function deleteBatchRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await deleteBatch(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
