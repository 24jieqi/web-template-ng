/**
 * @desc 企业组织类型接口
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {}

export function businessTypeSelectOption({}: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.SelectOption>>>({
    url: `/sys/depart/option/business/type`,
    method: 'get'
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function businessTypeSelectOptionRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {}
  try {
    const res = await businessTypeSelectOption(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
