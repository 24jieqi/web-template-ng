/**
 * @desc 国际在途快照-详情
 */
import request from '@/utils/request'
export class IQueryParams {
  /** id */
  id: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function info({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.InternationalTravelingSnapshotInfoVO>>({
    url: `/reportFormsCenter/internationalTravelingSnapshot/info`,
    method: 'get',
    params: queryParams
  })
}
