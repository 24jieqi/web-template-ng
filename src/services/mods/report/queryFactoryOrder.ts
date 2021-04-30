/**
 * @desc 工厂排名
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {}

export function queryFactoryOrder({}: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.FactoryOrder>>>({
    url: `/business/report/queryFactoryOrder`,
    method: 'get'
  })
}
