// 修改商品分类排序 接口文件
import * as request from '@/utils/fetch'

/**
 * @description 修改商品分类排序 接口 URL 参数/GET
 */
export class Params {}

/**
 * @description 修改商品分类排序 接口参数
 */
export type UpdateCommodityTypeSortParams = Params &
  Array<defs.UpdateSortCommodityTypeVO>

/**
 * @description 修改商品分类排序 接口
 */
export const updateCommodityTypeSort = (
  params: UpdateCommodityTypeSortParams,
  headers?: any
) => {
  return request.request<defs.ApiResult<boolean>>({
    ...request.buildOptions(
      '/api/commodity/v1/type/update/sort',
      params,
      'PUT'
    ),
    headers
  })
}

/**
 * @description 修改商品分类排序 hooks
 */
export const useUpdateCommodityTypeSort = (
  params: UpdateCommodityTypeSortParams,
  headers?: any
) => {}
