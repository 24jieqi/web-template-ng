/**
 * @desc 下拉选择列表
 */
import request from '@/utils/request'
export class IQueryParams {
  /** 是否查询已删除和已禁用的数据，0：查询全部；1：只查询生效的，默认查询全部 */
  isQueryDelete?: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function selectList({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.SelectOption>>>({
    url: `/business/product/select`,
    method: 'get',
    params: queryParams
  })
}
