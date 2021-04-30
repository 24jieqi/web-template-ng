/**
 * @desc 资源信息删除
 */
import request from '@/utils/request'
export class IQueryParams {
  /** 资源ID */
  id: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function editDel({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<string>>({
    url: `/client/management/edit/del`,
    method: 'get',
    params: queryParams
  })
}
