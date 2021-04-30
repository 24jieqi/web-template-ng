/**
 * @desc 国际在途汇总-详情-状态下拉菜单
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {}

export function statusOptions({}: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.SelectTextOption>>>({
    url: `/reportFormsCenter/internationalTraveling/statusOptions`,
    method: 'get'
  })
}
