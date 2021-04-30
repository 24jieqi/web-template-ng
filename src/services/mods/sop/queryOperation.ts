/**
 * @desc SOP管理-获取SOP操作列表
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {}

export function queryOperation({}: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.SelectOption>>>({
    url: `/business/sop/operation`,
    method: 'get'
  })
}
