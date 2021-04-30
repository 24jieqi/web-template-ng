/**
 * @desc 查询指定用户和部门关联的数据
 */
import request from '@/utils/request'
export class IQueryParams {
  /** userId */
  userId: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function getUserDepartsList({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.DepartIdModel>>>({
    url: `/sys/user/userDepartList`,
    method: 'get',
    params: queryParams
  })
}
