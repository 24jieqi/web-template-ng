/**
 * @desc 产地下拉菜单
 */
import request from '@/utils/request'
export class IQueryParams {
  /** 产地父级ID,不传取顶级 */
  pid?: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function placeOptions({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.SelectCascaderOption>>>({
    url: `/business/product/spu/place/options`,
    method: 'get',
    params: queryParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function placeOptionsRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await placeOptions(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
