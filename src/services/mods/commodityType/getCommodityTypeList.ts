// 商品分类列表  接口文件
// import { useQuery } from 'react-query'
import * as request from '@/utils/fetch'

/**
 * @description 商品分类列表  接口 URL 参数/GET
 */
export class Params {
  /** menuKey */
  menuKey: string
}

/**
 * @description 商品分类列表  接口参数
 */
export type GetCommodityTypeListParams = Params

/**
 * @description 商品分类列表  接口
 */
export const getCommodityTypeList = (
  params: GetCommodityTypeListParams,
  headers?: any
) => {
  return request.request<defs.ApiResult<Array<defs.CommodityTypeVO>>>({
    ...request.buildOptions('/api/commodity/v1/type/list', params, 'GET'),
    headers
  })
}

/**
 * @description 商品分类列表  hooks 默认的 key
 */
export const USE_GET_COMMODITY_TYPE_LIST_KEY = '/api/commodity/v1/type/list_GET'

// export const getCommodityTypeListQuery = ({ queryKey }: {queryKey:any[]}) => {
//   const [,params] = queryKey;
//   return getCommodityTypeList(params);
// }

// /**
//  * @description 商品分类列表  hooks
//  */
// export const useGetCommodityTypeList = (params: GetCommodityTypeListParams, headers?:any, key = 'USE_GET_COMMODITY_TYPE_LIST_KEY') => {
//   // 修正数据
//   if(typeof headers === 'string') {
//     key = headers;
//     headers = null;
//   }

//   return useQuery({
//     queryKey: [key, params],
//     queryFn: () => getCommodityTypeList(params, headers),
//   })
// }
