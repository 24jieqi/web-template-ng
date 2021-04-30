/**
 * @desc EDI推送更新接口
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: Array<defs.EDIUpdateInfoDTO>
}

export function ediUpdate({ bodyParams }: IParams = {} as IParams) {
  return request<any>({
    url: `/modules/deliveryPlan/ediUpdate`,
    method: 'post',
    data: bodyParams
  })
}
