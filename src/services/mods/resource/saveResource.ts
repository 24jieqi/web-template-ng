/**
 * @desc 新增资源信息
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {}

export function saveResource({}: IParams = {} as IParams) {
  return request<defs.Result<defs.FileVO>>({
    url: `/client/management/save/resource`,
    method: 'post'
  })
}
