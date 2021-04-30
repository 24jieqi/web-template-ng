/**
 * @desc 获取鲸准网内嵌iFrame路径
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.IFrameInfoQueryVO
}

export function findList({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<string>>({
    url: `/sys/setting/get/iFrameUrl`,
    method: 'post',
    data: bodyParams
  })
}
