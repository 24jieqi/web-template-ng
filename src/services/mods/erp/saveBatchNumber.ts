/**
 * @desc 保存国内发货信息
 */
import request from '@/utils/request'
export class IQueryParams {
  /** batchNumber */
  batchNumber: string
  /** billCode */
  billCode: string
  /** sign */
  sign: string
  /** timestamp */
  timestamp: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function saveBatchNumber({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<string>>({
    url: `/business/erp/saveBatchNumber`,
    method: 'post',
    params: queryParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function saveBatchNumberRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await saveBatchNumber(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
