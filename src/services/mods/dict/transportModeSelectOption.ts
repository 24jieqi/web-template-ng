/**
 * @desc 口岸运输方式接口
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {}

export function transportModeSelectOption({}: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.SelectOption>>>({
    url: `/common/dict/transport/mode`,
    method: 'get'
  })
}
