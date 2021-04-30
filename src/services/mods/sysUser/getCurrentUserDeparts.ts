/**
 * @desc 查询当前用户的所有部门/当前部门编码
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {}

export function getCurrentUserDeparts({}: IParams = {} as IParams) {
  return request<defs.Result<defs.ObjectMap<string, ObjectMap>>>({
    url: `/sys/user/getCurrentUserDeparts`,
    method: 'get'
  })
}
