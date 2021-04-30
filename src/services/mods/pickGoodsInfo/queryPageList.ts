/**
 * @desc 产地物流提货列表接口
 */
import request from '@/utils/request'
export class IQueryParams {
  /** 柜次 */
  cabinetBatchCode?: string
  /** 柜号 */
  cabinetCode?: string
  /** 头程运输公司 */
  internationalTransportId?: number
  /** pageNo */
  pageNo?: number
  /** pageSize */
  pageSize?: number
  /** 提柜结束时间 */
  pickCabinetEndTime?: string
  /** 提柜开始时间 */
  pickCabinetStartTime?: string
  /** planEndTime */
  planEndTime?: string
  /** planStartTime */
  planStartTime?: string
  /** state */
  state?: string
}

export interface IParams {
  queryParams: IQueryParams
}

export function queryPageList({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.IPage<defs.PickGoodsListVO>>>({
    url: `/business/pickGoodsInfo/list`,
    method: 'get',
    params: queryParams
  })
}
