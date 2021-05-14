/**
 * @desc 纳税放行-批量提交纳税
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.ImportDeclareTaxBatchDTO
}

export function taxBatch({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<string>>({
    url: `/business/importDeclare/tax/commit/batch`,
    method: 'post',
    data: bodyParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function taxBatchRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    bodyParams: restParamsData[0]
  }
  try {
    const res = await taxBatch(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
