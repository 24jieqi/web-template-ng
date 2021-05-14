/**
 * @desc 所属国家列表接口
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {}

export function countrySelectOption({}: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.SelectOption>>>({
    url: `/common/dict/country`,
    method: 'get'
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function countrySelectOptionRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {}
  try {
    const res = await countrySelectOption(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
