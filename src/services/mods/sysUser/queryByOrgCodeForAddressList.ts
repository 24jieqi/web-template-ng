/**
 * @desc 根据 orgCode 查询用户，包括子部门下的用户
 */
import request from '@/utils/request'
export class IQueryParams {
  /** 是否同步工作流引擎（1同步0不同步） */
  activitiSync?: string
  /** 头像 */
  avatar?: string
  /** 生日 */
  birthday?: string
  /** 创建人 */
  createBy?: number
  /** 创建时间 */
  createTime?: string
  /** 删除状态（0：正常 1：已删除） */
  deleted?: number
  /** 电子邮件 */
  email?: string
  /** 主键 */
  id?: number
  /** 是否是管理员（1：是 2：否） */
  isAdmin?: number
  /** 用户名称 */
  nickname?: string
  /** orgCode */
  orgCode: string
  /** pageNo */
  pageNo?: number
  /** pageSize */
  pageSize?: number
  /** 密码 */
  password?: string
  /** 电话 */
  phone?: string
  /** 职务 */
  post?: string
  /** 真实姓名 */
  realname?: string
  /** MD5盐 */
  salt?: string
  /** 性别（1：男 2：女） */
  sex?: number
  /** 状态（1：正常 2：冻结） */
  status?: number
  /** superUser */
  superUser?: boolean
  /** 座机号 */
  telephone?: string
  /** 更新人 */
  updateBy?: number
  /** 更新时间 */
  updateTime?: string
  /** 登陆账号 */
  username?: string
  /** 工号。唯一值 */
  workNo?: string
}

export interface IParams {
  queryParams: IQueryParams
}

export function queryByOrgCodeForAddressList(
  { queryParams }: IParams = {} as IParams
) {
  return request<defs.Result<defs.IPage<defs.JSONObject>>>({
    url: `/sys/user/queryByOrgCodeForAddressList`,
    method: 'get',
    params: queryParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function queryByOrgCodeForAddressListRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await queryByOrgCodeForAddressList(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
