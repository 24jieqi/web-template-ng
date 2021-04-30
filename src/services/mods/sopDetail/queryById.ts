/**
 * @desc SOP检查项管理-根据id查询
 */
import request from '@/utils/request'
export class IQueryParams {
  /** id */
  id: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function queryById({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.SopDetailResult>>({
    url: `/business/sopDetail/queryById`,
    method: 'get',
    params: queryParams
  })
}
