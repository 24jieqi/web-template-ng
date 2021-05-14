/**
 * @desc 资源信息删除
 */
import request from '@/utils/request'
export class IQueryParams {
  /** 资源ID */
  id: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function editDel({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<string>>({
    url: `/client/management/edit/del`,
    method: 'get',
    params: queryParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function editDelRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await editDel(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
