/**
 * @desc 堆场状态管理接口
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.IdDTO
}

export function changeStatus({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<void>>({
    url: `/business/storageYard/change/status`,
    method: 'put',
    data: bodyParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function changeStatusRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    bodyParams: restParamsData[0]
  }
  try {
    const res = await changeStatus(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
