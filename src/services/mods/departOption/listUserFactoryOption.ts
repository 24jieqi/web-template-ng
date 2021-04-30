/**
 * @desc 用户关联工厂下拉
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {}

export function listUserFactoryOption({}: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.SelectOption>>>({
    url: `/sys/depart/option/user/factory`,
    method: 'get'
  })
}
