/**
 * @desc 尾程运输-根据ID运输信息
 */
import request from '@/utils/request'
export class IQueryParams {
  /** id */
  id: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function getInfoById({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.DomesticTransportationVO>>({
    url: `/business/transportation/getInfoById`,
    method: 'get',
    params: queryParams
  })
}
