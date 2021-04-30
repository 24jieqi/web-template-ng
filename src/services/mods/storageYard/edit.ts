/**
 * @desc 堆场管理-编辑
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.StorageYardEditDTO
}

export function edit({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<string>>({
    url: `/business/storageYard/edit`,
    method: 'put',
    data: bodyParams
  })
}
