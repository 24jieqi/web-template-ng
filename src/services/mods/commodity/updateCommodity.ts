// 修改商品 接口文件
import * as request from '@/utils/fetch'

/**
 * @description 修改商品 接口 URL 参数/GET
 */
export class Params {}

/**
 * @description 修改商品 接口参数
 */
export type UpdateCommodityParams = Params & defs.SaveCommodityVO

/**
 * @description 修改商品 接口
 */
export const updateCommodity = (
  params: UpdateCommodityParams,
  headers?: any
) => {
  return request.request<defs.ApiResult<defs.CommodityVO>>({
    ...request.buildOptions(
      '/api/commodity/v1/commodity/update',
      params,
      'PUT'
    ),
    headers
  })
}

/**
 * @description 修改商品 hooks
 */
export const useUpdateCommodity = (
  params: UpdateCommodityParams,
  headers?: any
) => {}
