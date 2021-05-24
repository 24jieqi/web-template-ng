// 平台分类列表选项 接口文件
import * as request from '@/utils/fetch'

/**
 * @description 平台分类列表选项 接口 URL 参数/GET
 */
export class Params {
  /** selectd */
  selectd?: number
}

/**
 * @description 平台分类列表选项 接口参数
 */
export type GetCommodityCategoryOptionsParams = Params

/**
 * @description 平台分类列表选项 接口
 */
export const getCommodityCategoryOptions = (
  params: GetCommodityCategoryOptionsParams,
  headers?: any
) => {
  return request.request<defs.ApiResult<Array<defs.Option<string, number>>>>({
    ...request.buildOptions(
      '/api/commodity/v1/category/list/option',
      params,
      'GET'
    ),
    headers
  })
}

/**
 * @description 平台分类列表选项 hooks
 */
export const useGetCommodityCategoryOptions = (
  params: GetCommodityCategoryOptionsParams,
  headers?: any
) => {}
