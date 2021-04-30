/**
     * @desc 职务表-添加
职务表-添加
     */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.SysPosition
}

export function add({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.SysPosition>>({
    url: `/sys/position/add`,
    method: 'post',
    data: bodyParams
  })
}
