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
