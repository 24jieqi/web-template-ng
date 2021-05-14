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
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function checkContractCodeRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await checkContractCode(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
