// 果品/辅料列表查询 接口文件
// import { useQuery } from 'react-query'
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
 * @description 果品/辅料列表查询 hooks 默认的 key
 */
export const USE_GET_COMMODITY_LIST_BY_QUERY_KEY =
  '/api/commodity/v1/commodity/list/query_GET'

// export const getCommodityListByQueryQuery = ({ queryKey }: {queryKey:any[]}) => {
//   const [,params] = queryKey;
//   return getCommodityListByQuery(params);
// }

// /**
//  * @description 果品/辅料列表查询 hooks
//  */
// export const useGetCommodityListByQuery = (params: GetCommodityListByQueryParams, headers?:any, key = 'USE_GET_COMMODITY_LIST_BY_QUERY_KEY') => {
//   // 修正数据
//   if(typeof headers === 'string') {
//     key = headers;
//     headers = null;
//   }

//   return useQuery({
//     queryKey: [key, params],
//     queryFn: () => getCommodityListByQuery(params, headers),
//   })
// }
