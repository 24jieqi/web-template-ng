/**
 * @desc Yard管理-分页列表查询
 */
import request from '@/utils/request'
export class IQueryParams {
  /** 堆场名称 */
  name?: string
  /** pageNo */
  pageNo?: number
  /** pageSize */
  pageSize?: number
  /** 口岸id */
  portId?: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function queryPageList({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.IPage<defs.StorageYardListVO>>>({
    url: `/business/storageYard/list`,
    method: 'get',
    params: queryParams
  })
}
