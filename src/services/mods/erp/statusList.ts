/**
 * @desc 获取计划状态变更列表
 */
import request from '@/utils/request'
export class IQueryParams {
  /** billCode */
  billCode: string
}

export interface IParams {
  queryParams: IQueryParams
}

export function statusList({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.OperateLog>>>({
    url: `/business/erp/statusList`,
    method: 'get',
    params: queryParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function statusListRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await statusList(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
