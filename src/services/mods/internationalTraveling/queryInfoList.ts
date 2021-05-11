/**
     * @desc 国际在途汇总-详情-分页列表查询
商品pid、产地id必传，默认分页1，10
     */
import request from '@/utils/request'
export class IQueryParams {
  /** 柜次-模糊查询 */
  cabinetBatchCode?: string
  /** 柜号-模糊查询 */
  cabinetCode?: string
  /** 页码 */
  pageNo: number
  /** 每页条数 */
  pageSize: number
  /** 品类id-必传 */
  pid: number
  /** 备注-模糊查询 */
  remark?: string
  /** 发货结束时间 */
  shipDateEnd?: string
  /** 发货开始时间  */
  shipDateStart?: string
  /** 可发货状态 全部时不传 0_可发货, 1_不可发货  */
  shipStatus?: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function queryInfoList({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.Page<defs.InternationalTravelingInfoListVO>>>(
    {
      url: `/reportFormsCenter/internationalTraveling/infoList`,
      method: 'get',
      params: queryParams
    }
  )
}
