/**
     * @desc 国际在途汇总-详情-分页列表查询
商品pid、产地id必传，默认分页1，10
     */
import request from '@/utils/request'
export class IQueryParams {
  /** 到港时间-结束（yyyy-MM-dd） */
  arrivalDateEnd?: string
  /** 到港时间-开始（yyyy-MM-dd） */
  arrivalDateStart?: string
  /** 进口港-精确查询 */
  arrivePortId?: number
  /** 柜次-模糊查询 */
  cabinetBatchCode?: string
  /** 柜号-模糊查询 */
  cabinetCode?: string
  /** 进口报关公司-精确查询 */
  declareCompanyId?: number
  /** 页码 */
  pageNo: number
  /** 每页条数 */
  pageSize: number
  /** 品类id-必传 */
  pid?: number
  /** 收货方-精确查询 */
  receiverId?: number
  /** 备注-模糊查询 */
  remark?: string
  /** SPU ID-模糊查询 */
  spuId?: number
  /** 状态-精确查询 */
  status?: string
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
