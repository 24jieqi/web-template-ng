/**
 * @desc 三方-登录获取token
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.ThirdLoginModel
}

export function getToken({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<string>>({
    url: `/api/token`,
    method: 'post',
    data: bodyParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function getTokenRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    bodyParams: restParamsData[0]
  }
  try {
    const res = await getToken(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
