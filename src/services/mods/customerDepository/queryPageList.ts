/**
 * @desc 客户仓库-分页列表查询
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.CustomerDepositoryListDTO
}

export function queryPageList({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.IPage<defs.CustomerCompanyListVO>>>({
    url: `/business/customer/depository/list`,
    method: 'post',
    data: bodyParams
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
    bodyParams: restParamsData[0]
  }
  try {
    const res = await queryPageList(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
