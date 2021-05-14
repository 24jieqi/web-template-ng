/**
 * @desc 冻结&解冻用户
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.UserFrozenDTO
}

export function frozenBatch({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.SysUser>>({
    url: `/sys/user/frozenBatch`,
    method: 'put',
    data: bodyParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function frozenBatchRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    bodyParams: restParamsData[0]
  }
  try {
    const res = await frozenBatch(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
