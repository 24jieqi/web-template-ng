// 根据商品id获取商品品种列表 接口文件
import * as request from '@/utils/fetch'

/**
 * @description 根据商品id获取商品品种列表 接口 URL 参数/GET
 */
export class Params {
  /** commodityId */
  commodityId: number
}

/**
 * @description 根据商品id获取商品品种列表 接口参数
 */
export type GetVarietyListByCommodityIdParams = Params

/**
 * @description 根据商品id获取商品品种列表 接口
 */
export const getVarietyListByCommodityId = (
  params: GetVarietyListByCommodityIdParams,
  headers?: any
) => {
  return request.request<defs.ApiResult<Array<defs.Option<string, number>>>>({
    ...request.buildOptions(
      '/api/commodity/v1/commodity/variety/{commodityId}',
      params,
      'GET'
    ),
    headers
  })
}

/**
 * @description 根据商品id获取商品品种列表 hooks
 */
export const useGetVarietyListByCommodityId = (
  params: GetVarietyListByCommodityIdParams,
  headers?: any
) => {}
