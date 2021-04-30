/**
 * @desc 合同类型信息下拉菜单
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {}

export function listContractType({}: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.SelectOption>>>({
    url: `/business/contract/list/contractType`,
    method: 'get'
  })
}
