/**
 * @desc 三方-上传文件
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {}

export function upload({}: IParams = {} as IParams) {
  return request<defs.Result<defs.FileVO>>({
    url: `/api/file/upload`,
    method: 'post'
  })
}
