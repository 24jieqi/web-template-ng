/**
 * @desc 用户关联工厂下拉
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {}

export function listUserFactoryOption({}: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.SelectOption>>>({
    url: `/sys/depart/option/user/factory`,
    method: 'get'
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function listUserFactoryOptionRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {}
  try {
    const res = await listUserFactoryOption(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
