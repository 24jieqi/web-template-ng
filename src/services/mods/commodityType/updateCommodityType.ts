// 修改商品分类 接口文件
// import { useQuery } from 'react-query'
import * as request from '@/utils/fetch'

/**
 * @description 修改商品分类 接口 URL 参数/GET
 */
export class Params {
  /** 类型排序 */
  commoditySort?: number
  /** 商品类型ID */
  commodityTypeId: number
  /** 商品类型名称 */
  commodityTypeName?: string
}

/**
 * @description 修改商品分类 接口参数
 */
export type UpdateCommodityTypeParams = Params

/**
 * @description 修改商品分类 接口
 */
export const updateCommodityType = (
  params: UpdateCommodityTypeParams,
  headers?: any
) => {
  return request.request<defs.ApiResult<defs.CommodityTypeVO>>({
    ...request.buildOptions('/api/commodity/v1/type/update', params, 'PUT'),
    headers
  })
}

/**
 * @description 修改商品分类 hooks 默认的 key
 */
export const USE_UPDATE_COMMODITY_TYPE_KEY = '/api/commodity/v1/type/update_PUT'

// export const updateCommodityTypeQuery = ({ queryKey }: {queryKey:any[]}) => {
//   const [,params] = queryKey;
//   return updateCommodityType(params);
// }

// /**
//  * @description 修改商品分类 hooks
//  */
// export const useUpdateCommodityType = (params: UpdateCommodityTypeParams, headers?:any, key = 'USE_UPDATE_COMMODITY_TYPE_KEY') => {
//   // 修正数据
//   if(typeof headers === 'string') {
//     key = headers;
//     headers = null;
//   }

//   return useQuery({
//     queryKey: [key, params],
//     queryFn: () => updateCommodityType(params, headers),
//   })
// }
