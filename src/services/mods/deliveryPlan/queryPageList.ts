/**
 * @desc 获取海外发货计划列表
 */
import request from '@/utils/request'
export class IQueryParams {
  /** 柜次 */
  cabinetBatchCode?: string
  /** endTime */
  endTime?: string
  /** pageNo */
  pageNo?: number
  /** pageSize */
  pageSize?: number
  /** startTime */
  startTime?: string
  /** state */
  state?: string
}

export interface IParams {
  queryParams: IQueryParams
}

export function queryPageList({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.IPage<defs.DeliveryPlanListVO>>>({
    url: `/modules/deliveryPlan/list`,
    method: 'get',
    params: queryParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function queryPageListRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await queryPageList(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
