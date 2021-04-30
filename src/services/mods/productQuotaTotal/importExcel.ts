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
