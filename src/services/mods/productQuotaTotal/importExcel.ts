/**
 * @desc 许可管理-查询口岸
 */
import request from '@/utils/request'
export class IQueryParams {
  /** productId */
  productId: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function importExcel({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.SelectOption>>>({
    url: `/business/productQuotaTotal/entryPort`,
    method: 'get',
    params: queryParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function importExcelRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await importExcel(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
