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
