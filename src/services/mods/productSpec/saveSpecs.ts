/**
 * @desc 编辑(包括新增删除)规格类型和规格选项值
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.ProductSpuSpecSaveDTO
}

export function saveSpecs({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<string>>({
    url: `/business/product/spec/save/spec`,
    method: 'post',
    data: bodyParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function saveSpecsRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    bodyParams: restParamsData[0]
  }
  try {
    const res = await saveSpecs(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
