/**
 * @desc 商品信息-校验名称 编辑时需要传主键ID+名称
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.ProductCheckDTO
}

export function checkName({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<string>>({
    url: `/business/product/checkName`,
    method: 'post',
    data: bodyParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function checkNameRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    bodyParams: restParamsData[0]
  }
  try {
    const res = await checkName(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
