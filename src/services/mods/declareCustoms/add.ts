/**
 * @desc 产地报关信息新增接口
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.DeclareCustomAddDTO
}

export function add({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<void>>({
    url: `/business/declareCustoms/add`,
    method: 'post',
    data: bodyParams
  })
}
