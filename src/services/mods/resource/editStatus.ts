/**
 * @desc 资源信息上下架
 */
import request from '@/utils/request'
export class IQueryParams {
  /** 资源ID */
  id: number
  /** 修改后状态 1_可用 99_禁用 */
  status: 1 | 99 | 1 | 99
}

export interface IParams {
  queryParams: IQueryParams
}

export function editStatus({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<string>>({
    url: `/client/management/edit/status`,
    method: 'get',
    params: queryParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function editStatusRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await editStatus(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
