/**
 * @desc 客户排行
 */
import request from '@/utils/request'
export class IQueryParams {
  /** pageNo */
  pageNo?: number
  /** pageSize */
  pageSize?: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function selectCustomerCabinetOrder(
  { queryParams }: IParams = {} as IParams
) {
  return request<defs.Result<defs.IPage<defs.CustomerCabinetOrderVO>>>({
    url: `/business/report/selectCustomerCabinetOrder`,
    method: 'get',
    params: queryParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function selectCustomerCabinetOrderRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await selectCustomerCabinetOrder(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
