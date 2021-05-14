/**
 * @desc 三方-国内报关-提交报关
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.ImportDeclareThirdCommitDTO
}

export function thirdCommit({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<number>>({
    url: `/api/declare/commit`,
    method: 'post',
    data: bodyParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function thirdCommitRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    bodyParams: restParamsData[0]
  }
  try {
    const res = await thirdCommit(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
