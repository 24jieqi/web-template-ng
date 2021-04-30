/**
 * @desc 国际发货状态下拉选项
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {}

export function exportShipmentXls({}: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.SelectTextOption>>>({
    url: `/reportFormsCenter/internationalShip/all/status`,
    method: 'get'
  })
}
