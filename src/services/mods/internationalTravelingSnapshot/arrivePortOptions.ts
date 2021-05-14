/**
 * @desc 国际在途快照-进口港下拉菜单
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {}

export function arrivePortOptions({}: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.SelectOption>>>({
    url: `/reportFormsCenter/internationalTravelingSnapshot/arrivePortOptions`,
    method: 'get'
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function arrivePortOptionsRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {}
  try {
    const res = await arrivePortOptions(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
