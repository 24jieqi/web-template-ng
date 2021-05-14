/**
     * @desc 职务表-分页列表查询
职务表-分页列表查询
     */
import request from '@/utils/request'
export class IQueryParams {
  /** 职务编码 */
  code?: string
  /** 公司id */
  companyId?: string
  /** 创建人 */
  createBy?: string
  /** 创建时间 */
  createTime?: string
  /** id */
  id?: number
  /** 职务名称 */
  name?: string
  /** pageNo */
  pageNo?: number
  /** pageSize */
  pageSize?: number
  /** 职级 */
  postRank?: string
  /** 组织机构编码 */
  sysOrgCode?: string
  /** 修改人 */
  updateBy?: string
  /** 修改时间 */
  updateTime?: string
}

export interface IParams {
  queryParams: IQueryParams
}

export function queryPageList({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.IPage<defs.SysPosition>>>({
    url: `/sys/position/list`,
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
