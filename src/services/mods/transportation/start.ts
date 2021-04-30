/**
 * @desc 尾程运输-发车
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.DomesticTransportStartDTO
}

export function start({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<string>>({
    url: `/business/transportation/start`,
    method: 'post',
    data: bodyParams
  })
}
