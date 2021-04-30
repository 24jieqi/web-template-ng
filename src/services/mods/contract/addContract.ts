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
