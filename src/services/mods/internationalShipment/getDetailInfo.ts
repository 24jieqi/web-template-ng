/**
 * @desc 国际发货明细-详情查看
 */
import request from '@/utils/request'
export class IQueryParams {
  /** planId */
  planId: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function getDetailInfo({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.InternationalShipmentDetailVO>>({
    url: `/reportFormsCenter/internationalShip/info`,
    method: 'get',
    params: queryParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function getDetailInfoRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await getDetailInfo(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
