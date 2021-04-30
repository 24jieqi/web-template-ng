/**
 * @desc 柜次规则-校验名称 编辑时需要传主键ID
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.ProductRuleCheckDTO
}

export function checkName({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<string>>({
    url: `/business/product/rule/checkName`,
    method: 'post',
    data: bodyParams
  })
}
