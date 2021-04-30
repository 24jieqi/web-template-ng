/**
 * @desc 国际发货明细-详情查看
 */
import request from '@/utils/request'
export class IQueryParams {
  /** planId */
  planId: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function getDetailInfo({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.InternationalShipmentDetailVO>>({
    url: `/reportFormsCenter/internationalShip/info`,
    method: 'get',
    params: queryParams
  })
}
