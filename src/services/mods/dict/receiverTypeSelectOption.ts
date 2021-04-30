/**
 * @desc 收货方类型接口
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {}

export function receiverTypeSelectOption({}: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.SelectOption>>>({
    url: `/common/dict/receiver/type`,
    method: 'get'
  })
}
