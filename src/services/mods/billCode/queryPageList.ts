/**
 * @desc 销售单号-分页列表查询(默认1，10)
 */
import request from '@/utils/request'
export class IQueryParams {
  /** 销售单号，模糊查询 */
  billCode?: string
  /** 柜次，模糊查询 */
  cabinetBatchCode?: string
  /** 柜号，模糊查询 */
  cabinetCode?: string
  /** pageNo */
  pageNo?: number
  /** pageSize */
  pageSize?: number
  /** 发货方ID，精确查询 */
  senderId?: number
  /** 状态，精确查询 */
  state?: string
}

export interface IParams {
  queryParams: IQueryParams
}

export function queryPageList({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.Page<defs.BillCodeListVO>>>({
    url: `/finance/billCode/list`,
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
