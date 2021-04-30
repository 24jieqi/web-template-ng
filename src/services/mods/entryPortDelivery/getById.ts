/**
 * @desc 入境口岸发货管理-根据ID查询
 */
import request from '@/utils/request'
export class IQueryParams {
  /** id */
  id: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function getById({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.EntryPortDeliveryDetailVO>>({
    url: `/entryPortDelivery/getById`,
    method: 'get',
    params: queryParams
  })
}
