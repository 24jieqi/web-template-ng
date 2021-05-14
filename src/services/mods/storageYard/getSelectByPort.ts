/**
 * @desc 根据口岸查询堆场下拉接口
 */
import request from '@/utils/request'
export class IQueryParams {
  /** portId */
  portId: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function getSelectByPort({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.SelectOption>>>({
    url: `/business/storageYard/selectByPort`,
    method: 'get',
    params: queryParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function getSelectByPortRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await getSelectByPort(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
