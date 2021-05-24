// 根据分类获取库存商品列表 接口文件
import * as request from '@/utils/fetch'

/**
 * @description 根据分类获取库存商品列表 接口 URL 参数/GET
 */
export class Params {
  /** commodityTypeId */
  commodityTypeId: number
}

/**
 * @description 根据分类获取库存商品列表 接口参数
 */
export type GetPageByCommodityTypeIdParams = Params

/**
 * @description 根据分类获取库存商品列表 接口
 */
export const getPageByCommodityTypeId = (
  params: GetPageByCommodityTypeIdParams,
  headers?: any
) => {
  return request.request<defs.ApiResult<Array<defs.CommodityVO>>>({
    ...request.buildOptions(
      '/api/commodity/v1/commodity/out/list/{commodityTypeId}',
      params,
      'GET'
    ),
    headers
  })
}

/**
 * @description 根据分类获取库存商品列表 hooks
 */
export const useGetPageByCommodityTypeId = (
  params: GetPageByCommodityTypeIdParams,
  headers?: any
) => {}
