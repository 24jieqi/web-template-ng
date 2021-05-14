/**
 * @desc 查询指定用户和部门关联的数据
 */
import request from '@/utils/request'
export class IQueryParams {
  /** userId */
  userId: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function getUserDepartsList({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.DepartIdModel>>>({
    url: `/sys/user/userDepartList`,
    method: 'get',
    params: queryParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function getUserDepartsListRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await getUserDepartsList(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
