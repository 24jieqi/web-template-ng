// 果品/辅料列表查询 接口文件
import * as request from '@/utils/fetch'

/**
 * @description 果品/辅料列表查询 接口 URL 参数/GET
 */
export class Params {
  /** 关键字 */
  keyWord: string
  /** offset */
  offset?: number
  /** pageCurrent */
  pageCurrent?: number
  /** pageSize */
  pageSize?: number
  /** sortBys */
  sortBys?: Array<string>
}

/**
 * @description 果品/辅料列表查询 接口参数
 */
export type GetCommodityListByQueryParams = Params

/**
 * @description 果品/辅料列表查询 接口
 */
export const getCommodityListByQuery = (
  params: GetCommodityListByQueryParams,
  headers?: any
) => {
  return request.request<
    defs.ApiResult<defs.DefaultPageResult<defs.CommodityVO>>
  >({
    ...request.buildOptions(
      '/api/commodity/v1/commodity/list/query',
      params,
      'GET'
    ),
    headers
  })
}

/**
 * @description 果品/辅料列表查询 hooks
 */
export const useGetCommodityListByQuery = (
  params: GetCommodityListByQueryParams,
  headers?: any
) => {}