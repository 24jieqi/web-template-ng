/**
     * @desc 填值规则-通过id查询
填值规则-通过id查询
     */
import request from '@/utils/request'
export class IQueryParams {
  /** id */
  id: string
}

export interface IParams {
  queryParams: IQueryParams
}

export function queryById({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.SysFillRule>>({
    url: `/sys/fillRule/queryById`,
    method: 'get',
    params: queryParams
  })
}
