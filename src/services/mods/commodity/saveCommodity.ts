// 添加商品 接口文件
// import { useQuery } from 'react-query'
import * as request from '@/utils/fetch'

/**
 * @description 添加商品 接口 URL 参数/GET
 */
export class Params {}

/**
 * @description 添加商品 接口参数
 */
export type SaveCommodityParams = Params & defs.SaveCommodityVO

/**
 * @description 添加商品 接口
 */
export const saveCommodity = (params: SaveCommodityParams, headers?: any) => {
  return request.request<defs.ApiResult<defs.CommodityVO>>({
    ...request.buildOptions('/api/commodity/v1/commodity/add', params, 'POST'),
    headers
  })
}

/**
 * @description 添加商品 hooks 默认的 key
 */
export const USE_SAVE_COMMODITY_KEY = '/api/commodity/v1/commodity/add_POST'

// export const saveCommodityQuery = ({ queryKey }: {queryKey:any[]}) => {
//   const [,params] = queryKey;
//   return saveCommodity(params);
// }

// /**
//  * @description 添加商品 hooks
//  */
// export const useSaveCommodity = (params: SaveCommodityParams, headers?:any, key = 'USE_SAVE_COMMODITY_KEY') => {
//   // 修正数据
//   if(typeof headers === 'string') {
//     key = headers;
//     headers = null;
//   }

//   return useQuery({
//     queryKey: [key, params],
//     queryFn: () => saveCommodity(params, headers),
//   })
// }
