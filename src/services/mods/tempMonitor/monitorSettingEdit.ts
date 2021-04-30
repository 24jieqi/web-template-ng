/**
 * @desc 修改温度接口
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.TempMonitorSettingEditDTO
}

export function monitorSettingEdit({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<void>>({
    url: `/transiting/temp/monitor/setting/edit`,
    method: 'post',
    data: bodyParams
  })
}
