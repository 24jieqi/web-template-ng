/**
 * @desc 根据TOKEN获取用户的部分信息
 */
import request from '@/utils/request'
export class IQueryParams {
  /** token */
  token?: string
}

export interface IParams {
  queryParams: IQueryParams
}

export function getUserSectionInfoByToken(
  { queryParams }: IParams = {} as IParams
) {
  return request<defs.Result<defs.ObjectMap<string, ObjectMap>>>({
    url: `/sys/user/getUserSectionInfoByToken`,
    method: 'get',
    params: queryParams
  })
}
