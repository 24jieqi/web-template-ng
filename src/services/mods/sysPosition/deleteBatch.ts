/**
     * @desc 职务表-批量删除
职务表-批量删除
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
  return request<defs.Result<defs.SysPosition>>({
    url: `/sys/position/deleteBatch`,
    method: 'delete',
    params: queryParams
  })
}
