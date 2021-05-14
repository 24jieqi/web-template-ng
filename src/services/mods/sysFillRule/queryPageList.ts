/**
     * @desc 填值规则-分页列表查询
填值规则-分页列表查询
     */
import request from '@/utils/request'
export class IQueryParams {
  /** 创建人 */
  createBy?: string
  /** 创建时间 */
  createTime?: string
  /** 主键ID */
  id?: string
  /** pageNo */
  pageNo?: number
  /** pageSize */
  pageSize?: number
  /** 规则实现类 */
  ruleClass?: string
  /** 规则Code */
  ruleCode?: string
  /** 规则名称 */
  ruleName?: string
  /** 规则参数 */
  ruleParams?: string
  /** 修改人 */
  updateBy?: string
  /** 修改时间 */
  updateTime?: string
}

export interface IParams {
  queryParams: IQueryParams
}

export function queryPageList({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.IPage<defs.SysFillRule>>>({
    url: `/sys/fillRule/list`,
    method: 'get',
    params: queryParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function queryPageListRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await queryPageList(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
