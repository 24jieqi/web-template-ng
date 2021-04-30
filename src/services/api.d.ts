type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value
}

declare namespace defs {
  export class AdminUpdatePwdDTO {
    /** 用户主键 */
    id?: number

    /** 新密码 */
    password?: string
  }

  export class BaseInfoVO {
    /** 基本信息-备注 */
    baseInfoRemark?: string

    /** 基本信息-物料批次号 */
    batchNumber?: string

    /** 基本信息-销售单号 */
    billCode?: string

    /** 基本信息-柜次 */
    cabinetBatchCode?: string

    /** 基本信息-分柜号 */
    cabinetBatchSubCode?: string

    /** 基本信息-柜号 */
    cabinetCode?: string

    /** 合同号 */
    contractCode?: string

    /** 基本信息-发运方式 */
    deliveryMethod?: number

    /** 基本信息-发运方式 */
    deliveryMethodDesc?: string

    /** 基本信息-ID */
    id?: number

    /** 基本信息-状态 */
    status?: string

    /** 基本信息-状态 */
    statusDesc?: string
  }

  export class BasePageRequest {
    /** 柜次(不超过12个字符 模糊查询) */
    cabinetBatchCode?: string

    /** 柜号 (不超过11个字符 模糊查询) */
    cabinetCode?: string

    /** 创建时间-结束 */
    createTimeEnd?: string

    /** 创建时间-开始 */
    createTimeStart?: string

    /** 发运方式 1_陆运 2_海运 3_铁运 */
    deliveryMethod?: 1 | 2 | 3 | 1 | 2 | 3

    /** 发货时间-结束 */
    deliveryTimeEnd?: string

    /** 发货时间-开始 */
    deliveryTimeStart?: string

    /** 页码 */
    pageNo: number

    /** 每页条数 */
    pageSize: number

    /** 进口港ID */
    portId?: number

    /** 商品品类ID */
    productId?: number

    /** 商品SPU ID */
    productSpuId?: number

    /** 收货时间-结束 */
    receivingTimeEnd?: string

    /** 收货时间-开始 */
    receivingTimeStart?: string

    /** 状态 查询全部时不传 */
    status?: string
  }

  export class BillCodeEditDTO {
    /** 销售单号 */
    billCode?: string

    /** 主键ID */
    id: number
  }

  export class BillCodeListVO {
    /** 销售单号 */
    billCode?: string

    /** 柜次 */
    cabinetBatchCode?: string

    /** 柜号 */
    cabinetCode?: string

    /** 主键 */
    id?: number

    /** 商品 */
    product?: string

    /** 发货方 */
    sender?: string

    /** 状态 */
    state?: string
  }

  export class BillCodeVO {
    /** 销售单号 */
    billCode?: string

    /** 柜次 */
    cabinetBatchCode?: string

    /** 柜号 */
    cabinetCode?: string

    /** 合同号 */
    contractCode?: string

    /** 主键 */
    id?: number
  }

  export class Column {
    /** 对齐方式,默认左对齐 */
    align?: 'LEFT' | 'RIGHT' | 'CENTER'

    /** 列字段 */
    filed?: string

    /** 列名 */
    name?: string
  }

  export class CompanyOrder {
    /** cabinetCount */
    cabinetCount?: number

    /** departName */
    departName?: string

    /** receiverId */
    receiverId?: number
  }

  export class ContractAddDTO {
    /** 合同号 */
    contractCode?: string

    /** 合同号名称 */
    contractName?: string

    /** 合同类型 1_外汇合同 */
    contractType?: number

    /** 合同货币符号 1_人民币, 2_美元 */
    currency?: 1 | 2 | 1 | 2

    /** 预计使用数量 */
    expectedNum?: number

    /** 合同名称国际化 */
    nameLocale?: ObjectMap<any, string>

    /** 合同所属商品品类ID */
    productId?: number

    /** 状态 1_可用 99_禁用 默认为可用 */
    status?: 1 | 99 | 1 | 99

    /** 合同金额 */
    totalAmount?: number

    /** 预警数量 */
    warningNum?: number
  }

  export class ContractDetailVO {
    /** 合同编码 */
    contractCode?: string

    /** 合同名称 */
    contractName?: string

    /** 合同所属商品品类 */
    contractProductName?: string

    /** 合同类型 1_外汇合同 */
    contractType?: number

    /** 合同类型描述 1_外汇合同 */
    contractTypeDesc?: string

    /** 创建时间 */
    createTime?: string

    /** 合同金额货币符号 */
    currency?: number

    /** 预计使用数量 */
    expectedNum?: number

    /** 合同ID */
    id?: number

    /** 合同名称 */
    nameLocale?: ObjectMap<any, string>

    /** 状态 */
    status?: number

    /** 剩余数量 */
    surplusNum?: number

    /** 合同总金额 */
    totalAmount?: number

    /** 已使用数量 */
    usedNum?: number

    /** 预警数量 */
    warningNum?: number
  }

  export class ContractEditDTO {
    /** 合同号 */
    contractCode?: string

    /** 合同号名称 */
    contractName?: string

    /** 合同类型 1_外汇合同 */
    contractType?: number

    /** 合同货币符号 1_人民币, 2_美元 */
    currency?: 1 | 2 | 1 | 2

    /** 预计使用数量 */
    expectedNum?: number

    /** 合同ID */
    id?: number

    /** 合同名称国际化 */
    nameLocale?: ObjectMap<any, string>

    /** 状态 1_可用 99_禁用 默认为可用 */
    status?: 1 | 99 | 1 | 99

    /** 合同金额 */
    totalAmount?: number

    /** 预警数量 */
    warningNum?: number
  }

  export class ContractEditStatusDTO {
    /** 合同ID */
    contractId: number

    /** 修改之后的状态 1_启用 99_禁用 */
    status: 1 | 99 | 1 | 99
  }

  export class ContractPageListVO {
    /** 合同编码 */
    contractCode?: string

    /** 合同名称 */
    contractName?: string

    /** 合同所属商品品类 */
    contractProductName?: string

    /** 合同类型 1_外汇合同 */
    contractType?: number

    /** 合同类型描述 1_外汇合同 */
    contractTypeDesc?: string

    /** 创建时间 */
    createTime?: string

    /** 合同金额货币符号 */
    currency?: number

    /** 预计使用数量 */
    expectedNum?: number

    /** 合同ID */
    id?: number

    /** 状态 */
    status?: number

    /** 剩余数量 */
    surplusNum?: number

    /** 合同总金额 */
    totalAmount?: number

    /** 已使用数量 */
    usedNum?: number

    /** 预警数量 */
    warningNum?: number
  }

  export class ContractPageQueryDTO {
    /** 合同编码(模糊查询) */
    contractCode?: string

    /** 页码 */
    pageNo: number

    /** 每页条数 */
    pageSize: number

    /** 商品品类ID */
    productId?: number
  }

  export class ContractTextOptionVO {
    /** 合同编码 */
    contractCode?: string

    /** 合同名称 */
    contractName?: string

    /** 是否禁用 */
    disabled?: boolean

    /** 合同ID */
    id?: number

    /** 合同可用余量 */
    surplusNum?: number
  }

  export class CustomerAddDTO {
    /** 工商信息 */
    businessInfo?: defs.CustomerBusinessInfoDTO

    /** 客户编码 */
    code?: string

    /** 关联区域Ids */
    departIds: Array<number>

    /** 客户简称（中文） */
    name?: string

    /** 客户简称（多语言） */
    nameLocale?: ObjectMap<any, string>

    /** 收货人手机号码 */
    phone?: string

    /** 收货地址 */
    receiveAddress?: string

    /** 收货人 */
    receiver?: string

    /** 状态 99 停用 1 启用 */
    status?: number
  }

  export class CustomerBusinessInfoDTO {
    /** 企业地址 */
    address?: string

    /** 营业执照 */
    bizLicense?: string

    /** 法定代表人 */
    legalRep?: string

    /** 企业名 */
    name?: string

    /** 社会信用代码 */
    socialCreditCode?: string
  }

  export class CustomerBusinessInfoVO {
    /** 企业地址 */
    address?: string

    /** 营业执照 */
    bizLicense?: string

    /** 法定代表人 */
    legalRep?: string

    /** 企业名 */
    name?: string

    /** 社会信用代码 */
    socialCreditCode?: string
  }

  export class CustomerCabinetOrderVO {
    /** cabinetCount */
    cabinetCount?: number

    /** departName */
    departName?: string

    /** receiverId */
    receiverId?: number

    /** thisMonthCount */
    thisMonthCount?: number
  }

  export class CustomerCompanyListVO {
    /** 地址 */
    address?: string

    /** 联系人 */
    contacts?: string

    /** 客户ID */
    customerId?: number

    /** 仓库名称 */
    depositoryName?: string

    /** 启用状态 1启用 99禁用 */
    enabled?: number

    /** 主键ID */
    id?: number

    /** 纬度 */
    lat?: string

    /** 经度 */
    lng?: string

    /** 联系电话 */
    phone?: string
  }

  export class CustomerDepositoryCheckNameDTO {
    /** 客户ID */
    customerId: number

    /** 仓库名称 */
    depositoryName: string

    /** 主键ID */
    id?: number
  }

  export class CustomerDepositoryListDTO {
    /** 客户ID */
    customerId: number

    /** 页码 */
    pageNo: number

    /** 每页条数 */
    pageSize: number
  }

  export class CustomerDepositorySaveDTO {
    /** 地址 */
    address: string

    /** 联系人 */
    contacts?: string

    /** 客户ID */
    customerId: number

    /** 仓库名称 */
    depositoryName: string

    /** 启用状态 1启用 99禁用 */
    enabled: number

    /** 主键ID,有则编辑，无则新增 */
    id?: number

    /** 纬度 */
    lat: string

    /** 经度 */
    lng: string

    /** 手机号 */
    phone?: string
  }

  export class CustomerEditDTO {
    /** 工商信息 */
    businessInfo?: defs.CustomerBusinessInfoDTO

    /** 客户编码 */
    code?: string

    /** 关联区域Ids */
    departIds?: Array<number>

    /** id */
    id?: number

    /** 客户简称（中文） */
    name?: string

    /** nameLocale */
    nameLocale?: ObjectMap<any, string>

    /** 收货人手机号码 */
    phone?: string

    /** 收货地址 */
    receiveAddress?: string

    /** 收货人 */
    receiver?: string

    /** 状态 99 停用 1 启用 */
    status?: number
  }

  export class CustomerEditVO {
    /** 工商信息 */
    businessInfo?: defs.CustomerBusinessInfoVO

    /** 客户编码 */
    code?: string

    /** 关联区域Ids */
    departIds?: Array<number>

    /** id */
    id?: number

    /** 客户简称（中文） */
    name?: string

    /** nameLocale */
    nameLocale?: ObjectMap<any, string>

    /** 收货人手机号码 */
    phone?: string

    /** 收货地址 */
    receiveAddress?: string

    /** 收货人 */
    receiver?: string

    /** 状态 0 停用 1 启用 */
    status?: number
  }

  export class CustomerListVO {
    /** 客户编码 */
    code?: string

    /** 服务区域 */
    departNames?: string

    /** id */
    id?: number

    /** 客户名称 */
    name?: string

    /** 状态 0 停用 1 启用 */
    status?: number
  }

  export class DeclareCustomAddDTO {
    /** 出口报关单 */
    declareFile?: Array<defs.FileVO>

    /** 进口申报材料 */
    domesticDeclareFile?: Array<defs.FileVO>

    /** 物流交接单 */
    logisticsDeliveryReceipt?: Array<defs.FileVO>

    /** 提单号 */
    pickBillCode?: string

    /** 计划id */
    planId?: number

    /** 货物到港时间 */
    transferTime?: string
  }

  export class DeclareCustomCommitDTO {
    /** 进口申报材料 */
    domesticDeclareFile?: Array<defs.FileVO>

    /** id */
    id?: number

    /** 计划id */
    planId?: number
  }

  export class DeclareCustomEditVO {
    /** 柜号 */
    cabinetCode?: string

    /** 合同号 */
    contractCode?: string

    /** 出口报关单 */
    declareFile?: string

    /** 进口申报材料 */
    domesticDeclareFile?: string

    /** id */
    id?: number

    /** 物流交接单 */
    logisticsDeliveryReceipt?: string

    /** 提单号 */
    pickBillCode?: string

    /** 计划id */
    planId?: number

    /** 品类名 */
    productName?: string

    /** 备注 */
    remark?: string

    /** 装柜标签 */
    skuTag?: string

    /** 商品 */
    spu?: string

    /** 货物到港时间 */
    transferTime?: string
  }

  export class DeclareCustomListVO {
    /** 进口港 */
    arrivePort?: string

    /** 柜号 */
    cabinetCode?: string

    /** 合同号 */
    contractCode?: string

    /** 报关时间 */
    createTime?: string

    /** 出口报关公司 */
    declareCompany?: string

    /** 发运方式 */
    deliveryMethod?: string

    /** 计划离港时间 */
    expectDepartedTime?: string

    /** id */
    id?: number

    /** 计划id */
    planId?: number

    /** 品类名 */
    product?: string

    /** 备注 */
    remark?: string

    /** 商品 */
    spu?: string

    /** 出口港 */
    startPort?: string

    /** 状态 */
    state?: string

    /** 状态翻译 */
    stateName?: string

    /** 出口货值 */
    totalAmount?: string

    /** 毛重 */
    totalGrossWeight?: string

    /** 净重 */
    totalNetWeight?: string
  }

  export class DeclareDto {
    /** 当前状态 */
    status?: string

    /** 当前状态信息描述 */
    statusDesc?: string

    /** 状态图片URL */
    statusImageUrl?: string

    /** 当前状态信息描述 */
    statusTime?: string

    /** 当前状态被使用情况 finish,process,wait */
    statusUsed?: string
  }

  export class DeclareInfoAddDTO {
    /** 计划到港时间 */
    expectArriveTime?: string

    /** 计划离港时间 */
    expectDepartedTime?: string

    /** 提柜地址 */
    pickCabinetAddress?: string

    /** 提柜文件 */
    pickCabinetFile?: Array<defs.FileVO>

    /** 提柜人联系方式 */
    pickCabinetMobile?: string

    /** 提柜联系人 */
    pickCabinetPerson?: string

    /** 计划id */
    planId?: number

    /** 船次号 */
    shipBatchCode?: string

    /** 船公司 */
    shipCompany?: string

    /** 船名 */
    shipName?: string
  }

  export class DeclareInfoEditVO {
    /** 柜次 */
    cabinetBatchCode?: string

    /** 合同号 */
    contractCode?: string

    /** 计划到港时间 */
    expectArriveTime?: string

    /** 计划离港时间 */
    expectDepartedTime?: string

    /** 工厂联系人 */
    factoryContact?: string

    /** 工厂联系方式 */
    factoryContactMobile?: string

    /** 订舱id */
    id?: number

    /** 提柜地址 */
    pickCabinetAddress?: string

    /** 提柜文件 */
    pickCabinetFile?: string

    /** 提柜人联系方式 */
    pickCabinetMobile?: string

    /** 提柜联系人 */
    pickCabinetPerson?: string

    /** 计划id */
    planId?: number

    /** 品类id */
    productId?: number

    /** 品类规则id */
    productRuleId?: number

    /** 备注 */
    remark?: string

    /** 船次号 */
    shipBatchCode?: string

    /** 船公司 */
    shipCompany?: string

    /** 船名 */
    shipName?: string

    /** 商品 */
    spu?: string
  }

  export class DeclareInfoListVO {
    /** 进口港 */
    arrivePort?: string

    /** 柜次 */
    cabinetBatchCode?: string

    /** 合同号 */
    contractCode?: string

    /** 订舱时间 */
    createTime?: string

    /** 出口报关公司 */
    declareCompany?: string

    /** 头程运输公司 */
    headTransport?: string

    /** 订舱id */
    id?: number

    /** 计划id */
    planId?: number

    /** 计划发柜时间 */
    planStartTime?: string

    /** 商品品类 */
    product?: string

    /** 备注 */
    remark?: string

    /** 出口港 */
    startPort?: string

    /** 状态 */
    state?: string

    /** 状态翻译 */
    stateName?: string
  }

  export class DeliveryEditBaseInfoVO {
    /** 基本信息-销售单号 */
    billCode?: string

    /** 基本信息-柜次 */
    cabinetBatchCode?: string

    /** 基本信息-柜号 */
    cabinetCode?: string

    /** 合同号 */
    contractCode?: string

    /** plan表主键 */
    id: number
  }

  export class DeliveryEditBookingInfoVO {
    /** 订舱信息-计划到港时间 */
    expectArriveTime?: string

    /** 订舱信息-计划离港时间 */
    expectDepartedTime?: string

    /** plan表主键 */
    id?: number

    /** 订舱信息-船公司 */
    shipCompany?: string

    /** 订舱信息-船名 */
    shipName?: string

    /** 订舱信息-船次号 */
    shipNo?: string
  }

  export class DeliveryEditExportDeclareInfoVO {
    /** 出口报关-货物到港时间 */
    exportArriveTime?: string

    /** 出口报关-出口报关公司ID */
    exportCompanyId?: number

    /** 出口报关-国内申报资料 */
    exportDeclareDocuments?: Array<defs.FileVO>

    /** 出口报关-出口报关单 */
    exportDeclareFile?: Array<defs.FileVO>

    /** 出口报关-提单号 */
    exportPickBillCode?: string

    /** 出口报关-出口港ID */
    exportPortId?: number

    /** plan表主键 */
    id: number
  }

  export class DeliveryEditFinalTransportInfoVO {
    /** 尾程运输-车牌号 */
    carNo?: string

    /** 尾程运输-司机姓名 */
    driverName?: string

    /** 尾程运输-司机电话 */
    driverPhone?: string

    /** plan表主键 */
    id?: number

    /** 尾程运输-运输公司ID */
    logisticsCompanyId?: number

    /** 尾程运输-设定温度 */
    temperature?: number

    /** 尾程运输-挂车号 */
    trailerNo?: string

    /** 尾程运输-设定风口 */
    tuyere?: number
  }

  export class DeliveryEditHeaderTransportInfoVO {
    /** 头程运输-运输公司ID */
    deliveryCompanyId?: number

    /** 头程运输-司机姓名 */
    driverName?: string

    /** 头程运输-司机电话 */
    driverPhone?: string

    /** plan表主键 */
    id: number

    /** 头程运输-提货车牌号 */
    pickCarNo?: string

    /** 头程运输-交接文件 */
    transferPic?: Array<defs.FileVO>
  }

  export class DeliveryEditImportDeclareInfoVO {
    /** 进口报关-货柜免租截止日期 */
    endFreeRentTime?: string

    /** 进口报关-免费滞港截止时间 */
    endFreeStayPortTime?: string

    /** plan表主键 */
    id?: number

    /** 进口报关-抽检数量 */
    importCheckQuantity?: number

    /** 进口报关信息-抽检单位 1-件 2-个 */
    importCheckUnit?: number

    /** 进口报关-进口报关公司ID */
    importDeclareCompanyId?: number

    /** 进口报关-报关申报资料 */
    importDeclareDocuments?: Array<defs.FileVO>

    /** 进口报关-进口报关单 */
    importDeclareFile?: Array<defs.FileVO>

    /** 进口报关-报关单号 */
    importDeclareNumber?: string

    /** 进口报关-进口报关口岸ID */
    importDeclarePortId?: number

    /** 进口报关-是否查验1:是 0：否 */
    importExamine?: number

    /** 熏蒸状态 1:已完成 0：待熏蒸 */
    importFumigationStatus?: number

    /** 进口报关-进口港ID */
    importPortId?: number

    /** 进口报关-放行时间 */
    releaseDate?: string
  }

  export class DeliveryEditInfoVO {
    /** 基本信息 */
    baseInfoVO?: defs.DeliveryEditBaseInfoVO

    /** 订舱信息 */
    bookingInfoVO?: defs.DeliveryEditBookingInfoVO

    /** 出口报关信息 */
    exportDeclareInfoVO?: defs.DeliveryEditExportDeclareInfoVO

    /** 尾程运输信息 */
    finalTransportInfoVO?: defs.DeliveryEditFinalTransportInfoVO

    /** 头程运输信息 */
    headerTransportInfoVO?: defs.DeliveryEditHeaderTransportInfoVO

    /** plan表主键 */
    id?: number

    /** 进口报关信息 */
    importDeclareInfoVO?: defs.DeliveryEditImportDeclareInfoVO

    /** 商品信息 */
    productVO?: defs.DeliveryEditProductVO

    /** 收货方信息 */
    receiverInfoVO?: defs.DeliveryEditReceiverInfoVO

    /** 发货方信息 */
    senderInfoVO?: defs.DeliveryEditSenderInfoVO

    /** 当前状态 */
    state?: string
  }

  export class DeliveryEditListVO {
    /** 柜次 */
    cabinetBatchCode?: string

    /** 柜号 */
    cabinetCode?: string

    /** 合同号 */
    contractCode?: string

    /** 创建时间 */
    createTime?: string

    /** 运输方式 */
    deliveryMethod?: number

    /** 运输方式名称 */
    deliveryMethodName?: string

    /** 主键 */
    id?: number

    /** 品类名称 */
    product?: string

    /** 商品 */
    productName?: string

    /** 产地 */
    productPlace?: string

    /** 备注 */
    remark?: string

    /** 商品名称 */
    spuNames?: string

    /** state */
    state?: string

    /** 状态 */
    status?: string
  }

  export class DeliveryEditProductBaseDTO {
    /** 商品信息-数量 */
    number?: number

    /** skuID */
    skuId?: number

    /** 商品品类ID */
    spuId?: number
  }

  export class DeliveryEditProductDTO {
    /** 修改对象 */
    baseDTOS: Array<defs.DeliveryEditProductBaseDTO>

    /** plan表主键 */
    id: number

    /** 商品信息-数量合计 */
    totalPack: number
  }

  export class DeliveryEditProductVO {
    /** plan表主键 */
    id?: number

    /** 品类 */
    product?: string

    /** 商品ID */
    productId?: number

    /** 商品名称 */
    spuNames?: string

    /** 商品明细 */
    tableVOs?: Array<defs.TableVO>

    /** 商品信息-数量合计 */
    totalPack?: number
  }

  export class DeliveryEditReceiverInfoVO {
    /** plan表主键 */
    id: number

    /** 收货方信息-收货方ID */
    receiverId?: number

    /** 收货方信息-收货方类型 */
    receiverType?: number
  }

  export class DeliveryEditSenderInfoVO {
    /** 发货方信息-发货工厂ID */
    factoryId?: number

    /** plan表主键 */
    id: number

    /** 发货方信息-发货方ID */
    senderId?: number
  }

  export class DeliveryOrderItem {
    /** createBy */
    createBy?: number

    /** createTime */
    createTime?: string

    /** deleted */
    deleted?: number

    /** deliveryOrderCode */
    deliveryOrderCode?: string

    /** deliveryOrderId */
    deliveryOrderId?: number

    /** id */
    id?: number

    /** qty */
    qty?: number

    /** skuBrandId */
    skuBrandId?: number

    /** skuBrandName */
    skuBrandName?: string

    /** skuItemId */
    skuItemId?: number

    /** skuLevelId */
    skuLevelId?: number

    /** skuLevelName */
    skuLevelName?: string

    /** skuPlaceId */
    skuPlaceId?: number

    /** skuPlaceName */
    skuPlaceName?: string

    /** skuPropertyId */
    skuPropertyId?: number

    /** skuPropertyName */
    skuPropertyName?: string

    /** skuSpecName */
    skuSpecName?: string

    /** splitQty */
    splitQty?: number

    /** spuId */
    spuId?: number

    /** updateBy */
    updateBy?: number

    /** updateTime */
    updateTime?: string
  }

  export class DeliveryPlanAddDTO {
    /** 进口港 */
    arrivePortId?: number

    /** 合同ID */
    contractId?: number

    /** 出口报关公司id */
    declareCompanyId?: number

    /** 进口港报关口岸 */
    declarePortId?: number

    /** 发运方式 */
    deliveryMethod?: number

    /** 进口港报关公司 */
    domesticDeclareCompanyId?: number

    /** 工厂id */
    factoryId?: number

    /** 运输要求 */
    headTransportRemark?: string

    /** 头程运输公司id */
    internationalTransportId?: number

    /** 新增数量 */
    newCount?: number

    /** 计划发柜时间 */
    planStartTime?: string

    /** 品类id */
    productId?: number

    /** 编码规则id */
    productRuleId?: number

    /** 建议收货方 */
    receiverId?: number

    /** 收货方类型 */
    receiverType?: number

    /** 产地备注 */
    remark?: string

    /** 发货方id */
    shipmentId?: number

    /** 出口港id */
    startPortId?: number
  }

  export class DeliveryPlanDetailVO {
    /** 进口港 */
    arrivePort?: string

    /** 出口报关公司 */
    declareCompany?: string

    /** 进口港报关口岸 */
    declarePort?: string

    /** 发运方式 */
    deliveryMethodName?: string

    /** 进口港报关公司 */
    domesticDeclareCompany?: string

    /** 工厂 */
    factory?: string

    /** 运输要求 */
    headTransportRemark?: string

    /** id */
    id?: number

    /** 头程运输公司id */
    internationalTransportId?: string

    /** 计划发柜时间 */
    planStartTime?: string

    /** 产地 */
    productPlace?: string

    /** 建议收货方 */
    receiver?: string

    /** 收货方类型 */
    receiverTypeName?: string

    /** 产地备注 */
    remark?: string

    /** 发货方 */
    shipment?: string

    /** 商品 */
    spu?: string

    /** 出口港 */
    startPort?: string
  }

  export class DeliveryPlanEditDTO {
    /** 进口港 */
    arrivePortId?: number

    /** 出口报关公司id */
    declareCompanyId?: number

    /** 进口港报关口岸 */
    declarePortId?: number

    /** 发运方式 */
    deliveryMethod?: number

    /** 进口港报关公司 */
    domesticDeclareCompanyId?: number

    /** 工厂id */
    factoryId?: number

    /** 运输要求 */
    headTransportRemark?: string

    /** id */
    id?: number

    /** 头程运输公司id */
    internationalTransportId?: number

    /** 新增数量 */
    newCount?: number

    /** 计划发柜时间 */
    planStartTime?: string

    /** 建议收货方 */
    receiverId?: number

    /** 收货方类型 */
    receiverType?: number

    /** 产地备注 */
    remark?: string

    /** 发货方id */
    shipmentId?: number

    /** 出口港id */
    startPortId?: number
  }

  export class DeliveryPlanEditVO {
    /** 进口港 */
    arrivePortId?: number

    /** 合同号 */
    contractCode?: string

    /** 出口报关公司id */
    declareCompanyId?: number

    /** 进口港报关口岸 */
    declarePortId?: number

    /** 发运方式 */
    deliveryMethod?: number

    /** 进口港报关公司 */
    domesticDeclareCompanyId?: number

    /** 工厂id */
    factoryId?: number

