/**
 * @desc 尾程运输-订车
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.DomesticTransportBookDTO
}

export function book({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<string>>({
    url: `/business/transportation/book`,
    method: 'post',
    data: bodyParams
  })
}
