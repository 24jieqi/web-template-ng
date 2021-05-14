/**
 * @desc 国际发货-发货编辑-订舱信息编辑
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.DeliveryEditBookingInfoVO
}

export function editBookingInfo({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.DeliveryEditInfoVO>>({
    url: `/modules/deliveryPlan/edit/editBookingInfo`,
    method: 'put',
    data: bodyParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function editBookingInfoRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    bodyParams: restParamsData[0]
  }
  try {
    const res = await editBookingInfo(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
