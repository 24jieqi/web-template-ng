/**
 * @desc SOP检查项管理-修改状态
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

export function postEditEnabled({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<string>>({
    url: `/business/sopDetail/edit/enabled`,
    method: 'post',
    params: queryParams
  })
}
