/**
     * @desc 填值规则-编辑
填值规则-编辑
     */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.SysFillRule
}

export function edit({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<void>>({
    url: `/sys/fillRule/edit`,
    method: 'put',
    data: bodyParams
  })
}
