/**
 * @desc 组织查询
 */
import request from '@/utils/request'
export class IQueryParams {
  /** type */
  type?: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function queryTreeList({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.SysDepartTreeModel>>>({
    url: `/sys/sysDepart/queryTreeList`,
    method: 'get',
    params: queryParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function queryTreeListRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await queryTreeList(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
