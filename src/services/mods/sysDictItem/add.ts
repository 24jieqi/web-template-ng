/**
 * @desc 新增
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.SysDictItemAddDTO
}

export function add({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<string>>({
    url: `/sys/dictItem/add`,
    method: 'post',
    data: bodyParams
  })
}
