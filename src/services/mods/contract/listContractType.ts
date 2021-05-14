/**
 * @desc 合同类型信息下拉菜单
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {}

export function listContractType({}: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.SelectOption>>>({
    url: `/business/contract/list/contractType`,
    method: 'get'
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function listContractTypeRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {}
  try {
    const res = await listContractType(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
