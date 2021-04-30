/**
 * @desc 查询所有系统用户
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {}

export function queryAllSysUser({}: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.SysUser>>>({
    url: `/sys/user/queryAllSysUser`,
    method: 'get'
  })
}
