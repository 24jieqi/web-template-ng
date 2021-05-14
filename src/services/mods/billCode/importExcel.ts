/**
 * @desc 销售单号-模板上传
 */
import request from '@/utils/request'
export class IQueryParams {
  /** fileId */
  fileId?: string
  /** fileUrl */
  fileUrl?: string
  /** filename */
  filename?: string
}

export interface IParams {
  queryParams: IQueryParams
}

export function importExcel({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<string>>({
    url: `/finance/billCode/upload`,
    method: 'post',
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
