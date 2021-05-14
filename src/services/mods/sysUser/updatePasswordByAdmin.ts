/**
 * @desc 管理员-修改用户密码
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.AdminUpdatePwdDTO
}

export function updatePasswordByAdmin({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<void>>({
    url: `/sys/user/updatePasswordByAdmin`,
    method: 'put',
    data: bodyParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function updatePasswordByAdminRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    bodyParams: restParamsData[0]
  }
  try {
    const res = await updatePasswordByAdmin(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
