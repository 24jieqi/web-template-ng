// 商品分类列表  接口文件
import * as request from '@/utils/fetch'

/**
 * @description 商品分类列表  接口 URL 参数/GET
 */
export class Params {
  /** menuKey */
  menuKey: string
}

/**
 * @description 商品分类列表  接口参数
 */
export type GetCommodityTypeListParams = Params

/**
 * @description 商品分类列表  接口
 */
export const getCommodityTypeList = (
  params: GetCommodityTypeListParams,
  headers?: any
) => {
  return request.request<defs.ApiResult<Array<defs.CommodityTypeVO>>>({
    ...request.buildOptions('/api/commodity/v1/type/list', params, 'GET'),
    headers
  })
}

/**
 * @description 商品分类列表  hooks
 */
export const useGetCommodityTypeList = (
  params: GetCommodityTypeListParams,
  headers?: any
) => {}
