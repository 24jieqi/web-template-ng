/**
 * @desc 国际发货-发货编辑-获取回滚到状态
 */
import request from '@/utils/request'
export class IQueryParams {
  /** id */
  id: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function getRollBackState({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<string>>({
    url: `/modules/deliveryPlan/edit/getRollBackState`,
    method: 'get',
    params: queryParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function getRollBackStateRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await getRollBackState(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
