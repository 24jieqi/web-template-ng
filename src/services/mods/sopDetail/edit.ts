/**
 * @desc SOP检查项管理-编辑
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.SopDetailSaveRequest
}

export function edit({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<string>>({
    url: `/business/sopDetail/edit`,
    method: 'post',
    data: bodyParams
  })
}
