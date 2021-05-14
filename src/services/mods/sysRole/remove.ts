/**
 * @desc 通过id删除
 */
import request from '@/utils/request'
export class IQueryParams {
  /** id */
  id: string
}

export interface IParams {
  queryParams: IQueryParams
}

export function remove({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result>({
    url: `/sys/role/delete`,
    method: 'delete',
    params: queryParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function removeRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await remove(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
