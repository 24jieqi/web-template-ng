/**
 * @desc 客户仓库--校验名称 编辑时需要传主键ID+名称
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.CustomerDepositoryCheckNameDTO
}

export function checkName({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<boolean>>({
    url: `/business/customer/depository/checkName`,
    method: 'post',
    data: bodyParams
  })
}
