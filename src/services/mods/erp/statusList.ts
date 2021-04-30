/**
 * @desc 获取计划状态变更列表
 */
import request from '@/utils/request'
export class IQueryParams {
  /** billCode */
  billCode: string
}

export interface IParams {
  queryParams: IQueryParams
}

export function statusList({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.OperateLog>>>({
    url: `/business/erp/statusList`,
    method: 'get',
    params: queryParams
  })
}
