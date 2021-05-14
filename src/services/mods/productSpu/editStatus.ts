/**
 * @desc 修改SPU可用状态
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.ProductSpuEditStatusDTO
}

export function editStatus({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<string>>({
    url: `/business/product/spu/edit/status`,
    method: 'post',
    data: bodyParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function editStatusRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    bodyParams: restParamsData[0]
  }
  try {
    const res = await editStatus(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
