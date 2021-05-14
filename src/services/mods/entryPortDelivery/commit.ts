/**
 * @desc 入境口岸发货管理-发货
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.EntryPortDeliveryCommitDTO
}

export function commit({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<string>>({
    url: `/entryPortDelivery/commit`,
    method: 'post',
    data: bodyParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function commitRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    bodyParams: restParamsData[0]
  }
  try {
    const res = await commit(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
