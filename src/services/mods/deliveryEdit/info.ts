/**
 * @desc 国际发货-发货编辑-根据ID查询详情
 */
import request from '@/utils/request'
export class IQueryParams {
  /** id */
  id: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function info({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.DeliveryEditInfoVO>>({
    url: `/modules/deliveryPlan/edit/info`,
    method: 'get',
    params: queryParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function infoRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await info(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
