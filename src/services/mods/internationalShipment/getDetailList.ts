/**
 * @desc 国际发货明细-分页列表
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.BasePageRequest
}

export function getDetailList({ bodyParams }: IParams = {} as IParams) {
  return request<
    defs.Result<defs.IPage<defs.InternationalShipmentDetailListVO>>
  >({
    url: `/reportFormsCenter/internationalShip/list`,
    method: 'post',
    data: bodyParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function getDetailListRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    bodyParams: restParamsData[0]
  }
  try {
    const res = await getDetailList(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
