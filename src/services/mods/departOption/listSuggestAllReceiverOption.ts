/**
 * @desc 所有收货方下拉列表
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {}

export function listSuggestAllReceiverOption({}: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.SelectTextOption>>>({
    url: `/sys/depart/option/suggest/receiver/all/list`,
    method: 'get'
  })
}
