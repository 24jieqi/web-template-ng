/**
 * @desc 组织查询
 */
import request from '@/utils/request'
export class IQueryParams {
  /** type */
  type?: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function queryTreeList({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.SysDepartTreeModel>>>({
    url: `/sys/sysDepart/queryTreeList`,
    method: 'get',
    params: queryParams
  })
}
