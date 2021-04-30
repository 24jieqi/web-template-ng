/**
 * @desc 批量删除
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
  return request<defs.Result>({
    url: `/sys/role/deleteBatch`,
    method: 'delete',
    params: queryParams
  })
}
