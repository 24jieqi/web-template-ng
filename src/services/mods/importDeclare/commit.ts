/**
 * @desc 国内报关-提交报关
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.ImportDeclareCommitVO
}

export function commit({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<string>>({
    url: `/business/importDeclare/commit`,
    method: 'post',
    data: bodyParams
  })
}
