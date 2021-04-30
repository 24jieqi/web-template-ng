/**
 * @desc 入境口岸发货管理-发货
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.EntryPortDeliveryCommitDTO
}

export function commit({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<string>>({
    url: `/entryPortDelivery/commit`,
    method: 'post',
    data: bodyParams
  })
}
