/**
 * @desc 口岸管理信息-添加
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.PortAddDTO
}

export function add({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<string>>({
    url: `/business/port/add`,
    method: 'post',
    data: bodyParams
  })
}
