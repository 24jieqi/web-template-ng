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