    /** 运输要求 */
    headTransportRemark?: string

    /** id */
    id?: number

    /** 头程运输公司id */
    internationalTransportId?: number

    /** 新增数量 */
    newCount?: number

    /** 计划发柜时间 */
    planStartTime?: string

    /** 品类id */
    productId?: number

    /** 产地id */
    productPlaceId?: number

    /** 品类规则id */
    productRuleId?: number

    /** 建议收货方 */
    receiverId?: number

    /** 收货方类型 */
    receiverType?: number

    /** 产地备注 */
    remark?: string

    /** 发货方id */
    shipmentId?: number

    /** 商品id */
    spuId?: number

    /** 出口港id */
    startPortId?: number
  }

  export class DeliveryPlanItem {
    /** createBy */
    createBy?: number

    /** createTime */
    createTime?: string

    /** deleted */
    deleted?: number

    /** deliveryPlanCode */
    deliveryPlanCode?: string

    /** deliveryPlanId */
    deliveryPlanId?: number

    /** exportCurrency */
    exportCurrency?: number

    /** exportUnitPrice */
    exportUnitPrice?: number

    /** id */
    id?: number

    /** importCurrency */
    importCurrency?: number

    /** importUnitPrice */
    importUnitPrice?: number

    /** pickFruitTime */
    pickFruitTime?: string

    /** productId */
    productId?: number

    /** qty */
    qty?: number

    /** skuBrandId */
    skuBrandId?: number

    /** skuBrandName */
    skuBrandName?: string

    /** skuId */
    skuId?: number

    /** skuItemId */
    skuItemId?: number

    /** skuLevelId */
    skuLevelId?: number

    /** skuLevelName */
    skuLevelName?: string

    /** skuPlaceId */
    skuPlaceId?: number

    /** skuPlaceName */
    skuPlaceName?: string

    /** skuPropertyId */
    skuPropertyId?: number

    /** skuPropertyName */
    skuPropertyName?: string

    /** skuSpecName */
    skuSpecName?: string

    /** skuTag */
    skuTag?: string

    /** spuId */
    spuId?: number

    /** updateBy */
    updateBy?: number
  }

  export class DeliveryPlanListVO {
    /** 进口港 */
    arrivePort?: string

    /** 柜次 */
    cabinetBatchCode?: string

    /** 柜号 */
    cabinetCode?: string

    /** 合同号 */
    contractCode?: string

    /** 创建时间 */
    createTime?: string

    /** 出口报关公司 */
    declareCompany?: string

    /** 发运方式id */
    deliveryMethod?: number

    /** 发运方式 */
    deliveryMethodName?: string

    /** id */
    id?: number

    /** 出口运输公司 */
    internationalTransport?: string

    /** 计划发柜时间 */
    planStartTime?: string

    /** 品类 */
    product?: string

    /** 产地 */
    productPlace?: string

    /** 备注 */
    remark?: string

    /** 状态 */
    state?: string

    /** 状态翻译 */
    stateName?: string
  }

  export class DeliveryReceiverDTO {
    /** 服务区域ID,即国内分公司 */
    customerCompanyId?: number

    /** 客户仓库ID */
    customerDepositoryId?: number

    /** 商品明细 */
    products?: Array<defs.DeliverySpuCommitVO>

    /** 收货方ID */
    receiverId?: number

    /** 收货方类型1：销地分公司 2客户 */
    receiverType?: number
  }

  export class DeliverySpuCommitVO {
    /** skuId */
    skuId?: number

    /** 分柜数量，按顺序表示每个收货方收货数量 */
    splitQuantity?: number
  }

  export class DepartBusinessInfoDTO {
    /** 开户证明 */
    accountCert?: Array<defs.FileVO>

    /** 企业地址 */
    address?: string

    /** 营业执照 */
    bizLicense?: Array<defs.FileVO>

    /** 法定代表人 */
    legalRep?: string

    /** 企业名 */
    name?: string

    /** 其他许可 */
    otherCert?: Array<defs.FileVO>

    /** 社会信用代码 */
    socialCreditCode?: string
  }

  export class DepartIdModel {
    /** children */
    children?: Array<defs.DepartIdModel>

    /** key */
    key?: number

    /** title */
    title?: string

    /** value */
    value?: number
  }

  export class DomesticTransportBookDTO {
    /** 车牌号 */
    carNo: string

    /** 计划ID */
    deliveryPlanId: number

    /** 司机名 */
    driverName: string

    /** 司机联系方式 */
    driverPhone: string

    /** 挂车号 */
    trailerCarNo: string
  }

  export class DomesticTransportStartDTO {
    /** 风口单位% */
    airPort: number

    /** 车牌号 */
    carNo: string

    /** 计划ID */
    deliveryPlanId: number

    /** 司机名 */
    driverName: string

    /** 司机联系方式 */
    driverPhone: string

    /** 温度单位为℃ */
    temperature: number

    /** 挂车号 */
    trailerCarNo: string
  }

  export class DomesticTransportationDetailVO {
    /** 发车时间 */
    actualStartShipTime?: string

    /** 风口单位% */
    airPort?: number

    /** 柜号 */
    cabinetCode?: string

    /** 车牌号 */
    carNo?: string

    /** 合同号 */
    contractCode?: string

    /** 计划ID */
    deliveryPlanId?: number

    /** 司机名 */
    driverName?: string

    /** 司机联系方式 */
    driverPhone?: string

    /** 计划发货时间 */
    planStartTime?: string

    /** 品类 */
    product?: string

    /** 还箱证明文件JSON数据 */
    proofFile?: string

    /** 还箱证明文件 */
    proofFileVO?: defs.FileVO

    /** 收货地址 */
    receiveAddress?: Array<string>

    /** 备注 */
    remark?: string

    /** 发货地址 */
    sendAddress?: string

    /** 状态编码  06:出口已起航|066:许可已核销|07:国内已报关|070:国内可提柜|08:国内待发运|12:国内已发运 */
    state?: string

    /** 状态名称 */
    stateName?: string

    /** 商品表格 */
    table?: defs.TableVO

    /** 是否在途温控 1：使用，99：不使用 */
    tempMonitor: number

    /** 温度单位为℃ */
    temperature?: number

    /** 总件数 */
    totalPack?: number

    /** 挂车号 */
    trailerCarNo?: string

    /** 建议设置风口单位% */
    transitingMonitorAirPort?: number

    /** 建议设置温度单位为℃ */
    transitingMonitorTemperature?: number

    /** 货运状态 */
    transportationState?: 'WAIT_BOOK' | 'WAIT_START' | 'COMPLETE' | 'WAIT_SOP'
  }

  export class DomesticTransportationListVO {
    /** 发车时间 */
    actualStartShipTime?: string

    /** 进口港 */
    arrivePortName?: string

    /** 柜号 */
    cabinetCode?: string

    /** 进口报关公司（国内公司） */
    domesticDeclareCompanyName?: string

    /** 计划ID */
    id?: number

    /** 物流公司名称 */
    logisticsCompanyName?: string

    /** 是否超期 */
    overdue?: boolean

    /** 品类名称 */
    product?: string

    /** 收货人 */
    receiver?: string

    /** 装柜方式1：原柜 2：转柜 3：装柜 */
    shipmentMethod?: number

    /** 装柜方式  */
    shipmentMethodName?: string

    /** 状态编码  08:国内待发运|12:国内已发运|13:国内已到达销区|14:国内销区已收货|15:已还箱 */
    state?: string

    /** 状态名称 */
    stateName?: string

    /** 总件数 */
    totalPack?: number

    /** 货运状态 */
    transportationState?: 'WAIT_BOOK' | 'WAIT_START' | 'COMPLETE' | 'WAIT_SOP'
  }

  export class DomesticTransportationVO {
    /** 发车时间 */
    actualStartShipTime?: string

    /** 风口单位% */
    airPort?: number

    /** 车牌号 */
    carNo?: string

    /** 司机名 */
    driverName?: string

    /** 司机联系方式 */
    driverPhone?: string

    /** 运输公司 */
    logisticsCompanyName?: string

    /** 是否在途温控 1：使用，99：不使用 */
    tempMonitor: number

    /** 温度单位为℃ */
    temperature?: number

    /** 挂车号 */
    trailerCarNo?: string

    /** 建议设置风口单位% */
    transitingMonitorAirPort?: number

    /** 建议设置温度单位为℃ */
    transitingMonitorTemperature?: number
  }

  export class EDIUpdateInfoDTO {
    /** 实际到港时间 */
    actualArriveTime?: string

    /** 实际离港时间 */
    actualStartTime?: string

    /** 预计到港时间 */
    expectArriveTime?: string

    /** 预计离港时间 */
    expectStartTime?: string

    /** 计划ID */
    planId?: number
  }

  export class EntryPortDeliveryCommitDTO {
    /** 计划ID */
    id: number

    /** 物流公司ID */
    logisticsCompanyId?: number

    /** 计划国内发货时间 */
    planStartShipTime?: string

    /** 收货人明细 */
    receivers?: Array<defs.DeliveryReceiverDTO>

    /** 发货方类型，1：口岸，2:堆场 */
    senderType: number

    /** 装柜方式1:原柜，2：转柜 */
    shipmentMethod: number

    /** 是否需要口岸质检 1:启用，99：禁用 */
    sopEnabled: number

    /** 堆场ID */
    storageYardId?: number

    /** 是否在途温控 1：使用，99：不使用 */
    tempMonitor: number
  }

  export class EntryPortDeliveryDetailVO {
    /** 进口港ID */
    arrivePortId?: number

    /** 进口港 */
    arrivePortName?: string

    /** 柜次号 */
    cabinetBatchCode?: string

    /** 柜号 */
    cabinetCode?: string

    /** 抽查数量 */
    checkNumber?: string

    /** checkQuantity */
    checkQuantity?: number

    /** 抽检单位 1:箱 2：个 */
    checkUnit: number

    /** 合同号 */
    contractCode?: string

    /** 进口报关港 */
    declarePortName?: string

    /** 进口报关公司（国内公司） */
    domesticDeclareCompanyName?: string

    /** 货柜免租截止日期 */
    endFreeRentTime?: string

    /** 免费滞港截止日期 */
    endFreeStayPortTime?: string

    /** 计划ID */
    id?: number

    /** 品类名称 */
    product?: string

    /** 产地名称 */
    productPlaceName?: string

    /** 建议收货方 */
    receiverId?: number

    /** 建议收货方类型 */
    receiverType?: number

    /** 收货人明细 */
    receivers?: Array<defs.DeliveryReceiverDTO>

    /** 放行时间 */
    releaseDate?: string

    /** 备注 */
    remark?: string

    /** 商品ID */
    spuId?: number

    /** 商品名称 */
    spuNames?: string

    /** 商品明细 */
    tables?: Array<defs.TableVO>

    /** 总件数 */
    totalPack?: number
  }

  export class EntryPortDeliveryListVO {
    /** 到港日期 */
    arrivePortDate?: string

    /** 进口港 */
    arrivePortName?: string

    /** 柜次号 */
    cabinetBatchCode?: string

    /** 柜号 */
    cabinetCode?: string

    /** 合同号 */
    contractCode?: string

    /** domesticArrivePortTime */
    domesticArrivePortTime?: string

    /** domesticEstimateArriveTime */
    domesticEstimateArriveTime?: string

    /** expectArriveTime */
    expectArriveTime?: string

    /** 计划ID */
    id?: number

    /** 品类名称 */
    product?: string

    /** 商品名称 */
    spuNames?: string

    /** 工厂发柜日期 */
    startTime?: string

    /** 状态名称，只展示国内可提柜 */
    stateName?: string

    /** 商品明细表单 */
    tables?: Array<defs.TableVO>

    /** 总件数 */
    totalPack?: number
  }

  export class ExportDeclareInfoVO {
    /** 出口报关信息-出口报关公司 */
    declareCompany?: string

    /** 出口报关信息-出口报关单 */
    declareFile?: Array<defs.FileVO>

    /** 出口报关信息-国内申报资料 */
    domesticDeclareFile?: Array<defs.FileVO>

    /** 出口报关信息-交接单 */
    logisticsDeliveryReceipt?: Array<defs.FileVO>

    /** 出口报关信息-提单号 */
    pickBillCode?: string

    /** 出口报关信息-出口港 */
    startPort?: string

    /** 出口报关信息-货物到港时间 */
    transferTime?: string
  }

  export class FactoryOrder {
    /** cabinetCount */
    cabinetCount?: number

    /** departName */
    departName?: string

    /** factoryId */
    factoryId?: string
  }

  export class File {
    /** absolute */
    absolute?: boolean

    /** absoluteFile */
    absoluteFile?: defs.File

    /** absolutePath */
    absolutePath?: string

    /** canonicalFile */
    canonicalFile?: defs.File

    /** canonicalPath */
    canonicalPath?: string

    /** directory */
    directory?: boolean

    /** executable */
    executable?: boolean

    /** file */
    file?: boolean

    /** freeSpace */
    freeSpace?: number

    /** hidden */
    hidden?: boolean

    /** lastModified */
    lastModified?: number

    /** name */
    name?: string

    /** parent */
    parent?: string

    /** parentFile */
    parentFile?: defs.File

    /** path */
    path?: string

    /** readable */
    readable?: boolean

    /** totalSpace */
    totalSpace?: number

    /** usableSpace */
    usableSpace?: number

    /** writable */
    writable?: boolean
  }

  export class FileVO {
    /** 文件ID */
    fileId?: string

    /** 文件地址 */
    fileUrl?: string

    /** 文件名称 */
    filename?: string
  }

  export class FinalTransportationInfoVO {
    /** 车牌号 */
    carNo?: string

    /** 司机电话 */
    driverContactPhone?: string

    /** 司机姓名 */
    driverName?: string

    /** 尾程发货时间 */
    finaltransferPic?: string

    /** 运输公司 */
    logisticsCompanyName?: string

    /** 设定温度 */
    temperature?: number

    /** 挂车号 */
    trailerNo?: string

    /** 设定风口 */
    tuyere?: number
  }

  export class HeadTransportAddDTO {
    /** 车牌号 */
    carCode?: string

    /** 司机姓名 */
    driver?: string

    /** 司机电话 */
    driverContactPhone?: string

    /** 司机照片 */
    driverPic?: Array<defs.FileVO>

    /** id */
    id?: number

    /** 计划id */
    planId?: number

    /** 交接文件 */
    transferPic?: Array<defs.FileVO>
  }

  export class HeadTransportEditVO {
    /** 柜次 */
    cabinetBatchCode?: string

    /** 柜号 */
    cabinetCode?: string

    /** 车牌号 */
    carCode?: string

    /** 合同号 */
    contractCode?: string

    /** 出口报关公司 */
    declareCompany?: string

    /** 出口报关公司联系人 */
    declareCompanyContact?: string

    /** 出口报关公司联系方式 */
    declareCompanyContactMobile?: string

    /** 司机姓名 */
    driver?: string

    /** 司机电话 */
    driverContactPhone?: string

    /** 司机照片 */
    driverPic?: string

    /** id */
    id?: number

    /** 计划id */
    planId?: number

    /** 品类id */
    productId?: number

    /** 品类名 */
    productName?: string

    /** 备注 */
    remark?: string

    /** 商品 */
    spu?: string

    /** 交接文件 */
    transferPic?: string
  }

  export class HeadTransportListVO {
    /** 柜次 */
    cabinetBatchCode?: string

    /** 柜号 */
    cabinetCode?: string

    /** 合同号 */
    contractCode?: string

    /** 出口报关公司 */
    declareCompany?: string

    /** 计划离港时间 */
    expectDepartedTime?: string

    /** id */
    id?: number

    /** 头程运输公司 */
    internationalTransport?: string

    /** 计划id */
    planId?: number

    /** 品类 */
    product?: string

    /** 备注 */
    remark?: string

    /** 发柜时间 */
    sendCabinetTime?: string

    /** 商品 */
    spu?: string

    /** 出口港 */
    startPort?: string

    /** 状态 */
    state?: string

    /** 状态翻译 */
    stateName?: string
  }

  export class HeaderTransportationInfoVO {
    /** 工厂发柜时间 */
    actualTransferTime?: string

    /** 司机联系方式 */
    driverContactPhone?: string

    /** 运输公司 */
    logisticsCompanyName?: string

    /** 提货车牌号 */
    pickCarNo?: string

    /** 提货司机 */
    pickDriver?: string

    /** 交接文件 */
    transferPic?: Array<defs.FileVO>
  }

  export class IFrameInfoQueryVO {
    /** 提单号(海运必填) */
    billCode?: string

    /** 车牌号 陆运必填 */
    carNo?: string

    /** 船公司代码(海运必填) */
    carrierCode?: string

    /** 运输方式 1_陆运  2_海运 3_铁运 */
    deliveryMethod?: 1 | 2 | 3 | 1 | 2 | 3

    /** 进口港代码(海运必填) */
    portCode?: string
  }

  export class IPage<T0 = any> {
    /** current */
    current?: number

    /** hitCount */
    hitCount?: boolean

    /** pages */
    pages?: number

    /** records */
    records?: Array<T0>

    /** searchCount */
    searchCount?: boolean

    /** size */
    size?: number

    /** total */
    total?: number
  }

  export class IdDTO {
    /** id */
    id?: number
  }

  export class ImportDeclareCommitVO {
    /** 抽检数量 */
    checkQuantity: number

    /** 抽检单位 1:箱 2：个 */
    checkUnit: number

    /** 报关单号 */
    declareNumber: string

    /** 货柜免租截止日期 */
    endFreeRentTime?: string

    /** 免费滞港截止日期 */
    endFreeStayPortTime?: string

    /** 是否查验 1：是 0：否 */
    examine: number

    /** 熏蒸状态 1:已完成 0：待熏蒸 */
    fumigationStatus: number

    /** 计划ID */
    id: number

    /** 报关申报资料 */
    importDeclareFiles?: Array<defs.FileVO>

    /** 放行时间 */
    releaseDate?: string

    /** 进口报关单 */
    releaseFiles: Array<defs.FileVO>

    /** 备注 */
    remark?: string
  }

  export class ImportDeclareDetailVO {
    /** 进口港 */
    arrivePortName?: string

    /** 柜次号 */
    cabinetBatchCode?: string

    /** 柜号 */
    cabinetCode?: string

    /** 提货车牌号 */
    carCode?: string

    /** 抽检数量 */
    checkQuantity?: number

    /** 抽检单位 1:箱 2：个 */
    checkUnit?: number

    /** 合同号 */
    contractCode?: string

    /** 出口报关单 */
    declareFile?: string

    /** 出口报关单 */
    declareFiles?: Array<defs.FileVO>

    /** 报关单号 */
    declareNumber?: string

    /** 进口报关口岸 */
    declarePortName?: string

    /** 出口报关时间 */
    declareTime?: string

    /** 进口申报资料 */
    domesticDeclareFile?: string

    /** 进口申报资料 */
    domesticDeclareFiles?: Array<defs.FileVO>

    /** 提货司机姓名 */
    driver?: string

    /** 司机联系方式 */
    driverContactPhone?: string

    /** 货柜免租截止日期 */
    endFreeRentTime?: string

    /** 免费滞港截止日期 */
    endFreeStayPortTime?: string

    /** 是否查验 1：是 0：否 */
    examine?: number

    /** 出口报关公司 */
    expressCompany?: string

    /** 熏蒸状态 1:已完成 0：待熏蒸 */
    fumigationStatus?: number

    /** 头程运输公司 */
    headTransportName?: string

    /** 计划ID */
    id?: number

    /** 报关申报资料 */
    importDeclareFile?: string

    /** 报关申报资料 */
    importDeclareFiles?: Array<defs.FileVO>

    /** 品类名称 */
    product?: string

    /** 品类名称ID */
    productId?: number

    /** 放行时间 */
    releaseDate?: string

    /** 进口报关单 */
    releaseFile?: string

    /** 进口报关单 */
    releaseFiles?: Array<defs.FileVO>

    /** 备注 */
    remark?: string

    /** 商品ID */
    spuId?: number

    /** 商品名称 */
    spuNames?: string

    /** 状态 */
    state?: string

    /** 商品明细 */
    tables?: Array<defs.TableVO>

    /** 标签JSON数据 */
    tagJSON?: string

    /** 标签 */
    tagList?: Array<defs.FileVO>

    /** 总价值 */
    totalAmount?: number

    /** 总价值 */
    totalG?: number

    /** 总重量（毛重） */
    totalGrossWeight?: number

    /** 总重量（净重） */
    totalNetWeight?: number

    /** 总件数 */
    totalPack?: number

    /** 工厂发柜时间 */
    transferTime?: string
  }

  export class ImportDeclareInfoVO {
    /** 进口报关信息-进口港代码 */
    arrivePortCode?: string

    /** 进口报关信息-进口港 */
    arrivePortName?: string

    /** 进口报关信息-抽检数量 */
    checkQuantity?: number

    /** 进口报关信息-抽检单位 1-箱 2-个 */
    checkUnit?: string

    /** 进口报关信息-报关申报资料 */
    declareFile?: Array<defs.FileVO>

    /** 进口报关信息-报关单号 */
    declareNumber?: string

    /** 进口报关信息-进口报关口岸 */
    declarePortName?: string

    /** 进口报关信息-进口报关公司 */
    domesticDeclareCompanyName?: string

    /** 进口报关信息-货柜免租截止日期 */
    endFreeRentTime?: string

    /** 进口报关信息-免费滞港截止日期 */
    endFreeStayPortTime?: string

    /** 进口报关信息-是否查验 */
    examine?: string

    /** 进口报关信息-是否熏蒸 */
    fumigationStatus?: string

    /** 进口报关信息-进口报关单 */
    releaseFile?: Array<defs.FileVO>
  }

  export class ImportDeclareListVO {
    /** 实际离港时间 */
    actualShippingTime?: string

    /** 进口港 */
    arrivePortName?: string

    /** 到港时间 */
    arriveTime?: string

    /** 柜次号 */
    cabinetBatchCode?: string

    /** 柜号 */
    cabinetCode?: string

    /** 合同号 */
    contractCode?: string

    /** 出口报关公司（国内） */
    declareCompanyName?: string

    /** 报关时间 */
    declareDate?: string

    /** 报关单号 */
    declareNumber?: string

    /** 进口报关口岸 */
    declarePortName?: string

    /** 运输方式 */
    deliveryMethod?: number

    /** 运输方式名称 */
    deliveryMethodName?: string

    /** 报关单号 */
    deliveryOrderCode?: string

    /** 实际到港时间 */
    domesticArrivePortTime?: string

    /** 进口报关公司（国内） */
    domesticDeclareCompanyName?: string

    /** 预计到港 时间 */
    domesticEstimateArriveTime?: string

    /** 预计离港时间 */
    estimateShippingTime?: string

    /** 计划到港时间 */
    expectArriveTime?: string

    /** 计划离港时间 */
    expectDepartedTime?: string

    /** 头程运输公司 */
    headTransportName?: string

    /** 计划ID */
    id?: number

    /** 品类名称 */
    product?: string

    /** 品类ID */
    productId?: number

    /** 产地 */
    productPlaceName?: string

    /** 放行时间 */
    releaseDate?: string

    /** 备注 */
    remark?: string

    /** 离港时间 */
    shippingTime?: string

    /** 商品名称 */
    spuNames?: string

    /** 状态编码 03:出口已装箱 |05:出口已送港| 06:出口已起航|066:许可已核销|07:国内已报关|070:国内可提柜|08:国内待发运|12:国内已发运 */
    state?: string

    /** 状态名称 */
    stateName?: string
  }

  export class ImportDeclareReplenishDTO {
    /** 计划ID */
    id: number

    /** 进口报关单 */
    releaseFiles: Array<defs.FileVO>
  }

  export class ImportDeclareTaxBatchDTO {
    /** 计划IDs */
    deliveryPlanIds: Array<number>

    /** 纳税类型 */
    taxType: 'SELF_PAY' | 'WITHHOLD'
  }

  export class ImportDeclareTaxDTO {
    /** 计划ID */
    deliveryPlanId: number

    /** 纳税文件 */
    taxFiles?: Array<defs.FileVO>

    /** 纳税主体 */
    taxPayer: string

    /** 纳税类型 */
    taxType: 'SELF_PAY' | 'WITHHOLD'
  }

  export class ImportDeclareTaxDetailVO {
    /** 进口港 */
    arrivePortName?: string

    /** 柜次号 */
    cabinetBatchCode?: string

    /** 柜号 */
    cabinetCode?: string

    /** 合同号 */
    contractCode?: string

    /** 进口报关口岸 */
    declarePortName?: string

    /** 计划ID */
    deliveryPlanId?: number

    /** 货柜免租截止日期 */
    endFreeRentTime?: string

    /** 免费滞港截止日期 */
    endFreeStayPortTime?: string

    /** 进口报关公司 */
    expressCompany?: string

    /** 商品品类 */
    product?: string

    /** 商品ID */
    productId?: number

    /** 产地 */
    productPlaceName?: string

    /** 放行时间 */
    releaseDate?: string

    /** 备注 */
    remark?: string

    /** 商品名称 */
    spuNames?: string

    /** 状态 */
    state?: string

    /** 纳税文件 */
    taxFile?: string

    /** 纳税文件 */
    taxFiles?: Array<defs.FileVO>

    /** 纳税主体 */
    taxPayer?: string

    /** 纳税方式 */
    taxType?: 'SELF_PAY' | 'WITHHOLD'
  }

  export class InputStream {}

  export class InternationalShipmentDetailListVO {
    /** 进口港 */
    arrivePort?: string

    /** 进口港 */
    arrivePortId?: number

    /** 柜次 */
    cabinetBatchCode?: string

    /** 柜号 */
    cabinetCode?: string

    /** 创建时间 */
    createTime?: string

    /** 发运方式id */
    deliveryMethod?: number

    /** 发运方式 */
    deliveryMethodName?: string

    /** 主键ID */
    id?: number

    /** 商品品类 */
    product?: string

    /** 商品品类ID */
    productId?: number

    /** 商品spu名称,多个用逗号隔开 */
    productSpuName?: string

    /** 质量异常状态 EXCEPTION_异常 NORMAL_正常 */
    qualityState?: string

    /** 收货时间 */
    receiveTime?: string

    /** 发货时间 */
    shipmentTime?: string

    /** 状态 */
    status?: string

    /** 状态翻译 */
    statusName?: string
  }

  export class InternationalShipmentDetailVO {
    /** 基本信息 */
    baseInfoVO?: defs.BaseInfoVO

    /** 货柜港口状态 */
    declareDtoList?: Array<defs.DeclareDto>

    /** 出口报关信息 */
    exportDeclareInfoVO?: defs.ExportDeclareInfoVO

    /** 尾程运输信息 */
    finalTransportationInfoVO?: defs.FinalTransportationInfoVO

    /** 头程运输信息 */
    headerTransportationInfoVO?: defs.HeaderTransportationInfoVO

    /** 进口报关信息 */
    importDeclareInfoVO?: defs.ImportDeclareInfoVO

