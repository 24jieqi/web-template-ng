/**
 * @desc 根据口岸查询堆场下拉接口
 */
import request from '@/utils/request'
export class IQueryParams {
  /** portId */
  portId: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function getSelectByPort({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.SelectOption>>>({
    url: `/business/storageYard/selectByPort`,
    method: 'get',
    params: queryParams
  })
}
