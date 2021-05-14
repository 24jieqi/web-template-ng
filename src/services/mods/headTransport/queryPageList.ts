/**
 * @desc 头程运输列表接口
 */
import request from '@/utils/request'
export class IQueryParams {
  /** 柜号 */
  cabinetCode?: string
  /** 头程运输公司 */
  internationalTransportId?: number
  /** pageNo */
  pageNo?: number
  /** pageSize */
  pageSize?: number
  /** 发柜结束时间 */
  pickGoodsEndTime?: string
  /** 发柜开始时间 */
  pickGoodsStartTime?: string
  /** state */
  state?: string
}

export interface IParams {
  queryParams: IQueryParams
}

export function queryPageList({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.IPage<defs.HeadTransportListVO>>>({
    url: `/business/head/transport/list`,
    method: 'get',
    params: queryParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function queryPageListRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await queryPageList(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
