/**
     * @desc 填值规则-添加
填值规则-添加
     */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.SysFillRule
}

export function add({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<void>>({
    url: `/sys/fillRule/add`,
    method: 'post',
    data: bodyParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function addRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    bodyParams: restParamsData[0]
  }
  try {
    const res = await add(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
