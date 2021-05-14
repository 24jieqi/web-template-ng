/**
 * @desc 国际在途汇总
 */
import request from '@/utils/request'
export class IQueryParams {
  /** 商品pid */
  pid?: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function queryList({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.InternationalTravelingListVO>>>({
    url: `/reportFormsCenter/internationalTraveling/list`,
    method: 'get',
    params: queryParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function queryListRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await queryList(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
