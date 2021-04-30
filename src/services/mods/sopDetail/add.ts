/**
 * @desc SOP检查项管理-添加
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.SopDetailSaveRequest
}

export function add({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<string>>({
    url: `/business/sopDetail/add`,
    method: 'post',
    data: bodyParams
  })
}
