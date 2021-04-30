/**
 * @desc 销售单号-获取状态下拉菜单
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {}

export function statusList({}: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.SelectTextOption>>>({
    url: `/finance/billCode/statusList`,
    method: 'get'
  })
}
