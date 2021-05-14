/**
 * @desc SOP管理-获取SOP操作列表
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {}

export function queryOperation({}: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.SelectOption>>>({
    url: `/business/sop/operation`,
    method: 'get'
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function queryOperationRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {}
  try {
    const res = await queryOperation(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
