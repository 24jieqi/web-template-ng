/**
 * @desc 堆场状态管理接口
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.IdDTO
}

export function changeStatus({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<void>>({
    url: `/business/storageYard/change/status`,
    method: 'put',
    data: bodyParams
  })
}
