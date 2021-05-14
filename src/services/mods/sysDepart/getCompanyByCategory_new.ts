/**
 * @desc 组织管理-根据类型查询组织
 */
import request from '@/utils/request'
export class IQueryParams {
  /** companyType */
  companyType?: number
  /** country */
  country?: number
  /** q */
  q?: string
}

export interface IParams {
  queryParams: IQueryParams
}

export function getCompanyByCategory_new(
  { queryParams }: IParams = {} as IParams
) {
  return request<defs.Result<Array<defs.SysDepart>>>({
    url: `/sys/sysDepart/getCompanyByCategory_new`,
    method: 'get',
    params: queryParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function getCompanyByCategory_newRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await getCompanyByCategory_new(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
