/**
 * @desc 收货方类型接口
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {}

export function receiverTypeSelectOption({}: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.SelectOption>>>({
    url: `/common/dict/receiver/type`,
    method: 'get'
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function receiverTypeSelectOptionRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {}
  try {
    const res = await receiverTypeSelectOption(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
