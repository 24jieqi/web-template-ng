/**
 * @desc 获取鲸准网内嵌iFrame路径
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.IFrameInfoQueryVO
}

export function findList({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<string>>({
    url: `/sys/setting/get/iFrameUrl`,
    method: 'post',
    data: bodyParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function findListRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    bodyParams: restParamsData[0]
  }
  try {
    const res = await findList(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
