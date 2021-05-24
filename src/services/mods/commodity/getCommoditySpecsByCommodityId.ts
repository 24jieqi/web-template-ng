// 根据商品id获取商品规格列表 接口文件
import * as request from '@/utils/fetch'

/**
 * @description 根据商品id获取商品规格列表 接口 URL 参数/GET
 */
export class Params {
  /** commodityId */
  commodityId: number
}

/**
 * @description 根据商品id获取商品规格列表 接口参数
 */
export type GetCommoditySpecsByCommodityIdParams = Params

/**
 * @description 根据商品id获取商品规格列表 接口
 */
export const getCommoditySpecsByCommodityId = (
  params: GetCommoditySpecsByCommodityIdParams,
  headers?: any
) => {
  return request.request<defs.ApiResult<Array<defs.CommoditySpecsVO>>>({
    ...request.buildOptions(
      '/api/commodity/v1/commodity/spec/{commodityId}',
      params,
      'GET'
    ),
    headers
  })
}

/**
 * @description 根据商品id获取商品规格列表 hooks
 */
export const useGetCommoditySpecsByCommodityId = (
  params: GetCommoditySpecsByCommodityIdParams,
  headers?: any
) => {}
