// 商品分类列表选项 接口文件
// import { useQuery } from 'react-query'
import * as request from '@/utils/fetch'

/**
 * @description 商品分类列表选项 接口 URL 参数/GET
 */
export class Params {
  /** menuKey */
  menuKey: string
  /** selected */
  selected?: number
}

/**
 * @description 商品分类列表选项 接口参数
 */
export type GetCommodityTypeOptionsParams = Params

/**
 * @description 商品分类列表选项 接口
 */
export const getCommodityTypeOptions = (
  params: GetCommodityTypeOptionsParams,
  headers?: any
) => {
  return request.request<defs.ApiResult<Array<defs.Option<string, number>>>>({
    ...request.buildOptions(
      '/api/commodity/v1/type/list/option',
      params,
      'GET'
    ),
    headers
  })
}

/**
 * @description 商品分类列表选项 hooks 默认的 key
 */
export const USE_GET_COMMODITY_TYPE_OPTIONS_KEY =
  '/api/commodity/v1/type/list/option_GET'

// export const getCommodityTypeOptionsQuery = ({ queryKey }: {queryKey:any[]}) => {
//   const [,params] = queryKey;
//   return getCommodityTypeOptions(params);
// }

// /**
//  * @description 商品分类列表选项 hooks
//  */
// export const useGetCommodityTypeOptions = (params: GetCommodityTypeOptionsParams, headers?:any, key = 'USE_GET_COMMODITY_TYPE_OPTIONS_KEY') => {
//   // 修正数据
//   if(typeof headers === 'string') {
//     key = headers;
//     headers = null;
//   }

//   return useQuery({
//     queryKey: [key, params],
//     queryFn: () => getCommodityTypeOptions(params, headers),
//   })
// }
