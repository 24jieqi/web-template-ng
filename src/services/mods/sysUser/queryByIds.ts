/**
     * @desc 批量查询用户
英文逗号分隔的用户ID
     */
import request from '@/utils/request'
export class IQueryParams {
  /** userIds */
  userIds: string
}

export interface IParams {
  queryParams: IQueryParams
}

export function queryByIds({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.SysUser>>>({
    url: `/sys/user/queryByIds`,
    method: 'get',
    params: queryParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function queryByIdsRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await queryByIds(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
