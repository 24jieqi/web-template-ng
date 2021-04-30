/**
 * @desc SOP管理-根据ID查询
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
  return request<defs.Result<defs.Sop>>({
    url: `/business/sop/queryById`,
    method: 'get',
    params: queryParams
  })
}
