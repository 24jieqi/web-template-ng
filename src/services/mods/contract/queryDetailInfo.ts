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
