/**
 * @desc 根据TOKEN获取用户的部分信息
 */
import request from '@/utils/request'
export class IQueryParams {
  /** token */
  token?: string
}

export interface IParams {
  queryParams: IQueryParams
}

export function getUserSectionInfoByToken(
  { queryParams }: IParams = {} as IParams
) {
  return request<defs.Result<defs.ObjectMap<string, ObjectMap>>>({
    url: `/sys/user/getUserSectionInfoByToken`,
    method: 'get',
    params: queryParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function getUserSectionInfoByTokenRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await getUserSectionInfoByToken(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
