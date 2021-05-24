// 根据商品id获取商品产地列表 接口文件
import * as request from '@/utils/fetch'

/**
 * @description 根据商品id获取商品产地列表 接口 URL 参数/GET
 */
export class Params {
  /** commodityId */
  commodityId: number
}

/**
 * @description 根据商品id获取商品产地列表 接口参数
 */
export type GetPlaceOriginListByCommodityIdParams = Params

/**
 * @description 根据商品id获取商品产地列表 接口
 */
export const getPlaceOriginListByCommodityId = (
  params: GetPlaceOriginListByCommodityIdParams,
  headers?: any
) => {
  return request.request<defs.ApiResult<Array<defs.Option<string, number>>>>({
    ...request.buildOptions(
      '/api/commodity/v1/commodity/placeorigin/{commodityId}',
      params,
      'GET'
    ),
    headers
  })
}

/**
 * @description 根据商品id获取商品产地列表 hooks
 */
export const useGetPlaceOriginListByCommodityId = (
  params: GetPlaceOriginListByCommodityIdParams,
  headers?: any
) => {}
