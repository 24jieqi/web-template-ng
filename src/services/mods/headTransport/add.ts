/**
 * @desc 头程运输信息新增接口
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.HeadTransportAddDTO
}

export function add({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<void>>({
    url: `/business/head/transport/add`,
    method: 'post',
    data: bodyParams
  })
}
