/**
 * @desc 口岸管理信息-编辑
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.PortEditDTO
}

export function edit({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<string>>({
    url: `/business/port/edit`,
    method: 'put',
    data: bodyParams
  })
}
