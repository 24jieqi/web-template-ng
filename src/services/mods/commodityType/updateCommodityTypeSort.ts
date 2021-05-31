// 修改商品分类排序 接口文件
// import { useQuery } from 'react-query'
import * as request from '@/utils/fetch'

/**
 * @description 修改商品分类排序 接口 URL 参数/GET
 */
export class Params {}

/**
 * @description 修改商品分类排序 接口参数
 */
export type UpdateCommodityTypeSortParams = Params &
  Array<defs.UpdateSortCommodityTypeVO>

/**
 * @description 修改商品分类排序 接口
 */
export const updateCommodityTypeSort = (
  params: UpdateCommodityTypeSortParams,
  headers?: any
) => {
  return request.request<defs.ApiResult<boolean>>({
    ...request.buildOptions(
      '/api/commodity/v1/type/update/sort',
      params,
      'PUT'
    ),
    headers
  })
}

/**
 * @description 修改商品分类排序 hooks 默认的 key
 */
export const USE_UPDATE_COMMODITY_TYPE_SORT_KEY =
  '/api/commodity/v1/type/update/sort_PUT'

// export const updateCommodityTypeSortQuery = ({ queryKey }: {queryKey:any[]}) => {
//   const [,params] = queryKey;
//   return updateCommodityTypeSort(params);
// }

// /**
//  * @description 修改商品分类排序 hooks
//  */
// export const useUpdateCommodityTypeSort = (params: UpdateCommodityTypeSortParams, headers?:any, key = 'USE_UPDATE_COMMODITY_TYPE_SORT_KEY') => {
//   // 修正数据
//   if(typeof headers === 'string') {
//     key = headers;
//     headers = null;
//   }

//   return useQuery({
//     queryKey: [key, params],
//     queryFn: () => updateCommodityTypeSort(params, headers),
//   })
// }
