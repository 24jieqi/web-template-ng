/**
 * @desc SOP管理-编辑
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.Sop
}

export function edit({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<string>>({
    url: `/business/sop/edit`,
    method: 'post',
    data: bodyParams
  })
}
