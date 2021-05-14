/**
 * @desc 修改口岸状态
 */
import request from '@/utils/request'
export class IQueryParams {
  /** id */
  id: number
  /** status */
  status: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function changeStatus({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<void>>({
    url: `/business/port/changeState`,
    method: 'put',
    params: queryParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function changeStatusRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await changeStatus(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
