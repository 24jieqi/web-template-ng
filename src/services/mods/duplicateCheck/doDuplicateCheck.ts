/**
 * @desc 重复校验接口
 */
import request from '@/utils/request'
export class IQueryParams {
  /** 数据ID */
  dataId?: string
  /** 字段名 */
  fieldName?: string
  /** 字段值 */
  fieldVal?: string
  /** 表名 */
  tableName?: string
}

export interface IParams {
  queryParams: IQueryParams
}

export function doDuplicateCheck({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<void>>({
    url: `/sys/duplicate/check`,
    method: 'get',
    params: queryParams
  })
}
