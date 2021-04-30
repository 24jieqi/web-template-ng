/**
 * @desc 合同-分页列表查询
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.ContractPageQueryDTO
}

export function queryPageList({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.IPage<defs.ContractPageListVO>>>({
    url: `/business/contract/page`,
    method: 'post',
    data: bodyParams
  })
}
