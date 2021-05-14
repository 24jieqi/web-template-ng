/**
 * @desc 补充资料接口
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.DeclareCustomCommitDTO
}

export function renew({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<void>>({
    url: `/business/declareCustoms/renew`,
    method: 'post',
    data: bodyParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function renewRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    bodyParams: restParamsData[0]
  }
  try {
    const res = await renew(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
