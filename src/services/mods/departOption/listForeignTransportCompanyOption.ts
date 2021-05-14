/**
 * @desc 海外头程运输公司下拉列表
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {}

export function listForeignTransportCompanyOption({}: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.SelectOption>>>({
    url: `/sys/depart/option/foreign/transport/company`,
    method: 'get'
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function listForeignTransportCompanyOptionRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {}
  try {
    const res = await listForeignTransportCompanyOption(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
