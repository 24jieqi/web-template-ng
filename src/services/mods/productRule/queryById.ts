/**
 * @desc 商品信息-查询详情
 */
import request from '@/utils/request'
export class IQueryParams {
  /** id */
  id: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function queryById({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.ProductRuleVO>>({
    url: `/business/product/rule/info`,
    method: 'get',
    params: queryParams
  })
}
