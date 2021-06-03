// 根据商品id获取商品产地列表 接口文件
// import { useQuery } from 'react-query'
import * as request from '@/utils/fetch'

/**
 * @description 根据商品id获取商品产地列表 接口 URL 参数/GET
 */
export class Params {
  /** commodityId */
  commodityId: number
}

/**
 * @description 根据商品id获取商品产地列表 接口参数
 */
export type GetPlaceOriginListByCommodityIdParams = Params

/**
 * @description 根据商品id获取商品产地列表 接口
 */
export const getPlaceOriginListByCommodityId = (
  params: GetPlaceOriginListByCommodityIdParams,
  headers?: any
) => {
  return request.request<defs.ApiResult<Array<defs.Option<string, number>>>>({
    ...request.buildOptions(
      '/api/commodity/v1/commodity/placeorigin/{commodityId}',
      params,
      'GET'
    ),
    headers
  })
}

/**
 * @description 根据商品id获取商品产地列表 hooks 默认的 key
 */
export const USE_GET_PLACE_ORIGIN_LIST_BY_COMMODITY_ID_KEY =
  '/api/commodity/v1/commodity/placeorigin/{commodityId}_GET'

// export const getPlaceOriginListByCommodityIdQuery = ({ queryKey }: {queryKey:any[]}) => {
//   const [,params] = queryKey;
//   return getPlaceOriginListByCommodityId(params);
// }

// /**
//  * @description 根据商品id获取商品产地列表 hooks
//  */
// export const useGetPlaceOriginListByCommodityId = (params: GetPlaceOriginListByCommodityIdParams, headers?:any, key = 'USE_GET_PLACE_ORIGIN_LIST_BY_COMMODITY_ID_KEY') => {
//   // 修正数据
//   if(typeof headers === 'string') {
//     key = headers;
//     headers = null;
//   }

//   return useQuery({
//     queryKey: [key, params],
//     queryFn: () => getPlaceOriginListByCommodityId(params, headers),
//   })
// }
