/**
 * @desc 尾程运输-根据订单ID获取详情,用于编辑
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
  return request<defs.Result<defs.DomesticTransportationDetailVO>>({
    url: `/business/transportation/getById`,
    method: 'get',
    params: queryParams
  })
}
