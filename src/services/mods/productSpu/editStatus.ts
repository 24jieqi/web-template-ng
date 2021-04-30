/**
 * @desc 修改SPU可用状态
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.ProductSpuEditStatusDTO
}

export function editStatus({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<string>>({
    url: `/business/product/spu/edit/status`,
    method: 'post',
    data: bodyParams
  })
}
