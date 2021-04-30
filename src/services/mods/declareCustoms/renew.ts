/**
 * @desc 补充资料接口
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.DeclareCustomCommitDTO
}

export function renew({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<void>>({
    url: `/business/declareCustoms/renew`,
    method: 'post',
    data: bodyParams
  })
}
