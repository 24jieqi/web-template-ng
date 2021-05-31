// 商品明细数据 接口文件
// import { useQuery } from 'react-query'
import * as request from '@/utils/fetch'

/**
 * @description 商品明细数据 接口 URL 参数/GET
 */
export class Params {
  /** commodityId */
  commodityId: number
}

/**
 * @description 商品明细数据 接口参数
 */
export type GetCommodityByIdParams = Params

/**
 * @description 商品明细数据 接口
 */
export const getCommodityById = (
  params: GetCommodityByIdParams,
  headers?: any
) => {
  return request.request<defs.ApiResult<defs.CommodityDetailVo>>({
    ...request.buildOptions(
      '/api/commodity/v1/commodity/{commodityId}',
      params,
      'GET'
    ),
    headers
  })
}

/**
 * @description 商品明细数据 hooks 默认的 key
 */
export const USE_GET_COMMODITY_BY_ID_KEY =
  '/api/commodity/v1/commodity/{commodityId}_GET'

// export const getCommodityByIdQuery = ({ queryKey }: {queryKey:any[]}) => {
//   const [,params] = queryKey;
//   return getCommodityById(params);
// }

// /**
//  * @description 商品明细数据 hooks
//  */
// export const useGetCommodityById = (params: GetCommodityByIdParams, headers?:any, key = 'USE_GET_COMMODITY_BY_ID_KEY') => {
//   // 修正数据
//   if(typeof headers === 'string') {
//     key = headers;
//     headers = null;
//   }

//   return useQuery({
//     queryKey: [key, params],
//     queryFn: () => getCommodityById(params, headers),
//   })
// }
