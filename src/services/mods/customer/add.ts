/**
 * @desc 客户管理-添加
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.CustomerAddDTO
}

export function add({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<void>>({
    url: `/business/customer/add`,
    method: 'post',
    data: bodyParams
  })
}
