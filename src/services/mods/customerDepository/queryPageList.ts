/**
 * @desc 客户仓库-分页列表查询
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.CustomerDepositoryListDTO
}

export function queryPageList({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.IPage<defs.CustomerCompanyListVO>>>({
    url: `/business/customer/depository/list`,
    method: 'post',
    data: bodyParams
  })
}
