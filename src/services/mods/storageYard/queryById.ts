/**
 * @desc 根据id查询堆场
 */
import request from '@/utils/request'
export class IQueryParams {
  /** id */
  id: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function queryById({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.StorageYardEditVO>>({
    url: `/business/storageYard/queryById`,
    method: 'get',
    params: queryParams
  })
}
