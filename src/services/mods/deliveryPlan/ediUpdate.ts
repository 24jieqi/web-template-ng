/**
 * @desc EDI推送更新接口
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: Array<defs.EDIUpdateInfoDTO>
}

export function ediUpdate({ bodyParams }: IParams = {} as IParams) {
  return request<any>({
    url: `/modules/deliveryPlan/ediUpdate`,
    method: 'post',
    data: bodyParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function ediUpdateRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    bodyParams: restParamsData[0]
  }
  try {
    const res = await ediUpdate(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
