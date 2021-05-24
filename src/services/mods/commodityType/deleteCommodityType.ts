// 删除商品分类 接口文件
import * as request from '@/utils/fetch'

/**
 * @description 删除商品分类 接口 URL 参数/GET
 */
export class Params {
  /** id */
  id: number
}

/**
 * @description 删除商品分类 接口参数
 */
export type DeleteCommodityTypeParams = Params

/**
 * @description 删除商品分类 接口
 */
export const deleteCommodityType = (
  params: DeleteCommodityTypeParams,
  headers?: any
) => {
  return request.request<defs.ApiResult<boolean>>({
    ...request.buildOptions(
      '/api/commodity/v1/type/delete/{id}',
      params,
      'DELETE'
    ),
    headers
  })
}

/**
 * @description 删除商品分类 hooks
 */
export const useDeleteCommodityType = (
  params: DeleteCommodityTypeParams,
  headers?: any
) => {}
