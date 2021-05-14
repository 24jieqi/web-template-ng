/**
 * @desc SOP检查项管理-修改状态
 */
import request from '@/utils/request'
export class IQueryParams {
  /** id */
  id: number
  /** status */
  status: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function postEditEnabled({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<string>>({
    url: `/business/sopDetail/edit/enabled`,
    method: 'post',
    params: queryParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function postEditEnabledRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await postEditEnabled(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
