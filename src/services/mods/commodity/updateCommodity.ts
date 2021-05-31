// 修改商品 接口文件
// import { useQuery } from 'react-query'
import * as request from '@/utils/fetch'

/**
 * @description 修改商品 接口 URL 参数/GET
 */
export class Params {}

/**
 * @description 修改商品 接口参数
 */
export type UpdateCommodityParams = Params & defs.SaveCommodityVO

/**
 * @description 修改商品 接口
 */
export const updateCommodity = (
  params: UpdateCommodityParams,
  headers?: any
) => {
  return request.request<defs.ApiResult<defs.CommodityVO>>({
    ...request.buildOptions(
      '/api/commodity/v1/commodity/update',
      params,
      'PUT'
    ),
    headers
  })
}

/**
 * @description 修改商品 hooks 默认的 key
 */
export const USE_UPDATE_COMMODITY_KEY = '/api/commodity/v1/commodity/update_PUT'

// export const updateCommodityQuery = ({ queryKey }: {queryKey:any[]}) => {
//   const [,params] = queryKey;
//   return updateCommodity(params);
// }

// /**
//  * @description 修改商品 hooks
//  */
// export const useUpdateCommodity = (params: UpdateCommodityParams, headers?:any, key = 'USE_UPDATE_COMMODITY_KEY') => {
//   // 修正数据
//   if(typeof headers === 'string') {
//     key = headers;
//     headers = null;
//   }

//   return useQuery({
//     queryKey: [key, params],
//     queryFn: () => updateCommodity(params, headers),
//   })
// }
