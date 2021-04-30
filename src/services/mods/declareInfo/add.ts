/**
 * @desc 确认订舱接口
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.DeclareInfoAddDTO
}

export function add({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<void>>({
    url: `/business/declareInfo/add`,
    method: 'post',
    data: bodyParams
  })
}
