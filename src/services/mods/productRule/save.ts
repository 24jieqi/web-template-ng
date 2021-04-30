/**
 * @desc 柜次规则-保存
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.ProductRuleSaveDTO
}

export function save({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<string>>({
    url: `/business/product/rule/save`,
    method: 'post',
    data: bodyParams
  })
}
