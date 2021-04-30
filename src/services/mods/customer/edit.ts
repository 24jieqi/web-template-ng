/**
 * @desc 客户管理表-编辑
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.CustomerEditDTO
}

export function edit({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<void>>({
    url: `/business/customer/edit`,
    method: 'put',
    data: bodyParams
  })
}