    /** 流程节点 */
    operLogVO?: Array<defs.OperLogVO>

    /** 纳税信息 */
    payTaxesInfoVO?: defs.PayTaxesInfoVO

    /** 商品信息 */
    productInfoVO?: defs.ProductInfoVO

    /** 许可核销信息 */
    productQuotaInfoVO?: defs.ProductQuotaInfoVO

    /** 收货信息 */
    receiveInfoVO?: defs.ReceiveInfoVO

    /** 收货方信息 */
    receiverCustomerInfoVO?: defs.ReceiverCustomerInfoVO

    /** 船运信息 */
    shipmentInfoVO?: defs.ShipmentInfoVO

    /** 发货方信息 */
    shipperCustomerInfoVO?: defs.ShipperCustomerInfoVO
  }

  export class InternationalTravelingEditDTO {
    /** 主键 */
    id?: number

    /** 备注 */
    remark?: string
  }

  export class InternationalTravelingInfoListVO {
    /** 工厂发柜时间 */
    actualTransferTime?: string

    /** 进口港 */
    arrivePort?: string

    /** 进口港ID */
    arrivePortId?: number

    /** 到港时间 */
    arriveTime?: string

    /** 柜次 */
    cabinetBatchCode?: string

    /** 柜号 */
    cabinetCode?: string

    /** 进口报关公司 */
    declareCompany?: string

    /** 进口报关公司ID */
    declareCompanyId?: number

    /** 货柜免租截止日期 */
    endFreeRentTime?: string

    /** 免费滞港截止日期 */
    endFreeStayPortTime?: string

    /** 主键 */
    id?: number

    /** 建议销售时间 */
    lastSellTime?: string

    /** 采果时间 */
    pickFruitTime?: string

    /** 品类 */
    product?: string

    /** 品类ID */
    productId?: number

    /** 放柜时间 */
    releaseDate?: string

    /** 备注 */
    remark?: string

    /** SPU Names */
    spuNames?: string

    /** 状态 */
    status?: string

    /** 转柜时间 */
    transferTime?: string
  }

  export class InternationalTravelingListVO {
    /** 国内入境-可提 */
    domesticEntryAllowGetCount?: number

    /** 国内入境-到港 */
    domesticEntryArrivalCount?: number

    /** 无用id，仅用于前端table渲染 */
    id?: number

    /** 国际在途 */
    internationalTravelingCount?: number

    /** 跳转路径 */
    path?: string

    /** 品类 */
    product?: string

    /** 品类id */
    productId?: number
  }

  export class InternationalTravelingSnapshotInfoVO {
    /** 快照信息-进口港 */
    arrivePort?: string

    /** 基本信息-销售单号 */
    billCode?: string

    /** 基本信息-柜次 */
    cabinetBatchCode?: string

    /** 基本信息-柜号 */
    cabinetCode?: string

    /** 合同号 */
    contractCode?: string

    /** 快照信息-进口报关口岸 */
    declarePort?: string

    /** 快照信息-发运方式 */
    deliveryMethod?: string

    /** 主键 */
    id?: number

    /** 快照信息-品类 */
    product?: string

    /** 快照信息-快照日期 */
    snapshotDate?: string

    /** 快照信息-SPU */
    spuNames?: string

    /** 快照信息-出发口岸 */
    startPort?: string

    /** 快照信息-当日状态 */
    status?: string
  }

  export class InternationalTravelingSnapshotListVO {
    /** 进口港 */
    arrivePort?: string

    /** 柜次 */
    cabinetBatchCode?: string

    /** 柜号 */
    cabinetCode?: string

    /** 进口报关口岸 */
    declarePort?: string

    /** 发运方式 */
    deliveryMethod?: string

    /** 主键 */
    id?: number

    /** 品类 */
    product?: string

    /** 快照日期 */
    snapshotDate?: string

    /** 商品 */
    spuNames?: string

    /** 出发口岸 */
    startPort?: string

    /** 状态 */
    status?: string
  }

  export class JSONObject {}

  export class LoginedVO {
    /** multi_depart */
    multi_depart?: number

    /** 是否需要（强制）更新密码 */
    needUpdatePassword?: boolean

    /** token */
    token?: string

    /** userInfo */
    userInfo?: defs.SysUserVO
  }

  export class Map<T0 = any, T1 = any> {}

  export class OperLogVO {
    /** 操作时间 */
    operTime?: string

    /** 操作人 */
    operUser?: string

    /** 当前状态 */
    status?: string

    /** 当前状态描述 */
    statusDesc?: string
  }

  export class OperateLog {
    /** createBy */
    createBy?: number

    /** createTime */
    createTime?: string

    /** deleted */
    deleted?: number

    /** fmStatus */
    fmStatus?: string

    /** id */
    id?: number

    /** operateTime */
    operateTime?: string

    /** operateUserId */
    operateUserId?: number

    /** operateUserName */
    operateUserName?: string

    /** orderId */
    orderId?: number

    /** orderType */
    orderType?: string

    /** toStatus */
    toStatus?: string

    /** updateBy */
    updateBy?: number

    /** updateTime */
    updateTime?: string
  }

  export class OrderItem {
    /** asc */
    asc?: boolean

    /** column */
    column?: string
  }

  export class OrganizationsCreateEntity {
    /** 地址 */
    address?: string

    /** 联系人 */
    contact?: string

    /** 联系方式 */
    contactMobile?: string

    /** 所处国家编码 1 中国 2 越南 3 泰国  */
    country?: number

    /** 工商信息 */
    departBusinessInfo?: defs.DepartBusinessInfoDTO

    /** 组织名称 */
    departName?: string

    /** 组织类型 1 企业组织架构 2 供应商 */
    departType?: number

    /** latitude 纬度 */
    lat?: string

    /** longitude 经度 */
    lng?: string

    /** 组织类型 */
    orgCategories?: Array<number>

    /** 组织编码 */
    orgCode?: string

    /** 父组织id */
    parentId?: number

    /** 备注 */
    remark?: string
  }

  export class Page<T0 = any> {
    /** countId */
    countId?: string

    /** current */
    current?: number

    /** hitCount */
    hitCount?: boolean

    /** maxLimit */
    maxLimit?: number

    /** optimizeCountSql */
    optimizeCountSql?: boolean

    /** orders */
    orders?: Array<defs.OrderItem>

    /** pages */
    pages?: number

    /** records */
    records?: Array<T0>

    /** searchCount */
    searchCount?: boolean

    /** size */
    size?: number

    /** total */
    total?: number
  }

  export class PayTaxesInfoVO {
    /** 纳税文件 */
    taxFile?: Array<defs.FileVO>

    /** 纳税主体 */
    taxPayer?: string

    /** 纳税方式 */
    taxType?: string
  }

  export class PickGoodsAddDTO {
    /** 柜号 */
    cabinetCode?: string

    /** 车牌号 */
    carCode?: string

    /** 司机姓名 */
    driver?: string

    /** 司机电话 */
    driverContactPhone?: string

    /** 司机照片 */
    driverPic?: Array<defs.FileVO>

    /** 计划id */
    planId?: number
  }

  export class PickGoodsEditVO {
    /** 柜次 */
    cabinetBatchCode?: string

    /** 柜号 */
    cabinetCode?: string

    /** 车牌号 */
    carCode?: string

    /** 合同号 */
    contractCode?: string

    /** 出口报关公司 */
    declareCompany?: string

    /** 出口报关公司联系人 */
    declareCompanyContact?: string

    /** 出口报关公司联系方式 */
    declareCompanyContactMobile?: string

    /** 发运方式 1 陆运 2 海运 */
    deliveryMethod?: number

    /** 司机姓名 */
    driver?: string

    /** 司机电话 */
    driverContactPhone?: string

    /** 司机照片 */
    driverPic?: string

    /** 工厂地址 */
    factoryAddress?: string

    /** 工厂联系人 */
    factoryContact?: string

    /** 工厂联系方式 */
    factoryContactMobile?: string

    /** 运输要求 */
    headTransportRemark?: string

    /** id */
    id?: number

    /** 提柜联系方式 */
    picCabinetContactMobile?: string

    /** 提柜地址 */
    pickCabinetAddress?: string

    /** 提柜联系人 */
    pickCabinetContact?: string

    /** planId */
    planId?: number

    /** 备注 */
    remark?: string
  }

  export class PickGoodsListVO {
    /** 柜次 */
    cabinetBatchCode?: string

    /** 柜号 */
    cabinetCode?: string

    /** 合同号 */
    contractCode?: string

    /** 提柜时间 */
    createTime?: string

    /** 出口报关公司 */
    declareCompany?: string

    /** 发运方式id */
    deliveryMethod?: number

    /** 发运方式 */
    deliveryMethodName?: string

    /** 工厂名 */
    factory?: string

    /** id */
    id?: number

    /** 头程运输公司名称 */
    internationalTransport?: string

    /** 计划id */
    planId?: number

    /** 计划发柜时间 */
    planStartTime?: string

    /** 备注 */
    remark?: string

    /** 状态 */
    state?: string

    /** 状态翻译 */
    stateName?: string
  }

  export class PortAddDTO {
    /** 口岸地址 */
    address?: string

    /** 1 中国 2 越南 3 泰国 */
    country?: number

    /** 报关公司id数组 */
    declareCompanyIds?: Array<number>

    /** 报关口岸id数组 */
    declarePortIds?: Array<number>

    /** latitude 纬度 */
    lat?: string

    /** longitude 经度 */
    lng?: string

    /** 客户简称（中文） */
    name?: string

    /** nameLocale */
    nameLocale?: ObjectMap<any, string>

    /** status */
    status?: number

    /** 堆场id数组 */
    storageYardIds?: Array<number>

    /** 运输公司id数组 */
    transportCompanyIds?: Array<number>

    /** 口岸运输方式(1陆运，2海运，3海铁) */
    transportMode?: number
  }

  export class PortEditDTO {
    /** 口岸地址 */
    address?: string

    /** 1 中国 2 越南 3 泰国 */
    country?: number

    /** 报关公司id数组 */
    declareCompanyIds?: Array<number>

    /** 报关口岸id数组 */
    declarePortIds?: Array<number>

    /** id */
    id?: number

    /** latitude 纬度 */
    lat?: string

    /** longitude 经度 */
    lng?: string

    /** 客户简称（中文） */
    name?: string

    /** nameLocale */
    nameLocale?: ObjectMap<any, string>

    /** 状态 0 停用 1 启用 */
    status?: number

    /** 堆场id数组 */
    storageYardIds?: Array<number>

    /** 运输公司id数组 */
    transportCompanyIds?: Array<number>

    /** 口岸运输方式(1陆运，2海运，3海铁) */
    transportMode?: number
  }

  export class PortEditVO {
    /** address */
    address?: string

    /** code */
    code?: string

    /** country */
    country?: number

    /** 报关公司id数组 */
    declareCompanyIds?: Array<number>

    /** 报关口岸id数组 */
    declarePortIds?: Array<number>

    /** id */
    id?: number

    /** name */
    name?: string

    /** nameLocale */
    nameLocale?: ObjectMap<any, string>

    /** portType */
    portType?: string

    /** status */
    status?: number

    /** 堆场id数组 */
    storageYardIds?: Array<number>

    /** subCompany */
    subCompany?: number

    /** subCompanyType */
    subCompanyType?: number

    /** 运输公司id数组 */
    transportCompanyIds?: Array<number>

    /** transportMode */
    transportMode?: number
  }

  export class PortListVO {
    /** 国家 */
    country?: string

    /** 报关口岸 */
    declarePort?: string

    /** id */
    id?: number

    /** name */
    name?: string

    /** 0 禁用 1 开启 */
    status?: number

    /** 口岸运输方式 */
    transportMode?: string
  }

  export class PortVO {
    /** code */
    code?: string

    /** country */
    country?: number

    /** createBy */
    createBy?: number

    /** createTime */
    createTime?: string

    /** deleted */
    deleted?: number

    /** id */
    id?: number

    /** logisticCompany */
    logisticCompany?: Array<string>

    /** name */
    name?: string

    /** portType */
    portType?: string

    /** subCompany */
    subCompany?: number

    /** subCompanyType */
    subCompanyType?: number

    /** transferMode */
    transferMode?: number

    /** transportMode */
    transportMode?: number

    /** updateBy */
    updateBy?: number

    /** updateTime */
    updateTime?: string
  }

  export class ProductCheckDTO {
    /** 编辑校验需要传ID */
    id?: number

    /** 商品品类名称 */
    name?: string
  }

  export class ProductInfoVO {
    /** 建议销售时间 */
    lastSellTime?: string

    /** 采果时间 */
    pickFruitTime?: string

    /** 商品品类 */
    product?: string

    /** 商品品类ID */
    productId?: number

    /** 商品明细 */
    tableVOs?: Array<defs.TableVO>

    /** 标签 */
    tagList?: Array<defs.FileVO>

    /** 总货值 */
    totalAmount?: number

    /** 总重量（毛重） */
    totalGrossWeight?: number

    /** 总重量（净重） */
    totalNetWeight?: number

    /** 总数量（件） */
    totalPack?: number
  }

  export class ProductListDTO {
    /** 启用状态，1 启用，99禁用 */
    enabled?: number

    /** 商品品类名称 */
    name?: string

    /** 页码 */
    pageNo: number

    /** 每页条数 */
    pageSize: number
  }

  export class ProductListVO {
    /** 商品编码 */
    code?: string

    /** 状态。1: 启用, 99: 禁用 */
    enabled?: number

    /** 商品品类ID */
    id?: number

    /** 文件 */
    img?: defs.FileVO

    /** 商品品类名称 */
    name?: string

    /** 多语言 */
    nameLocale?: ObjectMap<any, string>
  }

  export class ProductQuotaAddRequest {
    /** 申请编码 */
    applyNo: string

    /** 口岸ID */
    entryPortId: number

    /** 输出国家：0表示泰国，1表示越南 */
    exportCountry: number

    /** 许可证号 */
    licenseNo: string

    /** 备注 */
    memo?: string

    /** 商品ID */
    productId: number

    /** 余量预警值 */
    quantityWarning?: number

    /** 文件地址 */
    relateFiles?: string

    /** 许可总量（kg） */
    totalQuantity: number

    /** 有效截止日期，yyyy-MM-dd */
    validEndDate: string

    /** 有效开始日期，yyyy-MM-dd */
    validStartDate: string
  }

  export class ProductQuotaBatchVerifiedVo {
    /** 进口报关口岸 */
    declarePortId?: number

    /** 计划Ids */
    ids?: Array<number>

    /** 许可核销证书 */
    quotaFiles?: Array<defs.FileVO>

    /** 许可ID */
    quotaId?: number
  }

  export class ProductQuotaEditRequest {
    /** 是否禁用，1（未禁用）99（已禁用） */
    enabled?: number

    /** ID */
    id: number

    /** 备注 */
    memo?: string

    /** 余量预警值 */
    quantityWarning?: number
  }

  export class ProductQuotaInfoVO {
    /** 许可核销信息-核销许可 */
    quota?: string

    /** 许可核销信息-许可核销证书地址 */
    quotaFile?: Array<defs.FileVO>
  }

  export class ProductQuotaRecordResult {
    /** 申请编号 */
    cabinetBatchCode?: string

    /** 申请编号 */
    cabinetCode?: string

    /** 消耗量，单位Kg */
    expendQuantity?: number

    /** 消耗日期 yyyy-MM-dd */
    expendTime?: string
  }

  export class ProductQuotaResult {
    /** 申请编号 */
    applyNo?: string

    /** 是否启用，1（未禁用）99（已禁用） */
    enabled?: number

    /** 已消耗（kg） */
    expendQuantity?: number

    /** 输出国家：0表示泰国，1表示越南 */
    exportCountry: number

    /** 主键ID */
    id?: number

    /** 许可证号 */
    licenseNo?: string

    /** 备注 */
    memo?: string

    /** 余量预警值，单位% */
    quantityWarning?: number

    /** 文件地址 */
    relateFiles?: string

    /** 许可余量（kg） */
    remainQuantity?: number

    /** 是否失效，0（已失效）1（未生效）2（生效中） */
    status?: number

    /** 许可总量（kg） */
    totalQuantity?: number

    /** 有效截止日期，yyyy-MM-dd */
    validEndDate?: string

    /** 有效开始日期，yyyy-MM-dd */
    validStartDate?: string
  }

  export class ProductQuotaTotalAddRequest {
    /** 口岸ID */
    entryPortId: number

    /** 商品ID */
    productId: number

    /** 余量预警值 */
    quantityWarning?: number
  }

  export class ProductQuotaTotalEditRequest {
    /** 口岸ID */
    entryPortId: number

    /** ID */
    id: number

    /** 商品ID */
    productId: number

    /** 余量预警值 */
    quantityWarning?: number
  }

  export class ProductQuotaTotalResult {
    /** 创建时间 yyyy-MM-dd HH:mm:ss */
    createTime?: string

    /** 口岸Id */
    entryPortId?: number

    /** 口岸名称 */
    entryPortName?: string

    /** 已消耗（kg） */
    expendQuantity?: number

    /** 主键ID */
    id?: number

    /** 商品ID */
    productId?: number

    /** 商品名称 */
    productName?: string

    /** 余量预警值，单位% */
    quantityWarning?: number

    /** 许可余量（kg） */
    remainQuantity?: number

    /** 许可总量（kg） */
    totalQuantity?: number
  }

  export class ProductQuotaValidVo {
    /** 许可ID */
    id?: number

    /** 许可证号 */
    licenseNo?: string

    /** 许可余量（kg） */
    remainQuantity?: number

    /** 许可总量（kg） */
    totalQuantity?: number
  }

  export class ProductQuotaVerifiedBatchVo {
    /** 进口港ID */
    arrivePortId?: number

    /** 报关口岸港ID */
    declarePortId?: number

    /** 本次消耗量（kg） */
    expendQuantity?: number

    /** 商品ID */
    productId?: number

    /** 可用许可列表 */
    quotaList?: Array<defs.ProductQuotaValidVo>
  }

  export class ProductQuotaVerifiedDetailVO {
    /** 进口港ID */
    arrivePortId?: number

    /** 进口港 */
    arrivePortName?: string

    /** 柜次号 */
    cabinetBatchCode?: string

    /** 柜号 */
    cabinetCode?: string

    /** 合同号 */
    contractCode?: string

    /** 进口报关公司名称 */
    declareCompanyName?: string

    /** 进口报关口岸ID */
    declarePortId?: number

    /** 进口报关口岸 */
    declarePortName?: string

    /** 许可消耗（KG） */
    expendQuantity?: number

    /** 国际发货计划id */
    id?: number

    /** 品类名称 */
    product?: string

    /** 商品ID */
    productId?: number

    /** 许可证号 */
    productQuotaLicenseNo?: string

    /** 许可文件 */
    quotaFile?: string

    /** 许可文件列表 */
    quotaFiles?: Array<defs.FileVO>

    /** 备注 */
    remark?: string

    /** 商品明细 */
    tables?: Array<defs.TableVO>

    /** 总净重（KG） */
    totalNetWeight?: number

    /** 总件数 */
    totalPack?: number

    /** 核销日期,格式yyyy-MM-dd */
    verifiedDate?: string
  }

  export class ProductQuotaVerifiedVo {
    /** 进口港 */
    arrivePortName?: string

    /** 柜次号 */
    cabinetBatchCode?: string

    /** 柜号 */
    cabinetCode?: string

    /** 进口报关公司名称 */
    declareCompanyName?: string

    /** 进口报关口岸Id */
    declarePortId?: number

    /** 进口报关口岸名称 */
    declarePortName?: string

    /** 运输方式(1, 陆运),(2, 海运),(3, 铁运) */
    deliveryMethod?: number

    /** 运输方式名称 */
    deliveryMethodName?: string

    /** 国际发货计划id */
    id?: number

    /** 品类名称 */
    product?: string

    /** 商品ID */
    productId?: number

    /** 产地名称 */
    productPlaceName?: string

    /** 许可ID */
    productQuotaId?: number

    /** 许可证号 */
    productQuotaLicenseNo?: string

    /** 备注 */
    remark?: string

    /** 商品名称 */
    spuNames?: string

    /** 状态编码 */
    state?: string

    /** 状态名称 */
    stateName?: string

    /** 总净重（KG） */
    totalNetWeight?: number

    /** 核销日期,格式yyyy-MM-dd */
    verifiedDate?: string
  }

  export class ProductRuleCheckDTO {
    /** 柜次规则编码 */
    code?: string

    /** 编辑校验需要传ID */
    id?: number

    /** 柜次规则名称 */
    name?: string

    /** 商品品类ID */
    productId?: number
  }

  export class ProductRuleListDTO {
    /** 页码 */
    pageNo: number

    /** 每页条数 */
    pageSize: number

    /** 商品品类ID */
    productId?: number
  }

  export class ProductRuleListVO {
    /** 柜次规则编码 */
    code?: string

    /** 状态。1: 启用, 99: 禁用 */
    enabled?: number

    /** 柜次规则ID */
    id?: number

    /** 月偏移量 */
    monthOffset?: number

    /** 柜次规则名称 */
    name?: string

    /** 多语言 */
    nameLocale?: ObjectMap<any, string>
  }

  export class ProductRuleSaveDTO {
    /** 柜次规则编码 */
    code?: string

    /** 是否启用  1启用，99禁用 */
    enabled?: number

    /** 主键ID,有则编辑，无则新增 */
    id?: number

    /** 月偏移量 */
    monthOffset?: number

    /** 柜次规则名称 */
    name?: string

    /** 品类名称国际化 */
    nameLocale?: ObjectMap<any, string>

    /** 商品品类ID */
    productId?: number
  }

  export class ProductRuleVO {
    /** 商品编码 */
    code?: string

    /** 状态。1: 启用, 99: 禁用 */
    enabled?: number

    /** 柜次规则ID */
    id?: number

    /** 月偏移量 */
    monthOffset?: number

    /** 柜次规则名称 */
    name?: string

    /** 多语言 */
    nameLocale?: ObjectMap<any, string>
  }

  export class ProductSaveDTO {
    /** 编码 */
    code?: string

    /** 主键ID,有则编辑，无则新增 */
    id?: number

    /** 商品图片 */
    img?: defs.FileVO

    /** 商品品类名称 */
    name?: string

    /** 品类名称国际化 */
    nameLocale?: ObjectMap<any, string>
  }

  export class ProductSkuOptionSaveVO {
    /** SKU 规格选项值ID数组 */
    specOptions: Array<number>
  }

  export class ProductSkuOptionVO {
    /** id */
    id?: number

    /** 名称 */
    name?: string

    /** 选项列表 */
    options?: Array<defs.SelectOption>
  }

  export class ProductSkuPO {
    /** code */
    code?: string

    /** createBy */
    createBy?: number

    /** createTime */
    createTime?: string

    /** deleted */
    deleted?: number

    /** exportCurrency */
    exportCurrency?: number

    /** exportPrice */
    exportPrice?: number

    /** grossWeight */
    grossWeight?: number

    /** id */
    id?: number

    /** importCurrency */
    importCurrency?: number

    /** importPrice */
    importPrice?: number

    /** netWeight */
    netWeight?: number

    /** productId */
    productId?: number

    /** productSpuId */
    productSpuId?: number

    /** snapshotId */
    snapshotId?: number

    /** specIds */
    specIds?: string

    /** specOptionIds */
    specOptionIds?: string

    /** updateBy */
    updateBy?: number

    /** updateTime */
    updateTime?: string
  }

  export class ProductSkuQueryVO {
    /** 页码 */
    pageNo: number

    /** 页大小 */
    pageSize: number

    /** 商品品类 ID */
    productId: number

    /** 商品SPU ID */
    productSpuId: number

    /** 规格选项列表 */
    specOptions?: Array<number>
  }

  export class ProductSkuSaveVO {
    /** SKU 规格选项值ID数组 */
    specOptions: Array<defs.ProductSkuOptionSaveVO>

    /** 商品SPU ID */
    spuId: number
  }

  export class ProductSkuUpdateVO {
    /** SKU 编码 */
    code?: string

    /** 出口货币1: 人民币, 2: 美元 */
    exportCurrency?: number

    /** 出口单价 */
    exportPrice?: number

    /** 毛重 */
    grossWeight?: number

    /** SKU ID */
    id: number

    /** 进口货币，1: 人民币, 2: 美元 */
    importCurrency?: number

    /** 进口单价 */
    importPrice?: number

    /** 净重 */
    netWeight?: number

    /** 运营用户 ID 列表 */
    operators?: Array<number>
  }

  export class ProductSkuVO {
    /** SKU 编码 */
    code?: string

    /** 出口货币1: 人民币, 2: 美元 */
    exportCurrency?: number

    /** 出口单价 */
    exportPrice?: number

    /** 毛重 */
    grossWeight?: number

    /** SKU ID */
    id?: number

    /** 进口货币，1: 人民币, 2: 美元 */
    importCurrency?: number

    /** 进口单价 */
    importPrice?: number

    /** 净重 */
    netWeight?: number

    /** 运营用户 名称 列表 */
    operatorNames?: Array<string>

    /** 运营用户 ID 列表 */
    operators?: Array<number>

    /** SKU所属品类ID */
    productId?: number

    /** SKU所属SPU ID */
    productSpuId?: number

    /** 快照I */
    snapshotId?: number

    /** SKU 规格类型与选项值对应值,key为specId,value为option名称 */
    specOptions?: Array<defs.ObjectMap<number, string>>
  }

  export class ProductSpecOptionResultVO {
    /** 选项 ID */
    id?: number

    /** 规格选项值 */
    name?: string

    /** 规格选项值国际化 */
    nameLocale?: ObjectMap<any, string>

    /** 规格 ID */
    productSpecId?: number

    /** 规格选项值排序 */
    sort?: number
  }

  export class ProductSpecOptionSaveDTO {
    /** 规格选项值ID(新增时候为空) */
    id?: number

    /** 规格选项值 */
    name: string

    /** 规格选项名称 */
    nameLocale?: ObjectMap<any, string>

    /** 规格选项值排序 */
    sort?: number
  }

  export class ProductSpecOptionVO {
    /** 选项 ID */
    id?: number

    /** 选项名称 */
    name?: string

    /** 选项名称国际化 */
    nameLocale?: ObjectMap<any, string>

    /** 规格 ID */
    productSpecId?: number

    /** 选项排序 */
    sort?: number
  }

  export class ProductSpecResultVO {
    /** 规格类型ID */
    id?: number

    /** 规格类型名称 */
    name?: string

    /** 规格类型名称国际化 */
    nameLocale?: ObjectMap<any, string>

    /** 规格类型选项值信息顺序 */
    options?: Array<defs.ProductSpecOptionResultVO>

    /** 规格类型顺序 */
    sort?: number
  }

  export class ProductSpecSaveDTO {
    /** 规格类型ID(新增时为空) */
    id?: number

    /** 规格类型名称 */
    name?: string

    /** 规格类型名称 */
    nameLocale?: ObjectMap<any, string>

