/**
 * @desc 根据用户ID查询用户
 */
import request from '@/utils/request'
export class IQueryParams {
  /** id */
  id: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function queryById({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.UserInfoVO>>({
    url: `/sys/user/queryById`,
    method: 'get',
    params: queryParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function queryByIdRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await queryById(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
