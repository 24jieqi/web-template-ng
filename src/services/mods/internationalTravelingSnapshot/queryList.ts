/**
     * @desc 国际在途快照-分页列表查询
默认分页1，10
     */
import request from '@/utils/request'
export class IQueryParams {
  /** 进口港-精确查询 */
  arrivePortId?: number
  /** 柜次-模糊查询 */
  cabinetBatchCode?: string
  /** 柜号-模糊查询 */
  cabinetCode?: string
  /** pageNo */
  pageNo?: number
  /** pageSize */
  pageSize?: number
  /** 品类id */
  pid?: number
  /** 快照日期（yyyy-MM-dd） */
  snapshotDate?: string
  /** SPU ID-模糊查询 */
  spuId?: number
  /** 状态-精确查询 */
  status?: string
}

export interface IParams {
  queryParams: IQueryParams
}

export function queryList({ queryParams }: IParams = {} as IParams) {
  return request<
    defs.Result<defs.Page<defs.InternationalTravelingSnapshotListVO>>
  >({
    url: `/reportFormsCenter/internationalTravelingSnapshot/list`,
    method: 'get',
    params: queryParams
  })
}
