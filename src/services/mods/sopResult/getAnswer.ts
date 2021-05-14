/**
 * @desc 质量管理SOP-查询sop问卷结果
 */
import request from '@/utils/request'
export class IQueryParams {
  /** 计划ID */
  id?: number
  /** 操作环节(1-国际装柜，2-堆场验货，3-转柜检验，4-销地收货，5-国内装柜) */
  operation?: number
  /** 收货方key，类型_id */
  receiverKey?: string
}

export interface IParams {
  queryParams: IQueryParams
}

export function getAnswer({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.SopResultAnswerVO>>({
    url: `/business/result/getAnswer`,
    method: 'get',
    params: queryParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function getAnswerRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await getAnswer(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
