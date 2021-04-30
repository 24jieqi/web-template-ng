/**
     * @desc 填值规则-添加
填值规则-添加
     */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.SysFillRule
}

export function add({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<void>>({
    url: `/sys/fillRule/add`,
    method: 'post',
    data: bodyParams
  })
}
