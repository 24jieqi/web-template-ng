/**
 * @desc 创建用户
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.UserVO
}

export function add({ bodyParams }: IParams = {} as IParams) {
  return request<defs.UserCreatedVO>({
    url: `/sys/user/add`,
    method: 'post',
    data: bodyParams
  })
}
