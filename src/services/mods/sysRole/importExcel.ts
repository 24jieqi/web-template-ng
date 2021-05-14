/**
 * @desc 通过excel导入数据
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {}

export function importExcel({}: IParams = {} as IParams) {
  return request<defs.Result>({
    url: `/sys/role/importExcel`,
    method: 'post'
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function importExcelRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {}
  try {
    const res = await importExcel(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
