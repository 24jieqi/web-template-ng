/**
 * @desc 用户自身-修改密码
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.UserUpdatePwdDTO
}

export function updatePassword({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<void>>({
    url: `/sys/user/updatePassword`,
    method: 'put',
    data: bodyParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function updatePasswordRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    bodyParams: restParamsData[0]
  }
  try {
    const res = await updatePassword(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