    /** 规格类型排序 */
    sort?: number

    /** 规格类型选项 */
    value?: Array<defs.ProductSpecOptionSaveDTO>
  }

  export class ProductSpecVO {
    /** 规格 ID */
    id?: number

    /** name */
    name?: string

    /** nameLocale */
    nameLocale?: ObjectMap<any, string>

    /** options */
    options?: Array<defs.ProductSpecOptionVO>

    /** 商品 ID。批量创建/更新时可以不传（需要使用 SaveProductSpecsVO 对象）。 */
    productId?: number

    /** sort */
    sort?: number

    /** 标记逻辑表名，后期商品整体重构后可能去除 */
    table?: string
  }

  export class ProductSpuAddDTO {
    /** 图片 */
    fileVOS?: Array<defs.FileVO>

    /** SPU名称 */
    name: string

    /** SPU名称 国际化 */
    nameLocale?: ObjectMap<any, string>

    /** SPU产地ID */
    placeId: number

    /** 商品品类ID */
    productId: number

    /** SPU编码 */
    spuCode?: string

    /** SPU品种ID */
    varietyId: number
  }

  export class ProductSpuDetailInfoResultVO {
    /** fileVOS */
    fileVOS?: Array<defs.FileVO>

    /** id */
    id?: number

    /** name */
    name?: string

    /** nameLocale */
    nameLocale?: ObjectMap<any, string>

    /** place */
    place?: string

    /** productId */
    productId?: number

    /** productName */
    productName?: string

    /** specResultVOList */
    specResultVOList?: Array<defs.ProductSpecResultVO>

    /** spuCode */
    spuCode?: string

    /** variety */
    variety?: string
  }

  export class ProductSpuEditDTO {
    /** 图片 */
    fileVOS?: Array<defs.FileVO>

    /** SPU ID */
    id: number

    /** spu名称 */
    name?: string

    /** SPU ID */
    nameLocale?: ObjectMap<any, string>

    /** SPU编码 */
    spuCode?: string
  }

  export class ProductSpuEditStatusDTO {
    /** spu id */
    spuId: number

    /** 修改之后的状态 1_启用 99_禁用 */
    status: 1 | 99 | 1 | 99
  }

  export class ProductSpuPageResultVO {
    /** id */
    id?: number

    /** place */
    place?: string

    /** skuNumber */
    skuNumber?: number

    /** spuCode */
    spuCode?: string

    /** spuName */
    spuName?: string

    /** status */
    status?: number

    /** variety */
    variety?: string
  }

  export class ProductSpuSpecSaveDTO {
    /** 商品 ID */
    productId: number

    /** SPU规格类型信息 */
    productSpecSaveDTOS: Array<defs.ProductSpecSaveDTO>

    /** 商品SPU ID */
    spuId: number
  }

  export class ProductUsedOptionVO {
    /** sku关联optionId */
    optionId?: number

    /** specId */
    specId?: number
  }

  export class ProductVO {
    /** 商品编码 */
    code?: string

    /** 状态。1: 启用, 99: 禁用 */
    enabled?: number

    /** 商品品类ID */
    id?: number

    /** 图片对象 */
    img?: defs.FileVO

    /** 图片链接 */
    imgUrl?: string

    /** 商品品类名称 */
    name?: string

    /** 多语言 */
    nameLocale?: ObjectMap<any, string>

    /** specs */
    specs?: Array<defs.ProductSpecVO>
  }

  export class ReceiveInfoVO {
    /** 收货信息-压车天数 */
    actualUnloadTime?: number

    /** 收货信息-到达销地时间 */
    arrivalTime?: string

    /** 收货信息-司机补打冷费 */
    driverChillFee?: number

    /** 收货信息-报空交接文件 */
    emptyFile?: Array<defs.FileVO>

    /** 收货信息-报空合计费用 */
    emptyTotalFee?: number

    /** 收货信息-压车费用 */
    pressFee?: number

    /** 还箱证明文件 */
    proofFileVO?: defs.FileVO

    /** 收货信息-销地收货时间 */
    receiveTime?: string

    /** 收货信息-收货人 */
    receiver?: string

    /** 收货信息-报空备注 */
    remark?: string
  }

  export class ReceiveWebDetailVO {
    /** 尾程发货时间 */
    actualStartShipTime?: string

    /** 风口单位% */
    airPort?: number

    /** 进口港名称 */
    arrivePortName?: string

    /** 柜次号 */
    cabinetBatchCode?: string

    /** 柜号 */
    cabinetCode?: string

    /** 分柜号 */
    cabinetSplitCode?: string

    /** 车牌号 */
    carNo?: string

    /** 抽检数量 */
    checkNumber?: string

    /** 合同号 */
    contractCode?: string

    /** 计划ID */
    deliveryPlanId?: number

    /** 分柜单ID */
    deliverySplitOrderId?: number

    /** 司机名 */
    driverName?: string

    /** 司机联系方式 */
    driverPhone?: string

    /** 压车天数 */
    emptyTime?: number

    /** 压车费用 ,单位分 */
    escortFee?: number

    /** 司机补打冷费,单位分 */
    extraFee?: number

    /** 货物来源码 1：海外基地 2：国内产地 3：海外进口 */
    goodsSource?: number

    /** 货物来源名称 海外基地,国内产地,海外进口 */
    goodsSourceName?: string

    /** 发货单ID */
    id?: number

    /** 运输公司 */
    logisticsCompanyName?: string

    /** 操作历史 */
    operations?: Array<defs.OperLogVO>

    /** 商品名称 */
    productName?: string

    /** 收货方 */
    receiverName?: string

    /** 到达销地时间 */
    receiverTime?: string

    /** 收货方类型1：销地分公司 2客户 */
    receiverType?: number

    /** 收货人 */
    receiverUserName?: string

    /** 还箱备注 */
    remark?: string

    /** 还箱交接文件 */
    returnCabinetFile?: Array<defs.FileVO>

    /** 发货方地址 */
    senderAddress?: string

    /** 还箱交接文件 */
    shiftFileList?: string

    /** 装柜方式码1：原柜 2：转柜 3：装柜 */
    shipmentMethod?: number

    /** 装柜方式名称 */
    shipmentMethodName?: string

    /** 销地收货时间 */
    sopTime?: string

    /** 商品明细 */
    tables?: Array<defs.TableVO>

    /** 温度单位为℃ */
    temperature?: number

    /** 还箱总费用,单位分 */
    totalFee?: number

    /** 总件数 */
    totalPack?: number

    /** 挂车号 */
    trailerCarNo?: string
  }

  export class ReceiveWebListVO {
    /** 柜次号 */
    cabinetBatchCode?: string

    /** 柜号 */
    cabinetCode?: string

    /** 合同号 */
    contractCode?: string

    /** 计划ID */
    deliveryPlanId?: number

    /** 分柜订单ID */
    deliverySplitOrderId?: number

    /** 分柜订单ID */
    id?: number

    /** 品类名称 */
    productName?: string

    /** 销地收货时间 */
    receivedDate?: string

    /** 收货方名称,如果多个收货方逗号分割 */
    receiverName?: string

    /** 发货方 */
    senderName?: string

    /** 状态编码  08:国内待发运|12:国内已发运|13:国内已到达销区|14:国内销区已收货|15:已还箱 */
    state?: string

    /** 状态名称 */
    stateName?: string
  }

  export class ReceiverCustomerInfoVO {
    /** 收货方信息-收货方ID */
    receiverId?: number

    /** 收货方信息-收货方名称 */
    receiverName?: string

    /** 收货方信息-收货方类型 */
    receiverType?: string

    /** 发货方信息-贸易方名称 */
    traderName?: string
  }

  export class ReportGroupVO {
    /** countPerMonth */
    countPerMonth?: number

    /** perMonthStr */
    perMonthStr?: string
  }

  export class ReportSalesVO {
    /** addGrowthRate */
    addGrowthRate?: string

    /** avgCabinetPerDay */
    avgCabinetPerDay?: number

    /** avgCabinetPerDayThisMonth */
    avgCabinetPerDayThisMonth?: number

    /** totalCabinetCount */
    totalCabinetCount?: number

    /** totalCabinetCountPerMonth */
    totalCabinetCountPerMonth?: number

    /** transitCabinetCount */
    transitCabinetCount?: number
  }

  export class Resource {
    /** description */
    description?: string

    /** file */
    file?: defs.File

    /** filename */
    filename?: string

    /** inputStream */
    inputStream?: defs.InputStream

    /** open */
    open?: boolean

    /** readable */
    readable?: boolean

    /** uri */
    uri?: defs.URI

    /** url */
    url?: defs.URL
  }

  export class Result<T0 = any> {
    /** 返回代码 */
    code?: number

    /** 返回处理消息 */
    message?: string

    /** 返回数据对象 */
    result?: T0

    /** 成功标志 */
    success?: boolean

    /** 时间戳 */
    timestamp?: number
  }

  export class RolePermissionEditDTO {
    /** 数据权限ids */
    dataRuleIds?: string

    /** 菜单权限id */
    permissionIds?: Array<number>

    /** 角色id */
    roleId?: number
  }

  export class SelectCascaderOption {
    /** 是否叶节点 */
    isLeaf?: boolean

    /** 选项名称 */
    label?: string

    /** 选项值 */
    value?: string
  }

  export class SelectOption {
    /** 子下拉 */
    children?: Array<defs.SelectOption>

    /** 是否禁用 */
    disabled?: boolean

    /** 选项名称 */
    label?: string

    /** 选项值 */
    value?: number
  }

  export class SelectTextOption {
    /** 子下拉 */
    children?: Array<defs.SelectTextOption>

    /** 是否禁用 */
    disabled?: boolean

    /** 选项名称 */
    label?: string

    /** 选项值 */
    value?: string
  }

  export class ShipmentInfoVO {
    /** 船运信息-实际到港时间 */
    actualArriveTime?: string

    /** 船运信息-实际离港时间 */
    actualDepartedTime?: string

    /** 船运信息-预计到港时间 */
    estimateArriveTime?: string

    /** 船运信息-预计离港时间 */
    estimateDepartedTime?: string

    /** 船运信息-计划离港时间 */
    expectDepartedTime?: string

    /** 船运信息-计划到港时间 */
    planArriveTime?: string

    /** 船运信息-船次号 */
    shipBatchCode?: string

    /** 船运信息-船公司 */
    shipCompany?: string

    /** 船运信息-船名 */
    shipName?: string

    /** 船运信息-地图地址 */
    url?: string
  }

  export class ShipperCustomerInfoVO {
    /** 发货方信息-工厂名称 */
    factoryId?: number

    /** 发货方信息-工厂名称 */
    factoryName?: string

    /** 发货方信息-备注 */
    remark?: string

    /** 发货方信息-发货方ID */
    shipmentId?: number

    /** 发货方信息-发货方名称 */
    shipmentName?: string
  }

  export class Sop {
    /** createBy */
    createBy?: number

    /** createTime */
    createTime?: string

    /** createTimeFm */
    createTimeFm?: string

    /** createTimeTo */
    createTimeTo?: string

    /** deleted */
    deleted?: number

    /** 启用状态：1启用 ，99：禁用 */
    enabled?: number

    /** id */
    id?: number

    /** 操作环节(1-国际装柜，2-堆场验货，3-转柜检验，4-销地收货，5-国内装柜) */
    operation?: number

    /** operationName */
    operationName?: string

    /** productCode */
    productCode?: string

    /** 商品ID */
    productId?: number

    /** productName */
    productName?: string

    /** updateBy */
    updateBy?: number

    /** updateTime */
    updateTime?: string
  }

  export class SopDetail {
    /** checkName */
    checkName?: string

    /** checkResultType */
    checkResultType?: number

    /** createBy */
    createBy?: number

    /** createTime */
    createTime?: string

    /** deleted */
    deleted?: number

    /** id */
    id?: number

    /** isRemark */
    isRemark?: number

    /** nameLocale */
    nameLocale?: string

    /** remarkRequired */
    remarkRequired?: number

    /** snapshotId */
    snapshotId?: number

    /** sopId */
    sopId?: number

    /** sort */
    sort?: number

    /** status */
    status?: number

    /** updateBy */
    updateBy?: number

    /** updateTime */
    updateTime?: string
  }

  export class SopDetailOptionData {
    /** 主键ID */
    id?: number

    /** 是否需要备注(1:是 0：不是) */
    isRemark?: number

    /** 检查项名称 */
    name?: string

    /** 名称多语言 json数据key=语言（全小写），value=名称 */
    nameLocale?: ObjectMap<any, string>

    /** 是否必须备注(1:是 0：不是) */
    remarkRequired?: number

    /** 选项排序从0开始 */
    sort?: number
  }

  export class SopDetailResult {
    /** 检查项名称 */
    checkName: string

    /** 检查结果类型(1-单选，2-多选，3-输入,4-日期时间) */
    checkResultType: number

    /** ID */
    id?: number

    /** 是否需要上传图片/视频(1:是 0：不是) */
    isRemark: number

    /** 名称多语言 json数据key=语言（全小写），value=名称 */
    nameLocale?: ObjectMap<any, string>

    /** 选项列表，单选和多选必填 */
    options?: Array<defs.SopDetailOptionData>

    /** 是否必须上传图片/视频(1:是 0：不是) */
    remarkRequired?: number

    /** sop的ID */
    sopId: number

    /** 检查项排序号 */
    sort: number

    /** 状态,1：启用 ，99：禁用 */
    status: number
  }

  export class SopDetailSaveRequest {
    /** 检查项名称 */
    checkName: string

    /** 检查结果类型(1-单选，2-多选，3-输入,4-日期时间) */
    checkResultType: number

    /** ID */
    id?: number

    /** 是否需要上传图片/视频(1:是 0：不是) */
    isRemark: number

    /** 名称多语言数据key=语言（全小写），value=名称 */
    nameLocale?: ObjectMap<any, string>

    /** 选项列表，单选和多选必填 */
    options?: Array<defs.SopDetailOptionData>

    /** 是否必须上传图片/视频(1:是 0：不是) */
    remarkRequired?: number

    /** sop的ID */
    sopId: number

    /** 检查项排序号 */
    sort: number

    /** 状态,1：启用 ，99：禁用 */
    status: number
  }

  export class SopListResult {
    /** 启用状态，1：启用 ，99：禁用 */
    enabled?: number

    /** 主键ID */
    id?: number

    /** SOP环节 */
    operation?: number

    /** SOP环节名称 */
    operationName?: string

    /** 商品Id */
    productId?: number

    /** 商品名称 */
    productName?: string
  }

  export class SopQuestionOptionVO {
    /** 是否需要备注(1:是 0：不是) */
    isRemark?: number

    /** 选项名称 */
    name?: string

    /** 是否必须备注(1:是 0：不是) */
    remarkRequired?: number

    /** SOP题目选项ID */
    sopDetailOptionId?: string
  }

  export class SopQuestionResultDTO {
    /** 题目结果 */
    answer: string

    /** 文件 */
    files?: Array<defs.FileVO>

    /** 备注 */
    remark?: string

    /** 题目ID */
    sopDetailId: number
  }

  export class SopQuestionVO {
    /** 题目答案 */
    answer?: defs.SopQuestionResultDTO

    /** 检查题目 */
    checkName?: string

    /** 检查结果类型(1-单选，2-多选，3-输入,4-日期时间) */
    checkResultType?: number

    /** 是否必须上传图片/视频(1:是 0：不是) */
    fileRequired?: number

    /** 是否需要上传图片/视频(1:是 0：不是) */
    isFile?: number

    /** 选择题选项 */
    options?: Array<defs.SopQuestionOptionVO>

    /** sop题目ID */
    sopDetailId?: number
  }

  export class SopResultAnswerVO {
    /** 分柜号 */
    cabinetSplitCode?: string

    /** 分柜订单ID */
    deliverySplitOrderId?: number

    /** sop执行问题答案 */
    questions?: Array<defs.SopQuestionVO>

    /** sop执行时间 */
    sopDate?: string

    /** sop执行人名称 */
    userName?: string

    /** sop执行人手机号 */
    userPhone?: string
  }

  export class SopResultDetailVO {
    /** 柜次号 */
    cabinetBatchCode?: string

    /** 柜号 */
    cabinetCode?: string

    /** 合同号 */
    contractCode?: string

    /** 客户收货方名称 */
    customerName?: string

    /** 运输方式(1, 陆运),(2, 海运),(3, 铁运) */
    deliveryMethod?: number

    /** 运输方式名称 */
    deliveryMethodName?: string

    /** 公司收货方名称 */
    departName?: string

    /** 计划ID */
    id?: number

    /** 品类名称 */
    productName?: string

    /** 产地名称 */
    productPlaceName?: string

    /** 收货方 */
    receiver?: Array<defs.SopResultReceiverVO>

    /** 收货方ID */
    receiverId?: number

    /** 收货方类型1：销地分公司 2客户 */
    receiverType?: number

    /** 发货方 */
    senderName?: string

    /** 商品名称 */
    spuNames?: string

    /** state */
    state?: string
  }

  export class SopResultListVO {
    /** 柜次号 */
    cabinetBatchCode?: string

    /** 柜号 */
    cabinetCode?: string

    /** 创建时间 */
    createDate?: string

    /** 客户收货方名称 */
    customerName?: string

    /** 运输方式(1, 陆运),(2, 海运),(3, 铁运) */
    deliveryMethod?: number

    /** 运输方式名称 */
    deliveryMethodName?: string

    /** 公司收货方名称 */
    departName?: string

    /** 计划ID */
    id?: number

    /** 品类名称 */
    productName?: string

    /** 产地名称 */
    productPlaceName?: string

    /** 收货方名称,如果多个收货方逗号分割 */
    receiverName?: string

    /** 收货方类型1：销地分公司 2客户 */
    receiverType?: number

    /** 发货方 */
    senderName?: string

    /** 商品名称 */
    spuNames?: string

    /** 状态编码  08:国内待发运|12:国内已发运|13:国内已到达销区|14:国内销区已收货|15:已还箱 */
    state?: string

    /** 状态名称 */
    stateName?: string
  }

  export class SopResultReceiverVO {
    /** 收货方ID */
    receiverId?: number

    /** 收货方名称 */
    receiverName?: string

    /** 收货方类型1：销地分公司 2客户 */
    receiverType?: number
  }

  export class SpecOptionSelectOptionVO {
    /** 规格选项值ID */
    id?: number

    /** 规格选项值 */
    name?: string

    /** 规格选项名称 */
    nameLocale?: ObjectMap<any, string>

    /** 规格选项值排序 */
    sort?: number
  }

  export class SpecSelectOptionVO {
    /** 规格选项ID */
    id?: number

    /** 规格选项名称 */
    name?: string

    /** 规格选项名称 */
    nameLocale?: ObjectMap<any, string>

    /** 规格选项排序 */
    sort?: number

    /** 规格选项值 */
    value?: Array<defs.SpecOptionSelectOptionVO>
  }

  export class StorageYardAddDTO {
    /** 堆场地址 */
    address?: string

    /** latitude 纬度 */
    lat?: string

    /** longitude 经度 */
    lng?: string

    /** 堆场名称（中文） */
    name?: string

    /** 国际化 */
    nameLocale?: ObjectMap<any, string>

    /** 操作人id数组 */
    operatorId?: Array<number>

    /** 状态 99 停用 1 启用 */
    status?: number
  }

  export class StorageYardEditDTO {
    /** 堆场地址 */
    address?: string

    /** id */
    id?: number

    /** latitude 纬度 */
    lat?: string

    /** longitude 经度 */
    lng?: string

    /** 堆场名称（中文） */
    name?: string

    /** nameLocale */
    nameLocale?: ObjectMap<any, string>

    /** 操作人id数组 */
    operatorId?: Array<number>

    /** 状态 0 停用 1 启用 */
    status?: number
  }

  export class StorageYardEditVO {
    /** address */
    address?: string

    /** id */
    id?: number

    /** latitude 纬度 */
    lat?: string

    /** longitude 经度 */
    lng?: string

    /** 堆场名称（中文） */
    name?: string

    /** nameLocale */
    nameLocale?: ObjectMap<any, string>

    /** 堆场操作人id列表 */
    operatorId?: Array<number>

    /** 1 启用 99 停用 */
    status?: number

    /** 入境口岸 */
    subPortName?: string
  }

  export class StorageYardListVO {
    /** 堆场地址 */
    address?: string

    /** id */
    id?: number

    /** latitude 纬度 */
    lat?: string

    /** longitude 经度 */
    lng?: string

    /** 堆场名称 */
    name?: string

    /** 国际化 */
    nameLocale?: ObjectMap<any, string>

    /** 堆场操作人id */
    operatorId?: Array<number>

    /** 堆场操作人 */
    operatorNames?: string

    /** 状态1 启用 99 禁用 */
    status?: number

    /** 入境口岸 */
    subPortName?: string
  }

  export class SupplierOrderVO {
    /** cabinetCount */
    cabinetCount?: number

    /** goodsSource */
    goodsSource?: number

    /** goodsSourceName */
    goodsSourceName?: string
  }

  export class SysDepart {
    /** address */
    address?: string

    /** contract */
    contract?: string

    /** country */
    country?: number

    /** createBy */
    createBy?: number

    /** createTime */
    createTime?: string

    /** deleted */
    deleted?: string

    /** departName */
    departName?: string

    /** departNameAbbr */
    departNameAbbr?: string

    /** departNameEn */
    departNameEn?: string

    /** departOrder */
    departOrder?: number

    /** departType */
    departType?: number

    /** description */
    description?: object

    /** fax */
    fax?: string

    /** id */
    id?: number

    /** lat */
    lat?: string

    /** lng */
    lng?: string

    /** memo */
    memo?: string

    /** mobile */
    mobile?: string

    /** nameLocale */
    nameLocale?: string

    /** orgCategory */
    orgCategory?: string

    /** orgCode */
    orgCode?: string

    /** orgType */
    orgType?: string

    /** parentId */
    parentId?: number

    /** status */
    status?: string

    /** updateBy */
    updateBy?: number

    /** updateTime */
    updateTime?: string
  }

  export class SysDepartBusinessInfo {
    /** 开户证明 */
    accountCert?: string

    /** 地址 */
    address?: string

    /** 营业执照信息 */
    bizLicense?: string

    /** departId */
    departId?: number

    /** 法定代表人 */
    legalRep?: string

    /** 其他证明 */
    otherCert?: string

    /** 统一社会信用代码 */
    socialCreditCode?: string

    /** 企业名称 */
    title?: string
  }

  export class SysDepartEditDTO {
    /** 地址 */
    address?: string

    /** 联系人 */
    contact?: string

    /** 联系方式 */
    contactMobile?: string

    /** 所处国家编码 1 中国 2 越南 3 泰国 */
    country?: number

    /** 工商信息 */
    departBusinessInfo?: defs.DepartBusinessInfoDTO

    /** 组织名称 */
    departName?: string

    /** id */
    id?: number

    /** latitude 纬度 */
    lat?: string

    /** longitude 经度 */
    lng?: string

    /** 组织类型 */
    orgCategories?: Array<number>

    /** 组织编码 */
    orgCode?: string

    /** 父组织id */
    parentId?: number

    /** 备注 */
    remark?: string
  }

  export class SysDepartEditVO {
    /** 地址 */
    address?: string

    /** 工商信息 */
    businessInfo?: defs.DepartBusinessInfoDTO

    /** 联系人 */
    contact?: string

    /** 联系方式 */
    contactMobile?: string

    /** 所处国家 */
    country?: number

    /** 组织名称 */
    departName?: string

    /** 唯一key,也是depart的id */
    id?: number

    /** latitude 纬度 */
    lat?: string

    /** longitude 经度 */
    lng?: string

    /** 组织类型列表 */
    orgCategories?: Array<number>

    /** 组织编码 */
    orgCode?: string

    /** 父组织名称 */
    parentDepartName?: string

    /** 唯一key,也是depart的id */
    parentId?: number

    /** 备注 */
    remark?: string

    /** 状态 1 启用 99 禁用 */
    status?: string
  }

  export class SysDepartTreeModel {
    /** 地址 */
    address?: string

    /** 工商信息 */
    businessInfo?: defs.SysDepartBusinessInfo

    /** children */
    children?: Array<defs.SysDepartTreeModel>

    /** contract */
    contract?: string

    /** 创建人 */
    createBy?: number

    /** 创建时间 */
    createTime?: string

    /** 是否删除 */
    deleted?: string

    /** 组织名称 */
    departName?: string

    /** 组织名称缩写 */
    departNameAbbr?: string

    /** 组织英文名 */
    departNameEn?: string

    /** 顺序 */
    departOrder?: number

    /** 描述 */
    description?: object

    /** 传真 */
    fax?: string

    /** 唯一key,也是depart的id */
    id?: number

    /** isLeaf */
    isLeaf?: boolean

    /** 唯一key,也是depart的id */
    key?: number

    /** 备注 */
    memo?: string

    /** 联系电话 */
    mobile?: string

    /** nameLocale */
    nameLocale?: string

    /** 组织类型列表 */
    orgCategories?: Array<number>

    /** Category */
    orgCategory?: string

    /** 组织编码 */
    orgCode?: string

    /** 组织类型 */
    orgType?: string

    /** 唯一key,也是depart的id */
    parentId?: number

    /** 状态 */
    status?: string

    /** 唯一key,也是depart的name */
    title?: string

    /** 更新人 */
    updateBy?: number

    /** 更新时间 */
    updateTime?: string

    /** 唯一key,也是depart的id */
    value?: number
  }

  export class SysDepartUsersVO {
    /** depId */
    depId?: number

    /** userIdList */
    userIdList?: Array<number>
  }

  export class SysDictAddDTO {
    /** 字典描述 */
    description?: string

    /** 字典CODE */
    dictCode?: string

    /** 字典名称 */
    dictName?: string
  }

  export class SysDictItemAddDTO {
    /** 描述 */
    description?: string

    /** 字典id */
    dictId?: number

    /** 字典项文本 */
    itemText?: string

    /** 字典项值 */
    itemValue?: string

    /** 排序 */
    sortOrder?: number
  }

  export class SysFillRule {
    /** 创建人 */
    createBy?: string

    /** 创建时间 */
    createTime?: string

    /** 主键ID */
    id?: string

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

  export class SysLoginModel {
    /** 验证码 */
    captcha?: string

    /** 验证码key */
    checkKey?: string

    /** 密码 */
    password?: string

    /** 账号 */
    username?: string
  }

  export class SysPosition {
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

    /** 职级 */
    postRank?: string

    /** 组织机构编码 */
    sysOrgCode?: string

    /** 修改人 */
    updateBy?: string

    /** 修改时间 */
    updateTime?: string
  }

  export class SysRole {
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

    /** 角色名 */
    roleName?: string

    /** 状态（1：正常 99：禁用） */
    status?: number

    /** 更新人 */
    updateBy?: number

    /** 更新时间 */
    updateTime?: string
  }

  export class SysSettingPageVO {
    /** 上传时间 */
    createTime?: string

