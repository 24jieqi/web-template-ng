// 商品明细数据 接口文件
import * as request from '@/utils/fetch'

/**
 * @description 商品明细数据 接口 URL 参数/GET
 */
export class Params {
  /** commodityId */
  commodityId: number
}

/**
 * @description 商品明细数据 接口参数
 */
export type GetCommodityByIdParams = Params

/**
 * @description 商品明细数据 接口
 */
export const getCommodityById = (
  params: GetCommodityByIdParams,
  headers?: any
) => {
  return request.request<defs.ApiResult<defs.CommodityDetailVo>>({
    ...request.buildOptions(
      '/api/commodity/v1/commodity/{commodityId}',
      params,
      'GET'
    ),
    headers
  })
}

/**
 * @description 商品明细数据 hooks
 */
export const useGetCommodityById = (
  params: GetCommodityByIdParams,
  headers?: any
) => {}
