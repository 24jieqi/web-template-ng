/**
 * @desc 销地收货-根据分柜订单ID查询
 */
import request from '@/utils/request'
export class IQueryParams {
  /** id */
  id: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function getById({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.ReceiveWebDetailVO>>({
    url: `/business/receivePlan/getById`,
    method: 'get',
    params: queryParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function getByIdRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await getById(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
