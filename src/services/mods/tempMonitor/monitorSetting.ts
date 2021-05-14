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
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function monitorSettingRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    bodyParams: restParamsData[0]
  }
  try {
    const res = await monitorSetting(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
