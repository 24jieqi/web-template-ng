/**
 * @desc 获取验证码
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {}

export function getCheckCode({}: IParams = {} as IParams) {
  return request<defs.Result<defs.ObjectMap<string, string>>>({
    url: `/sys/getCheckCode`,
    method: 'get'
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function getCheckCodeRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {}
  try {
    const res = await getCheckCode(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
