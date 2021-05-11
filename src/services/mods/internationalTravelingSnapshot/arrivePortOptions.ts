/**
 * @desc 国际在途快照-进口港下拉菜单
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {}

export function arrivePortOptions({}: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.SelectOption>>>({
    url: `/reportFormsCenter/internationalTravelingSnapshot/arrivePortOptions`,
    method: 'get'
  })
}