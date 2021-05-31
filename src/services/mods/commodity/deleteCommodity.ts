// 删除商品 接口文件
// import { useQuery } from 'react-query'
import * as request from '@/utils/fetch'

/**
 * @description 删除商品 接口 URL 参数/GET
 */
export class Params {
  /** commodityId */
  commodityId: number
}

/**
 * @description 删除商品 接口参数
 */
export type DeleteCommodityParams = Params

/**
 * @description 删除商品 接口
 */
export const deleteCommodity = (
  params: DeleteCommodityParams,
  headers?: any
) => {
  return request.request<defs.ApiResult<boolean>>({
    ...request.buildOptions(
      '/api/commodity/v1/commodity/delete/{commodityId}',
      params,
      'DELETE'
    ),
    headers
  })
}

/**
 * @description 删除商品 hooks 默认的 key
 */
export const USE_DELETE_COMMODITY_KEY =
  '/api/commodity/v1/commodity/delete/{commodityId}_DELETE'

// export const deleteCommodityQuery = ({ queryKey }: {queryKey:any[]}) => {
//   const [,params] = queryKey;
//   return deleteCommodity(params);
// }

// /**
//  * @description 删除商品 hooks
//  */
// export const useDeleteCommodity = (params: DeleteCommodityParams, headers?:any, key = 'USE_DELETE_COMMODITY_KEY') => {
//   // 修正数据
//   if(typeof headers === 'string') {
//     key = headers;
//     headers = null;
//   }

//   return useQuery({
//     queryKey: [key, params],
//     queryFn: () => deleteCommodity(params, headers),
//   })
// }
