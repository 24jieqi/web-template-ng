type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value
}

declare namespace defs {
  export class ApiResult<T0 = any> {
    /** data */
    data?: T0

    /** errCode */
    errCode?: number

    /** errMsg */
    errMsg?: string
  }

  export class CommodityDetailVo {
    /** 平台分类id */
    categoryId?: number

    /** 平台分类名称 */
    categoryName?: string

    /** 商品描述 */
    commodityDesc?: string

    /** 商品ID */
    commodityId?: number

    /** 商品名称 */
    commodityName?: string

    /** 商品规格 */
    commoditySpecsVOS?: Array<defs.CommoditySpecsVO>

    /** 商品分类id */
    commodityTypeId?: number

    /** 商品分类名称 */
    commodityTypeName?: string

    /** 商品类型（大分类id） */
    parentCommodityTypeId?: number

    /** 商品类型名称（大分类名称） */
    parentCommodityTypeName?: string
  }

  export class CommoditySpecsVO {
    /** 商品规格ID */
    commoditySpecsId?: number

    /** 商品规格名称 */
    commoditySpecsName?: string
  }

  export class CommodityTypeVO {
    /** 类型排序 */
    commoditySort?: number

    /** 商品类型ID */
    commodityTypeId?: number

    /** 商品类型名称 */
    commodityTypeName?: string
  }

  export class CommodityVO {
    /** 商品ID */
    commodityId?: number

    /** 商品名称 */
    commodityName?: string

    /** 商品类型 */
    commodityTypeId?: number
  }

  export class DefaultPageResult<T0 = any> {
    /** pageCurrent */
    pageCurrent?: number

    /** pageSize */
    pageSize?: number

    /** records */
    records?: Array<T0>

    /** totalRecords */
    totalRecords?: number
  }

  export class Option<T0 = any, T1 = any> {
    /** label */
    label?: string

    /** selected */
    selected?: boolean

    /** value */
    value?: number
  }

  export class SaveCommodityVO {
    /** 平台分类（果品类必传） */
    categoryId?: number

    /** 商品描述 */
    commodityDesc?: string

    /** 商品ID，修改必须传入 */
    commodityId?: number

    /** 商品名称 */
    commodityName?: string

    /** 商品规格 */
    commoditySpecsVOS?: Array<defs.CommoditySpecsVO>

    /** 商品类型ID */
    commodityTypeId?: number

    /** 菜单key */
    menuKey?: string
  }

  export class UpdateSortCommodityTypeVO {
    /** 类型排序 */
    commoditySort?: number

    /** 商品类型ID */
    commodityTypeId?: number
  }
}

declare namespace API {
  /**
   * 商品管理
   */
  export namespace commodity {
    /**
     * 添加商品
     * /api/commodity/v1/commodity/add
     */
    export namespace saveCommodity {
      export class Params {}

      export type Response = defs.ApiResult<defs.CommodityVO>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.SaveCommodityVO
      ): Promise<defs.ApiResult<defs.CommodityVO>>
    }

    /**
     * 删除商品
     * /api/commodity/v1/commodity/delete/{commodityId}
     */
    export namespace deleteCommodity {
      export class Params {
        /** commodityId */
        commodityId: number
      }

      export type Response = defs.ApiResult<boolean>
      export const init: Response
      export function request(params: Params): Promise<defs.ApiResult<boolean>>
    }

    /**
     * 果品/辅料列表查询
     * /api/commodity/v1/commodity/list/query
     */
    export namespace getCommodityListByQuery {
      export class Params {
        /** 关键字 */
        keyWord: string
        /** offset */
        offset?: number
        /** pageCurrent */
        pageCurrent?: number
        /** pageSize */
        pageSize?: number
        /** sortBys */
        sortBys?: Array<string>
      }

      export type Response = defs.ApiResult<
        defs.DefaultPageResult<defs.CommodityVO>
      >
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.ApiResult<defs.DefaultPageResult<defs.CommodityVO>>>
    }

    /**
     * 根据分类获取商品列表
     * /api/commodity/v1/commodity/list/{commodityTypeId}
     */
    export namespace getPageByCommodityTypeId {
      export class Params {
        /** commodityTypeId */
        commodityTypeId: number
      }

      export type Response = defs.ApiResult<Array<defs.CommodityVO>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.ApiResult<Array<defs.CommodityVO>>>
    }

    /**
     * 根据商品id获取商品产地列表
     * /api/commodity/v1/commodity/placeorigin/{commodityId}
     */
    export namespace getPlaceOriginListByCommodityId {
      export class Params {
        /** commodityId */
        commodityId: number
      }

      export type Response = defs.ApiResult<Array<defs.Option<string, number>>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.ApiResult<Array<defs.Option<string, number>>>>
    }

