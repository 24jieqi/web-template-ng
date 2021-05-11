/**
 * @desc 三方-国内报关-提交报关
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.ImportDeclareThirdCommitDTO
}

export function thirdCommit({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<number>>({
    url: `/api/declare/commit`,
    method: 'post',
    data: bodyParams
  })
}
