/**
 * @desc 重置密码-用于第一次进入修改
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.UpdatePasswordVO
}

export function resetPassword({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<void>>({
    url: `/sys/user/resetPassword`,
    method: 'put',
    data: bodyParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function resetPasswordRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    bodyParams: restParamsData[0]
  }
  try {
    const res = await resetPassword(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
