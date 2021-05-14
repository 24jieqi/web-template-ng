/**
 * @desc 许可核销-批量核销
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.ProductQuotaBatchVerifiedVo
}

export function batch({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<string>>({
    url: `/business/productQuota/verified/batch`,
    method: 'post',
    data: bodyParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function batchRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    bodyParams: restParamsData[0]
  }
  try {
    const res = await batch(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
