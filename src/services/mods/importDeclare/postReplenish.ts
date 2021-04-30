/**
 * @desc 国内报关-补充资料
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.ImportDeclareReplenishDTO
}

export function postReplenish({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<string>>({
    url: `/business/importDeclare/replenish`,
    method: 'post',
    data: bodyParams
  })
}
