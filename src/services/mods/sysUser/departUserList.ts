/**
 * @desc 部门用户列表
 */
import request from '@/utils/request'
export class IQueryParams {
  /** pageNo */
  pageNo?: number
  /** pageSize */
  pageSize?: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function departUserList({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.IPage<defs.SysUser>>>({
    url: `/sys/user/departUserList`,
    method: 'get',
    params: queryParams
  })
}
