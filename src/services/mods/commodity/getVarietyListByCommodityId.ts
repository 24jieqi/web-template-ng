// 根据商品id获取商品品种列表 接口文件
// import { useQuery } from 'react-query'
import * as request from '@/utils/fetch'

/**
 * @description 根据商品id获取商品品种列表 接口 URL 参数/GET
 */
export class Params {
  /** commodityId */
  commodityId: number
}

/**
 * @description 根据商品id获取商品品种列表 接口参数
 */
export type GetVarietyListByCommodityIdParams = Params

/**
 * @description 根据商品id获取商品品种列表 接口
 */
export const getVarietyListByCommodityId = (
  params: GetVarietyListByCommodityIdParams,
  headers?: any
) => {
  return request.request<defs.ApiResult<Array<defs.Option<string, number>>>>({
    ...request.buildOptions(
      '/api/commodity/v1/commodity/variety/{commodityId}',
      params,
      'GET'
    ),
    headers
  })
}

/**
 * @description 根据商品id获取商品品种列表 hooks 默认的 key
 */
export const USE_GET_VARIETY_LIST_BY_COMMODITY_ID_KEY =
  '/api/commodity/v1/commodity/variety/{commodityId}_GET'

// export const getVarietyListByCommodityIdQuery = ({ queryKey }: {queryKey:any[]}) => {
//   const [,params] = queryKey;
//   return getVarietyListByCommodityId(params);
// }

// /**
//  * @description 根据商品id获取商品品种列表 hooks
//  */
// export const useGetVarietyListByCommodityId = (params: GetVarietyListByCommodityIdParams, headers?:any, key = 'USE_GET_VARIETY_LIST_BY_COMMODITY_ID_KEY') => {
//   // 修正数据
//   if(typeof headers === 'string') {
//     key = headers;
//     headers = null;
//   }

//   return useQuery({
//     queryKey: [key, params],
//     queryFn: () => getVarietyListByCommodityId(params, headers),
//   })
// }
