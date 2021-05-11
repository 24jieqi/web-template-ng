/**
 * @desc 国际在途汇总
 */
import request from '@/utils/request'
export class IQueryParams {
  /** 商品pid */
  pid?: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function queryList({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.InternationalTravelingListVO>>>({
    url: `/reportFormsCenter/internationalTraveling/list`,
    method: 'get',
    params: queryParams
  })
}
