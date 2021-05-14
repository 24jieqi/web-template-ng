/**
 * @desc 尾程运输-发车
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.DomesticTransportStartDTO
}

export function start({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<string>>({
    url: `/business/transportation/start`,
    method: 'post',
    data: bodyParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function startRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    bodyParams: restParamsData[0]
  }
  try {
    const res = await start(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
