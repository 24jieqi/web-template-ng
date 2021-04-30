/**
 * @desc 查询数据规则数据
 */
import request from '@/utils/request'
export class IQueryParams {
  /** permissionId */
  permissionId: number
  /** roleId */
  roleId: number
}

export interface IParams {}

export function loadDatarule(
  {}: IParams = {} as IParams,
  permissionId: string | number
) {
  return request<object>({
    url: `/sys/role/datarule/${permissionId}/{roleId}`,
    method: 'get'
  })
}
