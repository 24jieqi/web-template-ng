/**
 * @desc 国际发货明细-分页列表
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.BasePageRequest
}

export function getDetailList({ bodyParams }: IParams = {} as IParams) {
  return request<
    defs.Result<defs.IPage<defs.InternationalShipmentDetailListVO>>
  >({
    url: `/reportFormsCenter/internationalShip/list`,
    method: 'post',
    data: bodyParams
  })
}
