// 添加商品分类 接口文件
import * as request from '@/utils/fetch'

/**
 * @description 添加商品分类 接口 URL 参数/GET
 */
export class Params {
  /** 分类名称 */
  commodityTypeName: string
  /** 菜单key */
  menuKey: string
}

/**
 * @description 添加商品分类 接口参数
 */
export type SaveCommodityTypeParams = Params

/**
 * @description 添加商品分类 接口
 */
export const saveCommodityType = (
  params: SaveCommodityTypeParams,
  headers?: any
) => {
  return request.request<defs.ApiResult<defs.CommodityTypeVO>>({
    ...request.buildOptions('/api/commodity/v1/type/add', params, 'POST'),
    headers
  })
}

/**
 * @description 添加商品分类 hooks
 */
export const useSaveCommodityType = (
  params: SaveCommodityTypeParams,
  headers?: any
) => {}
