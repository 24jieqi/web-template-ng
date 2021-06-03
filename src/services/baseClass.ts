export class ApiResult {
  /** data */
  data = new CommodityDetailVo()

  /** errCode */
  errCode = undefined

  /** errMsg */
  errMsg = ''
}

export class CommodityDetailVo {
  /** 平台分类id */
  categoryId = undefined

  /** 平台分类名称 */
  categoryName = ''

  /** 商品描述 */
  commodityDesc = ''

  /** 商品ID */
  commodityId = undefined

  /** 商品名称 */
  commodityName = ''

  /** 商品规格 */
  commoditySpecsVOS = []

  /** 商品分类id */
  commodityTypeId = undefined

  /** 商品分类名称 */
  commodityTypeName = ''

  /** 商品类型（大分类id） */
  parentCommodityTypeId = undefined

  /** 商品类型名称（大分类名称） */
  parentCommodityTypeName = ''
}

export class CommoditySpecsVO {
  /** 商品规格ID */
  commoditySpecsId = undefined

  /** 商品规格名称 */
  commoditySpecsName = ''
}

export class CommodityTypeVO {
  /** 类型排序 */
  commoditySort = undefined

  /** 商品类型ID */
  commodityTypeId = undefined

  /** 商品类型名称 */
  commodityTypeName = ''
}

export class CommodityVO {
  /** 商品ID */
  commodityId = undefined

  /** 商品名称 */
  commodityName = ''

  /** 商品类型 */
  commodityTypeId = undefined
}

export class DefaultPageResult {
  /** pageCurrent */
  pageCurrent = undefined

  /** pageSize */
  pageSize = undefined

  /** records */
  records = []

  /** totalRecords */
  totalRecords = undefined
}

export class Option {
  /** label */
  label = ''

  /** selected */
  selected = false

  /** value */
  value = undefined
}

export class SaveCommodityVO {
  /** 平台分类（果品类必传） */
  categoryId = undefined

  /** 商品描述 */
  commodityDesc = ''

  /** 商品ID，修改必须传入 */
  commodityId = undefined

  /** 商品名称 */
  commodityName = ''

  /** 商品规格 */
  commoditySpecsVOS = []

  /** 商品类型ID */
  commodityTypeId = undefined

  /** 菜单key */
  menuKey = ''
}

export class UpdateSortCommodityTypeVO {
  /** 类型排序 */
  commoditySort = undefined

  /** 商品类型ID */
  commodityTypeId = undefined
}
