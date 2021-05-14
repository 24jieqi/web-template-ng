/**
 * @desc 根据部门id查询用户信息
 */
import request from '@/utils/request'
export class IQueryParams {
  /** id */
  id: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function queryUserByDepId({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.SysUser>>>({
    url: `/sys/user/queryUserByDepId`,
    method: 'get',
    params: queryParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function queryUserByDepIdRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await queryUserByDepId(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
