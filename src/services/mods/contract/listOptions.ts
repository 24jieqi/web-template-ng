/**
 * @desc 合同信息下拉菜单
 */
import request from '@/utils/request'
export class IQueryParams {
  /** 商品品类ID */
  productId: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function listOptions({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.ContractTextOptionVO>>>({
    url: `/business/contract/list/contract`,
    method: 'get',
    params: queryParams
  })
}
