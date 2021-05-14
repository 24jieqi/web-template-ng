/**
 * @desc 堆场下拉选择列表
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {}

export function selectList({}: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.SelectOption>>>({
    url: `/business/storageYard/select`,
    method: 'get'
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function selectListRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {}
  try {
    const res = await selectList(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
