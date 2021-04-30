/**
 * @desc 商品规格类型下拉菜单(SKU动态筛选)
 */
import request from '@/utils/request'
export class IQueryParams {
  /** 商品SPU ID */
  spuId: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function listOptions({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.SpecSelectOptionVO>>>({
    url: `/business/product/spec/list/options`,
    method: 'get',
    params: queryParams
  })
}
