/**
 * @desc 删除用户
 */
import request from '@/utils/request'
export class IQueryParams {
  /** id */
  id: string
}

export interface IParams {
  queryParams: IQueryParams
}

export function remove({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<void>>({
    url: `/sys/user/delete`,
    method: 'delete',
    params: queryParams
  })
}
