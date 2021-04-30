/**
 * @desc 列表状态筛选下拉接口
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {}

export function deliveryPlanStatus({}: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.SelectTextOption>>>({
    url: `/business/pickGoodsInfo/state/option`,
    method: 'get'
  })
}
