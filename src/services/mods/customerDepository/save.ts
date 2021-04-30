/**
 * @desc 客户仓库--保存
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.CustomerDepositorySaveDTO
}

export function save({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<string>>({
    url: `/business/customer/depository/save`,
    method: 'post',
    data: bodyParams
  })
}