    /** 资源路径 */
    fileVOS?: Array<defs.FileVO>

    /** 主键 */
    id?: number

    /** 名称 */
    name?: string

    /** 状态 1_上架 99_下架 */
    status?: number
  }

  export class SysSettingQueryDTO {
    /** 资料名称 */
    name?: string

    /** 页码 */
    pageNo: number

    /** 每页条数 */
    pageSize: number
  }

  export class SysUser {
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

    /** 部门code */
    orgCode?: string

    /** 电话 */
    phone?: string

    /** 职务 */
    post?: string

    /** 真实姓名 */
    realname?: string

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

  export class SysUserDepart {
    /** depId */
    depId?: number

    /** id */
    id?: number

    /** userId */
    userId?: number
  }

  export class SysUserRole {
    /** id */
    id?: number

    /** roleId */
    roleId?: number

    /** userId */
    userId?: number
  }

  export class SysUserSysDepartModel {
    /** sysDepart */
    sysDepart?: defs.SysDepart

    /** sysUser */
    sysUser?: defs.SysUser
  }

  export class SysUserVO {
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

    /** 组织IDS */
    departIds?: Array<number>

    /** 电子邮件 */
    email?: string

    /** 主键 */
    id?: number

    /** 是否是管理员（1：是 2：否） */
    isAdmin?: number

    /** 用户名称 */
    nickname?: string

    /** 部门Code */
    orgCode?: string

    /** orgNames */
    orgNames?: Array<string>

    /** permissions */
    permissions?: Array<string>

    /** 电话 */
    phone?: string

    /** 职务 */
    post?: string

    /** 真实姓名 */
    realname?: string

    /** 角色IDS */
    roleIds?: Array<number>

    /** roleNames */
    roleNames?: Array<string>

    /** 性别（1：男 2：女） */
    sex?: number

    /** 状态（1：正常 2：冻结） */
    status?: number

    /** 座机号 */
    telephone?: string

    /** 登陆账号 */
    username?: string

    /** 工号。唯一值 */
    workNo?: string
  }

  export class TableVO {
    /** 表单列 */
    columns?: Array<defs.Column>

    /** 数据集合，key=filed。必返回key=id的数据，为skuId */
    records?: Array<defs.ObjectMap<string, ObjectMap>>

    /** 商品ID */
    spuId?: number

    /** 表单标题，即商品名称 */
    title?: string

    /** 总件数 */
    total?: number
  }

  export class TempMonitorDetailVO {
    /** 风口 */
    airPort?: number

    /** 柜次 */
    cabinetBatchCode?: string

    /** 柜号 */
    cabinetCode?: string

    /** 装柜明细 */
    items?: Array<defs.TableVO>

    /** 温度监控id */
    monitorId?: number

    /** 是否超期 */
    overdue?: boolean

    /** planid */
    planId?: number

    /** NORMAL 正常 EXCEPTION 异常 */
    qualityState?: string

    /** 1 原柜 2 转柜 */
    shipmentMethod?: number

    /** 是否需要做转柜sop 1 需要 99 不需要 */
    sopEnabled?: number

    /** state */
    state?: string

    /** status */
    status?: number

    /** 设置温度 */
    temperature?: number
  }

  export class TempMonitorListVO {
    /** 风口 */
    airPort?: number

    /** 进口港 */
    arrivePortName?: string

    /** 柜次 */
    cabinetBatchCode?: string

    /** 柜号 */
    cabinetCode?: string

    /** 是否超期 */
    overdue?: boolean

    /** 计划id */
    planId?: number

    /** 计划发货时间 */
    planStartShipTime?: string

    /** 商品id */
    productId?: string

    /** 品类 */
    productName?: string

    /** 品类图片 */
    productPic?: string

    /** qualityState */
    qualityState?: string

    /** 收货方 */
    receiverName?: Array<string>

    /** 1 原柜 2转柜 3装柜 */
    shipmentMethod?: number

    /** 货运方式翻译 */
    shipmentMethodName?: string

    /** 状态 */
    state?: string

    /** 状态翻译 */
    stateName?: string

    /** 状态 1 处理 2 已处理 */
    status?: number

    /** statusName */
    statusName?: string

    /** 任务接收时间 */
    taskDate?: string

    /** 设置温度 */
    temperature?: number
  }

  export class TempMonitorQueryDTO {
    /** 品类id */
    productIds?: Array<number>

    /** 状态筛选 */
    states?: Array<string>

    /** 1 待处理 2 已处理 */
    status?: number

    /** 任务接受结束时间 */
    taskEndTime?: string

    /** 任务接受开始时间 */
    taskStartTime?: string
  }

  export class TempMonitorSettingDTO {
    /** 风口 */
    airPort?: number

    /** 计划id */
    planId?: number

    /** 是否异常 NORMAL 正常 EXCEPTION 异常 */
    qualityState?: string

    /** 温度 */
    temperature?: number
  }

  export class TempMonitorSettingEditDTO {
    /** 风口 */
    airPort?: number

    /** 监控id */
    monitorId?: number

    /** 计划id */
    planId?: number

    /** 是否异常 NORMAL 正常 EXCEPTION 异常 */
    qualityState?: string

    /** 温度 */
    temperature?: number
  }

  export class URI {
    /** absolute */
    absolute?: boolean

    /** authority */
    authority?: string

    /** fragment */
    fragment?: string

    /** host */
    host?: string

    /** opaque */
    opaque?: boolean

    /** path */
    path?: string

    /** port */
    port?: number

    /** query */
    query?: string

    /** rawAuthority */
    rawAuthority?: string

    /** rawFragment */
    rawFragment?: string

    /** rawPath */
    rawPath?: string

    /** rawQuery */
    rawQuery?: string

    /** rawSchemeSpecificPart */
    rawSchemeSpecificPart?: string

    /** rawUserInfo */
    rawUserInfo?: string

    /** scheme */
    scheme?: string

    /** schemeSpecificPart */
    schemeSpecificPart?: string

    /** userInfo */
    userInfo?: string
  }

  export class URL {
    /** authority */
    authority?: string

    /** content */
    content?: object

    /** defaultPort */
    defaultPort?: number

    /** deserializedFields */
    deserializedFields?: defs.URLStreamHandler

    /** file */
    file?: string

    /** host */
    host?: string

    /** path */
    path?: string

    /** port */
    port?: number

    /** protocol */
    protocol?: string

    /** query */
    query?: string

    /** ref */
    ref?: string

    /** serializedHashCode */
    serializedHashCode?: number

    /** userInfo */
    userInfo?: string
  }

  export class URLStreamHandler {}

  export class UpdateBatchProductSkuVO {
    /** 出口货币1: 人民币, 2: 美元 */
    exportCurrency?: number

    /** 出口单价 */
    exportPrice?: number

    /** 毛重 */
    grossWeight?: number

    /** 进口货币，1: 人民币, 2: 美元 */
    importCurrency?: number

    /** 进口单价 */
    importPrice?: number

    /** 净重 */
    netWeight?: number

    /** 运营用户 ID 列表 */
    operators?: Array<number>

    /** 商品品类 ID */
    productId: number

    /** 商品SPU ID */
    productSpuId: number

    /** 规格选项列表 */
    specOptions?: Array<number>
  }

  export class UpdatePasswordVO {
    /** password */
    password?: string
  }

  export class UserCreatedVO {
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

    /** initialPassword */
    initialPassword?: string

    /** 是否是管理员（1：是 2：否） */
    isAdmin?: number

    /** 用户名称 */
    nickname?: string

    /** 部门code */
    orgCode?: string

    /** 电话 */
    phone?: string

    /** 职务 */
    post?: string

    /** 真实姓名 */
    realname?: string

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

  export class UserEditDTO {
    /** 组织IDS */
    departIds?: Array<number>

    /** 主键 */
    id?: number

    /** 用户名称 */
    nickname?: string

    /** 电话 */
    phone?: string

    /** 真实姓名 */
    realname?: string

    /** 角色IDS */
    roleIds?: Array<number>

    /** 座机号 */
    telephone?: string

    /** 登陆账号 */
    username?: string

    /** 工号。唯一值 */
    workNo?: string
  }

  export class UserFrozenDTO {
    /** 主键 */
    id?: number

    /** 状态（1：正常，99：禁用） */
    status?: number
  }

  export class UserInfoVO {
    /** permissionIds */
    permissionIds?: Array<number>

    /** user */
    user?: defs.UserVO
  }

  export class UserUpdatePwdDTO {
    /** 旧密码 */
    oldPwd?: string

    /** 新密码 */
    pwd?: string
  }

  export class UserVO {
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

    /** 组织IDS */
    departIds?: Array<number>

    /** 电子邮件 */
    email?: string

    /** 主键 */
    id?: number

    /** 是否是管理员（1：是 2：否） */
    isAdmin?: number

    /** 用户名称 */
    nickname?: string

    /** 部门Code */
    orgCode?: string

    /** 电话 */
    phone?: string

    /** 职务 */
    post?: string

    /** 真实姓名 */
    realname?: string

    /** 角色IDS */
    roleIds?: Array<number>

    /** 性别（1：男 2：女） */
    sex?: number

    /** 状态（1：正常 2：冻结） */
    status?: number

    /** 座机号 */
    telephone?: string

    /** 登陆账号 */
    username?: string

    /** 工号。唯一值 */
    workNo?: string
  }
}

declare namespace API {
  /**
   * 财务管理-销售单号管理
   */
  export namespace billCode {
    /**
        * 销售单号-模板下载
下载为xlsx文件
        * /finance/billCode/download
        */
    export namespace exportXls {
      export class Params {
        /** 需下载的主键数组 */
        ids?: Array<number>
        /** map */
        map?: any
      }

      export type Response = any
      export const init: Response
      export function request(params: Params): Promise<any>
    }

    /**
     * 销售单号-销售单号修改
     * /finance/billCode/edit
     */
    export namespace edit {
      export class Params {}

      export type Response = defs.Result<string>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.BillCodeEditDTO
      ): Promise<defs.Result<string>>
    }

    /**
     * 销售单号-根据ID查询详情
     * /finance/billCode/info
     */
    export namespace info {
      export class Params {
        /** id */
        id: number
      }

      export type Response = defs.Result<defs.BillCodeVO>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.BillCodeVO>>
    }

    /**
     * 销售单号-分页列表查询(默认1，10)
     * /finance/billCode/list
     */
    export namespace queryPageList {
      export class Params {
        /** 销售单号，模糊查询 */
        billCode?: string
        /** 柜次，模糊查询 */
        cabinetBatchCode?: string
        /** 柜号，模糊查询 */
        cabinetCode?: string
        /** pageNo */
        pageNo?: number
        /** pageSize */
        pageSize?: number
        /** 发货方ID，精确查询 */
        senderId?: number
        /** 状态，精确查询 */
        state?: string
      }

      export type Response = defs.Result<defs.Page<defs.BillCodeListVO>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.Page<defs.BillCodeListVO>>>
    }

    /**
     * 销售单号-获取状态下拉菜单
     * /finance/billCode/statusList
     */
    export namespace statusList {
      export class Params {}

      export type Response = defs.Result<Array<defs.SelectTextOption>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<Array<defs.SelectTextOption>>>
    }

    /**
     * 销售单号-模板上传
     * /finance/billCode/upload
     */
    export namespace importExcel {
      export class Params {
        /** fileId */
        fileId?: string
        /** fileUrl */
        fileUrl?: string
        /** filename */
        filename?: string
      }

      export type Response = defs.Result<string>
      export const init: Response
      export function request(params: Params): Promise<defs.Result<string>>
    }
  }

  /**
   * 合同管理相关接口  ---李健飞
   */
  export namespace contract {
    /**
     * 合同-新增合同
     * /business/contract/add
     */
    export namespace addContract {
      export class Params {}

      export type Response = defs.Result<number>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.ContractAddDTO
      ): Promise<defs.Result<number>>
    }

    /**
     * 合同-合同编号校验
     * /business/contract/check/contractCode
     */
    export namespace checkContractCode {
      export class Params {
        /** 合同编号 */
        contractCode: string
        /** 合同ID(修改时候校验排除自己) */
        contractId?: number
        /** 商品品类ID */
        productId: number
      }

      export type Response = defs.Result<boolean>
      export const init: Response
      export function request(params: Params): Promise<defs.Result<boolean>>
    }

    /**
     * 合同-合同详情
     * /business/contract/detail
     */
    export namespace queryDetailInfo {
      export class Params {
        /** 合同ID */
        contractId: number
      }

      export type Response = defs.Result<defs.ContractDetailVO>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.ContractDetailVO>>
    }

    /**
     * 合同-编辑合同
     * /business/contract/edit
     */
    export namespace edit {
      export class Params {}

      export type Response = defs.Result<number>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.ContractEditDTO
      ): Promise<defs.Result<number>>
    }

    /**
     * 修改合同可用状态
     * /business/contract/edit/status
     */
    export namespace editStatus {
      export class Params {}

      export type Response = defs.Result<string>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.ContractEditStatusDTO
      ): Promise<defs.Result<string>>
    }

    /**
     * 合同信息下拉菜单
     * /business/contract/list/contract
     */
    export namespace listOptions {
      export class Params {
        /** 商品品类ID */
        productId: number
      }

      export type Response = defs.Result<Array<defs.ContractTextOptionVO>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<Array<defs.ContractTextOptionVO>>>
    }

    /**
     * 合同类型信息下拉菜单
     * /business/contract/list/contractType
     */
    export namespace listContractType {
      export class Params {}

      export type Response = defs.Result<Array<defs.SelectOption>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<Array<defs.SelectOption>>>
    }

    /**
     * 合同-分页列表查询
     * /business/contract/page
     */
    export namespace queryPageList {
      export class Params {}

