/**
 * @desc 国际在途汇总-修改备注
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.InternationalTravelingEditDTO
}

export function edit({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<string>>({
    url: `/reportFormsCenter/internationalTraveling/edit`,
    method: 'put',
    data: bodyParams
  })
}
