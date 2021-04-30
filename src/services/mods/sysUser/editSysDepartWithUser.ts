/**
 * @desc 给指定部门添加对应的用户
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.SysDepartUsersVO
}

export function editSysDepartWithUser({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<string>>({
    url: `/sys/user/editSysDepartWithUser`,
    method: 'post',
    data: bodyParams
  })
}
