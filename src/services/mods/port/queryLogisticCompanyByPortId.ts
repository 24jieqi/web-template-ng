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
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function queryLogisticCompanyByPortIdRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await queryLogisticCompanyByPortId(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
