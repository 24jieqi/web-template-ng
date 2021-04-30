/**
 * @desc 产地物流提货信息提货接口
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.PickGoodsAddDTO
}

export function add({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<void>>({
    url: `/business/pickGoodsInfo/add`,
    method: 'post',
    data: bodyParams
  })
}
