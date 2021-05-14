/**
 * @desc 海外报关公司（出口报关公司）下拉列表
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {}

export function listForeignDeclareCompanyOption({}: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.SelectOption>>>({
    url: `/sys/depart/option/foreign/declare/company`,
    method: 'get'
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function listForeignDeclareCompanyOptionRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {}
  try {
    const res = await listForeignDeclareCompanyOption(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
