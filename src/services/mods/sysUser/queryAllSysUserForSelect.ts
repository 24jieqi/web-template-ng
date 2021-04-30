/**
 * @desc 查询所有系统用户-下拉框
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {}

export function queryAllSysUserForSelect({}: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.SelectOption>>>({
    url: `/sys/user/queryAllSysUserForSelect`,
    method: 'get'
  })
}
