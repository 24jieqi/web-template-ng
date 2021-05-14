/**
 * @desc 国际发货-发货编辑-回滚
 */
import request from '@/utils/request'
export class IQueryParams {
  /** id */
  id?: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function rollBack({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<string>>({
    url: `/modules/deliveryPlan/edit/rollBack`,
    method: 'post',
    params: queryParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function rollBackRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await rollBack(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
