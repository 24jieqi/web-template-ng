/**
 * @desc 国内报关-补充资料
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.ImportDeclareReplenishDTO
}

export function postReplenish({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<string>>({
    url: `/business/importDeclare/replenish`,
    method: 'post',
    data: bodyParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function postReplenishRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    bodyParams: restParamsData[0]
  }
  try {
    const res = await postReplenish(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
