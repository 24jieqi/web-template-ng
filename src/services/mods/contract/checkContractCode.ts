/**
 * @desc 合同-合同编号校验
 */
import request from '@/utils/request'
export class IQueryParams {
  /** 合同编号 */
  contractCode: string
  /** 合同ID(修改时候校验排除自己) */
  contractId?: number
  /** 商品品类ID */
  productId: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function checkContractCode({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<boolean>>({
    url: `/business/contract/check/contractCode`,
    method: 'get',
    params: queryParams
  })
}
