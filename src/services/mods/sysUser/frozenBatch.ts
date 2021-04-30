/**
 * @desc 冻结&解冻用户
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.UserFrozenDTO
}

export function frozenBatch({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.SysUser>>({
    url: `/sys/user/frozenBatch`,
    method: 'put',
    data: bodyParams
  })
}
