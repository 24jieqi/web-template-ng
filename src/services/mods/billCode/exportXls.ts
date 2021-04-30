/**
     * @desc 销售单号-模板下载
下载为xlsx文件
     */
import request from '@/utils/request'
export class IQueryParams {
  /** 需下载的主键数组 */
  ids?: Array<number>
  /** map */
  map?: any
}

export interface IParams {
  queryParams: IQueryParams
}

export function exportXls({ queryParams }: IParams = {} as IParams) {
  return request<any>({
    url: `/finance/billCode/download`,
    method: 'get',
    params: queryParams
  })
}
