/**
 * @desc 根据计划ID获取发货计划明细
 */
import request from '@/utils/request'
export class IQueryParams {
  /** planId */
  planId: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function queryByPlanId({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.DeliveryPlanItem>>>({
    url: `/business/deliveryPlanItem/queryByPlanId`,
    method: 'get',
    params: queryParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function queryByPlanIdRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await queryByPlanId(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
