/**
 * @desc 根据港口ID，获取对应的物流公司
 */
import request from '@/utils/request'
export class IQueryParams {
  /** portId */
  portId: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function queryLogisticCompanyByPortId(
  { queryParams }: IParams = {} as IParams
) {
  return request<defs.Result<Array<defs.SysDepart>>>({
    url: `/business/port/queryLogisticCompanyByPortId`,
    method: 'get',
    params: queryParams
  })
}
