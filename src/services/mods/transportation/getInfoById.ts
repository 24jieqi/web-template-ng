/**
 * @desc 尾程运输-根据ID运输信息
 */
import request from '@/utils/request'
export class IQueryParams {
  /** id */
  id: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function getInfoById({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.DomesticTransportationVO>>({
    url: `/business/transportation/getInfoById`,
    method: 'get',
    params: queryParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function getInfoByIdRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await getInfoById(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
