/**
     * @desc 职务表-编辑
职务表-编辑
     */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.SysPosition
}

export function edit({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.SysPosition>>({
    url: `/sys/position/edit`,
    method: 'put',
    data: bodyParams
  })
}
