/**
 * @desc 国际发货状态下拉选项
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {}

export function exportShipmentXls({}: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.SelectTextOption>>>({
    url: `/reportFormsCenter/internationalShip/all/status`,
    method: 'get'
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function exportShipmentXlsRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {}
  try {
    const res = await exportShipmentXls(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
