/**
 * @desc 国际在途汇总-详情-进口报关公司下拉菜单
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {}

export function domesticDeclareCompanyOptions({}: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.SelectOption>>>({
    url: `/reportFormsCenter/internationalTraveling/domesticDeclareCompanyOptions`,
    method: 'get'
  })
}
