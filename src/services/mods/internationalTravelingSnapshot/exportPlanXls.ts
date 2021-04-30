/**
 * @desc 国际在途快照-快照导出
 */
import request from '@/utils/request'
export class IQueryParams {
  /** 进口港-精确查询 */
  arrivePortId?: number
  /** 柜次-模糊查询 */
  cabinetBatchCode?: string
  /** 柜号-模糊查询 */
  cabinetCode?: string
  /** map */
  map?: any
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

export function exportPlanXls({ queryParams }: IParams = {} as IParams) {
  return request<any>({
    url: `/reportFormsCenter/internationalTravelingSnapshot/exportPlanXls`,
    method: 'get',
    params: queryParams
  })
}
