/**
 * @desc 资源信息上下架
 */
import request from '@/utils/request'
export class IQueryParams {
  /** 资源ID */
  id: number
  /** 修改后状态 1_可用 99_禁用 */
  status: 1 | 99 | 1 | 99
}

export interface IParams {
  queryParams: IQueryParams
}

export function editStatus({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<string>>({
    url: `/client/management/edit/status`,
    method: 'get',
    params: queryParams
  })
}
