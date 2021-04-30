/**
     * @desc 职务表-通过id删除
职务表-通过id删除
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
    url: `/sys/position/delete`,
    method: 'delete',
    params: queryParams
  })
}
