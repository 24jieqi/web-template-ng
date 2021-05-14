/**
 * @desc 批量删除指定机构的用户关系
 */
import request from '@/utils/request'
export class IQueryParams {
  /** depId */
  depId: string
  /** userIds */
  userIds: string
}

export interface IParams {
  queryParams: IQueryParams
}

export function deleteUserInDepartBatch(
  { queryParams }: IParams = {} as IParams
) {
  return request<defs.Result<defs.SysUserDepart>>({
    url: `/sys/user/deleteUserInDepartBatch`,
    method: 'delete',
    params: queryParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function deleteUserInDepartBatchRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await deleteUserInDepartBatch(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
