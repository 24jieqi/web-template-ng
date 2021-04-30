/**
 * @desc 商品数据迁移代码执行
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {}

export function initGoods({}: IParams = {} as IParams) {
  return request<any>({
    url: `/sys/setting/initGoods`,
    method: 'get'
  })
}
