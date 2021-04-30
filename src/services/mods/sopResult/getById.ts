/**
 * @desc 质量管理SOP-根据Id查询基本信息
 */
import request from '@/utils/request'
export class IQueryParams {
  /** id */
  id: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function getById({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.SopResultDetailVO>>({
    url: `/business/result/getById`,
    method: 'get',
    params: queryParams
  })
}
