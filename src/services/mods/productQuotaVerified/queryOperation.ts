/**
 * @desc 许可核销-获取状态类型
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {}

export function queryOperation({}: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.SelectTextOption>>>({
    url: `/business/productQuota/verified/status`,
    method: 'get'
  })
}
