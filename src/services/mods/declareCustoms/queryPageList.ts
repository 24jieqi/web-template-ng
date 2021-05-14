/**
 * @desc 产地报关列表接口
 */
import request from '@/utils/request'
export class IQueryParams {
  /** 柜号 */
  cabinetCode?: string
  /** 出口报关公司 */
  declareCompanyId?: number
  /** declareEndTime */
  declareEndTime?: string
  /** declareStartTime */
  declareStartTime?: string
  /** pageNo */
  pageNo?: number
  /** pageSize */
  pageSize?: number
  /** state */
  state?: string
}

export interface IParams {
  queryParams: IQueryParams
}

export function queryPageList({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.IPage<defs.DeclareCustomListVO>>>({
    url: `/business/declareCustoms/list`,
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
