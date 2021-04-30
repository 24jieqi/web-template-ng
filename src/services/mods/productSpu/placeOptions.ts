/**
 * @desc 产地下拉菜单
 */
import request from '@/utils/request'
export class IQueryParams {
  /** 产地父级ID,不传取顶级 */
  pid?: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function placeOptions({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.SelectCascaderOption>>>({
    url: `/business/product/spu/place/options`,
    method: 'get',
    params: queryParams
  })
}
