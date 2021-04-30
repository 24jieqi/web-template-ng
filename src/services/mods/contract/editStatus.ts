/**
 * @desc 修改合同可用状态
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.ContractEditStatusDTO
}

export function editStatus({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<string>>({
    url: `/business/contract/edit/status`,
    method: 'post',
    data: bodyParams
  })
}
