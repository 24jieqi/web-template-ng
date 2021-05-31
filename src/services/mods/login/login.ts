/**
 * @desc 登录接口
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.SysLoginModel
}

export function login({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.LoginedVO>>({
    url: `/sys/login`,
    method: 'post',
    data: bodyParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function loginRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    bodyParams: restParamsData[0]
  }
  try {
    const res = await login(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
