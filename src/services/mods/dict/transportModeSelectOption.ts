/**
 * @desc 口岸运输方式接口
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {}

export function transportModeSelectOption({}: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.SelectOption>>>({
    url: `/common/dict/transport/mode`,
    method: 'get'
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function transportModeSelectOptionRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {}
  try {
    const res = await transportModeSelectOption(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
