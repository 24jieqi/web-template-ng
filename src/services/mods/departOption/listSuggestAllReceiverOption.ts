/**
 * @desc 所有收货方下拉列表
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {}

export function listSuggestAllReceiverOption({}: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.SelectTextOption>>>({
    url: `/sys/depart/option/suggest/receiver/all/list`,
    method: 'get'
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function listSuggestAllReceiverOptionRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {}
  try {
    const res = await listSuggestAllReceiverOption(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
