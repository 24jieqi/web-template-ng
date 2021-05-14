/**
 * @desc 国际发货-发货编辑-分页列表查询
 */
import request from '@/utils/request'
export class IQueryParams {
  /** 柜次-模糊查询 长度最多为12个字符 */
  cabinetBatchCode?: string
  /** 柜号-模糊查询 长度最多为11个字符 */
  cabinetCode?: string
  /** 页码 */
  pageNo: number
  /** 每页条数 */
  pageSize: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function queryPageList({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.Page<defs.DeliveryEditListVO>>>({
    url: `/modules/deliveryPlan/edit/list`,
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
