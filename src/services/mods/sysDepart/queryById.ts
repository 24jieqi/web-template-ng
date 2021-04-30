/**
 * @desc 根据id查询组织
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
  return request<defs.Result<defs.SysDepartEditVO>>({
    url: `/sys/sysDepart/queryById`,
    method: 'get',
    params: queryParams
  })
}
