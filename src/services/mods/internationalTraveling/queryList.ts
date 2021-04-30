/**
 * @desc 国际在途汇总-分页列表查询
 */
import request from '@/utils/request'
export class IQueryParams {
  /** 页码 */
  pageNo: number
  /** 每页条数 */
  pageSize: number
  /** 商品pid */
  pid?: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function queryList({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.Page<defs.InternationalTravelingListVO>>>({
    url: `/reportFormsCenter/internationalTraveling/list`,
    method: 'get',
    params: queryParams
  })
}
