/**
 * @desc 建议收货方下拉列表
 */
import request from '@/utils/request'
export class IQueryParams {
  /** receiverType */
  receiverType: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function listSuggestReceiverOption(
  { queryParams }: IParams = {} as IParams
) {
  return request<defs.Result<Array<defs.SelectOption>>>({
    url: `/sys/depart/option/suggest/receiver/list`,
    method: 'get',
    params: queryParams
  })
}
