/**
 * @desc 堆场下拉选择列表
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {}

export function selectList({}: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.SelectOption>>>({
    url: `/business/storageYard/select`,
    method: 'get'
  })
}
