/**
 * @desc 新增资源信息
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {}

export function saveResource({}: IParams = {} as IParams) {
  return request<defs.Result<defs.FileVO>>({
    url: `/client/management/save/resource`,
    method: 'post'
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function saveResourceRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {}
  try {
    const res = await saveResource(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
