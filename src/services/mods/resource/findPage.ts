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
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function findPageRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    bodyParams: restParamsData[0]
  }
  try {
    const res = await findPage(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
