/**
 * @desc 分页展示资料信息
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.SysSettingQueryDTO
}

export function findPage({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.Page<defs.SysSettingPageVO>>>({
    url: `/client/management/list`,
    method: 'post',
    data: bodyParams
  })
}
