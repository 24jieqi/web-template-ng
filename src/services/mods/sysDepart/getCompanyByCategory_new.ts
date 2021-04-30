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
