/**
 * @desc SOP检查项管理-获取检查类型
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {}

export function queryOperation({}: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.SelectOption>>>({
    url: `/business/sopDetail/checkTypes`,
    method: 'get'
  })
}