    /**
     * 根据商品id获取商品规格列表
     * /api/commodity/v1/commodity/spec/{commodityId}
     */
    export namespace getCommoditySpecsByCommodityId {
      export class Params {
        /** commodityId */
        commodityId: number
      }

      export type Response = defs.ApiResult<Array<defs.CommoditySpecsVO>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.ApiResult<Array<defs.CommoditySpecsVO>>>
    }

    /**
     * 修改商品
     * /api/commodity/v1/commodity/update
     */
    export namespace updateCommodity {
      export class Params {}

      export type Response = defs.ApiResult<defs.CommodityVO>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.SaveCommodityVO
      ): Promise<defs.ApiResult<defs.CommodityVO>>
    }

    /**
     * 根据商品id获取商品品种列表
     * /api/commodity/v1/commodity/variety/{commodityId}
     */
    export namespace getVarietyListByCommodityId {
      export class Params {
        /** commodityId */
        commodityId: number
      }

      export type Response = defs.ApiResult<Array<defs.Option<string, number>>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.ApiResult<Array<defs.Option<string, number>>>>
    }

    /**
     * 商品明细数据
     * /api/commodity/v1/commodity/{commodityId}
     */
    export namespace getCommodityById {
      export class Params {
        /** commodityId */
        commodityId: number
      }

      export type Response = defs.ApiResult<defs.CommodityDetailVo>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.ApiResult<defs.CommodityDetailVo>>
    }
  }

  /**
   * 商品品类
   */
  export namespace commodityCategory {
    /**
     * 平台分类列表选项
     * /api/commodity/v1/category/list/option
     */
    export namespace getCommodityCategoryOptions {
      export class Params {
        /** selectd */
        selectd?: number
      }

      export type Response = defs.ApiResult<Array<defs.Option<string, number>>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.ApiResult<Array<defs.Option<string, number>>>>
    }
  }

  /**
   * 出库商品列表
   */
  export namespace commodityOut {
    /**
     * 根据分类获取库存商品列表
     * /api/commodity/v1/commodity/out/list/{commodityTypeId}
     */
    export namespace getPageByCommodityTypeId {
      export class Params {
        /** commodityTypeId */
        commodityTypeId: number
      }

      export type Response = defs.ApiResult<Array<defs.CommodityVO>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.ApiResult<Array<defs.CommodityVO>>>
    }
  }

  /**
   * 商品分类
   */
  export namespace commodityType {
    /**
     * 添加商品分类
     * /api/commodity/v1/type/add
     */
    export namespace saveCommodityType {
      export class Params {
        /** 分类名称 */
        commodityTypeName: string
        /** 菜单key */
        menuKey: string
      }

      export type Response = defs.ApiResult<defs.CommodityTypeVO>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.ApiResult<defs.CommodityTypeVO>>
    }

    /**
     * 删除商品分类
     * /api/commodity/v1/type/delete/{id}
     */
    export namespace deleteCommodityType {
      export class Params {
        /** id */
        id: number
      }

      export type Response = defs.ApiResult<boolean>
      export const init: Response
      export function request(params: Params): Promise<defs.ApiResult<boolean>>
    }

    /**
     * 商品分类列表
     * /api/commodity/v1/type/list
     */
    export namespace getCommodityTypeList {
      export class Params {
        /** menuKey */
        menuKey: string
      }

      export type Response = defs.ApiResult<Array<defs.CommodityTypeVO>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.ApiResult<Array<defs.CommodityTypeVO>>>
    }

    /**
     * 商品分类列表选项
     * /api/commodity/v1/type/list/option
     */
    export namespace getCommodityTypeOptions {
      export class Params {
        /** menuKey */
        menuKey: string
        /** selected */
        selected?: number
      }

      export type Response = defs.ApiResult<Array<defs.Option<string, number>>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.ApiResult<Array<defs.Option<string, number>>>>
    }

    /**
     * 修改商品分类
     * /api/commodity/v1/type/update
     */
    export namespace updateCommodityType {
      export class Params {
        /** 类型排序 */
        commoditySort?: number
        /** 商品类型ID */
        commodityTypeId: number
        /** 商品类型名称 */
        commodityTypeName?: string
      }

      export type Response = defs.ApiResult<defs.CommodityTypeVO>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.ApiResult<defs.CommodityTypeVO>>
    }

    /**
     * 修改商品分类排序
     * /api/commodity/v1/type/update/sort
     */
    export namespace updateCommodityTypeSort {
      export class Params {}

      export type Response = defs.ApiResult<boolean>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: Array<defs.UpdateSortCommodityTypeVO>
      ): Promise<defs.ApiResult<boolean>>
    }

    /**
     * 根据id获取商品分类
     * /api/commodity/v1/type/{id}
     */
    export namespace getCommodityTypeById {
      export class Params {
        /** id */
        id: number
      }

      export type Response = defs.ApiResult<defs.CommodityTypeVO>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.ApiResult<defs.CommodityTypeVO>>
    }
  }
}
