/**
 * @desc 编辑(包括新增删除)规格类型和规格选项值
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.ProductSpuSpecSaveDTO
}

export function saveSpecs({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<string>>({
    url: `/business/product/spec/save/spec`,
    method: 'post',
    data: bodyParams
  })
}
