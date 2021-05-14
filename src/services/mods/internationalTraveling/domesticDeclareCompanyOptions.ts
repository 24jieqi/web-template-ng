/**
 * @desc 国际在途汇总-详情-进口报关公司下拉菜单
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {}

export function domesticDeclareCompanyOptions({}: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.SelectOption>>>({
    url: `/reportFormsCenter/internationalTraveling/domesticDeclareCompanyOptions`,
    method: 'get'
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function domesticDeclareCompanyOptionsRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {}
  try {
    const res = await domesticDeclareCompanyOptions(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
