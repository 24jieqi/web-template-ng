/**
     * @desc 填值规则-批量删除
填值规则-批量删除
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
    url: `/sys/fillRule/deleteBatch`,
    method: 'delete',
    params: queryParams
  })
}
