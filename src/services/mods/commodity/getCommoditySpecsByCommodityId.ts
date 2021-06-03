// 根据商品id获取商品规格列表 接口文件
// import { useQuery } from 'react-query'
import * as request from '@/utils/fetch'

/**
 * @description 根据商品id获取商品规格列表 接口 URL 参数/GET
 */
export class Params {
  /** commodityId */
  commodityId: number
}

/**
 * @description 根据商品id获取商品规格列表 接口参数
 */
export type GetCommoditySpecsByCommodityIdParams = Params

/**
 * @description 根据商品id获取商品规格列表 接口
 */
export const getCommoditySpecsByCommodityId = (
  params: GetCommoditySpecsByCommodityIdParams,
  headers?: any
) => {
  return request.request<defs.ApiResult<Array<defs.CommoditySpecsVO>>>({
    ...request.buildOptions(
      '/api/commodity/v1/commodity/spec/{commodityId}',
      params,
      'GET'
    ),
    headers
  })
}

/**
 * @description 根据商品id获取商品规格列表 hooks 默认的 key
 */
export const USE_GET_COMMODITY_SPECS_BY_COMMODITY_ID_KEY =
  '/api/commodity/v1/commodity/spec/{commodityId}_GET'

// export const getCommoditySpecsByCommodityIdQuery = ({ queryKey }: {queryKey:any[]}) => {
//   const [,params] = queryKey;
//   return getCommoditySpecsByCommodityId(params);
// }

// /**
//  * @description 根据商品id获取商品规格列表 hooks
//  */
// export const useGetCommoditySpecsByCommodityId = (params: GetCommoditySpecsByCommodityIdParams, headers?:any, key = 'USE_GET_COMMODITY_SPECS_BY_COMMODITY_ID_KEY') => {
//   // 修正数据
//   if(typeof headers === 'string') {
//     key = headers;
//     headers = null;
//   }

//   return useQuery({
//     queryKey: [key, params],
//     queryFn: () => getCommoditySpecsByCommodityId(params, headers),
//   })
// }
