/**
 * @desc 三方-上传文件
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {}

export function upload({}: IParams = {} as IParams) {
  return request<defs.Result<defs.FileVO>>({
    url: `/api/file/upload`,
    method: 'post'
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function uploadRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {}
  try {
    const res = await upload(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
