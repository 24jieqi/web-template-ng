/**
 * @desc 查询用户角色
 */
import request from '@/utils/request'
export class IQueryParams {
  /** id */
  id: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function queryUserRole({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<Array<number>>>({
    url: `/sys/user/queryUserRole`,
    method: 'get',
    params: queryParams
  })
}
