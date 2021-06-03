// 根据分类获取库存商品列表 接口文件
// import { useQuery } from 'react-query'
import * as request from '@/utils/fetch'

/**
 * @description 根据分类获取库存商品列表 接口 URL 参数/GET
 */
export class Params {
  /** commodityTypeId */
  commodityTypeId: number
}

/**
 * @description 根据分类获取库存商品列表 接口参数
 */
export type GetPageByCommodityTypeIdParams = Params

/**
 * @description 根据分类获取库存商品列表 接口
 */
export const getPageByCommodityTypeId = (
  params: GetPageByCommodityTypeIdParams,
  headers?: any
) => {
  return request.request<defs.ApiResult<Array<defs.CommodityVO>>>({
    ...request.buildOptions(
      '/api/commodity/v1/commodity/out/list/{commodityTypeId}',
      params,
      'GET'
    ),
    headers
  })
}

/**
 * @description 根据分类获取库存商品列表 hooks 默认的 key
 */
export const USE_GET_PAGE_BY_COMMODITY_TYPE_ID_KEY =
  '/api/commodity/v1/commodity/out/list/{commodityTypeId}_GET'

// export const getPageByCommodityTypeIdQuery = ({ queryKey }: {queryKey:any[]}) => {
//   const [,params] = queryKey;
//   return getPageByCommodityTypeId(params);
// }

// /**
//  * @description 根据分类获取库存商品列表 hooks
//  */
// export const useGetPageByCommodityTypeId = (params: GetPageByCommodityTypeIdParams, headers?:any, key = 'USE_GET_PAGE_BY_COMMODITY_TYPE_ID_KEY') => {
//   // 修正数据
//   if(typeof headers === 'string') {
//     key = headers;
//     headers = null;
//   }

//   return useQuery({
//     queryKey: [key, params],
//     queryFn: () => getPageByCommodityTypeId(params, headers),
//   })
// }
