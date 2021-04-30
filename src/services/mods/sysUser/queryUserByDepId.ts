/**
 * @desc 根据部门id查询用户信息
 */
import request from '@/utils/request'
export class IQueryParams {
  /** id */
  id: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function queryUserByDepId({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.SysUser>>>({
    url: `/sys/user/queryUserByDepId`,
    method: 'get',
    params: queryParams
  })
}
