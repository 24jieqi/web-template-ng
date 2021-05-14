/**
 * @desc 船公司下拉列表
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {}

export function shipCompanyOption({}: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.SelectTextOption>>>({
    url: `/business/declareInfo/ship/company/option`,
    method: 'get'
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function shipCompanyOptionRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {}
  try {
    const res = await shipCompanyOption(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
