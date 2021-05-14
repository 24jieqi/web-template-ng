/**
 * @desc 分页列表查询
 */
import request from '@/utils/request'
export class IQueryParams {
  /** 创建人 */
  createBy?: number
  /** 创建时间 */
  createTime?: string
  /** 描述 */
  description?: string
  /** 主键 */
  id?: number
  /** 是否是管理员（1：是 2：否） */
  isAdmin?: number
  /** pageNo */
  pageNo?: number
  /** pageSize */
  pageSize?: number
  /** 角色名 */
  roleName?: string
  /** 状态（1：正常 99：禁用） */
  status?: number
  /** 更新人 */
  updateBy?: number
  /** 更新时间 */
  updateTime?: string
}

export interface IParams {
  queryParams: IQueryParams
}

export function queryPageList({ queryParams }: IParams = {} as IParams) {
  return request<defs.SysRole>({
    url: `/sys/role/list`,
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
