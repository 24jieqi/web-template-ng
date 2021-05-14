/**
 * @desc 许可管理-编辑
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.ProductQuotaTotalEditRequest
}

export function edit({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<string>>({
    url: `/business/productQuotaTotal/edit`,
    method: 'post',
    data: bodyParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function editRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    bodyParams: restParamsData[0]
  }
  try {
    const res = await edit(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
