/**
 * @desc 合同-合同详情
 */
import request from '@/utils/request'
export class IQueryParams {
  /** 合同ID */
  contractId: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function queryDetailInfo({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.ContractDetailVO>>({
    url: `/business/contract/detail`,
    method: 'get',
    params: queryParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function queryDetailInfoRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await queryDetailInfo(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
