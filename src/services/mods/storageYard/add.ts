/**
 * @desc 堆场管理-添加
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.StorageYardAddDTO
}

export function add({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<string>>({
    url: `/business/storageYard/add`,
    method: 'post',
    data: bodyParams
  })
}
