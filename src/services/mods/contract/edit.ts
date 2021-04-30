/**
 * @desc 合同-编辑合同
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.ContractEditDTO
}

export function edit({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<number>>({
    url: `/business/contract/edit`,
    method: 'post',
    data: bodyParams
  })
}
