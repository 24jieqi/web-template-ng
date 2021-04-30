/**
 * @desc 根据用户ID查询用户
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
  return request<defs.Result<defs.UserInfoVO>>({
    url: `/sys/user/queryById`,
    method: 'get',
    params: queryParams
  })
}
