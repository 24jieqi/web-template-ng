/**
 * @desc 给指定部门添加对应的用户
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.SysDepartUsersVO
}

export function editSysDepartWithUser({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<string>>({
    url: `/sys/user/editSysDepartWithUser`,
    method: 'post',
    data: bodyParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function editSysDepartWithUserRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    bodyParams: restParamsData[0]
  }
  try {
    const res = await editSysDepartWithUser(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
