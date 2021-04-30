/**
     * @desc 职务表-通过id查询
职务表-通过id查询
     */
import request from '@/utils/request'
export class IQueryParams {
  /** id */
  id: string
}

export interface IParams {
  queryParams: IQueryParams
}

export function queryById({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.SysPosition>>({
    url: `/sys/position/queryById`,
    method: 'get',
    params: queryParams
  })
}
