/**
 * @desc 三方-国内报关-补充资料
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.ImportDeclareThirdReplenishDTO
}

export function thirdReplenish({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<string>>({
    url: `/api/declare/replenish`,
    method: 'post',
    data: bodyParams
  })
}