      export type Response = defs.Result<defs.IPage<defs.ContractPageListVO>>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.ContractPageQueryDTO
      ): Promise<defs.Result<defs.IPage<defs.ContractPageListVO>>>
    }
  }

  /**
   * 客户管理接口
   */
  export namespace customer {
    /**
     * 客户管理-添加
     * /business/customer/add
     */
    export namespace add {
      export class Params {}

      export type Response = defs.Result<void>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.CustomerAddDTO
      ): Promise<defs.Result<void>>
    }

    /**
     * 修改用户状态
     * /business/customer/changeState
     */
    export namespace changeStatus {
      export class Params {
        /** id */
        id: number
        /** status */
        status: number
      }

      export type Response = defs.Result<void>
      export const init: Response
      export function request(params: Params): Promise<defs.Result<void>>
    }

    /**
     * 客户管理表-编辑
     * /business/customer/edit
     */
    export namespace edit {
      export class Params {}

      export type Response = defs.Result<void>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.CustomerEditDTO
      ): Promise<defs.Result<void>>
    }

    /**
     * 客户管理-分页列表查询
     * /business/customer/list
     */
    export namespace queryPageList {
      export class Params {
        /** 服务区域名称 */
        departName?: string
        /** 客户名称 */
        name?: string
        /** 页码 */
        pageNo: number
        /** 每页条数 */
        pageSize: number
      }

      export type Response = defs.Result<defs.IPage<defs.CustomerListVO>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.IPage<defs.CustomerListVO>>>
    }

    /**
     * 根据id查询客户信息
     * /business/customer/queryById
     */
    export namespace queryById {
      export class Params {
        /** id */
        id: number
      }

      export type Response = defs.Result<defs.CustomerEditVO>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.CustomerEditVO>>
    }

    /**
     * 服务区域下拉选择列表
     * /business/customer/select
     */
    export namespace selectList {
      export class Params {
        /** customerId */
        customerId: number
      }

      export type Response = defs.Result<Array<defs.SelectOption>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<Array<defs.SelectOption>>>
    }
  }

  /**
   * 客户仓库管理
   */
  export namespace customerDepository {
    /**
     * 客户仓库--校验名称 编辑时需要传主键ID+名称
     * /business/customer/depository/checkName
     */
    export namespace checkName {
      export class Params {}

      export type Response = defs.Result<boolean>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.CustomerDepositoryCheckNameDTO
      ): Promise<defs.Result<boolean>>
    }

    /**
     * 客户仓库--启用禁用
     * /business/customer/depository/enable
     */
    export namespace enable {
      export class Params {
        /** id */
        id: number
      }

      export type Response = defs.Result<string>
      export const init: Response
      export function request(params: Params): Promise<defs.Result<string>>
    }

    /**
     * 客户仓库-分页列表查询
     * /business/customer/depository/list
     */
    export namespace queryPageList {
      export class Params {}

      export type Response = defs.Result<defs.IPage<defs.CustomerCompanyListVO>>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.CustomerDepositoryListDTO
      ): Promise<defs.Result<defs.IPage<defs.CustomerCompanyListVO>>>
    }

    /**
     * 客户仓库--保存
     * /business/customer/depository/save
     */
    export namespace save {
      export class Params {}

      export type Response = defs.Result<string>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.CustomerDepositorySaveDTO
      ): Promise<defs.Result<string>>
    }

    /**
        * 下拉选择列表
否查询已删除和已禁用的数据，0：查询全部；1：只查询生效的，默认查询全部
        * /business/customer/depository/select
        */
    export namespace selectList {
      export class Params {
        /** customerId */
        customerId: number
        /** 0：查询全部；1：只查询生效的，默认查询全部 */
        isEnabled?: number
      }

      export type Response = defs.Result<Array<defs.SelectOption>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<Array<defs.SelectOption>>>
    }
  }

  /**
   * 产地报关
   */
  export namespace declareCustoms {
    /**
     * 产地报关信息新增接口
     * /business/declareCustoms/add
     */
    export namespace add {
      export class Params {}

      export type Response = defs.Result<void>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.DeclareCustomAddDTO
      ): Promise<defs.Result<void>>
    }

    /**
     * 产地报关列表接口
     * /business/declareCustoms/list
     */
    export namespace queryPageList {
      export class Params {
        /** 柜号 */
        cabinetCode?: string
        /** 出口报关公司 */
        declareCompanyId?: number
        /** declareEndTime */
        declareEndTime?: string
        /** declareStartTime */
        declareStartTime?: string
        /** pageNo */
        pageNo?: number
        /** pageSize */
        pageSize?: number
        /** state */
        state?: string
      }

      export type Response = defs.Result<defs.IPage<defs.DeclareCustomListVO>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.IPage<defs.DeclareCustomListVO>>>
    }

    /**
     * 产地报关信息（新增/编辑）
     * /business/declareCustoms/queryDeclareByPlanId
     */
    export namespace queryById {
      export class Params {
        /** planId */
        planId: number
      }

      export type Response = defs.Result<defs.DeclareCustomEditVO>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.DeclareCustomEditVO>>
    }

    /**
     * 补充资料接口
     * /business/declareCustoms/renew
     */
    export namespace renew {
      export class Params {}

      export type Response = defs.Result<void>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.DeclareCustomCommitDTO
      ): Promise<defs.Result<void>>
    }

    /**
     * 列表状态筛选下拉接口
     * /business/declareCustoms/state/option
     */
    export namespace deliveryPlanStatus {
      export class Params {}

      export type Response = defs.Result<Array<defs.SelectTextOption>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<Array<defs.SelectTextOption>>>
    }
  }

  /**
   * 产地订舱
   */
  export namespace declareInfo {
    /**
     * 确认订舱接口
     * /business/declareInfo/add
     */
    export namespace add {
      export class Params {}

      export type Response = defs.Result<void>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.DeclareInfoAddDTO
      ): Promise<defs.Result<void>>
    }

    /**
     * 产地订舱列表查询接口
     * /business/declareInfo/list
     */
    export namespace queryPageList {
      export class Params {
        /** 进口港 */
        arrivePortId?: number
        /** 订舱结束时间 */
        bookingEndTime?: string
        /** 订舱开始时间 */
        bookingStartTime?: string
        /** 柜次 */
        cabinetBatchCode?: string
        /** 柜号 */
        cabinetCode?: string
        /** 出口报关公司 */
        declareCompanyId?: number
        /** pageNo */
        pageNo?: number
        /** pageSize */
        pageSize?: number
        /** planEndTime */
        planEndTime?: string
        /** planStartTime */
        planStartTime?: string
        /** state */
        state?: string
      }

      export type Response = defs.Result<defs.IPage<defs.DeclareInfoListVO>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.IPage<defs.DeclareInfoListVO>>>
    }

    /**
     * 根据planId查询订舱信息（新增/编辑）
     * /business/declareInfo/queryBookingByPlanId
     */
    export namespace queryById {
      export class Params {
        /** planId */
        planId: number
      }

      export type Response = defs.Result<defs.DeclareInfoEditVO>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.DeclareInfoEditVO>>
    }

    /**
     * 船公司下拉列表
     * /business/declareInfo/ship/company/option
     */
    export namespace shipCompanyOption {
      export class Params {}

      export type Response = defs.Result<Array<defs.SelectTextOption>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<Array<defs.SelectTextOption>>>
    }

    /**
     * 列表状态筛选下拉接口
     * /business/declareInfo/state/option
     */
    export namespace deliveryPlanStatus {
      export class Params {}

      export type Response = defs.Result<Array<defs.SelectTextOption>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<Array<defs.SelectTextOption>>>
    }
  }

  /**
   * 国际发货-发货编辑
   */
  export namespace deliveryEdit {
    /**
     * 国际发货-发货编辑-基本信息编辑
     * /modules/deliveryPlan/edit/editBaseInfo
     */
    export namespace editBaseInfo {
      export class Params {}

      export type Response = defs.Result<defs.DeliveryEditInfoVO>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.DeliveryEditBaseInfoVO
      ): Promise<defs.Result<defs.DeliveryEditInfoVO>>
    }

    /**
     * 国际发货-发货编辑-订舱信息编辑
     * /modules/deliveryPlan/edit/editBookingInfo
     */
    export namespace editBookingInfo {
      export class Params {}

      export type Response = defs.Result<defs.DeliveryEditInfoVO>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.DeliveryEditBookingInfoVO
      ): Promise<defs.Result<defs.DeliveryEditInfoVO>>
    }

    /**
     * 国际发货-发货编辑-出口报关信息编辑
     * /modules/deliveryPlan/edit/editExportInfo
     */
    export namespace editExportInfo {
      export class Params {}

      export type Response = defs.Result<defs.DeliveryEditInfoVO>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.DeliveryEditExportDeclareInfoVO
      ): Promise<defs.Result<defs.DeliveryEditInfoVO>>
    }

    /**
     * 国际发货-发货编辑-尾程运输信息编辑
     * /modules/deliveryPlan/edit/editFinalTransportInfo
     */
    export namespace editFinalTransportInfo {
      export class Params {}

      export type Response = defs.Result<defs.DeliveryEditInfoVO>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.DeliveryEditFinalTransportInfoVO
      ): Promise<defs.Result<defs.DeliveryEditInfoVO>>
    }

    /**
     * 国际发货-发货编辑-头程运输信息编辑
     * /modules/deliveryPlan/edit/editHeaderTransportInfo
     */
    export namespace editHeaderTransportInfo {
      export class Params {}

      export type Response = defs.Result<defs.DeliveryEditInfoVO>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.DeliveryEditHeaderTransportInfoVO
      ): Promise<defs.Result<defs.DeliveryEditInfoVO>>
    }

    /**
     * 国际发货-发货编辑-进口报关信息编辑
     * /modules/deliveryPlan/edit/editImportInfo
     */
    export namespace editImportInfo {
      export class Params {}

      export type Response = defs.Result<defs.DeliveryEditInfoVO>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.DeliveryEditImportDeclareInfoVO
      ): Promise<defs.Result<defs.DeliveryEditInfoVO>>
    }

    /**
     * 国际发货-发货编辑-商品信息编辑
     * /modules/deliveryPlan/edit/editProductInfo
     */
    export namespace editProductInfo {
      export class Params {}

      export type Response = defs.Result<defs.DeliveryEditInfoVO>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.DeliveryEditProductDTO
      ): Promise<defs.Result<defs.DeliveryEditInfoVO>>
    }

    /**
     * 国际发货-发货编辑-收货方信息编辑
     * /modules/deliveryPlan/edit/editReceiverInfo
     */
    export namespace editReceiverInfo {
      export class Params {}

      export type Response = defs.Result<defs.DeliveryEditInfoVO>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.DeliveryEditReceiverInfoVO
      ): Promise<defs.Result<defs.DeliveryEditInfoVO>>
    }

    /**
     * 国际发货-发货编辑-发货方信息编辑
     * /modules/deliveryPlan/edit/editSenderInfo
     */
    export namespace editSenderInfo {
      export class Params {}

      export type Response = defs.Result<defs.DeliveryEditInfoVO>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.DeliveryEditSenderInfoVO
      ): Promise<defs.Result<defs.DeliveryEditInfoVO>>
    }

    /**
     * 国际发货-发货编辑-获取回滚到状态
     * /modules/deliveryPlan/edit/getRollBackState
     */
    export namespace getRollBackState {
      export class Params {
        /** id */
        id: number
      }

      export type Response = defs.Result<string>
      export const init: Response
      export function request(params: Params): Promise<defs.Result<string>>
    }

    /**
     * 国际发货-发货编辑-根据ID查询详情
     * /modules/deliveryPlan/edit/info
     */
    export namespace info {
      export class Params {
        /** id */
        id: number
      }

      export type Response = defs.Result<defs.DeliveryEditInfoVO>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.DeliveryEditInfoVO>>
    }

    /**
     * 国际发货-发货编辑-分页列表查询
     * /modules/deliveryPlan/edit/list
     */
    export namespace queryPageList {
      export class Params {
        /** 柜次-模糊查询 长度最多为12个字符 */
        cabinetBatchCode?: string
        /** 柜号-模糊查询 长度最多为11个字符 */
        cabinetCode?: string
        /** 页码 */
        pageNo: number
        /** 每页条数 */
        pageSize: number
      }

      export type Response = defs.Result<defs.Page<defs.DeliveryEditListVO>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.Page<defs.DeliveryEditListVO>>>
    }

    /**
     * 国际发货-发货编辑-回滚
     * /modules/deliveryPlan/edit/rollBack
     */
    export namespace rollBack {
      export class Params {
        /** id */
        id?: number
      }

      export type Response = defs.Result<string>
      export const init: Response
      export function request(params: Params): Promise<defs.Result<string>>
    }
  }

  /**
   * 订单明细
   */
  export namespace deliveryOrderItem {
    /**
     * 根据订单ID获取商品明细
     * /business/deliveryOrderItem/queryByOrderId
     */
    export namespace queryByOrderId {
      export class Params {
        /** orderId */
        orderId: number
      }

      export type Response = defs.Result<Array<defs.DeliveryOrderItem>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<Array<defs.DeliveryOrderItem>>>
    }
  }

  /**
   * 海外发货计划
   */
  export namespace deliveryPlan {
    /**
     * 新增国际发货计划
     * /modules/deliveryPlan/add
     */
    export namespace add {
      export class Params {}

      export type Response = defs.Result<string>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.DeliveryPlanAddDTO
      ): Promise<defs.Result<string>>
    }

    /**
     * 发货计划详情
     * /modules/deliveryPlan/detail
     */
    export namespace detail {
      export class Params {
        /** id */
        id: number
      }

      export type Response = defs.Result<defs.DeliveryPlanDetailVO>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.DeliveryPlanDetailVO>>
    }

    /**
     * EDI推送更新接口
     * /modules/deliveryPlan/ediUpdate
     */
    export namespace ediUpdate {
      export class Params {}

      export type Response = any
      export const init: Response
      export function request(
        params: Params,
        bodyParams: Array<defs.EDIUpdateInfoDTO>
      ): Promise<any>
    }

    /**
     * 更新国际发货计划信息
     * /modules/deliveryPlan/edit
     */
    export namespace edit {
      export class Params {}

      export type Response = defs.Result<string>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.DeliveryPlanEditDTO
      ): Promise<defs.Result<string>>
    }

    /**
     * 获取海外发货计划列表
     * /modules/deliveryPlan/list
     */
    export namespace queryPageList {
      export class Params {
        /** 柜次 */
        cabinetBatchCode?: string
        /** endTime */
        endTime?: string
        /** pageNo */
        pageNo?: number
        /** pageSize */
        pageSize?: number
        /** startTime */
        startTime?: string
        /** state */
        state?: string
      }

      export type Response = defs.Result<defs.IPage<defs.DeliveryPlanListVO>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.IPage<defs.DeliveryPlanListVO>>>
    }

    /**
     * 根据id查询发货计划
     * /modules/deliveryPlan/queryById
     */
    export namespace queryById {
      export class Params {
        /** id */
        id: number
      }

      export type Response = defs.Result<defs.DeliveryPlanEditVO>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.DeliveryPlanEditVO>>
    }

    /**
     * 列表状态筛选下拉接口
     * /modules/deliveryPlan/state/option
     */
    export namespace deliveryPlanStatus {
      export class Params {}

      export type Response = defs.Result<Array<defs.SelectTextOption>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<Array<defs.SelectTextOption>>>
    }
  }

  /**
   * 海外发货明细
   */
  export namespace deliveryPlanItem {
    /**
     * 根据计划ID获取发货计划明细
     * /business/deliveryPlanItem/queryByPlanId
     */
    export namespace queryByPlanId {
      export class Params {
        /** planId */
        planId: number
      }

      export type Response = defs.Result<Array<defs.DeliveryPlanItem>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<Array<defs.DeliveryPlanItem>>>
    }
  }

  /**
   * 获取不同组织类型的下拉列表
   */
  export namespace departOption {
    /**
     * 企业组织类型接口
     * /sys/depart/option/business/type
     */
    export namespace businessTypeSelectOption {
      export class Params {}

      export type Response = defs.Result<Array<defs.SelectOption>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<Array<defs.SelectOption>>>
    }

    /**
     * 根据国家和组织类型获取组织下拉列表
     * /sys/depart/option/country/depart/list
     */
    export namespace listCountryDepartOption {
      export class Params {
        /** country */
        country: number
        /** orgCategory */
        orgCategory: number
      }

      export type Response = defs.Result<Array<defs.SelectOption>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<Array<defs.SelectOption>>>
    }

    /**
     * 进口出口组织供应商下拉列表
     * /sys/depart/option/depart/list
     */
    export namespace listDepartOption {
      export class Params {
        /** departId */
        departId: number
        /** orgCategory */
        orgCategory: number
      }

      export type Response = defs.Result<Array<defs.SelectOption>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<Array<defs.SelectOption>>>
    }

    /**
     * 海外报关公司（出口报关公司）下拉列表
     * /sys/depart/option/foreign/declare/company
     */
    export namespace listForeignDeclareCompanyOption {
      export class Params {}

      export type Response = defs.Result<Array<defs.SelectOption>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<Array<defs.SelectOption>>>
    }

    /**
     * 海外子公司下拉列表
     * /sys/depart/option/foreign/sub/company
     */
    export namespace listForeignSubCompanyOption {
      export class Params {}

      export type Response = defs.Result<Array<defs.SelectOption>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<Array<defs.SelectOption>>>
    }

    /**
     * 海外头程运输公司下拉列表
     * /sys/depart/option/foreign/transport/company
     */
    export namespace listForeignTransportCompanyOption {
      export class Params {}

      export type Response = defs.Result<Array<defs.SelectOption>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<Array<defs.SelectOption>>>
    }

    /**
     * 国内报关公司下拉列表
     * /sys/depart/option/internal/declare/company
     */
    export namespace listInternalDeclareCompanyOption {
      export class Params {}

      export type Response = defs.Result<Array<defs.SelectOption>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<Array<defs.SelectOption>>>
    }

    /**
     * 尾程运输公司下拉列表
     * /sys/depart/option/internal/transport/company
     */
    export namespace listInternalTransportCompanyOption {
      export class Params {}

      export type Response = defs.Result<Array<defs.SelectOption>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<Array<defs.SelectOption>>>
    }

    /**
     * 所有收货方下拉列表
     * /sys/depart/option/suggest/receiver/all/list
     */
    export namespace listSuggestAllReceiverOption {
      export class Params {}

      export type Response = defs.Result<Array<defs.SelectTextOption>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<Array<defs.SelectTextOption>>>
    }

    /**
     * 建议收货方下拉列表
     * /sys/depart/option/suggest/receiver/list
     */
    export namespace listSuggestReceiverOption {
      export class Params {
        /** receiverType */
        receiverType: number
      }

      export type Response = defs.Result<Array<defs.SelectOption>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<Array<defs.SelectOption>>>
    }

    /**
     * 供应商类型接口
     * /sys/depart/option/supplier/type
     */
    export namespace supplierTypeSelectOption {
      export class Params {}

      export type Response = defs.Result<Array<defs.SelectOption>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<Array<defs.SelectOption>>>
    }

    /**
     * 用户关联工厂下拉
     * /sys/depart/option/user/factory
     */
    export namespace listUserFactoryOption {
      export class Params {}

      export type Response = defs.Result<Array<defs.SelectOption>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<Array<defs.SelectOption>>>
    }
  }

  /**
   * 系统字典接口（下拉，查询）
   */
  export namespace dict {
    /**
     * 所属国家列表接口
     * /common/dict/country
     */
    export namespace countrySelectOption {
      export class Params {}

      export type Response = defs.Result<Array<defs.SelectOption>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<Array<defs.SelectOption>>>
    }

    /**
     * 收货方类型接口
     * /common/dict/receiver/type
     */
    export namespace receiverTypeSelectOption {
      export class Params {}

      export type Response = defs.Result<Array<defs.SelectOption>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<Array<defs.SelectOption>>>
    }

    /**
     * 口岸运输方式接口
     * /common/dict/transport/mode
     */
    export namespace transportModeSelectOption {
      export class Params {}

      export type Response = defs.Result<Array<defs.SelectOption>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<Array<defs.SelectOption>>>
    }
  }

  /**
   * 重复校验
   */
  export namespace duplicateCheck {
    /**
     * 重复校验接口
     * /sys/duplicate/check
     */
    export namespace doDuplicateCheck {
      export class Params {
        /** 数据ID */
        dataId?: string
        /** 字段名 */
        fieldName?: string
        /** 字段值 */
        fieldVal?: string
        /** 表名 */
        tableName?: string
      }

      export type Response = defs.Result<void>
      export const init: Response
      export function request(params: Params): Promise<defs.Result<void>>
    }
  }

  /**
   * 入境口岸发货管理
   */
  export namespace entryPortDelivery {
    /**
     * 入境口岸发货管理-发货
     * /entryPortDelivery/commit
     */
    export namespace commit {
      export class Params {}

      export type Response = defs.Result<string>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.EntryPortDeliveryCommitDTO
      ): Promise<defs.Result<string>>
    }

    /**
     * 入境口岸发货管理-根据ID查询
     * /entryPortDelivery/getById
     */
    export namespace getById {
      export class Params {
        /** id */
        id: number
      }

      export type Response = defs.Result<defs.EntryPortDeliveryDetailVO>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.EntryPortDeliveryDetailVO>>
    }

    /**
     * 入境口岸发货管理-分页列表查询
     * /entryPortDelivery/list
     */
    export namespace queryList {
      export class Params {
        /** 进口港 */
        arrivePortId?: number
        /** 柜次号 */
        cabinetBatchCode?: string
        /** 柜号 */
        cabinetCode?: string
        /** 到港结束日期，格式yyyy-MM-dd */
        endDate?: string
        /** 页码 */
        pageNo: number
        /** 每页条数 */
        pageSize: number
        /** 品类ID */
        productId?: number
        /** 产地ID */
        productPlaceId?: number
        /** 商品ID */
        spuId?: number
        /** 到港开始日期，格式yyyy-MM-dd */
        startDate?: string
      }

      export type Response = defs.Result<
        defs.IPage<defs.EntryPortDeliveryListVO>
      >
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.IPage<defs.EntryPortDeliveryListVO>>>
    }
  }

  /**
   * 用友对接
   */
  export namespace erp {
    /**
     * 保存国内发货信息
     * /business/erp/saveBatchNumber
     */
    export namespace saveBatchNumber {
      export class Params {
        /** batchNumber */
        batchNumber: string
        /** billCode */
        billCode: string
        /** sign */
        sign: string
        /** timestamp */
        timestamp: number
      }

      export type Response = defs.Result<string>
      export const init: Response
      export function request(params: Params): Promise<defs.Result<string>>
    }

    /**
     * 获取计划状态变更列表
     * /business/erp/statusList
     */
    export namespace statusList {
      export class Params {
        /** billCode */
        billCode: string
      }

      export type Response = defs.Result<Array<defs.OperateLog>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<Array<defs.OperateLog>>>
    }
  }

  /**
   * 产地头程运输
   */
  export namespace headTransport {
    /**
     * 头程运输信息新增接口
     * /business/head/transport/add
     */
    export namespace add {
      export class Params {}

      export type Response = defs.Result<void>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.HeadTransportAddDTO
      ): Promise<defs.Result<void>>
    }

    /**
     * 头程运输列表接口
     * /business/head/transport/list
     */
    export namespace queryPageList {
      export class Params {
        /** 柜号 */
        cabinetCode?: string
        /** 头程运输公司 */
        internationalTransportId?: number
        /** pageNo */
        pageNo?: number
        /** pageSize */
        pageSize?: number
        /** 发柜结束时间 */
        pickGoodsEndTime?: string
        /** 发柜开始时间 */
        pickGoodsStartTime?: string
        /** state */
        state?: string
      }

      export type Response = defs.Result<defs.IPage<defs.HeadTransportListVO>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.IPage<defs.HeadTransportListVO>>>
    }

    /**
     * 头程运输信息（新增/编辑）
     * /business/head/transport/queryHeadByPlanId
     */
    export namespace queryById {
      export class Params {
        /** planId */
        planId: number
      }

      export type Response = defs.Result<defs.HeadTransportEditVO>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.HeadTransportEditVO>>
    }

    /**
     * 列表状态筛选下拉接口
     * /business/head/transport/state/option
     */
    export namespace deliveryPlanStatus {
      export class Params {}

      export type Response = defs.Result<Array<defs.SelectTextOption>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<Array<defs.SelectTextOption>>>
    }
  }

  /**
   * 国内报关
   */
  export namespace importDeclare {
    /**
     * 国内报关-提交报关
     * /business/importDeclare/commit
     */
    export namespace commit {
      export class Params {}

      export type Response = defs.Result<string>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.ImportDeclareCommitVO
      ): Promise<defs.Result<string>>
    }

    /**
     * 国内报关-分页列表查询
     * /business/importDeclare/list
     */
    export namespace queryList {
      export class Params {
        /** 进口港 */
        arrivePortId?: number
        /** 柜号 */
        cabinetCode?: string
        /** 报关截止时间，格式yyyy-MM-dd */
        declareEndDate?: string
        /** 进口报关口岸ID */
        declarePortId?: number
        /** 报关起始时间，格式yyyy-MM-dd */
        declareStartDate?: string
        /** 运输方式 */
        deliveryMethod?: number
        /** 报关单号 */
        deliveryOrderCode?: string
        /** 进口报关公司ID（国内） */
        domesticDeclareCompanyId?: number
        /** 页码 */
        pageNo: number
        /** 每页条数 */
        pageSize: number
        /** 品类ID */
        productId?: number
        /** 商品ID */
        spuId?: number
        /** 状态编码 */
        state?: string
      }

      export type Response = defs.Result<defs.IPage<defs.ImportDeclareListVO>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.IPage<defs.ImportDeclareListVO>>>
    }

    /**
     * 国内报关-根据国际计划ID查询
     * /business/importDeclare/queryById
     */
    export namespace queryById {
      export class Params {
        /** id */
        id: number
      }

      export type Response = defs.Result<defs.ImportDeclareDetailVO>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.ImportDeclareDetailVO>>
    }

    /**
     * 国内报关-补充资料
     * /business/importDeclare/replenish
     */
    export namespace postReplenish {
      export class Params {}

      export type Response = defs.Result<string>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.ImportDeclareReplenishDTO
      ): Promise<defs.Result<string>>
    }

    /**
     * 国内报关-获取状态类型
     * /business/importDeclare/state
     */
    export namespace queryStateOptions {
      export class Params {}

      export type Response = defs.Result<Array<defs.SelectTextOption>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<Array<defs.SelectTextOption>>>
    }

    /**
     * 纳税放行-提交纳税
     * /business/importDeclare/tax/commit
     */
    export namespace tax {
      export class Params {}

      export type Response = defs.Result<string>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.ImportDeclareTaxDTO
      ): Promise<defs.Result<string>>
    }

    /**
     * 纳税放行-批量提交纳税
     * /business/importDeclare/tax/commit/batch
     */
    export namespace taxBatch {
      export class Params {}

      export type Response = defs.Result<string>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.ImportDeclareTaxBatchDTO
      ): Promise<defs.Result<string>>
    }

    /**
     * 纳税放行-分页列表查询
     * /business/importDeclare/tax/list
     */
    export namespace queryTaxList {
      export class Params {
        /** 进口港 */
        arrivePortId?: number
        /** 柜次号 */
        cabinetBatchCode?: string
        /** 柜号 */
        cabinetCode?: string
        /** 放行截止时间，格式yyyy-MM-dd */
        endDate?: string
        /** 页码 */
        pageNo: number
        /** 每页条数 */
        pageSize: number
        /** 品类ID */
        productId?: number
        /** 产地ID */
        productPlaceId?: number
        /** 商品ID */
        spuId?: number
        /** 放行起始时间，格式yyyy-MM-dd */
        startDate?: string
        /** 状态编码 */
        state?: string
      }

      export type Response = defs.Result<defs.IPage<defs.ImportDeclareListVO>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.IPage<defs.ImportDeclareListVO>>>
    }

    /**
     * 纳税放行-根据国际计划ID查询
     * /business/importDeclare/tax/queryById
     */
    export namespace queryTaxById {
      export class Params {
        /** id */
        id: number
      }

      export type Response = defs.Result<defs.ImportDeclareTaxDetailVO>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.ImportDeclareTaxDetailVO>>
    }

    /**
     * 纳税放行-获取状态类型
     * /business/importDeclare/tax/state
     */
    export namespace queryTaxStateOptions {
      export class Params {}

      export type Response = defs.Result<Array<defs.SelectTextOption>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<Array<defs.SelectTextOption>>>
    }
  }

  /**
   * 报表中心-国际发货明细
   */
  export namespace internationalShipment {
    /**
     * 国际发货状态下拉选项
     * /reportFormsCenter/internationalShip/all/status
     */
    export namespace exportShipmentXls {
      export class Params {}

      export type Response = defs.Result<Array<defs.SelectTextOption>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<Array<defs.SelectTextOption>>>
    }

    /**
     * 国际发货明细-导出
     * /reportFormsCenter/internationalShip/exportShipmentXls
     */
    export namespace getExportShipmentXls {
      export class Params {
        /** 柜次(不超过12个字符 模糊查询) */
        cabinetBatchCode?: string
        /** 柜号 (不超过11个字符 模糊查询) */
        cabinetCode?: string
        /** 创建时间-结束 */
        createTimeEnd?: string
        /** 创建时间-开始 */
        createTimeStart?: string
        /** 发运方式 1_陆运 2_海运 3_铁运 */
        deliveryMethod?: 1 | 2 | 3 | 1 | 2 | 3
        /** 发货时间-结束 */
        deliveryTimeEnd?: string
        /** 发货时间-开始 */
        deliveryTimeStart?: string
        /** map */
        map?: any
        /** 页码 */
        pageNo: number
        /** 每页条数 */
        pageSize: number
        /** 进口港ID */
        portId?: number
        /** 商品品类ID */
        productId?: number
        /** 商品SPU ID */
        productSpuId?: number
        /** 收货时间-结束 */
        receivingTimeEnd?: string
        /** 收货时间-开始 */
        receivingTimeStart?: string
        /** 状态 查询全部时不传 */
        status?: string
      }

      export type Response = any
      export const init: Response
      export function request(params: Params): Promise<any>
    }

    /**
     * 国际发货明细-详情查看
     * /reportFormsCenter/internationalShip/info
     */
    export namespace getDetailInfo {
      export class Params {
        /** planId */
        planId: number
      }

      export type Response = defs.Result<defs.InternationalShipmentDetailVO>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.InternationalShipmentDetailVO>>
    }

    /**
     * 国际发货明细-分页列表
     * /reportFormsCenter/internationalShip/list
     */
    export namespace getDetailList {
      export class Params {}

      export type Response = defs.Result<
        defs.IPage<defs.InternationalShipmentDetailListVO>
      >
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.BasePageRequest
      ): Promise<
        defs.Result<defs.IPage<defs.InternationalShipmentDetailListVO>>
      >
    }
  }

  /**
   * 报表中心-国际在途汇总
   */
  export namespace internationalTraveling {
    /**
     * 国际在途汇总-详情-进口港下拉菜单
     * /reportFormsCenter/internationalTraveling/arrivePortOptions
     */
    export namespace arrivePortOptions {
      export class Params {}

      export type Response = defs.Result<Array<defs.SelectOption>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<Array<defs.SelectOption>>>
    }

    /**
     * 国际在途汇总-详情-进口报关公司下拉菜单
     * /reportFormsCenter/internationalTraveling/domesticDeclareCompanyOptions
     */
    export namespace domesticDeclareCompanyOptions {
      export class Params {}

      export type Response = defs.Result<Array<defs.SelectOption>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<Array<defs.SelectOption>>>
    }

    /**
     * 国际在途汇总-修改备注
     * /reportFormsCenter/internationalTraveling/edit
     */
    export namespace edit {
      export class Params {}

      export type Response = defs.Result<string>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.InternationalTravelingEditDTO
      ): Promise<defs.Result<string>>
    }

    /**
        * 国际在途汇总-详情-分页列表查询
商品pid、产地id必传，默认分页1，10
        * /reportFormsCenter/internationalTraveling/infoList
        */
    export namespace queryInfoList {
      export class Params {
        /** 到港时间-结束（yyyy-MM-dd） */
        arrivalDateEnd?: string
        /** 到港时间-开始（yyyy-MM-dd） */
        arrivalDateStart?: string
        /** 进口港-精确查询 */
        arrivePortId?: number
        /** 柜次-模糊查询 */
        cabinetBatchCode?: string
        /** 柜号-模糊查询 */
        cabinetCode?: string
        /** 进口报关公司-精确查询 */
        declareCompanyId?: number
        /** 页码 */
        pageNo: number
        /** 每页条数 */
        pageSize: number
        /** 品类id-必传 */
        pid?: number
        /** 收货方-精确查询 */
        receiverId?: number
        /** 备注-模糊查询 */
        remark?: string
        /** SPU ID-模糊查询 */
        spuId?: number
        /** 状态-精确查询 */
        status?: string
      }

      export type Response = defs.Result<
        defs.Page<defs.InternationalTravelingInfoListVO>
      >
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.Page<defs.InternationalTravelingInfoListVO>>>
    }

    /**
     * 国际在途汇总-分页列表查询
     * /reportFormsCenter/internationalTraveling/list
     */
    export namespace queryList {
      export class Params {
        /** 页码 */
        pageNo: number
        /** 每页条数 */
        pageSize: number
        /** 商品pid */
        pid?: number
      }

      export type Response = defs.Result<
        defs.Page<defs.InternationalTravelingListVO>
      >
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.Page<defs.InternationalTravelingListVO>>>
    }

    /**
     * 国际在途汇总-详情-状态下拉菜单
     * /reportFormsCenter/internationalTraveling/statusOptions
     */
    export namespace statusOptions {
      export class Params {}

      export type Response = defs.Result<Array<defs.SelectTextOption>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<Array<defs.SelectTextOption>>>
    }
  }

  /**
   * 报表中心-国际在途快照
   */
  export namespace internationalTravelingSnapshot {
    /**
     * 国际在途快照-进口港下拉菜单
     * /reportFormsCenter/internationalTravelingSnapshot/arrivePortOptions
     */
    export namespace arrivePortOptions {
      export class Params {}

      export type Response = defs.Result<Array<defs.SelectOption>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<Array<defs.SelectOption>>>
    }

    /**
     * 国际在途快照-快照导出
     * /reportFormsCenter/internationalTravelingSnapshot/exportPlanXls
     */
    export namespace exportPlanXls {
      export class Params {
        /** 进口港-精确查询 */
        arrivePortId?: number
        /** 柜次-模糊查询 */
        cabinetBatchCode?: string
        /** 柜号-模糊查询 */
        cabinetCode?: string
        /** map */
        map?: any
        /** 品类id */
        pid?: number
        /** 快照日期（yyyy-MM-dd） */
        snapshotDate?: string
        /** SPU ID-模糊查询 */
        spuId?: number
        /** 状态-精确查询 */
        status?: string
      }

      export type Response = any
      export const init: Response
      export function request(params: Params): Promise<any>
    }

    /**
     * 国际在途快照-详情
     * /reportFormsCenter/internationalTravelingSnapshot/info
     */
    export namespace info {
      export class Params {
        /** id */
        id: number
      }

      export type Response = defs.Result<
        defs.InternationalTravelingSnapshotInfoVO
      >
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.InternationalTravelingSnapshotInfoVO>>
    }

    /**
        * 国际在途快照-分页列表查询
默认分页1，10
        * /reportFormsCenter/internationalTravelingSnapshot/list
        */
    export namespace queryList {
      export class Params {
        /** 进口港-精确查询 */
        arrivePortId?: number
        /** 柜次-模糊查询 */
        cabinetBatchCode?: string
        /** 柜号-模糊查询 */
        cabinetCode?: string
        /** pageNo */
        pageNo?: number
        /** pageSize */
        pageSize?: number
        /** 品类id */
        pid?: number
        /** 快照日期（yyyy-MM-dd） */
        snapshotDate?: string
        /** SPU ID-模糊查询 */
        spuId?: number
        /** 状态-精确查询 */
        status?: string
      }

      export type Response = defs.Result<
        defs.Page<defs.InternationalTravelingSnapshotListVO>
      >
      export const init: Response
      export function request(
        params: Params
      ): Promise<
        defs.Result<defs.Page<defs.InternationalTravelingSnapshotListVO>>
      >
    }

    /**
     * 国际在途快照-状态下拉菜单
     * /reportFormsCenter/internationalTravelingSnapshot/statusOptions
     */
    export namespace statusOptions {
      export class Params {}

      export type Response = defs.Result<Array<defs.SelectTextOption>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<Array<defs.SelectTextOption>>>
    }
  }

  /**
   * 用户登录
   */
  export namespace login {
    /**
     * 获取验证码
     * /sys/getCheckCode
     */
    export namespace getCheckCode {
      export class Params {}

      export type Response = defs.Result<defs.ObjectMap<string, string>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.ObjectMap<string, string>>>
    }

    /**
     * 登录接口
     * /sys/login
     */
    export namespace login {
      export class Params {}

      export type Response = defs.Result<defs.LoginedVO>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.SysLoginModel
      ): Promise<defs.Result<defs.LoginedVO>>
    }

    /**
     * 手机号登录接口
     * /sys/phoneLogin
     */
    export namespace phoneLogin {
      export class Params {}

      export type Response = defs.Result<defs.LoginedVO>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: ObjectMap<any, object>
      ): Promise<defs.Result<defs.LoginedVO>>
    }
  }

  /**
   * 产地物流提货
   */
  export namespace pickGoodsInfo {
    /**
     * 产地物流提货信息提货接口
     * /business/pickGoodsInfo/add
     */
    export namespace add {
      export class Params {}

      export type Response = defs.Result<void>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.PickGoodsAddDTO
      ): Promise<defs.Result<void>>
    }

    /**
     * 产地物流提货列表接口
     * /business/pickGoodsInfo/list
     */
    export namespace queryPageList {
      export class Params {
        /** 柜次 */
        cabinetBatchCode?: string
        /** 柜号 */
        cabinetCode?: string
        /** 头程运输公司 */
        internationalTransportId?: number
        /** pageNo */
        pageNo?: number
        /** pageSize */
        pageSize?: number
        /** 提柜结束时间 */
        pickCabinetEndTime?: string
        /** 提柜开始时间 */
        pickCabinetStartTime?: string
        /** planEndTime */
        planEndTime?: string
        /** planStartTime */
        planStartTime?: string
        /** state */
        state?: string
      }

      export type Response = defs.Result<defs.IPage<defs.PickGoodsListVO>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.IPage<defs.PickGoodsListVO>>>
    }

    /**
     * 根据planId查询物流提货信息（新增/编辑）
     * /business/pickGoodsInfo/queryByPlanId
     */
    export namespace queryById {
      export class Params {
        /** planId */
        planId: number
      }

      export type Response = defs.Result<defs.PickGoodsEditVO>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.PickGoodsEditVO>>
    }

    /**
     * 列表状态筛选下拉接口
     * /business/pickGoodsInfo/state/option
     */
    export namespace deliveryPlanStatus {
      export class Params {}

      export type Response = defs.Result<Array<defs.SelectTextOption>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<Array<defs.SelectTextOption>>>
    }
  }

  /**
   * 口岸管理接口
   */
  export namespace port {
    /**
     * 口岸管理信息-添加
     * /business/port/add
     */
    export namespace add {
      export class Params {}

      export type Response = defs.Result<string>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.PortAddDTO
      ): Promise<defs.Result<string>>
    }

    /**
     * 修改口岸状态
     * /business/port/changeState
     */
    export namespace changeStatus {
      export class Params {
        /** id */
        id: number
        /** status */
        status: number
      }

      export type Response = defs.Result<void>
      export const init: Response
      export function request(params: Params): Promise<defs.Result<void>>
    }

    /**
     * 报关口岸下拉列表
     * /business/port/declare/option
     */
    export namespace listPortDeclareOption {
      export class Params {
        /** portId */
        portId: number
      }

      export type Response = defs.Result<Array<defs.SelectOption>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<Array<defs.SelectOption>>>
    }

    /**
     * 口岸管理信息-编辑
     * /business/port/edit
     */
    export namespace edit {
      export class Params {}

      export type Response = defs.Result<string>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.PortEditDTO
      ): Promise<defs.Result<string>>
    }

    /**
     * 进口港下拉列表
     * /business/port/entry/option
     */
    export namespace listPortOption {
      export class Params {
        /** country */
        country: number
      }

      export type Response = defs.Result<Array<defs.SelectOption>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<Array<defs.SelectOption>>>
    }

    /**
     * 出口港下拉列表
     * /business/port/export/option
     */
    export namespace listPortEntryOption {
      export class Params {
        /** departId */
        departId: number
      }

      export type Response = defs.Result<Array<defs.SelectOption>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<Array<defs.SelectOption>>>
    }

    /**
     * 口岸管理信息-分页列表查询
     * /business/port/list
     */
    export namespace queryPageList {
      export class Params {
        /** 1 中国 2 越南 3 泰国 */
        country?: number
        /** name */
        name?: string
        /** pageNo */
        pageNo?: number
        /** pageSize */
        pageSize?: number
        /** 口岸运输方式(1陆运，2海运，3海铁) */
        transportMode?: number
      }

      export type Response = defs.Result<defs.Page<defs.PortListVO>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.Page<defs.PortListVO>>>
    }

    /**
     * 根据港口类型，获取国内港口列表
     * /business/port/queryArrivePortByType
     */
    export namespace queryArrivePortByType {
      export class Params {
        /** portType */
        portType?: string
      }

      export type Response = defs.Result<Array<defs.PortVO>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<Array<defs.PortVO>>>
    }

    /**
     * 根据id获取口岸信息
     * /business/port/queryById
     */
    export namespace queryById {
      export class Params {
        /** id */
        id: number
      }

      export type Response = defs.Result<defs.PortEditVO>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.PortEditVO>>
    }

    /**
     * 根据港口ID，获取对应的物流公司
     * /business/port/queryLogisticCompanyByPortId
     */
    export namespace queryLogisticCompanyByPortId {
      export class Params {
        /** portId */
        portId: number
      }

      export type Response = defs.Result<Array<defs.SysDepart>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<Array<defs.SysDepart>>>
    }

    /**
     * 口岸下拉选择列表
     * /business/port/select
     */
    export namespace selectList {
      export class Params {}

      export type Response = defs.Result<Array<defs.SelectOption>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<Array<defs.SelectOption>>>
    }
  }

  /**
   * 商品品类管理
   */
  export namespace product {
    /**
     * 商品信息-校验名称 编辑时需要传主键ID+名称
     * /business/product/checkName
     */
    export namespace checkName {
      export class Params {}

      export type Response = defs.Result<string>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.ProductCheckDTO
      ): Promise<defs.Result<string>>
    }

    /**
     * 商品信息-启用禁用
     * /business/product/enable
     */
    export namespace enable {
      export class Params {
        /** id */
        id: number
      }

      export type Response = defs.Result<string>
      export const init: Response
      export function request(params: Params): Promise<defs.Result<string>>
    }

    /**
     * 商品信息-查询详情
     * /business/product/info
     */
    export namespace queryById {
      export class Params {
        /** id */
        id: number
      }

      export type Response = defs.Result<defs.ProductVO>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.ProductVO>>
    }

    /**
     * 商品品类管理-分页列表查询
     * /business/product/list
     */
    export namespace queryPageList {
      export class Params {}

      export type Response = defs.Result<defs.IPage<defs.ProductListVO>>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.ProductListDTO
      ): Promise<defs.Result<defs.IPage<defs.ProductListVO>>>
    }

    /**
     * 商品信息-保存
     * /business/product/save
     */
    export namespace save {
      export class Params {}

      export type Response = defs.Result<string>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.ProductSaveDTO
      ): Promise<defs.Result<string>>
    }

    /**
     * 下拉选择列表
     * /business/product/select
     */
    export namespace selectList {
      export class Params {
        /** 是否查询已删除和已禁用的数据，0：查询全部；1：只查询生效的，默认查询全部 */
        isQueryDelete?: number
      }

      export type Response = defs.Result<Array<defs.SelectOption>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<Array<defs.SelectOption>>>
    }
  }

  /**
   * 许可明细管理
   */
  export namespace productQuota {
    /**
     * 许可明细管理-添加
     * /business/productQuota/add
     */
    export namespace add {
      export class Params {}

      export type Response = defs.Result<string>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.ProductQuotaAddRequest
      ): Promise<defs.Result<string>>
    }

    /**
     * 许可明细管理-编辑
     * /business/productQuota/edit
     */
    export namespace edit {
      export class Params {}

      export type Response = defs.Result<string>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.ProductQuotaEditRequest
      ): Promise<defs.Result<string>>
    }

    /**
     * 许可明细管理-分页列表查询
     * /business/productQuota/list
     */
    export namespace queryPageList {
      export class Params {
        /** 口岸ID */
        entryPortId: number
        /** 页码 */
        pageNo: number
        /** 每页条数 */
        pageSize: number
        /** 商品ID */
        productId: number
      }

      export type Response = defs.Result<defs.IPage<defs.ProductQuotaResult>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.IPage<defs.ProductQuotaResult>>>
    }
  }

  /**
   * 许可消耗明细管理
   */
  export namespace productQuotaRecord {
    /**
     * 许可消耗记录-分页列表查询
     * /business/productQuotaRecord/list
     */
    export namespace queryPageList {
      export class Params {
        /** 页码 */
        pageNo: number
        /** 每页条数 */
        pageSize: number
        /** 许可明细ID */
        quotaId: number
      }

      export type Response = defs.Result<
        defs.IPage<defs.ProductQuotaRecordResult>
      >
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.IPage<defs.ProductQuotaRecordResult>>>
    }
  }

  /**
   * 许可管理
   */
  export namespace productQuotaTotal {
    /**
     * 许可管理-添加
     * /business/productQuotaTotal/add
     */
    export namespace add {
      export class Params {}

      export type Response = defs.Result<string>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.ProductQuotaTotalAddRequest
      ): Promise<defs.Result<string>>
    }

    /**
     * 许可管理-根据ID查询
     * /business/productQuotaTotal/detail
     */
    export namespace getById {
      export class Params {
        /** id */
        id: number
      }

      export type Response = defs.Result<defs.ProductQuotaTotalResult>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.ProductQuotaTotalResult>>
    }

    /**
     * 许可管理-编辑
     * /business/productQuotaTotal/edit
     */
    export namespace edit {
      export class Params {}

      export type Response = defs.Result<string>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.ProductQuotaTotalEditRequest
      ): Promise<defs.Result<string>>
    }

    /**
     * 许可管理-查询口岸
     * /business/productQuotaTotal/entryPort
     */
    export namespace importExcel {
      export class Params {
        /** productId */
        productId: number
      }

      export type Response = defs.Result<Array<defs.SelectOption>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<Array<defs.SelectOption>>>
    }

    /**
     * 许可管理-分页列表查询
     * /business/productQuotaTotal/list
     */
    export namespace queryPageList {
      export class Params {
        /** 口岸ID */
        entryPortId?: number
        /** 页码 */
        pageNo: number
        /** 每页条数 */
        pageSize: number
        /** 商品ID */
        productId?: number
      }

      export type Response = defs.Result<
        defs.IPage<defs.ProductQuotaTotalResult>
      >
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.IPage<defs.ProductQuotaTotalResult>>>
    }
  }

  /**
   * 许可核销
   */
  export namespace productQuotaVerified {
    /**
     * 许可核销-批量核销
     * /business/productQuota/verified/batch
     */
    export namespace batch {
      export class Params {}

      export type Response = defs.Result<string>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.ProductQuotaBatchVerifiedVo
      ): Promise<defs.Result<string>>
    }

    /**
     * 许可核销-批量核销计算总量加许可明细
     * /business/productQuota/verified/count
     */
    export namespace batchCountQuantity {
      export class Params {
        /** ids */
        ids: Array<number>
      }

      export type Response = defs.Result<defs.ProductQuotaVerifiedBatchVo>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.ProductQuotaVerifiedBatchVo>>
    }

    /**
     * 许可核销-根据ID查询
     * /business/productQuota/verified/getById
     */
    export namespace getById {
      export class Params {
        /** id */
        id?: number
      }

      export type Response = defs.Result<defs.ProductQuotaVerifiedDetailVO>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.ProductQuotaVerifiedDetailVO>>
    }

    /**
     * 许可核销-分页列表查询
     * /business/productQuota/verified/list
     */
    export namespace queryList {
      export class Params {
        /** 柜次号 */
        cabinetBatchCode?: string
        /** 柜号 */
        cabinetCode?: string
        /** 进口报关公司ID */
        declareCompanyId?: number
        /** 进口报关口岸ID */
        declarePortId?: number
        /** 运输方式(1, 陆运),(2, 海运),(3, 铁运) */
        deliveryMethod?: number
        /** 许可核销截止时间，格式yyyy-MM-dd HH:mm:ss */
        endDate?: string
        /** 页码 */
        pageNo: number
        /** 每页条数 */
        pageSize: number
        /** 品类ID */
        productId?: number
        /** 商品id */
        spuId?: number
        /** 许可核销起始时间，格式yyyy-MM-dd */
        startDate?: string
        /** 状态编码 */
        state?: string
      }

      export type Response = defs.Result<
        defs.IPage<defs.ProductQuotaVerifiedVo>
      >
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.IPage<defs.ProductQuotaVerifiedVo>>>
    }

    /**
     * 许可核销-获取生效许可列表
     * /business/productQuota/verified/quota
     */
    export namespace getQuota {
      export class Params {
        /** entryPortId */
        entryPortId: number
        /** productId */
        productId: number
      }

      export type Response = defs.Result<Array<defs.ProductQuotaValidVo>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<Array<defs.ProductQuotaValidVo>>>
    }

    /**
     * 许可核销-获取状态类型
     * /business/productQuota/verified/status
     */
    export namespace queryOperation {
      export class Params {}

      export type Response = defs.Result<Array<defs.SelectTextOption>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<Array<defs.SelectTextOption>>>
    }
  }

  /**
   * 柜次规则管理
   */
  export namespace productRule {
    /**
     * 柜次规则-校验名称 编辑时需要传主键ID
     * /business/product/rule/checkName
     */
    export namespace checkName {
      export class Params {}

      export type Response = defs.Result<string>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.ProductRuleCheckDTO
      ): Promise<defs.Result<string>>
    }

    /**
     * 柜次规则-启用禁用
     * /business/product/rule/enable
     */
    export namespace enable {
      export class Params {
        /** id */
        id: number
      }

      export type Response = defs.Result<string>
      export const init: Response
      export function request(params: Params): Promise<defs.Result<string>>
    }

    /**
     * 商品信息-查询详情
     * /business/product/rule/info
     */
    export namespace queryById {
      export class Params {
        /** id */
        id: number
      }

      export type Response = defs.Result<defs.ProductRuleVO>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.ProductRuleVO>>
    }

    /**
     * 柜次规则管理-分页列表查询
     * /business/product/rule/list
     */
    export namespace queryPageList {
      export class Params {}

      export type Response = defs.Result<defs.IPage<defs.ProductRuleListVO>>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.ProductRuleListDTO
      ): Promise<defs.Result<defs.IPage<defs.ProductRuleListVO>>>
    }

    /**
     * 柜次规则-保存
     * /business/product/rule/save
     */
    export namespace save {
      export class Params {}

      export type Response = defs.Result<string>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.ProductRuleSaveDTO
      ): Promise<defs.Result<string>>
    }

    /**
     * 下拉选择列表
     * /business/product/rule/select
     */
    export namespace selectList {
      export class Params {
        /** 启用，0：查询全部；1：只查询生效的，默认查询全部 */
        isEnabled?: number
        /** 商户品类ID */
        productId?: number
      }

      export type Response = defs.Result<Array<defs.SelectOption>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<Array<defs.SelectOption>>>
    }
  }

  /**
   * 商品SKU管理 ----李健飞
   */
  export namespace productSku {
    /**
     * 批量修改 SKU
     * /business/product/sku/batch_info
     */
    export namespace updateBatchInfo {
      export class Params {}

      export type Response = defs.Result<void>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.UpdateBatchProductSkuVO
      ): Promise<defs.Result<void>>
    }

    /**
     * sku检查接口，根据sku选项检查是否有已生成sku,如果已生成返回skuId
     * /business/product/sku/checkSku
     */
    export namespace checkSku {
      export class Params {
        /** optionIds */
        optionIds: Array<number>
      }

      export type Response = defs.Result<number>
      export const init: Response
      export function request(params: Params): Promise<defs.Result<number>>
    }

    /**
     * 查询 SKU 明细
     * /business/product/sku/info
     */
    export namespace findInfo {
      export class Params {
        /** id */
        id: number
      }

      export type Response = defs.Result<defs.ProductSkuVO>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.ProductSkuVO>>
    }

    /**
     * 修改 SKU
     * /business/product/sku/info
     */
    export namespace updateInfo {
      export class Params {}

      export type Response = defs.Result<void>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.ProductSkuUpdateVO
      ): Promise<defs.Result<void>>
    }

    /**
     * 查询已经生成SKU的option
     * /business/product/sku/list/skuOption
     */
    export namespace listSkuOption {
      export class Params {
        /** 商品Spu ID */
        spuId: number
      }

      export type Response = defs.Result<Array<Array<defs.ProductUsedOptionVO>>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<Array<Array<defs.ProductUsedOptionVO>>>>
    }

    /**
     * sku选项聚合接口
     * /business/product/sku/options
     */
    export namespace skuOptions {
      export class Params {
        /** spuId */
        spuId: number
      }

      export type Response = defs.Result<Array<defs.ProductSkuOptionVO>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<Array<defs.ProductSkuOptionVO>>>
    }

    /**
     * 查询 SKU 列表
     * /business/product/sku/page
     */
    export namespace findPage {
      export class Params {}

      export type Response = defs.Result<defs.IPage<defs.ProductSkuVO>>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.ProductSkuQueryVO
      ): Promise<defs.Result<defs.IPage<defs.ProductSkuVO>>>
    }

    /**
     * 新增 SKU
     * /business/product/sku/save
     */
    export namespace save {
      export class Params {}

      export type Response = defs.Result<string>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.ProductSkuSaveVO
      ): Promise<defs.Result<string>>
    }

    /**
     * 快照sku
     * /business/product/sku/snapshot/sku
     */
    export namespace snapshotSku {
      export class Params {
        /** skuIds */
        skuIds: Array<number>
      }

      export type Response = defs.Result<Array<defs.ProductSkuPO>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<Array<defs.ProductSkuPO>>>
    }
  }

  /**
   * 商品规格类型接口相关信息   ----李健飞
   */
  export namespace productSpec {
    /**
     * 商品规格类型下拉菜单(SKU动态筛选)
     * /business/product/spec/list/options
     */
    export namespace listOptions {
      export class Params {
        /** 商品SPU ID */
        spuId: number
      }

      export type Response = defs.Result<Array<defs.SpecSelectOptionVO>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<Array<defs.SpecSelectOptionVO>>>
    }

    /**
     * 编辑(包括新增删除)规格类型和规格选项值
     * /business/product/spec/save/spec
     */
    export namespace saveSpecs {
      export class Params {}

      export type Response = defs.Result<string>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.ProductSpuSpecSaveDTO
      ): Promise<defs.Result<string>>
    }
  }

  /**
   * 商品SPU相关接口信息   ----李健飞
   */
  export namespace productSpu {
    /**
     * 商品SPU-新增SPU
     * /business/product/spu/add
     */
    export namespace addSpu {
      export class Params {}

      export type Response = defs.Result<number>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.ProductSpuAddDTO
      ): Promise<defs.Result<number>>
    }

    /**
     * 商品SPU-SPU名称校验
     * /business/product/spu/check/spuName
     */
    export namespace checkSpuName {
      export class Params {
        /** 商品品类ID */
        productId: number
        /** 商品SPU ID */
        spuId?: number
        /** SPU名称 */
        spuName: string
      }

      export type Response = defs.Result<boolean>
      export const init: Response
      export function request(params: Params): Promise<defs.Result<boolean>>
    }

    /**
     * 商品SPU-SPU详情
     * /business/product/spu/detail
     */
    export namespace queryDetailInfo {
      export class Params {
        /** 商品Spu ID */
        spuId: number
      }

      export type Response = defs.Result<defs.ProductSpuDetailInfoResultVO>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.ProductSpuDetailInfoResultVO>>
    }

    /**
     * 商品SPU-编辑SPU
     * /business/product/spu/edit
     */
    export namespace edit {
      export class Params {}

      export type Response = defs.Result<number>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.ProductSpuEditDTO
      ): Promise<defs.Result<number>>
    }

    /**
     * 修改SPU可用状态
     * /business/product/spu/edit/status
     */
    export namespace editStatus {
      export class Params {}

      export type Response = defs.Result<string>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.ProductSpuEditStatusDTO
      ): Promise<defs.Result<string>>
    }

    /**
     * SPU下拉菜单
     * /business/product/spu/list/options
     */
    export namespace listOptions {
      export class Params {
        /** 商品品类ID */
        productId: number
      }

      export type Response = defs.Result<Array<defs.SelectTextOption>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<Array<defs.SelectTextOption>>>
    }

    /**
     * 商品SPU-分页列表查询
     * /business/product/spu/page
     */
    export namespace queryPageList {
      export class Params {
        /** 页码 */
        pageNo: number
        /** 页大小 */
        pageSize: number
        /** 商品品类ID */
        productId: number
      }

      export type Response = defs.Result<
        defs.IPage<defs.ProductSpuPageResultVO>
      >
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.IPage<defs.ProductSpuPageResultVO>>>
    }

    /**
     * 产地下拉菜单
     * /business/product/spu/place/options
     */
    export namespace placeOptions {
      export class Params {
        /** 产地父级ID,不传取顶级 */
        pid?: number
      }

      export type Response = defs.Result<Array<defs.SelectCascaderOption>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<Array<defs.SelectCascaderOption>>>
    }

    /**
     * 品种下拉菜单
     * /business/product/spu/variety/options
     */
    export namespace varietyOptions {
      export class Params {
        /** 商品品类ID */
        productId: number
      }

      export type Response = defs.Result<Array<defs.SelectTextOption>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<Array<defs.SelectTextOption>>>
    }
  }

  /**
   * 销地收货
   */
  export namespace receivePlan {
    /**
     * 销地收货-根据分柜订单ID查询
     * /business/receivePlan/getById
     */
    export namespace getById {
      export class Params {
        /** id */
        id: number
      }

      export type Response = defs.Result<defs.ReceiveWebDetailVO>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.ReceiveWebDetailVO>>
    }

    /**
     * 销地收货-分页列表查询
     * /business/receivePlan/list
     */
    export namespace queryPageList {
      export class Params {
        /** 柜次号 */
        cabinetBatchCode?: string
        /** 柜号 */
        cabinetCode?: string
        /** 截止时间，格式yyyy-MM-dd */
        endDate?: string
        /** 页码 */
        pageNo: number
        /** 每页条数 */
        pageSize: number
        /** 商品品类ID */
        productId?: number
        /** 收货方key，类型_id */
        receiverKey?: string
        /** 起始时间，格式yyyy-MM-dd */
        startDate?: string
        /** 状态编码 */
        state?: string
      }

      export type Response = defs.Result<defs.IPage<defs.ReceiveWebListVO>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.IPage<defs.ReceiveWebListVO>>>
    }

    /**
     * 销地收货-获取状态类型
     * /business/receivePlan/state
     */
    export namespace queryTaxStateOptions {
      export class Params {}

      export type Response = defs.Result<Array<defs.SelectTextOption>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<Array<defs.SelectTextOption>>>
    }
  }

  /**
   * 仪表盘
   */
  export namespace report {
    /**
     * 销地分公司月度排名
     * /business/report/companyOrder
     */
    export namespace companyOrder {
      export class Params {
        /** pageNo */
        pageNo?: number
        /** pageSize */
        pageSize?: number
      }

      export type Response = defs.Result<defs.IPage<defs.CompanyOrder>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.IPage<defs.CompanyOrder>>>
    }

    /**
     * 工厂排名
     * /business/report/queryFactoryOrder
     */
    export namespace queryFactoryOrder {
      export class Params {}

      export type Response = defs.Result<Array<defs.FactoryOrder>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<Array<defs.FactoryOrder>>>
    }

    /**
     * 柱状图
     * /business/report/queryGroup
     */
    export namespace queryGroup {
      export class Params {}

      export type Response = defs.Result<defs.ReportGroupVO>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.ReportGroupVO>>
    }

    /**
     * 报表第一部分数据
     * /business/report/queryReportPartOne
     */
    export namespace queryReportPartOne {
      export class Params {}

      export type Response = defs.Result<defs.ReportSalesVO>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.ReportSalesVO>>
    }

    /**
     * 供应商占比
     * /business/report/querySupplierOrder
     */
    export namespace querySupplierOrder {
      export class Params {}

      export type Response = defs.Result<defs.SupplierOrderVO>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.SupplierOrderVO>>
    }

    /**
     * 客户排行
     * /business/report/selectCustomerCabinetOrder
     */
    export namespace selectCustomerCabinetOrder {
      export class Params {
        /** pageNo */
        pageNo?: number
        /** pageSize */
        pageSize?: number
      }

      export type Response = defs.Result<
        defs.IPage<defs.CustomerCabinetOrderVO>
      >
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.IPage<defs.CustomerCabinetOrderVO>>>
    }
  }

  /**
   * 客户端管理-资料管理 -----李健飞
   */
  export namespace resource {
    /**
     * 资源信息删除
     * /client/management/edit/del
     */
    export namespace editDel {
      export class Params {
        /** 资源ID */
        id: number
      }

      export type Response = defs.Result<string>
      export const init: Response
      export function request(params: Params): Promise<defs.Result<string>>
    }

    /**
     * 资源信息上下架
     * /client/management/edit/status
     */
    export namespace editStatus {
      export class Params {
        /** 资源ID */
        id: number
        /** 修改后状态 1_可用 99_禁用 */
        status: 1 | 99 | 1 | 99
      }

      export type Response = defs.Result<string>
      export const init: Response
      export function request(params: Params): Promise<defs.Result<string>>
    }

    /**
     * 分页展示资料信息
     * /client/management/list
     */
    export namespace findPage {
      export class Params {}

      export type Response = defs.Result<defs.Page<defs.SysSettingPageVO>>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.SysSettingQueryDTO
      ): Promise<defs.Result<defs.Page<defs.SysSettingPageVO>>>
    }

    /**
     * 新增资源信息
     * /client/management/save/resource
     */
    export namespace saveResource {
      export class Params {}

      export type Response = defs.Result<defs.FileVO>
      export const init: Response
      export function request(params: Params): Promise<defs.Result<defs.FileVO>>
    }
  }

  /**
   * SOP管理
   */
  export namespace sop {
    /**
     * SOP管理-添加
     * /business/sop/add
     */
    export namespace add {
      export class Params {}

      export type Response = defs.Result<string>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.Sop
      ): Promise<defs.Result<string>>
    }

    /**
     * SOP管理-编辑
     * /business/sop/edit
     */
    export namespace edit {
      export class Params {}

      export type Response = defs.Result<string>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.Sop
      ): Promise<defs.Result<string>>
    }

    /**
     * SOP管理-分页列表查询
     * /business/sop/list
     */
    export namespace queryPageList {
      export class Params {
        /** SOP环节 */
        operation?: number
        /** 页码 */
        pageNo: number
        /** 每页条数 */
        pageSize: number
        /** 商品ID */
        productId?: number
      }

      export type Response = defs.Result<defs.IPage<defs.SopListResult>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.IPage<defs.SopListResult>>>
    }

    /**
     * SOP管理-获取SOP操作列表
     * /business/sop/operation
     */
    export namespace queryOperation {
      export class Params {}

      export type Response = defs.Result<Array<defs.SelectOption>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<Array<defs.SelectOption>>>
    }

    /**
     * SOP管理-根据ID查询
     * /business/sop/queryById
     */
    export namespace queryById {
      export class Params {
        /** id */
        id: number
      }

      export type Response = defs.Result<defs.Sop>
      export const init: Response
      export function request(params: Params): Promise<defs.Result<defs.Sop>>
    }
  }

  /**
   * SOP 检查项管理
   */
  export namespace sopDetail {
    /**
     * SOP检查项管理-添加
     * /business/sopDetail/add
     */
    export namespace add {
      export class Params {}

      export type Response = defs.Result<string>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.SopDetailSaveRequest
      ): Promise<defs.Result<string>>
    }

    /**
     * SOP检查项管理-获取检查类型
     * /business/sopDetail/checkTypes
     */
    export namespace queryOperation {
      export class Params {}

      export type Response = defs.Result<Array<defs.SelectOption>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<Array<defs.SelectOption>>>
    }

    /**
     * SOP检查项管理-编辑
     * /business/sopDetail/edit
     */
    export namespace edit {
      export class Params {}

      export type Response = defs.Result<string>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.SopDetailSaveRequest
      ): Promise<defs.Result<string>>
    }

    /**
     * SOP检查项管理-修改状态
     * /business/sopDetail/edit/enabled
     */
    export namespace postEditEnabled {
      export class Params {
        /** id */
        id: number
        /** status */
        status: number
      }

      export type Response = defs.Result<string>
      export const init: Response
      export function request(params: Params): Promise<defs.Result<string>>
    }

    /**
     * SOP检查项管理-分页列表查询
     * /business/sopDetail/list
     */
    export namespace queryPageList {
      export class Params {
        /** 页码 */
        pageNo: number
        /** 每页条数 */
        pageSize: number
        /** sopId */
        sopId: number
      }

      export type Response = defs.Result<defs.IPage<defs.SopDetail>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.IPage<defs.SopDetail>>>
    }

    /**
     * SOP检查项管理-根据id查询
     * /business/sopDetail/queryById
     */
    export namespace queryById {
      export class Params {
        /** id */
        id: number
      }

      export type Response = defs.Result<defs.SopDetailResult>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.SopDetailResult>>
    }
  }

  /**
   * 质量管理SOP查看
   */
  export namespace sopResult {
    /**
     * 质量管理SOP-导出excel
     * /business/result/exportXls
     */
    export namespace exportXls {
      export class Params {
        /** 柜次 */
        cabinetBatchCode?: string
        /** 柜号 */
        cabinetCode?: string
        /** 创建结束时间,格式yyyy-MM-dd */
        endDate?: string
        /** map */
        map?: any
        /** 页码 */
        pageNo: number
        /** 每页条数 */
        pageSize: number
        /** 品类idID */
        productId?: number
        /** 产地ID */
        productPlaceId?: number
        /** 收货方key，类型_id */
        receiverKey?: string
        /** 发货方ID */
        senderId?: number
        /** 商品ID */
        spuId?: number
        /** 创建开始时间，格式yyyy-MM-dd */
        startDate?: string
        /** 状态 */
        state?: string
      }

      export type Response = any
      export const init: Response
      export function request(params: Params): Promise<any>
    }

    /**
     * 质量管理SOP-查询sop问卷结果
     * /business/result/getAnswer
     */
    export namespace getAnswer {
      export class Params {
        /** 计划ID */
        id?: number
        /** 操作环节(1-国际装柜，2-堆场验货，3-转柜检验，4-销地收货，5-国内装柜) */
        operation?: number
        /** 收货方key，类型_id */
        receiverKey?: string
      }

      export type Response = defs.Result<defs.SopResultAnswerVO>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.SopResultAnswerVO>>
    }

    /**
     * 质量管理SOP-根据Id查询基本信息
     * /business/result/getById
     */
    export namespace getById {
      export class Params {
        /** id */
        id: number
      }

      export type Response = defs.Result<defs.SopResultDetailVO>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.SopResultDetailVO>>
    }

    /**
     * 质量管理SOP-分页列表查询
     * /business/result/list
     */
    export namespace queryPageList {
      export class Params {
        /** 柜次 */
        cabinetBatchCode?: string
        /** 柜号 */
        cabinetCode?: string
        /** 创建结束时间,格式yyyy-MM-dd */
        endDate?: string
        /** 页码 */
        pageNo: number
        /** 每页条数 */
        pageSize: number
        /** 品类idID */
        productId?: number
        /** 产地ID */
        productPlaceId?: number
        /** 收货方key，类型_id */
        receiverKey?: string
        /** 发货方ID */
        senderId?: number
        /** 商品ID */
        spuId?: number
        /** 创建开始时间，格式yyyy-MM-dd */
        startDate?: string
        /** 状态 */
        state?: string
      }

      export type Response = defs.Result<defs.IPage<defs.SopResultListVO>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.IPage<defs.SopResultListVO>>>
    }

    /**
     * 质量管理SOP-获取状态类型
     * /business/result/state
     */
    export namespace queryTaxStateOptions {
      export class Params {}

      export type Response = defs.Result<Array<defs.SelectTextOption>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<Array<defs.SelectTextOption>>>
    }
  }

  /**
   * 堆场管理接口
   */
  export namespace storageYard {
    /**
     * 堆场管理-添加
     * /business/storageYard/add
     */
    export namespace add {
      export class Params {}

      export type Response = defs.Result<string>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.StorageYardAddDTO
      ): Promise<defs.Result<string>>
    }

    /**
     * 堆场状态管理接口
     * /business/storageYard/change/status
     */
    export namespace changeStatus {
      export class Params {}

      export type Response = defs.Result<void>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.IdDTO
      ): Promise<defs.Result<void>>
    }

    /**
     * 堆场管理-编辑
     * /business/storageYard/edit
     */
    export namespace edit {
      export class Params {}

      export type Response = defs.Result<string>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.StorageYardEditDTO
      ): Promise<defs.Result<string>>
    }

    /**
     * Yard管理-分页列表查询
     * /business/storageYard/list
     */
    export namespace queryPageList {
      export class Params {
        /** 堆场名称 */
        name?: string
        /** pageNo */
        pageNo?: number
        /** pageSize */
        pageSize?: number
        /** 口岸id */
        portId?: number
      }

      export type Response = defs.Result<defs.IPage<defs.StorageYardListVO>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.IPage<defs.StorageYardListVO>>>
    }

    /**
     * 根据id查询堆场
     * /business/storageYard/queryById
     */
    export namespace queryById {
      export class Params {
        /** id */
        id: number
      }

      export type Response = defs.Result<defs.StorageYardEditVO>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.StorageYardEditVO>>
    }

    /**
     * 堆场下拉选择列表
     * /business/storageYard/select
     */
    export namespace selectList {
      export class Params {}

      export type Response = defs.Result<Array<defs.SelectOption>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<Array<defs.SelectOption>>>
    }

    /**
     * 根据口岸查询堆场下拉接口
     * /business/storageYard/selectByPort
     */
    export namespace getSelectByPort {
      export class Params {
        /** portId */
        portId: number
      }

      export type Response = defs.Result<Array<defs.SelectOption>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<Array<defs.SelectOption>>>
    }
  }

  /**
   * 企业组织/供应商管理接口
   */
  export namespace sysDepart {
    /**
     * 组织新增
     * /sys/sysDepart/add
     */
    export namespace add {
      export class Params {}

      export type Response = defs.Result<defs.SysDepart>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.OrganizationsCreateEntity
      ): Promise<defs.Result<defs.SysDepart>>
    }

    /**
     * 组织修改
     * /sys/sysDepart/edit
     */
    export namespace edit {
      export class Params {}

      export type Response = defs.Result<defs.SysDepart>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.SysDepartEditDTO
      ): Promise<defs.Result<defs.SysDepart>>
    }

    /**
     * 组织管理-根据类型查询组织
     * /sys/sysDepart/getCompanyByCategory_new
     */
    export namespace getCompanyByCategory_new {
      export class Params {
        /** companyType */
        companyType?: number
        /** country */
        country?: number
        /** q */
        q?: string
      }

      export type Response = defs.Result<Array<defs.SysDepart>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<Array<defs.SysDepart>>>
    }

    /**
     * 根据id查询组织
     * /sys/sysDepart/queryById
     */
    export namespace queryById {
      export class Params {
        /** id */
        id: number
      }

      export type Response = defs.Result<defs.SysDepartEditVO>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.SysDepartEditVO>>
    }

    /**
     * 组织查询
     * /sys/sysDepart/queryTreeList
     */
    export namespace queryTreeList {
      export class Params {
        /** type */
        type?: number
      }

      export type Response = defs.Result<Array<defs.SysDepartTreeModel>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<Array<defs.SysDepartTreeModel>>>
    }
  }

  /**
   * 系统管理-字典配置
   */
  export namespace sysDict {
    /**
     * 新增
     * /sys/dict/add
     */
    export namespace add {
      export class Params {}

      export type Response = defs.Result<string>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.SysDictAddDTO
      ): Promise<defs.Result<string>>
    }
  }

  /**
   * 系统管理-字典详情配置
   */
  export namespace sysDictItem {
    /**
     * 新增
     * /sys/dictItem/add
     */
    export namespace add {
      export class Params {}

      export type Response = defs.Result<string>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.SysDictItemAddDTO
      ): Promise<defs.Result<string>>
    }
  }

  /**
   * 填值规则
   */
  export namespace sysFillRule {
    /**
        * 填值规则-添加
填值规则-添加
        * /sys/fillRule/add
        */
    export namespace add {
      export class Params {}

      export type Response = defs.Result<void>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.SysFillRule
      ): Promise<defs.Result<void>>
    }

    /**
        * 填值规则-通过id删除
填值规则-通过id删除
        * /sys/fillRule/delete
        */
    export namespace remove {
      export class Params {
        /** id */
        id: string
      }

      export type Response = defs.Result<void>
      export const init: Response
      export function request(params: Params): Promise<defs.Result<void>>
    }

    /**
        * 填值规则-批量删除
填值规则-批量删除
        * /sys/fillRule/deleteBatch
        */
    export namespace deleteBatch {
      export class Params {
        /** ids */
        ids: string
      }

      export type Response = defs.Result<void>
      export const init: Response
      export function request(params: Params): Promise<defs.Result<void>>
    }

    /**
        * 填值规则-编辑
填值规则-编辑
        * /sys/fillRule/edit
        */
    export namespace edit {
      export class Params {}

      export type Response = defs.Result<void>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.SysFillRule
      ): Promise<defs.Result<void>>
    }

    /**
        * 填值规则-分页列表查询
填值规则-分页列表查询
        * /sys/fillRule/list
        */
    export namespace queryPageList {
      export class Params {
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

      export type Response = defs.Result<defs.IPage<defs.SysFillRule>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.IPage<defs.SysFillRule>>>
    }

    /**
        * 填值规则-通过id查询
填值规则-通过id查询
        * /sys/fillRule/queryById
        */
    export namespace queryById {
      export class Params {
        /** id */
        id: string
      }

      export type Response = defs.Result<defs.SysFillRule>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.SysFillRule>>
    }
  }

  /**
   * 职务表
   */
  export namespace sysPosition {
    /**
        * 职务表-添加
职务表-添加
        * /sys/position/add
        */
    export namespace add {
      export class Params {}

      export type Response = defs.Result<defs.SysPosition>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.SysPosition
      ): Promise<defs.Result<defs.SysPosition>>
    }

    /**
        * 职务表-通过id删除
职务表-通过id删除
        * /sys/position/delete
        */
    export namespace remove {
      export class Params {
        /** id */
        id: string
      }

      export type Response = defs.Result<void>
      export const init: Response
      export function request(params: Params): Promise<defs.Result<void>>
    }

    /**
        * 职务表-批量删除
职务表-批量删除
        * /sys/position/deleteBatch
        */
    export namespace deleteBatch {
      export class Params {
        /** ids */
        ids: string
      }

      export type Response = defs.Result<defs.SysPosition>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.SysPosition>>
    }

    /**
        * 职务表-编辑
职务表-编辑
        * /sys/position/edit
        */
    export namespace edit {
      export class Params {}

      export type Response = defs.Result<defs.SysPosition>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.SysPosition
      ): Promise<defs.Result<defs.SysPosition>>
    }

    /**
        * 职务表-分页列表查询
职务表-分页列表查询
        * /sys/position/list
        */
    export namespace queryPageList {
      export class Params {
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

      export type Response = defs.Result<defs.IPage<defs.SysPosition>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.IPage<defs.SysPosition>>>
    }

    /**
        * 职务表-通过id查询
职务表-通过id查询
        * /sys/position/queryById
        */
    export namespace queryById {
      export class Params {
        /** id */
        id: string
      }

      export type Response = defs.Result<defs.SysPosition>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.SysPosition>>
    }
  }

  /**
   * 系统管理-角色管理
   */
  export namespace sysRole {
    /**
     * 添加角色
     * /sys/role/add
     */
    export namespace add {
      export class Params {}

      export type Response = defs.Result
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.SysRole
      ): Promise<defs.Result>
    }

    /**
     * 查询数据规则数据
     * /sys/role/datarule/{permissionId}/{roleId}
     */
    export namespace loadDatarule {
      export class Params {
        /** permissionId */
        permissionId: number
        /** roleId */
        roleId: number
      }

      export type Response = object
      export const init: Response
      export function request(params: Params): Promise<object>
    }

    /**
     * 通过id删除
     * /sys/role/delete
     */
    export namespace remove {
      export class Params {
        /** id */
        id: string
      }

      export type Response = defs.Result
      export const init: Response
      export function request(params: Params): Promise<defs.Result>
    }

    /**
     * 批量删除
     * /sys/role/deleteBatch
     */
    export namespace deleteBatch {
      export class Params {
        /** ids */
        ids: string
      }

      export type Response = defs.Result
      export const init: Response
      export function request(params: Params): Promise<defs.Result>
    }

    /**
     * 编辑角色
     * /sys/role/edit
     */
    export namespace edit {
      export class Params {}

      export type Response = defs.Result
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.SysRole
      ): Promise<defs.Result>
    }

    /**
     * 通过excel导入数据
     * /sys/role/importExcel
     */
    export namespace importExcel {
      export class Params {}

      export type Response = defs.Result
      export const init: Response
      export function request(params: Params): Promise<defs.Result>
    }

    /**
     * 分页列表查询
     * /sys/role/list
     */
    export namespace queryPageList {
      export class Params {
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

      export type Response = defs.SysRole
      export const init: Response
      export function request(params: Params): Promise<defs.SysRole>
    }

    /**
     * 通过id查询
     * /sys/role/queryById
     */
    export namespace queryById {
      export class Params {
        /** id */
        id: string
      }

      export type Response = defs.Result
      export const init: Response
      export function request(params: Params): Promise<defs.Result>
    }

    /**
     * 查询菜单权限树
     * /sys/role/queryTreeList
     */
    export namespace queryTreeList {
      export class Params {}

      export type Response = object
      export const init: Response
      export function request(params: Params): Promise<object>
    }

    /**
     * 查询全部
     * /sys/role/queryall
     */
    export namespace queryall {
      export class Params {}

      export type Response = defs.Result
      export const init: Response
      export function request(params: Params): Promise<defs.Result>
    }

    /**
     * 查询角色菜单权限
     * /sys/role/roleMenus
     */
    export namespace roleMenus {
      export class Params {
        /** roleId */
        roleId: number
      }

      export type Response = Array<object>
      export const init: Response
      export function request(params: Params): Promise<Array<object>>
    }

    /**
     * 修改菜单权限
     * /sys/role/roleMenus
     */
    export namespace editRoleMenus {
      export class Params {}

      export type Response = defs.Result
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.RolePermissionEditDTO
      ): Promise<defs.Result>
    }
  }

  /**
   * 系统管理-系统配置
   */
  export namespace sysSetting {
    /**
     * 获取鲸准网内嵌iFrame路径
     * /sys/setting/get/iFrameUrl
     */
    export namespace findList {
      export class Params {}

      export type Response = defs.Result<string>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.IFrameInfoQueryVO
      ): Promise<defs.Result<string>>
    }

    /**
     * 商品数据迁移代码执行
     * /sys/setting/initGoods
     */
    export namespace initGoods {
      export class Params {}

      export type Response = any
      export const init: Response
      export function request(params: Params): Promise<any>
    }
  }

  /**
   * 系统管理-用户管理
   */
  export namespace sysUser {
    /**
     * 创建用户
     * /sys/user/add
     */
    export namespace add {
      export class Params {}

      export type Response = defs.UserCreatedVO
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.UserVO
      ): Promise<defs.UserCreatedVO>
    }

    /**
     * 获取用户列表  根据用户名和真实名 模糊匹配
     * /sys/user/appUserList
     */
    export namespace appUserList {
      export class Params {
        /** keyword */
        keyword?: string
        /** pageNo */
        pageNo?: number
        /** pageSize */
        pageSize?: number
      }

      export type Response = defs.Result<defs.IPage<defs.SysUser>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.IPage<defs.SysUser>>>
    }

    /**
        * 校验用户账号是否唯一
可以校验其他 需要检验什么就传什么？
        * /sys/user/checkOnlyUser
        */
    export namespace checkOnlyUser {
      export class Params {
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
        /** 部门code */
        orgCode?: string
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

      export type Response = defs.Result<boolean>
      export const init: Response
      export function request(params: Params): Promise<defs.Result<boolean>>
    }

    /**
     * 删除用户
     * /sys/user/delete
     */
    export namespace remove {
      export class Params {
        /** id */
        id: string
      }

      export type Response = defs.Result<void>
      export const init: Response
      export function request(params: Params): Promise<defs.Result<void>>
    }

    /**
     * 批量删除用户
     * /sys/user/deleteBatch
     */
    export namespace deleteBatch {
      export class Params {
        /** ids */
        ids: string
      }

      export type Response = defs.Result<void>
      export const init: Response
      export function request(params: Params): Promise<defs.Result<void>>
    }

    /**
     * 删除指定机构的用户关系
     * /sys/user/deleteUserInDepart
     */
    export namespace deleteUserInDepart {
      export class Params {
        /** depId */
        depId: string
        /** userId */
        userId: string
      }

      export type Response = defs.Result<defs.SysUserDepart>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.SysUserDepart>>
    }

    /**
     * 批量删除指定机构的用户关系
     * /sys/user/deleteUserInDepartBatch
     */
    export namespace deleteUserInDepartBatch {
      export class Params {
        /** depId */
        depId: string
        /** userIds */
        userIds: string
      }

      export type Response = defs.Result<defs.SysUserDepart>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.SysUserDepart>>
    }

    /**
     * 删除指定角色的用户关系
     * /sys/user/deleteUserRole
     */
    export namespace deleteUserRole {
      export class Params {
        /** roleId */
        roleId: string
        /** userId */
        userId: string
      }

      export type Response = defs.Result<defs.SysUserRole>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.SysUserRole>>
    }

    /**
     * 批量删除指定角色的用户关系
     * /sys/user/deleteUserRoleBatch
     */
    export namespace deleteUserRoleBatch {
      export class Params {
        /** roleId */
        roleId: string
        /** userIds */
        userIds: string
      }

      export type Response = defs.Result<defs.SysUserRole>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.SysUserRole>>
    }

    /**
     * 部门用户列表
     * /sys/user/departUserList
     */
    export namespace departUserList {
      export class Params {
        /** pageNo */
        pageNo?: number
        /** pageSize */
        pageSize?: number
      }

      export type Response = defs.Result<defs.IPage<defs.SysUser>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.IPage<defs.SysUser>>>
    }

    /**
     * 编辑用户
     * /sys/user/edit
     */
    export namespace edit {
      export class Params {}

      export type Response = defs.Result<string>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.UserEditDTO
      ): Promise<defs.Result<string>>
    }

    /**
     * 给指定部门添加对应的用户
     * /sys/user/editSysDepartWithUser
     */
    export namespace editSysDepartWithUser {
      export class Params {}

      export type Response = defs.Result<string>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.SysDepartUsersVO
      ): Promise<defs.Result<string>>
    }

    /**
     * 冻结&解冻用户
     * /sys/user/frozenBatch
     */
    export namespace frozenBatch {
      export class Params {}

      export type Response = defs.Result<defs.SysUser>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.UserFrozenDTO
      ): Promise<defs.Result<defs.SysUser>>
    }

    /**
     * 根据部门id查询用户信息
     * /sys/user/generateUserId
     */
    export namespace generateUserId {
      export class Params {}

      export type Response = defs.Result<string>
      export const init: Response
      export function request(params: Params): Promise<defs.Result<string>>
    }

    /**
     * 查询当前用户的所有部门/当前部门编码
     * /sys/user/getCurrentUserDeparts
     */
    export namespace getCurrentUserDeparts {
      export class Params {}

      export type Response = defs.Result<defs.ObjectMap<string, ObjectMap>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.ObjectMap<string, ObjectMap>>>
    }

    /**
     * 根据TOKEN获取用户的部分信息
     * /sys/user/getUserSectionInfoByToken
     */
    export namespace getUserSectionInfoByToken {
      export class Params {
        /** token */
        token?: string
      }

      export type Response = defs.Result<defs.ObjectMap<string, ObjectMap>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.ObjectMap<string, ObjectMap>>>
    }

    /**
     * 根据 token 获取用户明细
     * /sys/user/info
     */
    export namespace getInfo {
      export class Params {}

      export type Response = defs.Result<defs.UserInfoVO>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.UserInfoVO>>
    }

    /**
     * 用户分页
     * /sys/user/list
     */
    export namespace queryPageList {
      export class Params {
        /** 删除状态(0-正常,1-已删除) */
        deleted?: number
        /** 部门IDS */
        departIds?: Array<number>
        /** 用户名称 */
        nickname?: string
        /** pageNo */
        pageNo?: number
        /** pageSize */
        pageSize?: number
        /** 姓名 */
        realname?: string
        /** 角色ID */
        roleId?: number
        /** sortBys */
        sortBys?: string
        /** 状态 */
        status?: number
        /** 登陆账号 */
        username?: string
      }

      export type Response = defs.SysUserVO
      export const init: Response
      export function request(params: Params): Promise<defs.SysUserVO>
    }

    /**
     * 用户下拉选择
     * /sys/user/option/search
     */
    export namespace searchableUserOption {
      export class Params {
        /** q */
        q?: string
      }

      export type Response = defs.Result<Array<defs.SelectOption>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<Array<defs.SelectOption>>>
    }

    /**
     * 查询所有系统用户
     * /sys/user/queryAllSysUser
     */
    export namespace queryAllSysUser {
      export class Params {}

      export type Response = defs.Result<Array<defs.SysUser>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<Array<defs.SysUser>>>
    }

    /**
     * 查询所有系统用户-下拉框
     * /sys/user/queryAllSysUserForSelect
     */
    export namespace queryAllSysUserForSelect {
      export class Params {}

      export type Response = defs.Result<Array<defs.SelectOption>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<Array<defs.SelectOption>>>
    }

    /**
     * 根据用户ID查询用户
     * /sys/user/queryById
     */
    export namespace queryById {
      export class Params {
        /** id */
        id: number
      }

      export type Response = defs.Result<defs.UserInfoVO>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.UserInfoVO>>
    }

    /**
        * 批量查询用户
英文逗号分隔的用户ID
        * /sys/user/queryByIds
        */
    export namespace queryByIds {
      export class Params {
        /** userIds */
        userIds: string
      }

      export type Response = defs.Result<Array<defs.SysUser>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<Array<defs.SysUser>>>
    }

    /**
        * 根据 orgCode 查询用户
包括子部门下的用户 若某个用户包含多个部门，则会显示多条记录，可自行处理成单条记录
        * /sys/user/queryByOrgCode
        */
    export namespace queryByDepartId {
      export class Params {
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

      export type Response = defs.Result<defs.IPage<defs.SysUserSysDepartModel>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.IPage<defs.SysUserSysDepartModel>>>
    }

    /**
     * 根据 orgCode 查询用户，包括子部门下的用户
     * /sys/user/queryByOrgCodeForAddressList
     */
    export namespace queryByOrgCodeForAddressList {
      export class Params {
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

      export type Response = defs.Result<defs.IPage<defs.JSONObject>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.IPage<defs.JSONObject>>>
    }

    /**
     * 根据部门id查询用户信息
     * /sys/user/queryUserByDepId
     */
    export namespace queryUserByDepId {
      export class Params {
        /** id */
        id: number
      }

      export type Response = defs.Result<Array<defs.SysUser>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<Array<defs.SysUser>>>
    }

    /**
        * 查询用户权限列表
默认查当前用户，可传用户id查询该用户权限列表
        * /sys/user/queryUserPermissions
        */
    export namespace queryUserPermissions {
      export class Params {
        /** uid */
        uid?: number
      }

      export type Response = defs.Result<Array<string>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<Array<string>>>
    }

    /**
     * 查询用户角色
     * /sys/user/queryUserRole
     */
    export namespace queryUserRole {
      export class Params {
        /** id */
        id: number
      }

      export type Response = defs.Result<Array<number>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<Array<number>>>
    }

    /**
     * 重置密码-用于第一次进入修改
     * /sys/user/resetPassword
     */
    export namespace resetPassword {
      export class Params {}

      export type Response = defs.Result<void>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.UpdatePasswordVO
      ): Promise<defs.Result<void>>
    }

    /**
     * 用户自身-修改密码
     * /sys/user/updatePassword
     */
    export namespace updatePassword {
      export class Params {}

      export type Response = defs.Result<void>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.UserUpdatePwdDTO
      ): Promise<defs.Result<void>>
    }

    /**
     * 管理员-修改用户密码
     * /sys/user/updatePasswordByAdmin
     */
    export namespace updatePasswordByAdmin {
      export class Params {}

      export type Response = defs.Result<void>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.AdminUpdatePwdDTO
      ): Promise<defs.Result<void>>
    }

    /**
     * 查询指定用户和部门关联的数据
     * /sys/user/userDepartList
     */
    export namespace getUserDepartsList {
      export class Params {
        /** userId */
        userId: number
      }

      export type Response = defs.Result<Array<defs.DepartIdModel>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<Array<defs.DepartIdModel>>>
    }
  }

  /**
   * Temp Monitor Controller
   */
  export namespace tempMonitor {
    /**
     * 详情接口
     * /transiting/temp/monitor/detail
     */
    export namespace detail {
      export class Params {
        /** planId */
        planId: number
      }

      export type Response = defs.Result<defs.TempMonitorDetailVO>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.TempMonitorDetailVO>>
    }

    /**
     * 分页列表接口
     * /transiting/temp/monitor/list
     */
    export namespace pageList {
      export class Params {
        /** pageNo */
        pageNo?: number
        /** pageSize */
        pageSize?: number
      }

      export type Response = defs.Result<defs.Page<defs.TempMonitorListVO>>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.TempMonitorQueryDTO
      ): Promise<defs.Result<defs.Page<defs.TempMonitorListVO>>>
    }

    /**
     * 设置温度接口
     * /transiting/temp/monitor/setting/add
     */
    export namespace monitorSetting {
      export class Params {}

      export type Response = defs.Result<void>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.TempMonitorSettingDTO
      ): Promise<defs.Result<void>>
    }

    /**
     * 修改温度接口
     * /transiting/temp/monitor/setting/edit
     */
    export namespace monitorSettingEdit {
      export class Params {}

      export type Response = defs.Result<void>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.TempMonitorSettingEditDTO
      ): Promise<defs.Result<void>>
    }
  }

  /**
   * 尾程运输
   */
  export namespace transportation {
    /**
     * 尾程运输-订车
     * /business/transportation/book
     */
    export namespace book {
      export class Params {}

      export type Response = defs.Result<string>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.DomesticTransportBookDTO
      ): Promise<defs.Result<string>>
    }

    /**
     * 尾程运输-根据订单ID获取详情,用于编辑
     * /business/transportation/getById
     */
    export namespace getById {
      export class Params {
        /** id */
        id: number
      }

      export type Response = defs.Result<defs.DomesticTransportationDetailVO>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.DomesticTransportationDetailVO>>
    }

    /**
     * 尾程运输-根据ID运输信息
     * /business/transportation/getInfoById
     */
    export namespace getInfoById {
      export class Params {
        /** id */
        id: number
      }

      export type Response = defs.Result<defs.DomesticTransportationVO>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.DomesticTransportationVO>>
    }

    /**
     * 尾程运输-分页列表查询
     * /business/transportation/list
     */
    export namespace queryPageList {
      export class Params {
        /** 柜号 */
        cabinetCode?: string
        /** 发车截止时间，格式yyyy-MM-dd */
        endDate?: string
        /** 物流公司ID */
        logisticsCompanyId?: number
        /** 页码 */
        pageNo: number
        /** 每页条数 */
        pageSize: number
        /** 品类ID */
        productId?: number
        /** 装柜方式1：原柜 2：转柜 3：装柜 */
        shipmentMethod?: number
        /** 发车起始时间，格式yyyy-MM-dd */
        startDate?: string
        /** 状态编码 */
        state?: string
      }

      export type Response = defs.Result<
        defs.Page<defs.DomesticTransportationListVO>
      >
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<defs.Page<defs.DomesticTransportationListVO>>>
    }

    /**
     * 尾程运输-发车
     * /business/transportation/start
     */
    export namespace start {
      export class Params {}

      export type Response = defs.Result<string>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.DomesticTransportStartDTO
      ): Promise<defs.Result<string>>
    }

    /**
     * 尾程运输-获取状态类型
     * /business/transportation/state
     */
    export namespace queryTaxStateOptions {
      export class Params {}

      export type Response = defs.Result<Array<defs.SelectTextOption>>
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.Result<Array<defs.SelectTextOption>>>
    }
  }

  /**
   * 资源上传接口
   */
  export namespace upload {
    /**
     * 文件上传接口
     * /sys/common/upload
     */
    export namespace upload {
      export class Params {}

      export type Response = defs.Result<string>
      export const init: Response
      export function request(params: Params): Promise<defs.Result<string>>
    }
  }
}
