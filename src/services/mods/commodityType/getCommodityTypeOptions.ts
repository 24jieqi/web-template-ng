// 商品分类列表选项 接口文件
import * as request from '@/utils/fetch'

/**
 * @description 商品分类列表选项 接口 URL 参数/GET
 */
export class Params {
  /** menuKey */
  menuKey: string
  /** selected */
  selected?: number
}

/**
 * @description 商品分类列表选项 接口参数
 */
export type GetCommodityTypeOptionsParams = Params

/**
 * @description 商品分类列表选项 接口
 */
export const getCommodityTypeOptions = (
  params: GetCommodityTypeOptionsParams,
  headers?: any
) => {
  return request.request<defs.ApiResult<Array<defs.Option<string, number>>>>({
    ...request.buildOptions(
      '/api/commodity/v1/type/list/option',
      params,
      'GET'
    ),
    headers
  })
}

/**
 * @description 商品分类列表选项 hooks
 */
export const useGetCommodityTypeOptions = (
  params: GetCommodityTypeOptionsParams,
  headers?: any
) => {}
