/**
 * @desc 国际在途快照-状态下拉菜单
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {}

export function statusOptions({}: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.SelectTextOption>>>({
    url: `/reportFormsCenter/internationalTravelingSnapshot/statusOptions`,
    method: 'get'
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function statusOptionsRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {}
  try {
    const res = await statusOptions(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
