/**
 * @desc 尾程运输-订车
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.DomesticTransportBookDTO
}

export function book({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<string>>({
    url: `/business/transportation/book`,
    method: 'post',
    data: bodyParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function bookRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    bodyParams: restParamsData[0]
  }
  try {
    const res = await book(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
