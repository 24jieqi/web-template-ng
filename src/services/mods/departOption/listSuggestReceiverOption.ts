/**
 * @desc 建议收货方下拉列表
 */
import request from '@/utils/request'
export class IQueryParams {
  /** receiverType */
  receiverType: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function listSuggestReceiverOption(
  { queryParams }: IParams = {} as IParams
) {
  return request<defs.Result<Array<defs.SelectOption>>>({
    url: `/sys/depart/option/suggest/receiver/list`,
    method: 'get',
    params: queryParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function listSuggestReceiverOptionRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await listSuggestReceiverOption(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
