/**
 * @desc 合同-新增合同
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.ContractAddDTO
}

export function addContract({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<number>>({
    url: `/business/contract/add`,
    method: 'post',
    data: bodyParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function addContractRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    bodyParams: restParamsData[0]
  }
  try {
    const res = await addContract(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
