/**
 * @desc 柜次规则管理-分页列表查询
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.ProductRuleListDTO
}

export function queryPageList({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.IPage<defs.ProductRuleListVO>>>({
    url: `/business/product/rule/list`,
    method: 'post',
    data: bodyParams
  })
}
