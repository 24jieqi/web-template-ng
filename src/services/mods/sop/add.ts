/**
 * @desc SOP管理-添加
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.Sop
}

export function add({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<string>>({
    url: `/business/sop/add`,
    method: 'post',
    data: bodyParams
  })
}
