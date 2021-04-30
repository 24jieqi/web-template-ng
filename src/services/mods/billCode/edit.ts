/**
 * @desc 销售单号-销售单号修改
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.BillCodeEditDTO
}

export function edit({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<string>>({
    url: `/finance/billCode/edit`,
    method: 'put',
    data: bodyParams
  })
}
