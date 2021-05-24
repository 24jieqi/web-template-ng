// 根据id获取商品分类 接口文件
import * as request from '@/utils/fetch'

/**
 * @description 根据id获取商品分类 接口 URL 参数/GET
 */
export class Params {
  /** id */
  id: number
}

/**
 * @description 根据id获取商品分类 接口参数
 */
export type GetCommodityTypeByIdParams = Params

/**
 * @description 根据id获取商品分类 接口
 */
export const getCommodityTypeById = (
  params: GetCommodityTypeByIdParams,
  headers?: any
) => {
  return request.request<defs.ApiResult<defs.CommodityTypeVO>>({
    ...request.buildOptions('/api/commodity/v1/type/{id}', params, 'GET'),
    headers
  })
}

/**
 * @description 根据id获取商品分类 hooks
 */
export const useGetCommodityTypeById = (
  params: GetCommodityTypeByIdParams,
  headers?: any
) => {}
