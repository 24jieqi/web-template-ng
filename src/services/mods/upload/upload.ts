/**
 * @desc 文件上传接口
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {}

export function upload({}: IParams = {} as IParams) {
  return request<defs.Result<string>>({
    url: `/sys/common/upload`,
    method: 'post'
  })
}
