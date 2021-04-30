/**
 * @desc 修改口岸状态
 */
import request from '@/utils/request'
export class IQueryParams {
  /** id */
  id: number
  /** status */
  status: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function changeStatus({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<void>>({
    url: `/business/port/changeState`,
    method: 'put',
    params: queryParams
  })
}
