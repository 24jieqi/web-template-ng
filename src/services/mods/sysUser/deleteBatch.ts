/**
 * @desc 批量删除用户
 */
import request from '@/utils/request'
export class IQueryParams {
  /** ids */
  ids: string
}

export interface IParams {
  queryParams: IQueryParams
}

export function deleteBatch({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<void>>({
    url: `/sys/user/deleteBatch`,
    method: 'delete',
    params: queryParams
  })
}
