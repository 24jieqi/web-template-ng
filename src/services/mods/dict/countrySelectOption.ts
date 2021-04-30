/**
 * @desc 所属国家列表接口
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {}

export function countrySelectOption({}: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.SelectOption>>>({
    url: `/common/dict/country`,
    method: 'get'
  })
}
