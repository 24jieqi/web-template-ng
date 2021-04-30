/**
     * @desc 查询用户权限列表
默认查当前用户，可传用户id查询该用户权限列表
     */
import request from '@/utils/request'
export class IQueryParams {
  /** uid */
  uid?: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function queryUserPermissions({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<Array<string>>>({
    url: `/sys/user/queryUserPermissions`,
    method: 'get',
    params: queryParams
  })
}
