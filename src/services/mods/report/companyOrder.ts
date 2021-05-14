/**
 * @desc 销地分公司月度排名
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

export function companyOrder({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.IPage<defs.CompanyOrder>>>({
    url: `/business/report/companyOrder`,
    method: 'get',
    params: queryParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function companyOrderRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await companyOrder(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
