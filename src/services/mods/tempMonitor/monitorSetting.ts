/**
 * @desc 设置温度接口
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.TempMonitorSettingDTO
}

export function monitorSetting({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<void>>({
    url: `/transiting/temp/monitor/setting/add`,
    method: 'post',
    data: bodyParams
  })
}
