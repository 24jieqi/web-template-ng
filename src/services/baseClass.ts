export class AdminUpdatePwdDTO {
  /** 用户主键 */
  id = undefined

  /** 新密码 */
  password = ''
}

export class BaseInfoVO {
  /** 基本信息-备注 */
  baseInfoRemark = ''

  /** 基本信息-物料批次号 */
  batchNumber = ''

  /** 基本信息-销售单号 */
  billCode = ''

  /** 基本信息-柜次 */
  cabinetBatchCode = ''

  /** 基本信息-分柜号 */
  cabinetBatchSubCode = ''

  /** 基本信息-柜号 */
  cabinetCode = ''

  /** 合同号 */
  contractCode = ''

  /** 基本信息-发运方式 */
  deliveryMethod = undefined

  /** 基本信息-发运方式 */
  deliveryMethodDesc = ''

  /** 基本信息-ID */
  id = undefined

  /** 基本信息-状态 */
  status = ''

  /** 基本信息-状态 */
  statusDesc = ''
}

export class BasePageRequest {
  /** 柜次(不超过12个字符 模糊查询) */
  cabinetBatchCode = ''

  /** 柜号 (不超过11个字符 模糊查询) */
  cabinetCode = ''

  /** 创建时间-结束 */
  createTimeEnd = ''

  /** 创建时间-开始 */
  createTimeStart = ''

  /** 发运方式 1_陆运 2_海运 3_铁运 */
  deliveryMethod = 1

  /** 发货时间-结束 */
  deliveryTimeEnd = ''

  /** 发货时间-开始 */
  deliveryTimeStart = ''

  /** 页码 */
  pageNo = undefined

  /** 每页条数 */
  pageSize = undefined

  /** 进口港ID */
  portId = undefined

  /** 商品品类ID */
  productId = undefined

  /** 商品SPU ID */
  productSpuId = undefined

  /** 收货时间-结束 */
  receivingTimeEnd = ''

  /** 收货时间-开始 */
  receivingTimeStart = ''

  /** 状态 查询全部时不传 */
  status = ''
}

export class BillCodeEditDTO {
  /** 销售单号 */
  billCode = ''

  /** 主键ID */
  id = undefined
}

export class BillCodeListVO {
  /** 销售单号 */
  billCode = ''

  /** 柜次 */
  cabinetBatchCode = ''

  /** 柜号 */
  cabinetCode = ''

  /** 主键 */
  id = undefined

  /** 商品 */
  product = ''

  /** 发货方 */
  sender = ''

  /** 状态 */
  state = ''
}

export class BillCodeVO {
  /** 销售单号 */
  billCode = ''

  /** 柜次 */
  cabinetBatchCode = ''

  /** 柜号 */
  cabinetCode = ''

  /** 合同号 */
  contractCode = ''

  /** 主键 */
  id = undefined
}

export class Column {
  /** 对齐方式,默认左对齐 */
  align = 'LEFT'

  /** 列字段 */
  filed = ''

  /** 列名 */
  name = ''
}

export class CompanyOrder {
  /** cabinetCount */
  cabinetCount = undefined

  /** departName */
  departName = ''

  /** receiverId */
  receiverId = undefined
}

export class ContractAddDTO {
  /** 合同号 */
  contractCode = ''

  /** 合同号名称 */
  contractName = ''

  /** 合同类型 1_外汇合同 */
  contractType = undefined

  /** 合同货币符号 1_人民币, 2_美元 */
  currency = 1

  /** 预计使用数量 */
  expectedNum = undefined

  /** 合同名称国际化 */
  nameLocale = undefined

  /** 合同所属商品品类ID */
  productId = undefined

  /** 状态 1_可用 99_禁用 默认为可用 */
  status = 1

  /** 合同金额 */
  totalAmount = undefined

  /** 预警数量 */
  warningNum = undefined
}

export class ContractDetailVO {
  /** 合同编码 */
  contractCode = ''

  /** 合同名称 */
  contractName = ''

  /** 合同所属商品品类 */
  contractProductName = ''

  /** 合同类型 1_外汇合同 */
  contractType = undefined

  /** 合同类型描述 1_外汇合同 */
  contractTypeDesc = ''

  /** 创建时间 */
  createTime = ''

  /** 合同金额货币符号 */
  currency = undefined

  /** 预计使用数量 */
  expectedNum = undefined

  /** 合同ID */
  id = undefined

  /** 合同名称 */
  nameLocale = undefined

  /** 状态 */
  status = undefined

  /** 剩余数量 */
  surplusNum = undefined

  /** 合同总金额 */
  totalAmount = undefined

  /** 已使用数量 */
  usedNum = undefined

  /** 预警数量 */
  warningNum = undefined
}

export class ContractEditDTO {
  /** 合同号 */
  contractCode = ''

  /** 合同号名称 */
  contractName = ''

  /** 合同类型 1_外汇合同 */
  contractType = undefined

  /** 合同货币符号 1_人民币, 2_美元 */
  currency = 1

  /** 预计使用数量 */
  expectedNum = undefined

  /** 合同ID */
  id = undefined

  /** 合同名称国际化 */
  nameLocale = undefined

  /** 状态 1_可用 99_禁用 默认为可用 */
  status = 1

  /** 合同金额 */
  totalAmount = undefined

  /** 预警数量 */
  warningNum = undefined
}

export class ContractEditStatusDTO {
  /** 合同ID */
  contractId = undefined

  /** 修改之后的状态 1_启用 99_禁用 */
  status = 1
}

export class ContractPageListVO {
  /** 合同编码 */
  contractCode = ''

  /** 合同名称 */
  contractName = ''

  /** 合同所属商品品类 */
  contractProductName = ''

  /** 合同类型 1_外汇合同 */
  contractType = undefined

  /** 合同类型描述 1_外汇合同 */
  contractTypeDesc = ''

  /** 创建时间 */
  createTime = ''

  /** 合同金额货币符号 */
  currency = undefined

  /** 预计使用数量 */
  expectedNum = undefined

  /** 合同ID */
  id = undefined

  /** 状态 */
  status = undefined

  /** 剩余数量 */
  surplusNum = undefined

  /** 合同总金额 */
  totalAmount = undefined

  /** 已使用数量 */
  usedNum = undefined

  /** 预警数量 */
  warningNum = undefined
}

export class ContractPageQueryDTO {
  /** 合同编码(模糊查询) */
  contractCode = ''

  /** 页码 */
  pageNo = undefined

  /** 每页条数 */
  pageSize = undefined

  /** 商品品类ID */
  productId = undefined
}

export class ContractTextOptionVO {
  /** 合同编码 */
  contractCode = ''

  /** 合同名称 */
  contractName = ''

  /** 是否禁用 */
  disabled = false

  /** 合同ID */
  id = undefined

  /** 合同可用余量 */
  surplusNum = undefined
}

export class CustomerAddDTO {
  /** 工商信息 */
  businessInfo = new CustomerBusinessInfoDTO()

  /** 客户编码 */
  code = ''

  /** 关联区域Ids */
  departIds = []

  /** 客户简称（中文） */
  name = ''

  /** 客户简称（多语言） */
  nameLocale = undefined

  /** 收货人手机号码 */
  phone = ''

  /** 收货地址 */
  receiveAddress = ''

  /** 收货人 */
  receiver = ''

  /** 状态 99 停用 1 启用 */
  status = undefined
}

export class CustomerBusinessInfoDTO {
  /** 企业地址 */
  address = ''

  /** 营业执照 */
  bizLicense = ''

  /** 法定代表人 */
  legalRep = ''

  /** 企业名 */
  name = ''

  /** 社会信用代码 */
  socialCreditCode = ''
}

export class CustomerBusinessInfoVO {
  /** 企业地址 */
  address = ''

  /** 营业执照 */
  bizLicense = ''

  /** 法定代表人 */
  legalRep = ''

  /** 企业名 */
  name = ''

  /** 社会信用代码 */
  socialCreditCode = ''
}

export class CustomerCabinetOrderVO {
  /** cabinetCount */
  cabinetCount = undefined

  /** departName */
  departName = ''

  /** receiverId */
  receiverId = undefined

  /** thisMonthCount */
  thisMonthCount = undefined
}

export class CustomerCompanyListVO {
  /** 地址 */
  address = ''

  /** 联系人 */
  contacts = ''

  /** 客户ID */
  customerId = undefined

  /** 仓库名称 */
  depositoryName = ''

  /** 启用状态 1启用 99禁用 */
  enabled = undefined

  /** 主键ID */
  id = undefined

  /** 纬度 */
  lat = ''

  /** 经度 */
  lng = ''

  /** 联系电话 */
  phone = ''
}

export class CustomerDepositoryCheckNameDTO {
  /** 客户ID */
  customerId = undefined

  /** 仓库名称 */
  depositoryName = ''

  /** 主键ID */
  id = undefined
}

export class CustomerDepositoryListDTO {
  /** 客户ID */
  customerId = undefined

  /** 页码 */
  pageNo = undefined

  /** 每页条数 */
  pageSize = undefined
}

export class CustomerDepositorySaveDTO {
  /** 地址 */
  address = ''

  /** 联系人 */
  contacts = ''

  /** 客户ID */
  customerId = undefined

  /** 仓库名称 */
  depositoryName = ''

  /** 启用状态 1启用 99禁用 */
  enabled = undefined

  /** 主键ID,有则编辑，无则新增 */
  id = undefined

  /** 纬度 */
  lat = ''

  /** 经度 */
  lng = ''

  /** 手机号 */
  phone = ''
}

export class CustomerEditDTO {
  /** 工商信息 */
  businessInfo = new CustomerBusinessInfoDTO()

  /** 客户编码 */
  code = ''

  /** 关联区域Ids */
  departIds = []

  /** id */
  id = undefined

  /** 客户简称（中文） */
  name = ''

  /** nameLocale */
  nameLocale = undefined

  /** 收货人手机号码 */
  phone = ''

  /** 收货地址 */
  receiveAddress = ''

  /** 收货人 */
  receiver = ''

  /** 状态 99 停用 1 启用 */
  status = undefined
}

export class CustomerEditVO {
  /** 工商信息 */
  businessInfo = new CustomerBusinessInfoVO()

  /** 客户编码 */
  code = ''

  /** 关联区域Ids */
  departIds = []

  /** id */
  id = undefined

  /** 客户简称（中文） */
  name = ''

  /** nameLocale */
  nameLocale = undefined

  /** 收货人手机号码 */
  phone = ''

  /** 收货地址 */
  receiveAddress = ''

  /** 收货人 */
  receiver = ''

  /** 状态 0 停用 1 启用 */
  status = undefined
}

export class CustomerListVO {
  /** 客户编码 */
  code = ''

  /** 服务区域 */
  departNames = ''

  /** id */
  id = undefined

  /** 客户名称 */
  name = ''

  /** 状态 0 停用 1 启用 */
  status = undefined
}

export class DeclareCustomAddDTO {
  /** 出口报关单 */
  declareFile = []

  /** 进口申报材料 */
  domesticDeclareFile = []

  /** 物流交接单 */
  logisticsDeliveryReceipt = []

  /** 提单号 */
  pickBillCode = ''

  /** 计划id */
  planId = undefined

  /** 货物到港时间 */
  transferTime = ''
}

export class DeclareCustomCommitDTO {
  /** 进口申报材料 */
  domesticDeclareFile = []

  /** id */
  id = undefined

  /** 计划id */
  planId = undefined
}

export class DeclareCustomEditVO {
  /** 柜号 */
  cabinetCode = ''

  /** 合同号 */
  contractCode = ''

  /** 出口报关单 */
  declareFile = ''

  /** 进口申报材料 */
  domesticDeclareFile = ''

  /** id */
  id = undefined

  /** 物流交接单 */
  logisticsDeliveryReceipt = ''

  /** 提单号 */
  pickBillCode = ''

  /** 计划id */
  planId = undefined

  /** 品类名 */
  productName = ''

  /** 备注 */
  remark = ''

  /** 装柜标签 */
  skuTag = ''

  /** 商品 */
  spu = ''

  /** 货物到港时间 */
  transferTime = ''
}

export class DeclareCustomListVO {
  /** 进口港 */
  arrivePort = ''

  /** 柜号 */
  cabinetCode = ''

  /** 合同号 */
  contractCode = ''

  /** 报关时间 */
  createTime = ''

  /** 出口报关公司 */
  declareCompany = ''

  /** 发运方式 */
  deliveryMethod = ''

  /** 计划离港时间 */
  expectDepartedTime = ''

  /** id */
  id = undefined

  /** 计划id */
  planId = undefined

  /** 品类名 */
  product = ''

  /** 备注 */
  remark = ''

  /** 商品 */
  spu = ''

  /** 出口港 */
  startPort = ''

  /** 状态 */
  state = ''

  /** 状态翻译 */
  stateName = ''

  /** 出口货值 */
  totalAmount = ''

  /** 毛重 */
  totalGrossWeight = ''

  /** 净重 */
  totalNetWeight = ''
}

export class DeclareDto {
  /** 当前状态 */
  status = ''

  /** 当前状态信息描述 */
  statusDesc = ''

  /** 状态图片URL */
  statusImageUrl = ''

  /** 当前状态信息描述 */
  statusTime = ''

  /** 当前状态被使用情况 finish,process,wait */
  statusUsed = ''
}

export class DeclareInfoAddDTO {
  /** 计划到港时间 */
  expectArriveTime = ''

  /** 计划离港时间 */
  expectDepartedTime = ''

  /** 提柜地址 */
  pickCabinetAddress = ''

  /** 提柜文件 */
  pickCabinetFile = []

  /** 提柜人联系方式 */
  pickCabinetMobile = ''

  /** 提柜联系人 */
  pickCabinetPerson = ''

  /** 计划id */
  planId = undefined

  /** 船次号 */
  shipBatchCode = ''

  /** 船公司 */
  shipCompany = ''

  /** 船名 */
  shipName = ''
}

export class DeclareInfoEditVO {
  /** 柜次 */
  cabinetBatchCode = ''

  /** 合同号 */
  contractCode = ''

  /** 计划到港时间 */
  expectArriveTime = ''

  /** 计划离港时间 */
  expectDepartedTime = ''

  /** 工厂联系人 */
  factoryContact = ''

  /** 工厂联系方式 */
  factoryContactMobile = ''

  /** 订舱id */
  id = undefined

  /** 提柜地址 */
  pickCabinetAddress = ''

  /** 提柜文件 */
  pickCabinetFile = ''

  /** 提柜人联系方式 */
  pickCabinetMobile = ''

  /** 提柜联系人 */
  pickCabinetPerson = ''

  /** 计划id */
  planId = undefined

  /** 品类id */
  productId = undefined

  /** 品类规则id */
  productRuleId = undefined

  /** 备注 */
  remark = ''

  /** 船次号 */
  shipBatchCode = ''

  /** 船公司 */
  shipCompany = ''

  /** 船名 */
  shipName = ''

  /** 商品 */
  spu = ''
}

export class DeclareInfoListVO {
  /** 进口港 */
  arrivePort = ''

  /** 柜次 */
  cabinetBatchCode = ''

  /** 合同号 */
  contractCode = ''

  /** 订舱时间 */
  createTime = ''

  /** 出口报关公司 */
  declareCompany = ''

  /** 头程运输公司 */
  headTransport = ''

  /** 订舱id */
  id = undefined

  /** 计划id */
  planId = undefined

  /** 计划发柜时间 */
  planStartTime = ''

  /** 商品品类 */
  product = ''

  /** 备注 */
  remark = ''

  /** 出口港 */
  startPort = ''

  /** 状态 */
  state = ''

  /** 状态翻译 */
  stateName = ''
}

export class DeliveryEditBaseInfoVO {
  /** 基本信息-销售单号 */
  billCode = ''

  /** 基本信息-柜次 */
  cabinetBatchCode = ''

  /** 基本信息-柜号 */
  cabinetCode = ''

  /** 合同号 */
  contractCode = ''

  /** plan表主键 */
  id = undefined
}

export class DeliveryEditBookingInfoVO {
  /** 订舱信息-计划到港时间 */
  expectArriveTime = ''

  /** 订舱信息-计划离港时间 */
  expectDepartedTime = ''

  /** plan表主键 */
  id = undefined

  /** 订舱信息-船公司 */
  shipCompany = ''

  /** 订舱信息-船名 */
  shipName = ''

  /** 订舱信息-船次号 */
  shipNo = ''
}

export class DeliveryEditExportDeclareInfoVO {
  /** 出口报关-货物到港时间 */
  exportArriveTime = ''

  /** 出口报关-出口报关公司ID */
  exportCompanyId = undefined

  /** 出口报关-国内申报资料 */
  exportDeclareDocuments = []

  /** 出口报关-出口报关单 */
  exportDeclareFile = []

  /** 出口报关-提单号 */
  exportPickBillCode = ''

  /** 出口报关-出口港ID */
  exportPortId = undefined

  /** plan表主键 */
  id = undefined
}

export class DeliveryEditFinalTransportInfoVO {
  /** 尾程运输-车牌号 */
  carNo = ''

  /** 尾程运输-司机姓名 */
  driverName = ''

  /** 尾程运输-司机电话 */
  driverPhone = ''

  /** plan表主键 */
  id = undefined

  /** 尾程运输-运输公司ID */
  logisticsCompanyId = undefined

  /** 尾程运输-设定温度 */
  temperature = undefined

  /** 尾程运输-挂车号 */
  trailerNo = ''

  /** 尾程运输-设定风口 */
  tuyere = undefined
}

export class DeliveryEditHeaderTransportInfoVO {
  /** 头程运输-运输公司ID */
  deliveryCompanyId = undefined

  /** 头程运输-司机姓名 */
  driverName = ''

  /** 头程运输-司机电话 */
  driverPhone = ''

  /** plan表主键 */
  id = undefined

  /** 头程运输-提货车牌号 */
  pickCarNo = ''

  /** 头程运输-交接文件 */
  transferPic = []
}

export class DeliveryEditImportDeclareInfoVO {
  /** 进口报关-货柜免租截止日期 */
  endFreeRentTime = ''

  /** 进口报关-免费滞港截止时间 */
  endFreeStayPortTime = ''

  /** plan表主键 */
  id = undefined

  /** 进口报关-抽检数量 */
  importCheckQuantity = undefined

  /** 进口报关信息-抽检单位 1-件 2-个 */
  importCheckUnit = undefined

  /** 进口报关-进口报关公司ID */
  importDeclareCompanyId = undefined

  /** 进口报关-报关申报资料 */
  importDeclareDocuments = []

  /** 进口报关-进口报关单 */
  importDeclareFile = []

  /** 进口报关-报关单号 */
  importDeclareNumber = ''

  /** 进口报关-进口报关口岸ID */
  importDeclarePortId = undefined

  /** 进口报关-是否查验1:是 0：否 */
  importExamine = undefined

  /** 熏蒸状态 1:已完成 0：待熏蒸 */
  importFumigationStatus = undefined

  /** 进口报关-进口港ID */
  importPortId = undefined

  /** 进口报关-放行时间 */
  releaseDate = ''
}

export class DeliveryEditInfoVO {
  /** 基本信息 */
  baseInfoVO = new DeliveryEditBaseInfoVO()

  /** 订舱信息 */
  bookingInfoVO = new DeliveryEditBookingInfoVO()

  /** 出口报关信息 */
  exportDeclareInfoVO = new DeliveryEditExportDeclareInfoVO()

  /** 尾程运输信息 */
  finalTransportInfoVO = new DeliveryEditFinalTransportInfoVO()

  /** 头程运输信息 */
  headerTransportInfoVO = new DeliveryEditHeaderTransportInfoVO()

  /** plan表主键 */
  id = undefined

  /** 进口报关信息 */
  importDeclareInfoVO = new DeliveryEditImportDeclareInfoVO()

  /** 商品信息 */
  productVO = new DeliveryEditProductVO()

  /** 收货方信息 */
  receiverInfoVO = new DeliveryEditReceiverInfoVO()

  /** 发货方信息 */
  senderInfoVO = new DeliveryEditSenderInfoVO()

  /** 当前状态 */
  state = ''
}

export class DeliveryEditListVO {
  /** 柜次 */
  cabinetBatchCode = ''

  /** 柜号 */
  cabinetCode = ''

  /** 合同号 */
  contractCode = ''

  /** 创建时间 */
  createTime = ''

  /** 运输方式 */
  deliveryMethod = undefined

  /** 运输方式名称 */
  deliveryMethodName = ''

  /** 主键 */
  id = undefined

  /** 品类名称 */
  product = ''

  /** 商品 */
  productName = ''

  /** 产地 */
  productPlace = ''

  /** 备注 */
  remark = ''

  /** 商品名称 */
  spuNames = ''

  /** state */
  state = ''

  /** 状态 */
  status = ''
}

export class DeliveryEditProductBaseDTO {
  /** 商品信息-数量 */
  number = undefined

  /** skuID */
  skuId = undefined

  /** 商品品类ID */
  spuId = undefined
}

export class DeliveryEditProductDTO {
  /** 修改对象 */
  baseDTOS = []

  /** plan表主键 */
  id = undefined

  /** 标签 */
  productFile = []

  /** 商品信息-数量合计 */
  totalPack = undefined
}

export class DeliveryEditProductVO {
  /** plan表主键 */
  id = undefined

  /** 品类 */
  product = ''

  /** 标签 */
  productFile = []

  /** 商品ID */
  productId = undefined

  /** 商品名称 */
  spuNames = ''

  /** 商品明细 */
  tableVOs = []

  /** 商品信息-数量合计 */
  totalPack = undefined
}

export class DeliveryEditReceiverInfoVO {
  /** plan表主键 */
  id = undefined

  /** 收货方信息-收货方ID */
  receiverId = undefined

  /** 收货方信息-收货方类型 */
  receiverType = undefined
}

export class DeliveryEditSenderInfoVO {
  /** 发货方信息-发货工厂ID */
  factoryId = undefined

  /** plan表主键 */
  id = undefined

  /** 发货方信息-发货方ID */
  senderId = undefined
}

export class DeliveryOrderItem {
  /** createBy */
  createBy = undefined

  /** createTime */
  createTime = ''

  /** deleted */
  deleted = undefined

  /** deliveryOrderCode */
  deliveryOrderCode = ''

  /** deliveryOrderId */
  deliveryOrderId = undefined

  /** id */
  id = undefined

  /** qty */
  qty = undefined

  /** skuBrandId */
  skuBrandId = undefined

  /** skuBrandName */
  skuBrandName = ''

  /** skuItemId */
  skuItemId = undefined

  /** skuLevelId */
  skuLevelId = undefined

  /** skuLevelName */
  skuLevelName = ''

  /** skuPlaceId */
  skuPlaceId = undefined

  /** skuPlaceName */
  skuPlaceName = ''

  /** skuPropertyId */
  skuPropertyId = undefined

  /** skuPropertyName */
  skuPropertyName = ''

  /** skuSpecName */
  skuSpecName = ''

  /** splitQty */
  splitQty = undefined

  /** spuId */
  spuId = undefined

  /** updateBy */
  updateBy = undefined

  /** updateTime */
  updateTime = ''
}

export class DeliveryPlanAddDTO {
  /** 进口港 */
  arrivePortId = undefined

  /** 合同ID */
  contractId = undefined

  /** 出口报关公司id */
  declareCompanyId = undefined

  /** 进口港报关口岸 */
  declarePortId = undefined

  /** 发运方式 */
  deliveryMethod = undefined

  /** 进口港报关公司 */
  domesticDeclareCompanyId = undefined

  /** 工厂id */
  factoryId = undefined

  /** 运输要求 */
  headTransportRemark = ''

  /** 头程运输公司id */
  internationalTransportId = undefined

  /** 新增数量 */
  newCount = undefined

  /** 计划发柜时间 */
  planStartTime = ''

  /** 品类id */
  productId = undefined

  /** 编码规则id */
  productRuleId = undefined

  /** 建议收货方 */
  receiverId = undefined

  /** 收货方类型 */
  receiverType = undefined

  /** 产地备注 */
  remark = ''

  /** 发货方id */
  shipmentId = undefined

  /** 出口港id */
  startPortId = undefined
}

export class DeliveryPlanDetailVO {
  /** 进口港 */
  arrivePort = ''

  /** 出口报关公司 */
  declareCompany = ''

  /** 进口港报关口岸 */
  declarePort = ''

  /** 发运方式 */
  deliveryMethodName = ''

  /** 进口港报关公司 */
  domesticDeclareCompany = ''

  /** 工厂 */
  factory = ''

  /** 运输要求 */
  headTransportRemark = ''

  /** id */
  id = undefined

  /** 头程运输公司id */
  internationalTransportId = ''

  /** 计划发柜时间 */
  planStartTime = ''

  /** 产地 */
  productPlace = ''

  /** 建议收货方 */
  receiver = ''

  /** 收货方类型 */
  receiverTypeName = ''

  /** 产地备注 */
  remark = ''

  /** 发货方 */
  shipment = ''

  /** 商品 */
  spu = ''

  /** 出口港 */
  startPort = ''
}

export class DeliveryPlanEditDTO {
  /** 进口港 */
  arrivePortId = undefined

  /** 出口报关公司id */
  declareCompanyId = undefined

  /** 进口港报关口岸 */
  declarePortId = undefined

  /** 发运方式 */
  deliveryMethod = undefined

  /** 进口港报关公司 */
  domesticDeclareCompanyId = undefined

  /** 工厂id */
  factoryId = undefined

  /** 运输要求 */
  headTransportRemark = ''

  /** id */
  id = undefined

  /** 头程运输公司id */
  internationalTransportId = undefined

  /** 新增数量 */
  newCount = undefined

  /** 计划发柜时间 */
  planStartTime = ''

  /** 建议收货方 */
  receiverId = undefined

  /** 收货方类型 */
  receiverType = undefined

  /** 产地备注 */
  remark = ''

  /** 发货方id */
  shipmentId = undefined

  /** 出口港id */
  startPortId = undefined
}

export class DeliveryPlanEditVO {
  /** 进口港 */
  arrivePortId = undefined

  /** 合同号 */
  contractCode = ''

  /** 出口报关公司id */
  declareCompanyId = undefined

  /** 进口港报关口岸 */
  declarePortId = undefined

  /** 发运方式 */
  deliveryMethod = undefined

  /** 进口港报关公司 */
  domesticDeclareCompanyId = undefined

  /** 工厂id */
  factoryId = undefined

  /** 运输要求 */
  headTransportRemark = ''

  /** id */
  id = undefined

  /** 头程运输公司id */
  internationalTransportId = undefined

  /** 新增数量 */
  newCount = undefined

  /** 计划发柜时间 */
  planStartTime = ''

  /** 品类id */
  productId = undefined

  /** 产地id */
  productPlaceId = undefined

  /** 品类规则id */
  productRuleId = undefined

  /** 建议收货方 */
  receiverId = undefined

  /** 收货方类型 */
  receiverType = undefined

  /** 产地备注 */
  remark = ''

  /** 发货方id */
  shipmentId = undefined

  /** 商品id */
  spuId = undefined

  /** 出口港id */
  startPortId = undefined
}

export class DeliveryPlanItem {
  /** createBy */
  createBy = undefined

  /** createTime */
  createTime = ''

  /** deleted */
  deleted = undefined

  /** deliveryPlanCode */
  deliveryPlanCode = ''

  /** deliveryPlanId */
  deliveryPlanId = undefined

  /** exportCurrency */
  exportCurrency = undefined

  /** exportUnitPrice */
  exportUnitPrice = undefined

  /** id */
  id = undefined

  /** importCurrency */
  importCurrency = undefined

  /** importUnitPrice */
  importUnitPrice = undefined

  /** pickFruitTime */
  pickFruitTime = ''

  /** productId */
  productId = undefined

  /** qty */
  qty = undefined

  /** skuBrandId */
  skuBrandId = undefined

  /** skuBrandName */
  skuBrandName = ''

  /** skuId */
  skuId = undefined

  /** skuItemId */
  skuItemId = undefined

  /** skuLevelId */
  skuLevelId = undefined

  /** skuLevelName */
  skuLevelName = ''

  /** skuPlaceId */
  skuPlaceId = undefined

  /** skuPlaceName */
  skuPlaceName = ''

  /** skuPropertyId */
  skuPropertyId = undefined

  /** skuPropertyName */
  skuPropertyName = ''

  /** skuSpecName */
  skuSpecName = ''

  /** skuTag */
  skuTag = ''

  /** spuId */
  spuId = undefined

  /** updateBy */
  updateBy = undefined
}

export class DeliveryPlanListVO {
  /** 进口港 */
  arrivePort = ''

  /** 柜次 */
  cabinetBatchCode = ''

  /** 柜号 */
  cabinetCode = ''

  /** 合同号 */
  contractCode = ''

  /** 创建时间 */
  createTime = ''

  /** 出口报关公司 */
  declareCompany = ''

  /** 发运方式id */
  deliveryMethod = undefined

  /** 发运方式 */
  deliveryMethodName = ''

  /** id */
  id = undefined

  /** 出口运输公司 */
  internationalTransport = ''

  /** 计划发柜时间 */
  planStartTime = ''

  /** 品类 */
  product = ''

  /** 产地 */
  productPlace = ''

  /** 备注 */
  remark = ''

  /** 状态 */
  state = ''

  /** 状态翻译 */
  stateName = ''
}

export class DeliveryReceiverDTO {
  /** 服务区域ID,即国内分公司 */
  customerCompanyId = undefined

  /** 客户仓库ID */
  customerDepositoryId = undefined

  /** 商品明细 */
  products = []

  /** 收货方ID */
  receiverId = undefined

  /** 收货方类型1：销地分公司 2客户 */
  receiverType = undefined
}

export class DeliverySpuCommitVO {
  /** skuId */
  skuId = undefined

  /** 分柜数量，按顺序表示每个收货方收货数量 */
  splitQuantity = undefined
}

export class DepartBusinessInfoDTO {
  /** 开户证明 */
  accountCert = []

  /** 企业地址 */
  address = ''

  /** 营业执照 */
  bizLicense = []

  /** 法定代表人 */
  legalRep = ''

  /** 企业名 */
  name = ''

  /** 其他许可 */
  otherCert = []

  /** 社会信用代码 */
  socialCreditCode = ''
}

export class DepartIdModel {
  /** children */
  children = []

  /** key */
  key = undefined

  /** title */
  title = ''

  /** value */
  value = undefined
}

export class DomesticTransportBookDTO {
  /** 车牌号 */
  carNo = ''

  /** 计划ID */
  deliveryPlanId = undefined

  /** 司机名 */
  driverName = ''

  /** 司机联系方式 */
  driverPhone = ''

  /** 挂车号 */
  trailerCarNo = ''
}

export class DomesticTransportStartDTO {
  /** 风口单位% */
  airPort = undefined

  /** 车牌号 */
  carNo = ''

  /** 计划ID */
  deliveryPlanId = undefined

  /** 司机名 */
  driverName = ''

  /** 司机联系方式 */
  driverPhone = ''

  /** 温度单位为℃ */
  temperature = undefined

  /** 挂车号 */
  trailerCarNo = ''
}

export class DomesticTransportationDetailVO {
  /** 发车时间 */
  actualStartShipTime = ''

  /** 风口单位% */
  airPort = undefined

  /** 柜号 */
  cabinetCode = ''

  /** 车牌号 */
  carNo = ''

  /** 合同号 */
  contractCode = ''

  /** 计划ID */
  deliveryPlanId = undefined

  /** 司机名 */
  driverName = ''

  /** 司机联系方式 */
  driverPhone = ''

  /** 计划发货时间 */
  planStartTime = ''

  /** 品类 */
  product = ''

  /** 还箱证明文件JSON数据 */
  proofFile = ''

  /** 还箱证明文件 */
  proofFileVO = new FileVO()

  /** 收货地址 */
  receiveAddress = []

  /** 备注 */
  remark = ''

  /** 发货地址 */
  sendAddress = ''

  /** 状态编码  06:出口已起航|066:许可已核销|07:国内已报关|070:国内可提柜|08:国内待发运|12:国内已发运 */
  state = ''

  /** 状态名称 */
  stateName = ''

  /** 商品表格 */
  table = new TableVO()

  /** 是否在途温控 1：使用，99：不使用 */
  tempMonitor = undefined

  /** 温度单位为℃ */
  temperature = undefined

  /** 总件数 */
  totalPack = undefined

  /** 挂车号 */
  trailerCarNo = ''

  /** 建议设置风口单位% */
  transitingMonitorAirPort = undefined

  /** 建议设置温度单位为℃ */
  transitingMonitorTemperature = undefined

  /** 货运状态 */
  transportationState = 'WAIT_BOOK'
}

export class DomesticTransportationListVO {
  /** 发车时间 */
  actualStartShipTime = ''

  /** 进口港 */
  arrivePortName = ''

  /** 柜号 */
  cabinetCode = ''

  /** 进口报关公司（国内公司） */
  domesticDeclareCompanyName = ''

  /** 计划ID */
  id = undefined

  /** 物流公司名称 */
  logisticsCompanyName = ''

  /** 是否超期 */
  overdue = false

  /** 品类名称 */
  product = ''

  /** 收货区域 */
  receiveArea = ''

  /** 收货组织 */
  receiveDepart = ''

  /** 装柜方式1：原柜 2：转柜 3：装柜 */
  shipmentMethod = undefined

  /** 装柜方式  */
  shipmentMethodName = ''

  /** 状态编码  08:国内待发运|12:国内已发运|13:国内已到达销区|14:国内销区已收货|15:已还箱 */
  state = ''

  /** 状态名称 */
  stateName = ''

  /** 总件数 */
  totalPack = undefined

  /** 货运状态 */
  transportationState = 'WAIT_BOOK'
}

export class DomesticTransportationVO {
  /** 发车时间 */
  actualStartShipTime = ''

  /** 风口单位% */
  airPort = undefined

  /** 车牌号 */
  carNo = ''

  /** 司机名 */
  driverName = ''

  /** 司机联系方式 */
  driverPhone = ''

  /** 运输公司 */
  logisticsCompanyName = ''

  /** 是否在途温控 1：使用，99：不使用 */
  tempMonitor = undefined

  /** 温度单位为℃ */
  temperature = undefined

  /** 挂车号 */
  trailerCarNo = ''

  /** 建议设置风口单位% */
  transitingMonitorAirPort = undefined

  /** 建议设置温度单位为℃ */
  transitingMonitorTemperature = undefined
}

export class EDIUpdateInfoDTO {
  /** 实际到港时间 */
  actualArriveTime = ''

  /** 实际离港时间 */
  actualStartTime = ''

  /** 预计到港时间 */
  expectArriveTime = ''

  /** 预计离港时间 */
  expectStartTime = ''

  /** 计划ID */
  planId = undefined
}

export class EntryPortDelivery {
  /** 计划国内发货时间 */
  planStartShipTime = ''

  /** 发货地 */
  senderTypeDesc = ''

  /** 原柜转柜 */
  shipmentMethod = ''

  /** 是否需要口岸质检 1:启用，99：禁用 */
  sopEnabled = undefined

  /** 堆场(发货地为堆场时展示) */
  storageYardName = ''

  /** 是否在途温控 1：使用，99：不使用 */
  tempMonitor = undefined
}

export class EntryPortDeliveryCommitDTO {
  /** 计划ID */
  id = undefined

  /** 物流公司ID */
  logisticsCompanyId = undefined

  /** 计划国内发货时间 */
  planStartShipTime = ''

  /** 收货人明细 */
  receivers = []

  /** 发货方类型，1：口岸，2:堆场 */
  senderType = undefined

  /** 装柜方式1:原柜，2：转柜 */
  shipmentMethod = undefined

  /** 是否需要口岸质检 1:启用，99：禁用 */
  sopEnabled = undefined

  /** 堆场ID */
  storageYardId = undefined

  /** 是否在途温控 1：使用，99：不使用 */
  tempMonitor = undefined
}

export class EntryPortDeliveryDetailVO {
  /** 进口港ID */
  arrivePortId = undefined

  /** 进口港 */
  arrivePortName = ''

  /** 柜次号 */
  cabinetBatchCode = ''

  /** 柜号 */
  cabinetCode = ''

  /** 抽查数量 */
  checkNumber = ''

  /** checkQuantity */
  checkQuantity = undefined

  /** 抽检单位 1:箱 2：个 */
  checkUnit = undefined

  /** 合同号 */
  contractCode = ''

  /** 进口报关港 */
  declarePortName = ''

  /** 进口报关公司（国内公司） */
  domesticDeclareCompanyName = ''

  /** 货柜免租截止日期 */
  endFreeRentTime = ''

  /** 免费滞港截止日期 */
  endFreeStayPortTime = ''

  /** 计划ID */
  id = undefined

  /** 品类名称 */
  product = ''

  /** 产地名称 */
  productPlaceName = ''

  /** 建议收货方 */
  receiverId = undefined

  /** 建议收货方类型 */
  receiverType = undefined

  /** 收货人明细 */
  receivers = []

  /** 放行时间 */
  releaseDate = ''

  /** 备注 */
  remark = ''

  /** 商品ID */
  spuId = undefined

  /** 商品名称 */
  spuNames = ''

  /** 商品明细 */
  tables = []

  /** 总件数 */
  totalPack = undefined
}

export class EntryPortDeliveryListVO {
  /** 到港日期 */
  arrivePortDate = ''

  /** 进口港 */
  arrivePortName = ''

  /** 柜次号 */
  cabinetBatchCode = ''

  /** 柜号 */
  cabinetCode = ''

  /** 合同号 */
  contractCode = ''

  /** domesticArrivePortTime */
  domesticArrivePortTime = ''

  /** domesticEstimateArriveTime */
  domesticEstimateArriveTime = ''

  /** expectArriveTime */
  expectArriveTime = ''

  /** 计划ID */
  id = undefined

  /** 品类名称 */
  product = ''

  /** 商品名称 */
  spuNames = ''

  /** 工厂发柜日期 */
  startTime = ''

  /** 状态 */
  state = ''

  /** stateName */
  stateName = ''

  /** 商品明细表单 */
  tables = []

  /** 总件数 */
  totalPack = undefined
}

export class ExportDeclareInfoVO {
  /** 出口报关信息-出口报关公司 */
  declareCompany = ''

  /** 出口报关信息-出口报关单 */
  declareFile = []

  /** 出口报关信息-国内申报资料 */
  domesticDeclareFile = []

  /** 出口报关信息-交接单 */
  logisticsDeliveryReceipt = []

  /** 出口报关信息-提单号 */
  pickBillCode = ''

  /** 出口报关信息-出口港 */
  startPort = ''

  /** 出口报关信息-货物到港时间 */
  transferTime = ''
}

export class FactoryOrder {
  /** cabinetCount */
  cabinetCount = undefined

  /** departName */
  departName = ''

  /** factoryId */
  factoryId = ''
}

export class File {
  /** absolute */
  absolute = false

  /** absoluteFile */
  absoluteFile = {}

  /** absolutePath */
  absolutePath = ''

  /** canonicalFile */
  canonicalFile = {}

  /** canonicalPath */
  canonicalPath = ''

  /** directory */
  directory = false

  /** executable */
  executable = false

  /** file */
  file = false

  /** freeSpace */
  freeSpace = undefined

  /** hidden */
  hidden = false

  /** lastModified */
  lastModified = undefined

  /** name */
  name = ''

  /** parent */
  parent = ''

  /** parentFile */
  parentFile = {}

  /** path */
  path = ''

  /** readable */
  readable = false

  /** totalSpace */
  totalSpace = undefined

  /** usableSpace */
  usableSpace = undefined

  /** writable */
  writable = false
}

export class FileVO {
  /** 文件ID */
  fileId = ''

  /** 文件地址 */
  fileUrl = ''

  /** 文件名称 */
  filename = ''
}

export class FinalTransportationInfoVO {
  /** 车牌号 */
  carNo = ''

  /** 司机电话 */
  driverContactPhone = ''

  /** 司机姓名 */
  driverName = ''

  /** 尾程发货时间 */
  finaltransferPic = ''

  /** 运输公司 */
  logisticsCompanyName = ''

  /** 区域建议风口 */
  suggestAirPort = undefined

  /** 区域建议温度 */
  suggestTemperature = undefined

  /** 设定温度 */
  temperature = undefined

  /** 挂车号 */
  trailerNo = ''

  /** 设定风口 */
  tuyere = undefined
}

export class HeadTransportAddDTO {
  /** 车牌号 */
  carCode = ''

  /** 司机姓名 */
  driver = ''

  /** 司机电话 */
  driverContactPhone = ''

  /** 司机照片 */
  driverPic = []

  /** id */
  id = undefined

  /** 计划id */
  planId = undefined

  /** 交接文件 */
  transferPic = []
}

export class HeadTransportEditVO {
  /** 柜次 */
  cabinetBatchCode = ''

  /** 柜号 */
  cabinetCode = ''

  /** 车牌号 */
  carCode = ''

  /** 合同号 */
  contractCode = ''

  /** 出口报关公司 */
  declareCompany = ''

  /** 出口报关公司联系人 */
  declareCompanyContact = ''

  /** 出口报关公司联系方式 */
  declareCompanyContactMobile = ''

  /** 司机姓名 */
  driver = ''

  /** 司机电话 */
  driverContactPhone = ''

  /** 司机照片 */
  driverPic = ''

  /** id */
  id = undefined

  /** 计划id */
  planId = undefined

  /** 品类id */
  productId = undefined

  /** 品类名 */
  productName = ''

  /** 备注 */
  remark = ''

  /** 商品 */
  spu = ''

  /** 交接文件 */
  transferPic = ''
}

export class HeadTransportListVO {
  /** 柜次 */
  cabinetBatchCode = ''

  /** 柜号 */
  cabinetCode = ''

  /** 合同号 */
  contractCode = ''

  /** 出口报关公司 */
  declareCompany = ''

  /** 计划离港时间 */
  expectDepartedTime = ''

  /** id */
  id = undefined

  /** 头程运输公司 */
  internationalTransport = ''

  /** 计划id */
  planId = undefined

  /** 品类 */
  product = ''

  /** 备注 */
  remark = ''

  /** 发柜时间 */
  sendCabinetTime = ''

  /** 商品 */
  spu = ''

  /** 出口港 */
  startPort = ''

  /** 状态 */
  state = ''

  /** 状态翻译 */
  stateName = ''
}

export class HeaderTransportationInfoVO {
  /** 工厂发柜时间 */
  actualTransferTime = ''

  /** 司机联系方式 */
  driverContactPhone = ''

  /** 运输公司 */
  logisticsCompanyName = ''

  /** 提货车牌号 */
  pickCarNo = ''

  /** 提货司机 */
  pickDriver = ''

  /** 交接文件 */
  transferPic = []
}

export class IFrameInfoQueryVO {
  /** 提单号(海运必填) */
  billCode = ''

  /** 车牌号 陆运必填 */
  carNo = ''

  /** 船公司代码(海运必填) */
  carrierCode = ''

  /** 运输方式 1_陆运  2_海运 3_铁运 */
  deliveryMethod = 1

  /** 进口港代码(海运必填) */
  portCode = ''
}

export class IPage {
  /** current */
  current = undefined

  /** hitCount */
  hitCount = false

  /** pages */
  pages = undefined

  /** records */
  records = []

  /** searchCount */
  searchCount = false

  /** size */
  size = undefined

  /** total */
  total = undefined
}

export class IdDTO {
  /** id */
  id = undefined
}

export class ImportDeclareCommitVO {
  /** 抽检数量 */
  checkQuantity = undefined

  /** 抽检单位 1:箱 2：个 */
  checkUnit = undefined

  /** 报关单号 */
  declareNumber = ''

  /** 货柜免租截止日期 */
  endFreeRentTime = ''

  /** 免费滞港截止日期 */
  endFreeStayPortTime = ''

  /** 是否查验 1：是 0：否 */
  examine = undefined

  /** 熏蒸状态 1:已完成 0：待熏蒸 */
  fumigationStatus = undefined

  /** 计划ID */
  id = undefined

  /** 报关申报资料 */
  importDeclareFiles = []

  /** 放行时间 */
  releaseDate = ''

  /** 进口报关单 */
  releaseFiles = []

  /** 备注 */
  remark = ''
}

export class ImportDeclareDetailVO {
  /** 进口港 */
  arrivePortName = ''

  /** 船运信息-提单号 */
  billCode = ''

  /** 柜次号 */
  cabinetBatchCode = ''

  /** 柜号 */
  cabinetCode = ''

  /** 提货车牌号 */
  carCode = ''

  /** 抽检数量 */
  checkQuantity = undefined

  /** 抽检单位 1:箱 2：个 */
  checkUnit = undefined

  /** 合同号 */
  contractCode = ''

  /** 出口报关单 */
  declareFile = ''

  /** 出口报关单 */
  declareFiles = []

  /** 报关单号 */
  declareNumber = ''

  /** 进口报关口岸 */
  declarePortName = ''

  /** 出口报关时间 */
  declareTime = ''

  /** 进口申报资料 */
  domesticDeclareFile = ''

  /** 进口申报资料 */
  domesticDeclareFiles = []

  /** 提货司机姓名 */
  driver = ''

  /** 司机联系方式 */
  driverContactPhone = ''

  /** 货柜免租截止日期 */
  endFreeRentTime = ''

  /** 免费滞港截止日期 */
  endFreeStayPortTime = ''

  /** 是否查验 1：是 0：否 */
  examine = undefined

  /** 船运信息-计划离港时间 */
  expectDepartedTime = ''

  /** 出口报关公司 */
  expressCompany = ''

  /** 熏蒸状态 1:已完成 0：待熏蒸 */
  fumigationStatus = undefined

  /** 头程运输公司 */
  headTransportName = ''

  /** 计划ID */
  id = undefined

  /** 报关申报资料 */
  importDeclareFile = ''

  /** 报关申报资料 */
  importDeclareFiles = []

  /** 船运信息-计划到港时间 */
  planArriveTime = ''

  /** 品类名称 */
  product = ''

  /** 品类名称ID */
  productId = undefined

  /** 放行时间 */
  releaseDate = ''

  /** 进口报关单 */
  releaseFile = ''

  /** 进口报关单 */
  releaseFiles = []

  /** 备注 */
  remark = ''

  /** 船运信息-船次号 */
  shipBatchCode = ''

  /** 船运信息-船公司 */
  shipCompany = ''

  /** 船运信息-船名 */
  shipName = ''

  /** 商品ID */
  spuId = undefined

  /** 商品名称 */
  spuNames = ''

  /** 状态 */
  state = ''

  /** 商品明细 */
  tables = []

  /** 标签JSON数据 */
  tagJSON = ''

  /** 标签 */
  tagList = []

  /** 总价值 */
  totalAmount = undefined

  /** 总价值 */
  totalG = undefined

  /** 总重量（毛重） */
  totalGrossWeight = undefined

  /** 总重量（净重） */
  totalNetWeight = undefined

  /** 总件数 */
  totalPack = undefined

  /** 工厂发柜时间 */
  transferTime = ''

  /** 船运信息-地图地址 */
  url = ''
}

export class ImportDeclareInfoVO {
  /** 进口报关信息-进口港代码 */
  arrivePortCode = ''

  /** 进口报关信息-进口港 */
  arrivePortName = ''

  /** 进口报关信息-抽检数量 */
  checkQuantity = undefined

  /** 进口报关信息-抽检单位 1-箱 2-个 */
  checkUnit = ''

  /** 进口报关信息-报关申报资料 */
  declareFile = []

  /** 进口报关信息-报关单号 */
  declareNumber = ''

  /** 进口报关信息-进口报关口岸 */
  declarePortName = ''

  /** 进口报关信息-进口报关公司 */
  domesticDeclareCompanyName = ''

  /** 进口报关信息-货柜免租截止日期 */
  endFreeRentTime = ''

  /** 进口报关信息-免费滞港截止日期 */
  endFreeStayPortTime = ''

  /** 进口报关信息-是否查验 */
  examine = ''

  /** 进口报关信息-是否熏蒸 */
  fumigationStatus = ''

  /** 进口报关信息-进口报关单 */
  releaseFile = []
}

export class ImportDeclareListVO {
  /** 实际离港时间 */
  actualShippingTime = ''

  /** 进口港 */
  arrivePortName = ''

  /** 到港时间 */
  arriveTime = ''

  /** 柜次号 */
  cabinetBatchCode = ''

  /** 柜号 */
  cabinetCode = ''

  /** 合同号 */
  contractCode = ''

  /** 出口报关公司（国内） */
  declareCompanyName = ''

  /** 报关时间 */
  declareDate = ''

  /** 报关单号 */
  declareNumber = ''

  /** 进口报关口岸 */
  declarePortName = ''

  /** 运输方式 */
  deliveryMethod = undefined

  /** 运输方式名称 */
  deliveryMethodName = ''

  /** 报关单号 */
  deliveryOrderCode = ''

  /** 实际到港时间 */
  domesticArrivePortTime = ''

  /** 进口报关公司（国内） */
  domesticDeclareCompanyName = ''

  /** 预计到港 时间 */
  domesticEstimateArriveTime = ''

  /** 预计离港时间 */
  estimateShippingTime = ''

  /** 计划到港时间 */
  expectArriveTime = ''

  /** 计划离港时间 */
  expectDepartedTime = ''

  /** 头程运输公司 */
  headTransportName = ''

  /** 计划ID */
  id = undefined

  /** 是否超期 */
  overdue = false

  /** 品类名称 */
  product = ''

  /** 品类ID */
  productId = undefined

  /** 产地 */
  productPlaceName = ''

  /** 放行时间，即纳税放柜时间 */
  releaseDate = ''

  /** 备注 */
  remark = ''

  /** 离港时间 */
  shippingTime = ''

  /** 商品名称 */
  spuNames = ''

  /** 状态编码 03:出口已装箱 |05:出口已送港| 06:出口已起航|066:许可已核销|07:国内已报关|070:国内可提柜|08:国内待发运|12:国内已发运 */
  state = ''

  /** 状态名称 */
  stateName = ''
}

export class ImportDeclareReplenishDTO {
  /** 计划ID */
  id = undefined

  /** 进口报关单 */
  releaseFiles = []
}

export class ImportDeclareTaxBatchDTO {
  /** 计划IDs */
  deliveryPlanIds = []

  /** 纳税类型 */
  taxType = 'SELF_PAY'
}

export class ImportDeclareTaxDTO {
  /** 计划ID */
  deliveryPlanId = undefined

  /** 纳税文件 */
  taxFiles = []

  /** 纳税主体 */
  taxPayer = ''

  /** 纳税类型 */
  taxType = 'SELF_PAY'
}

export class ImportDeclareTaxDetailVO {
  /** 进口港 */
  arrivePortName = ''

  /** 柜次号 */
  cabinetBatchCode = ''

  /** 柜号 */
  cabinetCode = ''

  /** 合同号 */
  contractCode = ''

  /** 进口报关口岸 */
  declarePortName = ''

  /** 计划ID */
  deliveryPlanId = undefined

  /** 货柜免租截止日期 */
  endFreeRentTime = ''

  /** 免费滞港截止日期 */
  endFreeStayPortTime = ''

  /** 进口报关公司 */
  expressCompany = ''

  /** 商品品类 */
  product = ''

  /** 商品ID */
  productId = undefined

  /** 产地 */
  productPlaceName = ''

  /** 放行时间 */
  releaseDate = ''

  /** 备注 */
  remark = ''

  /** 商品名称 */
  spuNames = ''

  /** 状态 */
  state = ''

  /** 纳税文件 */
  taxFile = ''

  /** 纳税文件 */
  taxFiles = []

  /** 纳税主体 */
  taxPayer = ''

  /** 纳税方式 */
  taxType = 'SELF_PAY'
}

export class ImportDeclareThirdCommitDTO {
  /** 柜号 */
  cabinetCode = ''

  /** 抽检数量 */
  checkQuantity = undefined

  /** 抽检单位 1:箱 2：个 */
  checkUnit = undefined

  /** 报关单号 */
  declareNumber = ''

  /** 货柜免租截止日期 */
  endFreeRentTime = ''

  /** 免费滞港截止日期 */
  endFreeStayPortTime = ''

  /** 是否查验 1：是 0：否 */
  examine = undefined

  /** 熏蒸状态 1:已完成 0：待熏蒸 */
  fumigationStatus = undefined

  /** 报关申报资料 */
  importDeclareFiles = []

  /** 放行时间 */
  releaseDate = ''

  /** 进口报关单 */
  releaseFiles = []
}

export class ImportDeclareThirdReplenishDTO {
  /** 报关ID */
  importDeclareId = undefined

  /** 进口报关单 */
  releaseFiles = []
}

export class InputStream {}

export class InternationalShipmentDetailListVO {
  /** 进口港 */
  arrivePort = ''

  /** 进口港 */
  arrivePortId = undefined

  /** 柜次 */
  cabinetBatchCode = ''

  /** 柜号 */
  cabinetCode = ''

  /** 创建时间 */
  createTime = ''

  /** 发运方式id */
  deliveryMethod = undefined

  /** 发运方式 */
  deliveryMethodName = ''

  /** 主键ID */
  id = undefined

  /** 商品品类 */
  product = ''

  /** 商品品类ID */
  productId = undefined

  /** 商品spu名称,多个用逗号隔开 */
  productSpuName = ''

  /** 质量异常状态 EXCEPTION_异常 NORMAL_正常 */
  qualityState = ''

  /** 收货时间 */
  receiveTime = ''

  /** 发货时间 */
  shipmentTime = ''

  /** 状态 */
  status = ''

  /** 状态翻译 */
  statusName = ''
}

export class InternationalShipmentDetailVO {
  /** 基本信息 */
  baseInfoVO = new BaseInfoVO()

  /** 货柜港口状态 */
  declareDtoList = []

  /** 入境口岸发货信息 */
  entryPortDelivery = new EntryPortDelivery()

  /** 出口报关信息 */
  exportDeclareInfoVO = new ExportDeclareInfoVO()

  /** 尾程运输信息 */
  finalTransportationInfoVO = new FinalTransportationInfoVO()

  /** 头程运输信息 */
  headerTransportationInfoVO = new HeaderTransportationInfoVO()

  /** 进口报关信息 */
  importDeclareInfoVO = new ImportDeclareInfoVO()

  /** 流程节点 */
  operLogVO = []

  /** 纳税信息 */
  payTaxesInfoVO = new PayTaxesInfoVO()

  /** 商品信息 */
  productInfoVO = new ProductInfoVO()

  /** 许可核销信息 */
  productQuotaInfoVO = new ProductQuotaInfoVO()

  /** 收货信息 */
  receiveInfoVOList = []

  /** 还箱信息 */
  returnInfoVO = new ReturnInfoVO()

  /** 船运信息 */
  shipmentInfoVO = new ShipmentInfoVO()

  /** 发货方信息 */
  shipperCustomerInfoVO = new ShipperCustomerInfoVO()
}

export class InternationalTravelingEditDTO {
  /** 主键 */
  id = undefined

  /** 备注 */
  remark = ''
}

export class InternationalTravelingInfoListVO {
  /** 工厂发柜时间 */
  actualTransferTime = ''

  /** 进口港 */
  arrivePort = ''

  /** 进口港ID */
  arrivePortId = undefined

  /** 到港时间 */
  arriveTime = ''

  /** 柜次 */
  cabinetBatchCode = ''

  /** 柜号 */
  cabinetCode = ''

  /** 进口报关公司 */
  declareCompany = ''

  /** 进口报关公司ID */
  declareCompanyId = undefined

  /** 货柜免租截止日期 */
  endFreeRentTime = ''

  /** 免费滞港截止日期 */
  endFreeStayPortTime = ''

  /** 主键 */
  id = undefined

  /** 建议销售时间 */
  lastSellTime = ''

  /** 采果时间 */
  pickFruitTime = ''

  /** 品类 */
  product = ''

  /** 品类ID */
  productId = undefined

  /** 备注 */
  remark = ''

  /** 可发货状态 全部时不传 1_可发货, 0_不可发货  */
  shipStatus = undefined

  /** 发货时间 */
  shipTime = ''

  /** SPU Names */
  spuNames = ''

  /** 状态 */
  status = ''

  /** 转柜时间 */
  transferTime = ''
}

export class InternationalTravelingListVO {
  /** 跳转CODE */
  code = ''

  /** 国内入境-可提 */
  domesticEntryAllowGetCount = undefined

  /** 国内入境-到港 */
  domesticEntryArrivalCount = undefined

  /** 国际在途 */
  internationalTravelingCount = undefined

  /** 跳转路径 */
  path = ''

  /** 品类 */
  product = ''

  /** 品类id */
  productId = undefined
}

export class InternationalTravelingSnapshotInfoVO {
  /** 快照信息-进口港 */
  arrivePort = ''

  /** 基本信息-销售单号 */
  billCode = ''

  /** 基本信息-柜次 */
  cabinetBatchCode = ''

  /** 基本信息-柜号 */
  cabinetCode = ''

  /** 合同号 */
  contractCode = ''

  /** 快照信息-进口报关口岸 */
  declarePort = ''

  /** 快照信息-发运方式 */
  deliveryMethod = ''

  /** 主键 */
  id = undefined

  /** 快照信息-品类 */
  product = ''

  /** 快照信息-快照日期 */
  snapshotDate = ''

  /** 快照信息-SPU */
  spuNames = ''

  /** 快照信息-出发口岸 */
  startPort = ''

  /** 快照信息-当日状态 */
  status = ''
}

export class InternationalTravelingSnapshotListVO {
  /** 进口港 */
  arrivePort = ''

  /** 柜次 */
  cabinetBatchCode = ''

  /** 柜号 */
  cabinetCode = ''

  /** 进口报关口岸 */
  declarePort = ''

  /** 发运方式 */
  deliveryMethod = ''

  /** 主键 */
  id = undefined

  /** 品类 */
  product = ''

  /** 快照日期 */
  snapshotDate = ''

  /** 商品 */
  spuNames = ''

  /** 出发口岸 */
  startPort = ''

  /** 状态 */
  status = ''
}

export class JSONObject {}

export class LoginedVO {
  /** multi_depart */
  multi_depart = undefined

  /** 是否需要（强制）更新密码 */
  needUpdatePassword = false

  /** token */
  token = ''

  /** userInfo */
  userInfo = new SysUserVO()
}

export class Map {}

export class OperLogVO {
  /** 操作时间 */
  operTime = ''

  /** 操作人 */
  operUser = ''

  /** 当前状态 */
  status = ''

  /** 当前状态描述 */
  statusDesc = ''
}

export class OperateLog {
  /** createBy */
  createBy = undefined

  /** createTime */
  createTime = ''

  /** deleted */
  deleted = undefined

  /** fmStatus */
  fmStatus = ''

  /** id */
  id = undefined

  /** operateTime */
  operateTime = ''

  /** operateUserId */
  operateUserId = undefined

  /** operateUserName */
  operateUserName = ''

  /** orderId */
  orderId = undefined

  /** orderType */
  orderType = ''

  /** toStatus */
  toStatus = ''

  /** updateBy */
  updateBy = undefined

  /** updateTime */
  updateTime = ''
}

export class OrderItem {
  /** asc */
  asc = false

  /** column */
  column = ''
}

export class OrganizationsCreateEntity {
  /** 地址 */
  address = ''

  /** 联系人 */
  contact = ''

  /** 联系方式 */
  contactMobile = ''

  /** 所处国家编码 1 中国 2 越南 3 泰国  */
  country = undefined

  /** 工商信息 */
  departBusinessInfo = new DepartBusinessInfoDTO()

  /** 组织名称 */
  departName = ''

  /** 组织类型 1 企业组织架构 2 供应商 */
  departType = undefined

  /** latitude 纬度 */
  lat = ''

  /** longitude 经度 */
  lng = ''

  /** 组织类型 */
  orgCategories = []

  /** 组织编码 */
  orgCode = ''

  /** 父组织id */
  parentId = undefined

  /** 备注 */
  remark = ''
}

export class Page {
  /** countId */
  countId = ''

  /** current */
  current = undefined

  /** hitCount */
  hitCount = false

  /** maxLimit */
  maxLimit = undefined

  /** optimizeCountSql */
  optimizeCountSql = false

  /** orders */
  orders = []

  /** pages */
  pages = undefined

  /** records */
  records = []

  /** searchCount */
  searchCount = false

  /** size */
  size = undefined

  /** total */
  total = undefined
}

export class PayTaxesInfoVO {
  /** 纳税文件 */
  taxFile = []

  /** 纳税主体 */
  taxPayer = ''

  /** 纳税方式 */
  taxType = ''
}

export class PickGoodsAddDTO {
  /** 柜号 */
  cabinetCode = ''

  /** 车牌号 */
  carCode = ''

  /** 司机姓名 */
  driver = ''

  /** 司机电话 */
  driverContactPhone = ''

  /** 司机照片 */
  driverPic = []

  /** 计划id */
  planId = undefined
}

export class PickGoodsEditVO {
  /** 柜次 */
  cabinetBatchCode = ''

  /** 柜号 */
  cabinetCode = ''

  /** 车牌号 */
  carCode = ''

  /** 合同号 */
  contractCode = ''

  /** 出口报关公司 */
  declareCompany = ''

  /** 出口报关公司联系人 */
  declareCompanyContact = ''

  /** 出口报关公司联系方式 */
  declareCompanyContactMobile = ''

  /** 发运方式 1 陆运 2 海运 */
  deliveryMethod = undefined

  /** 司机姓名 */
  driver = ''

  /** 司机电话 */
  driverContactPhone = ''

  /** 司机照片 */
  driverPic = ''

  /** 工厂地址 */
  factoryAddress = ''

  /** 工厂联系人 */
  factoryContact = ''

  /** 工厂联系方式 */
  factoryContactMobile = ''

  /** 运输要求 */
  headTransportRemark = ''

  /** id */
  id = undefined

  /** 提柜联系方式 */
  picCabinetContactMobile = ''

  /** 提柜地址 */
  pickCabinetAddress = ''

  /** 提柜联系人 */
  pickCabinetContact = ''

  /** planId */
  planId = undefined

  /** 备注 */
  remark = ''
}

export class PickGoodsListVO {
  /** 柜次 */
  cabinetBatchCode = ''

  /** 柜号 */
  cabinetCode = ''

  /** 合同号 */
  contractCode = ''

  /** 提柜时间 */
  createTime = ''

  /** 出口报关公司 */
  declareCompany = ''

  /** 发运方式id */
  deliveryMethod = undefined

  /** 发运方式 */
  deliveryMethodName = ''

  /** 工厂名 */
  factory = ''

  /** id */
  id = undefined

  /** 头程运输公司名称 */
  internationalTransport = ''

  /** 计划id */
  planId = undefined

  /** 计划发柜时间 */
  planStartTime = ''

  /** 备注 */
  remark = ''

  /** 状态 */
  state = ''

  /** 状态翻译 */
  stateName = ''
}

export class PortAddDTO {
  /** 口岸地址 */
  address = ''

  /** 1 中国 2 越南 3 泰国 */
  country = undefined

  /** 报关公司id数组 */
  declareCompanyIds = []

  /** 报关口岸id数组 */
  declarePortIds = []

  /** latitude 纬度 */
  lat = ''

  /** longitude 经度 */
  lng = ''

  /** 客户简称（中文） */
  name = ''

  /** nameLocale */
  nameLocale = undefined

  /** status */
  status = undefined

  /** 堆场id数组 */
  storageYardIds = []

  /** 运输公司id数组 */
  transportCompanyIds = []

  /** 口岸运输方式(1陆运，2海运，3海铁) */
  transportMode = undefined
}

export class PortEditDTO {
  /** 口岸地址 */
  address = ''

  /** 1 中国 2 越南 3 泰国 */
  country = undefined

  /** 报关公司id数组 */
  declareCompanyIds = []

  /** 报关口岸id数组 */
  declarePortIds = []

  /** id */
  id = undefined

  /** latitude 纬度 */
  lat = ''

  /** longitude 经度 */
  lng = ''

  /** 客户简称（中文） */
  name = ''

  /** nameLocale */
  nameLocale = undefined

  /** 状态 0 停用 1 启用 */
  status = undefined

  /** 堆场id数组 */
  storageYardIds = []

  /** 运输公司id数组 */
  transportCompanyIds = []

  /** 口岸运输方式(1陆运，2海运，3海铁) */
  transportMode = undefined
}

export class PortEditVO {
  /** address */
  address = ''

  /** code */
  code = ''

  /** country */
  country = undefined

  /** 报关公司id数组 */
  declareCompanyIds = []

  /** 报关口岸id数组 */
  declarePortIds = []

  /** id */
  id = undefined

  /** name */
  name = ''

  /** nameLocale */
  nameLocale = undefined

  /** portType */
  portType = ''

  /** status */
  status = undefined

  /** 堆场id数组 */
  storageYardIds = []

  /** subCompany */
  subCompany = undefined

  /** subCompanyType */
  subCompanyType = undefined

  /** 运输公司id数组 */
  transportCompanyIds = []

  /** transportMode */
  transportMode = undefined
}

export class PortListVO {
  /** 国家 */
  country = ''

  /** 报关口岸 */
  declarePort = ''

  /** id */
  id = undefined

  /** name */
  name = ''

  /** 0 禁用 1 开启 */
  status = undefined

  /** 口岸运输方式 */
  transportMode = ''
}

export class PortVO {
  /** code */
  code = ''

  /** country */
  country = undefined

  /** createBy */
  createBy = undefined

  /** createTime */
  createTime = ''

  /** deleted */
  deleted = undefined

  /** id */
  id = undefined

  /** logisticCompany */
  logisticCompany = []

  /** name */
  name = ''

  /** portType */
  portType = ''

  /** subCompany */
  subCompany = undefined

  /** subCompanyType */
  subCompanyType = undefined

  /** transferMode */
  transferMode = undefined

  /** transportMode */
  transportMode = undefined

  /** updateBy */
  updateBy = undefined

  /** updateTime */
  updateTime = ''
}

export class ProductCheckDTO {
  /** 编辑校验需要传ID */
  id = undefined

  /** 商品品类名称 */
  name = ''
}

export class ProductInfoVO {
  /** 建议销售时间 */
  lastSellTime = ''

  /** 采果时间 */
  pickFruitTime = ''

  /** 商品品类 */
  product = ''

  /** 商品品类ID */
  productId = undefined

  /** 商品明细 */
  tableVOs = []

  /** 标签 */
  tagList = []

  /** 总货值 */
  totalAmount = undefined

  /** 总重量（毛重） */
  totalGrossWeight = undefined

  /** 总重量（净重） */
  totalNetWeight = undefined

  /** 总数量（件） */
  totalPack = undefined
}

export class ProductListDTO {
  /** 启用状态，1 启用，99禁用 */
  enabled = undefined

  /** 商品品类名称 */
  name = ''

  /** 页码 */
  pageNo = undefined

  /** 每页条数 */
  pageSize = undefined
}

export class ProductListVO {
  /** 商品编码 */
  code = ''

  /** 状态。1: 启用, 99: 禁用 */
  enabled = undefined

  /** 商品品类ID */
  id = undefined

  /** 文件 */
  img = new FileVO()

  /** 商品品类名称 */
  name = ''

  /** 多语言 */
  nameLocale = undefined
}

export class ProductQuotaAddRequest {
  /** 申请编码 */
  applyNo = ''

  /** 口岸ID */
  entryPortId = undefined

  /** 输出国家：0表示泰国，1表示越南 */
  exportCountry = undefined

  /** 许可证号 */
  licenseNo = ''

  /** 备注 */
  memo = ''

  /** 商品ID */
  productId = undefined

  /** 余量预警值 */
  quantityWarning = undefined

  /** 文件地址 */
  relateFiles = ''

  /** 许可总量（kg） */
  totalQuantity = undefined

  /** 有效截止日期，yyyy-MM-dd */
  validEndDate = ''

  /** 有效开始日期，yyyy-MM-dd */
  validStartDate = ''
}

export class ProductQuotaBatchVerifiedVo {
  /** 进口报关口岸 */
  declarePortId = undefined

  /** 计划Ids */
  ids = []

  /** 许可核销证书 */
  quotaFiles = []

  /** 许可ID */
  quotaId = undefined
}

export class ProductQuotaEditRequest {
  /** 是否禁用，1（未禁用）99（已禁用） */
  enabled = undefined

  /** ID */
  id = undefined

  /** 备注 */
  memo = ''

  /** 余量预警值 */
  quantityWarning = undefined
}

export class ProductQuotaInfoVO {
  /** 许可核销信息-核销许可 */
  quota = ''

  /** 许可核销信息-许可核销证书地址 */
  quotaFile = []
}

export class ProductQuotaRecordResult {
  /** 申请编号 */
  cabinetBatchCode = ''

  /** 申请编号 */
  cabinetCode = ''

  /** 消耗量，单位Kg */
  expendQuantity = undefined

  /** 消耗日期 yyyy-MM-dd */
  expendTime = ''
}

export class ProductQuotaResult {
  /** 申请编号 */
  applyNo = ''

  /** 是否启用，1（未禁用）99（已禁用） */
  enabled = undefined

  /** 已消耗（kg） */
  expendQuantity = undefined

  /** 输出国家：0表示泰国，1表示越南 */
  exportCountry = undefined

  /** 主键ID */
  id = undefined

  /** 许可证号 */
  licenseNo = ''

  /** 备注 */
  memo = ''

  /** 余量预警值，单位% */
  quantityWarning = undefined

  /** 文件地址 */
  relateFiles = ''

  /** 许可余量（kg） */
  remainQuantity = undefined

  /** 是否失效，0（已失效）1（未生效）2（生效中） */
  status = undefined

  /** 许可总量（kg） */
  totalQuantity = undefined

  /** 有效截止日期，yyyy-MM-dd */
  validEndDate = ''

  /** 有效开始日期，yyyy-MM-dd */
  validStartDate = ''
}

export class ProductQuotaTotalAddRequest {
  /** 口岸ID */
  entryPortId = undefined

  /** 商品ID */
  productId = undefined

  /** 余量预警值 */
  quantityWarning = undefined
}

export class ProductQuotaTotalEditRequest {
  /** 口岸ID */
  entryPortId = undefined

  /** ID */
  id = undefined

  /** 商品ID */
  productId = undefined

  /** 余量预警值 */
  quantityWarning = undefined
}

export class ProductQuotaTotalResult {
  /** 创建时间 yyyy-MM-dd HH:mm:ss */
  createTime = ''

  /** 口岸Id */
  entryPortId = undefined

  /** 口岸名称 */
  entryPortName = ''

  /** 已消耗（kg） */
  expendQuantity = undefined

  /** 主键ID */
  id = undefined

  /** 商品ID */
  productId = undefined

  /** 商品名称 */
  productName = ''

  /** 余量预警值，单位% */
  quantityWarning = undefined

  /** 许可余量（kg） */
  remainQuantity = undefined

  /** 许可总量（kg） */
  totalQuantity = undefined
}

export class ProductQuotaValidVo {
  /** 许可ID */
  id = undefined

  /** 许可证号 */
  licenseNo = ''

  /** 许可余量（kg） */
  remainQuantity = undefined

  /** 许可总量（kg） */
  totalQuantity = undefined
}

export class ProductQuotaVerifiedBatchVo {
  /** 进口港ID */
  arrivePortId = undefined

  /** 报关口岸港ID */
  declarePortId = undefined

  /** 本次消耗量（kg） */
  expendQuantity = undefined

  /** 商品ID */
  productId = undefined

  /** 可用许可列表 */
  quotaList = []
}

export class ProductQuotaVerifiedDetailVO {
  /** 进口港ID */
  arrivePortId = undefined

  /** 进口港 */
  arrivePortName = ''

  /** 柜次号 */
  cabinetBatchCode = ''

  /** 柜号 */
  cabinetCode = ''

  /** 合同号 */
  contractCode = ''

  /** 进口报关公司名称 */
  declareCompanyName = ''

  /** 进口报关口岸ID */
  declarePortId = undefined

  /** 进口报关口岸 */
  declarePortName = ''

  /** 许可消耗（KG） */
  expendQuantity = undefined

  /** 国际发货计划id */
  id = undefined

  /** 品类名称 */
  product = ''

  /** 商品ID */
  productId = undefined

  /** 许可证号 */
  productQuotaLicenseNo = ''

  /** 许可文件 */
  quotaFile = ''

  /** 许可文件列表 */
  quotaFiles = []

  /** 备注 */
  remark = ''

  /** 商品明细 */
  tables = []

  /** 总净重（KG） */
  totalNetWeight = undefined

  /** 总件数 */
  totalPack = undefined

  /** 核销日期,格式yyyy-MM-dd */
  verifiedDate = ''
}

export class ProductQuotaVerifiedVo {
  /** 进口港 */
  arrivePortName = ''

  /** 柜次号 */
  cabinetBatchCode = ''

  /** 柜号 */
  cabinetCode = ''

  /** 进口报关公司名称 */
  declareCompanyName = ''

  /** 进口报关口岸Id */
  declarePortId = undefined

  /** 进口报关口岸名称 */
  declarePortName = ''

  /** 运输方式(1, 陆运),(2, 海运),(3, 铁运) */
  deliveryMethod = undefined

  /** 运输方式名称 */
  deliveryMethodName = ''

  /** 国际发货计划id */
  id = undefined

  /** 品类名称 */
  product = ''

  /** 商品ID */
  productId = undefined

  /** 产地名称 */
  productPlaceName = ''

  /** 许可ID */
  productQuotaId = undefined

  /** 许可证号 */
  productQuotaLicenseNo = ''

  /** 备注 */
  remark = ''

  /** 商品名称 */
  spuNames = ''

  /** 状态编码 */
  state = ''

  /** 状态名称 */
  stateName = ''

  /** 总净重（KG） */
  totalNetWeight = undefined

  /** 核销日期,格式yyyy-MM-dd */
  verifiedDate = ''
}

export class ProductRuleCheckDTO {
  /** 柜次规则编码 */
  code = ''

  /** 编辑校验需要传ID */
  id = undefined

  /** 柜次规则名称 */
  name = ''

  /** 商品品类ID */
  productId = undefined
}

export class ProductRuleListDTO {
  /** 页码 */
  pageNo = undefined

  /** 每页条数 */
  pageSize = undefined

  /** 商品品类ID */
  productId = undefined
}

export class ProductRuleListVO {
  /** 柜次规则编码 */
  code = ''

  /** 状态。1: 启用, 99: 禁用 */
  enabled = undefined

  /** 柜次规则ID */
  id = undefined

  /** 月偏移量 */
  monthOffset = undefined

  /** 柜次规则名称 */
  name = ''

  /** 多语言 */
  nameLocale = undefined
}

export class ProductRuleSaveDTO {
  /** 柜次规则编码 */
  code = ''

  /** 是否启用  1启用，99禁用 */
  enabled = undefined

  /** 主键ID,有则编辑，无则新增 */
  id = undefined

  /** 月偏移量 */
  monthOffset = undefined

  /** 柜次规则名称 */
  name = ''

  /** 品类名称国际化 */
  nameLocale = undefined

  /** 商品品类ID */
  productId = undefined
}

export class ProductRuleVO {
  /** 商品编码 */
  code = ''

  /** 状态。1: 启用, 99: 禁用 */
  enabled = undefined

  /** 柜次规则ID */
  id = undefined

  /** 月偏移量 */
  monthOffset = undefined

  /** 柜次规则名称 */
  name = ''

  /** 多语言 */
  nameLocale = undefined
}

export class ProductSaveDTO {
  /** 编码 */
  code = ''

  /** 主键ID,有则编辑，无则新增 */
  id = undefined

  /** 商品图片 */
  img = new FileVO()

  /** 商品品类名称 */
  name = ''

  /** 品类名称国际化 */
  nameLocale = undefined
}

export class ProductSkuOptionSaveVO {
  /** SKU 规格选项值ID数组 */
  specOptions = []
}

export class ProductSkuOptionVO {
  /** id */
  id = undefined

  /** 名称 */
  name = ''

  /** 选项列表 */
  options = []
}

export class ProductSkuPO {
  /** code */
  code = ''

  /** createBy */
  createBy = undefined

  /** createTime */
  createTime = ''

  /** deleted */
  deleted = undefined

  /** exportCurrency */
  exportCurrency = undefined

  /** exportPrice */
  exportPrice = undefined

  /** grossWeight */
  grossWeight = undefined

  /** id */
  id = undefined

  /** importCurrency */
  importCurrency = undefined

  /** importPrice */
  importPrice = undefined

  /** netWeight */
  netWeight = undefined

  /** productId */
  productId = undefined

  /** productSpuId */
  productSpuId = undefined

  /** snapshotId */
  snapshotId = undefined

  /** specIds */
  specIds = ''

  /** specOptionIds */
  specOptionIds = ''

  /** updateBy */
  updateBy = undefined

  /** updateTime */
  updateTime = ''
}

export class ProductSkuQueryVO {
  /** 页码 */
  pageNo = undefined

  /** 页大小 */
  pageSize = undefined

  /** 商品品类 ID */
  productId = undefined

  /** 商品SPU ID */
  productSpuId = undefined

  /** 规格选项列表 */
  specOptions = []
}

export class ProductSkuSaveVO {
  /** SKU 规格选项值ID数组 */
  specOptions = []

  /** 商品SPU ID */
  spuId = undefined
}

export class ProductSkuUpdateVO {
  /** SKU 编码 */
  code = ''

  /** 出口货币1: 人民币, 2: 美元 */
  exportCurrency = undefined

  /** 出口单价 */
  exportPrice = undefined

  /** 毛重 */
  grossWeight = undefined

  /** SKU ID */
  id = undefined

  /** 进口货币，1: 人民币, 2: 美元 */
  importCurrency = undefined

  /** 进口单价 */
  importPrice = undefined

  /** 净重 */
  netWeight = undefined

  /** 运营用户 ID 列表 */
  operators = []
}

export class ProductSkuVO {
  /** SKU 编码 */
  code = ''

  /** 出口货币1: 人民币, 2: 美元 */
  exportCurrency = undefined

  /** 出口单价 */
  exportPrice = undefined

  /** 毛重 */
  grossWeight = undefined

  /** SKU ID */
  id = undefined

  /** 进口货币，1: 人民币, 2: 美元 */
  importCurrency = undefined

  /** 进口单价 */
  importPrice = undefined

  /** 净重 */
  netWeight = undefined

  /** 运营用户 名称 列表 */
  operatorNames = []

  /** 运营用户 ID 列表 */
  operators = []

  /** SKU所属品类ID */
  productId = undefined

  /** SKU所属SPU ID */
  productSpuId = undefined

  /** 快照I */
  snapshotId = undefined

  /** SKU 规格类型与选项值对应值,key为specId,value为option名称 */
  specOptions = []
}

export class ProductSpecOptionResultVO {
  /** 选项 ID */
  id = undefined

  /** 规格选项值 */
  name = ''

  /** 规格选项值国际化 */
  nameLocale = undefined

  /** 规格 ID */
  productSpecId = undefined

  /** 规格选项值排序 */
  sort = undefined
}

export class ProductSpecOptionSaveDTO {
  /** 规格选项值ID(新增时候为空) */
  id = undefined

  /** 规格选项值 */
  name = ''

  /** 规格选项名称 */
  nameLocale = undefined

  /** 规格选项值排序 */
  sort = undefined
}

export class ProductSpecOptionVO {
  /** 选项 ID */
  id = undefined

  /** 选项名称 */
  name = ''

  /** 选项名称国际化 */
  nameLocale = undefined

  /** 规格 ID */
  productSpecId = undefined

  /** 选项排序 */
  sort = undefined
}

export class ProductSpecResultVO {
  /** 规格类型ID */
  id = undefined

  /** 规格类型名称 */
  name = ''

  /** 规格类型名称国际化 */
  nameLocale = undefined

  /** 规格类型选项值信息顺序 */
  options = []

  /** 规格类型顺序 */
  sort = undefined
}

export class ProductSpecSaveDTO {
  /** 规格类型ID(新增时为空) */
  id = undefined

  /** 规格类型名称 */
  name = ''

  /** 规格类型名称 */
  nameLocale = undefined

  /** 规格类型排序 */
  sort = undefined

  /** 规格类型选项 */
  value = []
}

export class ProductSpecVO {
  /** 规格 ID */
  id = undefined

  /** name */
  name = ''

  /** nameLocale */
  nameLocale = undefined

  /** options */
  options = []

  /** 商品 ID。批量创建/更新时可以不传（需要使用 SaveProductSpecsVO 对象）。 */
  productId = undefined

  /** sort */
  sort = undefined

  /** 标记逻辑表名，后期商品整体重构后可能去除 */
  table = ''
}

export class ProductSpuAddDTO {
  /** 图片 */
  fileVOS = []

  /** SPU名称 */
  name = ''

  /** SPU名称 国际化 */
  nameLocale = undefined

  /** SPU产地ID */
  placeId = undefined

  /** 商品品类ID */
  productId = undefined

  /** SPU编码 */
  spuCode = ''

  /** SPU品种ID */
  varietyId = undefined
}

export class ProductSpuDetailInfoResultVO {
  /** fileVOS */
  fileVOS = []

  /** id */
  id = undefined

  /** name */
  name = ''

  /** nameLocale */
  nameLocale = undefined

  /** place */
  place = ''

  /** productId */
  productId = undefined

  /** productName */
  productName = ''

  /** specResultVOList */
  specResultVOList = []

  /** spuCode */
  spuCode = ''

  /** variety */
  variety = ''
}

export class ProductSpuEditDTO {
  /** 图片 */
  fileVOS = []

  /** SPU ID */
  id = undefined

  /** spu名称 */
  name = ''

  /** SPU ID */
  nameLocale = undefined

  /** SPU编码 */
  spuCode = ''
}

export class ProductSpuEditStatusDTO {
  /** spu id */
  spuId = undefined

  /** 修改之后的状态 1_启用 99_禁用 */
  status = 1
}

export class ProductSpuPageResultVO {
  /** id */
  id = undefined

  /** place */
  place = ''

  /** skuNumber */
  skuNumber = undefined

  /** spuCode */
  spuCode = ''

  /** spuName */
  spuName = ''

  /** status */
  status = undefined

  /** variety */
  variety = ''
}

export class ProductSpuSpecSaveDTO {
  /** 商品 ID */
  productId = undefined

  /** SPU规格类型信息 */
  productSpecSaveDTOS = []

  /** 商品SPU ID */
  spuId = undefined
}

export class ProductUsedOptionVO {
  /** sku关联optionId */
  optionId = undefined

  /** specId */
  specId = undefined
}

export class ProductVO {
  /** 商品编码 */
  code = ''

  /** 状态。1: 启用, 99: 禁用 */
  enabled = undefined

  /** 商品品类ID */
  id = undefined

  /** 图片对象 */
  img = new FileVO()

  /** 图片链接 */
  imgUrl = ''

  /** 商品品类名称 */
  name = ''

  /** 多语言 */
  nameLocale = undefined

  /** specs */
  specs = []
}

export class ReceiveInfoVO {
  /** 收货信息-到达销地时间 */
  arrivalTime = ''

  /** 收货信息-服务区域 */
  customerCompanyName = ''

  /** 收货信息-服务客户仓库 */
  customerdePositoryName = ''

  /** 收货信息-销地收货时间 */
  receiveTime = ''

  /** 收货信息-收货人 */
  receiver = ''

  /** 收货方(收货组织-收货方) */
  receiverDepart = ''

  /** 收货方类型 1_销地分公司  2_客户 */
  receiverType = undefined

  /** 商品明细 */
  tableVOs = []
}

export class ReceiveWebDetailVO {
  /** 尾程发货时间 */
  actualStartShipTime = ''

  /** 风口单位% */
  airPort = undefined

  /** 进口港名称 */
  arrivePortName = ''

  /** 柜次号 */
  cabinetBatchCode = ''

  /** 柜号 */
  cabinetCode = ''

  /** 分柜号 */
  cabinetSplitCode = ''

  /** 车牌号 */
  carNo = ''

  /** 抽检数量 */
  checkNumber = ''

  /** 合同号 */
  contractCode = ''

  /** 计划ID */
  deliveryPlanId = undefined

  /** 分柜单ID */
  deliverySplitOrderId = undefined

  /** 司机名 */
  driverName = ''

  /** 司机联系方式 */
  driverPhone = ''

  /** 压车天数 */
  emptyTime = undefined

  /** 压车费用 ,单位分 */
  escortFee = undefined

  /** 司机补打冷费,单位分 */
  extraFee = undefined

  /** 货物来源码 1：海外基地 2：国内产地 3：海外进口 */
  goodsSource = undefined

  /** 货物来源名称 海外基地,国内产地,海外进口 */
  goodsSourceName = ''

  /** 发货单ID */
  id = undefined

  /** 运输公司 */
  logisticsCompanyName = ''

  /** 操作历史 */
  operations = []

  /** 商品名称 */
  productName = ''

  /** 收货方 */
  receiverName = ''

  /** 到达销地时间 */
  receiverTime = ''

  /** 收货方类型1：销地分公司 2客户 */
  receiverType = undefined

  /** 收货人 */
  receiverUserName = ''

  /** 还箱备注 */
  remark = ''

  /** 还箱交接文件 */
  returnCabinetFile = []

  /** 发货方地址 */
  senderAddress = ''

  /** 还箱交接文件 */
  shiftFileList = ''

  /** 装柜方式码1：原柜 2：转柜 3：装柜 */
  shipmentMethod = undefined

  /** 装柜方式名称 */
  shipmentMethodName = ''

  /** 销地收货时间 */
  sopTime = ''

  /** 商品明细 */
  tables = []

  /** 温度单位为℃ */
  temperature = undefined

  /** 还箱总费用,单位分 */
  totalFee = undefined

  /** 总件数 */
  totalPack = undefined

  /** 挂车号 */
  trailerCarNo = ''
}

export class ReceiveWebListVO {
  /** 柜次号 */
  cabinetBatchCode = ''

  /** 柜号 */
  cabinetCode = ''

  /** 合同号 */
  contractCode = ''

  /** 计划ID */
  deliveryPlanId = undefined

  /** 分柜订单ID */
  deliverySplitOrderId = undefined

  /** 分柜订单ID */
  id = undefined

  /** 品类名称 */
  productName = ''

  /** 收货区域 */
  receiveArea = ''

  /** 收货组织 */
  receiveDepart = ''

  /** 销地收货时间 */
  receivedDate = ''

  /** 发货方 */
  senderName = ''

  /** 状态编码  08:国内待发运|12:国内已发运|13:国内已到达销区|14:国内销区已收货|15:已还箱 */
  state = ''

  /** 状态名称 */
  stateName = ''
}

export class ReportGroupVO {
  /** countPerMonth */
  countPerMonth = undefined

  /** perMonthStr */
  perMonthStr = ''
}

export class ReportSalesVO {
  /** addGrowthRate */
  addGrowthRate = ''

  /** avgCabinetPerDay */
  avgCabinetPerDay = undefined

  /** avgCabinetPerDayThisMonth */
  avgCabinetPerDayThisMonth = undefined

  /** totalCabinetCount */
  totalCabinetCount = undefined

  /** totalCabinetCountPerMonth */
  totalCabinetCountPerMonth = undefined

  /** transitCabinetCount */
  transitCabinetCount = undefined
}

export class Resource {
  /** description */
  description = ''

  /** file */
  file = new File()

  /** filename */
  filename = ''

  /** inputStream */
  inputStream = new InputStream()

  /** open */
  open = false

  /** readable */
  readable = false

  /** uri */
  uri = new URI()

  /** url */
  url = new URL()
}

export class Result {
  /** 返回代码 */
  code = undefined

  /** 返回处理消息 */
  message = ''

  /** 返回数据对象 */
  result = new BillCodeVO()

  /** 成功标志 */
  success = false

  /** 时间戳 */
  timestamp = undefined
}

export class ReturnInfoVO {
  /** 收货信息-压车天数 */
  actualUnloadTime = undefined

  /** 收货信息-司机补打冷费 */
  driverChillFee = undefined

  /** 收货信息-报空交接文件 */
  emptyFile = []

  /** 收货信息-报空合计费用 */
  emptyTotalFee = undefined

  /** 收货信息-压车费用 */
  pressFee = undefined

  /** 还箱证明文件 */
  proofFileVO = new FileVO()

  /** 收货信息-报空备注 */
  remark = ''
}

export class RolePermissionEditDTO {
  /** 数据权限ids */
  dataRuleIds = ''

  /** 菜单权限id */
  permissionIds = []

  /** 角色id */
  roleId = undefined
}

export class SelectCascaderOption {
  /** 是否叶节点 */
  isLeaf = false

  /** 选项名称 */
  label = ''

  /** 选项值 */
  value = ''
}

export class SelectOption {
  /** 子下拉 */
  children = []

  /** 是否禁用 */
  disabled = false

  /** 选项名称 */
  label = ''

  /** 选项值 */
  value = undefined
}

export class SelectTextOption {
  /** 子下拉 */
  children = []

  /** 是否禁用 */
  disabled = false

  /** 选项名称 */
  label = ''

  /** 选项值 */
  value = ''
}

export class ShipmentInfoVO {
  /** 船运信息-计划离港时间 */
  expectDepartedTime = ''

  /** 船运信息-计划到港时间 */
  planArriveTime = ''

  /** 船运信息-船次号 */
  shipBatchCode = ''

  /** 船运信息-船公司 */
  shipCompany = ''

  /** 船运信息-船名 */
  shipName = ''

  /** 船运信息-地图地址 */
  url = ''
}

export class ShipperCustomerInfoVO {
  /** 发货方信息-工厂名称 */
  factoryId = undefined

  /** 发货方信息-工厂名称 */
  factoryName = ''

  /** 发货方信息-备注 */
  remark = ''

  /** 发货方信息-发货方ID */
  shipmentId = undefined

  /** 发货方信息-发货方名称 */
  shipmentName = ''
}

export class Sop {
  /** createBy */
  createBy = undefined

  /** createTime */
  createTime = ''

  /** createTimeFm */
  createTimeFm = ''

  /** createTimeTo */
  createTimeTo = ''

  /** deleted */
  deleted = undefined

  /** 启用状态：1启用 ，99：禁用 */
  enabled = undefined

  /** id */
  id = undefined

  /** 操作环节(1-国际装柜，2-堆场验货，3-转柜检验，4-销地收货，5-国内装柜) */
  operation = undefined

  /** operationName */
  operationName = ''

  /** productCode */
  productCode = ''

  /** 商品ID */
  productId = undefined

  /** productName */
  productName = ''

  /** updateBy */
  updateBy = undefined

  /** updateTime */
  updateTime = ''
}

export class SopDetail {
  /** checkName */
  checkName = ''

  /** checkResultType */
  checkResultType = undefined

  /** createBy */
  createBy = undefined

  /** createTime */
  createTime = ''

  /** deleted */
  deleted = undefined

  /** id */
  id = undefined

  /** isRemark */
  isRemark = undefined

  /** nameLocale */
  nameLocale = ''

  /** remarkRequired */
  remarkRequired = undefined

  /** snapshotId */
  snapshotId = undefined

  /** sopId */
  sopId = undefined

  /** sort */
  sort = undefined

  /** status */
  status = undefined

  /** updateBy */
  updateBy = undefined

  /** updateTime */
  updateTime = ''
}

export class SopDetailOptionData {
  /** 主键ID */
  id = undefined

  /** 是否需要备注(1:是 0：不是) */
  isRemark = undefined

  /** 检查项名称 */
  name = ''

  /** 名称多语言 json数据key=语言（全小写），value=名称 */
  nameLocale = undefined

  /** 是否必须备注(1:是 0：不是) */
  remarkRequired = undefined

  /** 选项排序从0开始 */
  sort = undefined
}

export class SopDetailResult {
  /** 检查项名称 */
  checkName = ''

  /** 检查结果类型(1-单选，2-多选，3-输入,4-日期时间) */
  checkResultType = undefined

  /** ID */
  id = undefined

  /** 是否需要上传图片/视频(1:是 0：不是) */
  isRemark = undefined

  /** 名称多语言 json数据key=语言（全小写），value=名称 */
  nameLocale = undefined

  /** 选项列表，单选和多选必填 */
  options = []

  /** 是否必须上传图片/视频(1:是 0：不是) */
  remarkRequired = undefined

  /** sop的ID */
  sopId = undefined

  /** 检查项排序号 */
  sort = undefined

  /** 状态,1：启用 ，99：禁用 */
  status = undefined
}

export class SopDetailSaveRequest {
  /** 检查项名称 */
  checkName = ''

  /** 检查结果类型(1-单选，2-多选，3-输入,4-日期时间) */
  checkResultType = undefined

  /** ID */
  id = undefined

  /** 是否需要上传图片/视频(1:是 0：不是) */
  isRemark = undefined

  /** 名称多语言数据key=语言（全小写），value=名称 */
  nameLocale = undefined

  /** 选项列表，单选和多选必填 */
  options = []

  /** 是否必须上传图片/视频(1:是 0：不是) */
  remarkRequired = undefined

  /** sop的ID */
  sopId = undefined

  /** 检查项排序号 */
  sort = undefined

  /** 状态,1：启用 ，99：禁用 */
  status = undefined
}

export class SopListResult {
  /** 启用状态，1：启用 ，99：禁用 */
  enabled = undefined

  /** 主键ID */
  id = undefined

  /** SOP环节 */
  operation = undefined

  /** SOP环节名称 */
  operationName = ''

  /** 商品Id */
  productId = undefined

  /** 商品名称 */
  productName = ''
}

export class SopQuestionOptionVO {
  /** 是否需要备注(1:是 0：不是) */
  isRemark = undefined

  /** 选项名称 */
  name = ''

  /** 是否必须备注(1:是 0：不是) */
  remarkRequired = undefined

  /** SOP题目选项ID */
  sopDetailOptionId = ''
}

export class SopQuestionResultDTO {
  /** 题目结果 */
  answer = ''

  /** 文件 */
  files = []

  /** 备注 */
  remark = ''

  /** 题目ID */
  sopDetailId = undefined
}

export class SopQuestionVO {
  /** 题目答案 */
  answer = new SopQuestionResultDTO()

  /** 检查题目 */
  checkName = ''

  /** 检查结果类型(1-单选，2-多选，3-输入,4-日期时间) */
  checkResultType = undefined

  /** 是否必须上传图片/视频(1:是 0：不是) */
  fileRequired = undefined

  /** 是否需要上传图片/视频(1:是 0：不是) */
  isFile = undefined

  /** 选择题选项 */
  options = []

  /** sop题目ID */
  sopDetailId = undefined
}

export class SopResultAnswerVO {
  /** 分柜号 */
  cabinetSplitCode = ''

  /** 分柜订单ID */
  deliverySplitOrderId = undefined

  /** sop执行问题答案 */
  questions = []

  /** sop执行时间 */
  sopDate = ''

  /** sop执行人名称 */
  userName = ''

  /** sop执行人手机号 */
  userPhone = ''
}

export class SopResultDetailVO {
  /** 柜次号 */
  cabinetBatchCode = ''

  /** 柜号 */
  cabinetCode = ''

  /** 合同号 */
  contractCode = ''

  /** 客户收货方名称 */
  customerName = ''

  /** 运输方式(1, 陆运),(2, 海运),(3, 铁运) */
  deliveryMethod = undefined

  /** 运输方式名称 */
  deliveryMethodName = ''

  /** 公司收货方名称 */
  departName = ''

  /** 计划ID */
  id = undefined

  /** 品类名称 */
  productName = ''

  /** 产地名称 */
  productPlaceName = ''

  /** 收货方 */
  receiver = []

  /** 收货方ID */
  receiverId = undefined

  /** 收货方类型1：销地分公司 2客户 */
  receiverType = undefined

  /** 发货方 */
  senderName = ''

  /** 商品名称 */
  spuNames = ''

  /** state */
  state = ''
}

export class SopResultListVO {
  /** 柜次号 */
  cabinetBatchCode = ''

  /** 柜号 */
  cabinetCode = ''

  /** 创建时间 */
  createDate = ''

  /** 运输方式(1, 陆运),(2, 海运),(3, 铁运) */
  deliveryMethod = undefined

  /** 运输方式名称 */
  deliveryMethodName = ''

  /** 计划ID */
  id = undefined

  /** 品类名称 */
  productName = ''

  /** 产地名称 */
  productPlaceName = ''

  /** 收货区域 */
  receiveArea = ''

  /** 收货组织 */
  receiveDepart = ''

  /** 发货方 */
  senderName = ''

  /** 商品名称 */
  spuNames = ''

  /** 状态编码  08:国内待发运|12:国内已发运|13:国内已到达销区|14:国内销区已收货|15:已还箱 */
  state = ''

  /** 状态名称 */
  stateName = ''
}

export class SopResultReceiverVO {
  /** 收货方ID */
  receiverId = undefined

  /** 收货方名称 */
  receiverName = ''

  /** 收货方类型1：销地分公司 2客户 */
  receiverType = undefined
}

export class SpecOptionSelectOptionVO {
  /** 规格选项值ID */
  id = undefined

  /** 规格选项值 */
  name = ''

  /** 规格选项名称 */
  nameLocale = undefined

  /** 规格选项值排序 */
  sort = undefined
}

export class SpecSelectOptionVO {
  /** 规格选项ID */
  id = undefined

  /** 规格选项名称 */
  name = ''

  /** 规格选项名称 */
  nameLocale = undefined

  /** 规格选项排序 */
  sort = undefined

  /** 规格选项值 */
  value = []
}

export class StorageYardAddDTO {
  /** 堆场地址 */
  address = ''

  /** latitude 纬度 */
  lat = ''

  /** longitude 经度 */
  lng = ''

  /** 堆场名称（中文） */
  name = ''

  /** 国际化 */
  nameLocale = undefined

  /** 操作人id数组 */
  operatorId = []

  /** 状态 99 停用 1 启用 */
  status = undefined
}

export class StorageYardEditDTO {
  /** 堆场地址 */
  address = ''

  /** id */
  id = undefined

  /** latitude 纬度 */
  lat = ''

  /** longitude 经度 */
  lng = ''

  /** 堆场名称（中文） */
  name = ''

  /** nameLocale */
  nameLocale = undefined

  /** 操作人id数组 */
  operatorId = []

  /** 状态 0 停用 1 启用 */
  status = undefined
}

export class StorageYardEditVO {
  /** address */
  address = ''

  /** id */
  id = undefined

  /** latitude 纬度 */
  lat = ''

  /** longitude 经度 */
  lng = ''

  /** 堆场名称（中文） */
  name = ''

  /** nameLocale */
  nameLocale = undefined

  /** 堆场操作人id列表 */
  operatorId = []

  /** 1 启用 99 停用 */
  status = undefined

  /** 入境口岸 */
  subPortName = ''
}

export class StorageYardListVO {
  /** 堆场地址 */
  address = ''

  /** id */
  id = undefined

  /** latitude 纬度 */
  lat = ''

  /** longitude 经度 */
  lng = ''

  /** 堆场名称 */
  name = ''

  /** 国际化 */
  nameLocale = undefined

  /** 堆场操作人id */
  operatorId = []

  /** 堆场操作人 */
  operatorNames = ''

  /** 状态1 启用 99 禁用 */
  status = undefined

  /** 入境口岸 */
  subPortName = ''
}

export class SupplierOrderVO {
  /** cabinetCount */
  cabinetCount = undefined

  /** goodsSource */
  goodsSource = undefined

  /** goodsSourceName */
  goodsSourceName = ''
}

export class SysDepart {
  /** address */
  address = ''

  /** contract */
  contract = ''

  /** country */
  country = undefined

  /** createBy */
  createBy = undefined

  /** createTime */
  createTime = ''

  /** deleted */
  deleted = ''

  /** departName */
  departName = ''

  /** departNameAbbr */
  departNameAbbr = ''

  /** departNameEn */
  departNameEn = ''

  /** departOrder */
  departOrder = undefined

  /** departType */
  departType = undefined

  /** description */
  description = undefined

  /** fax */
  fax = ''

  /** id */
  id = undefined

  /** lat */
  lat = ''

  /** lng */
  lng = ''

  /** memo */
  memo = ''

  /** mobile */
  mobile = ''

  /** nameLocale */
  nameLocale = ''

  /** orgCategory */
  orgCategory = ''

  /** orgCode */
  orgCode = ''

  /** orgType */
  orgType = ''

  /** parentId */
  parentId = undefined

  /** status */
  status = ''

  /** updateBy */
  updateBy = undefined

  /** updateTime */
  updateTime = ''
}

export class SysDepartBusinessInfo {
  /** 开户证明 */
  accountCert = ''

  /** 地址 */
  address = ''

  /** 营业执照信息 */
  bizLicense = ''

  /** departId */
  departId = undefined

  /** 法定代表人 */
  legalRep = ''

  /** 其他证明 */
  otherCert = ''

  /** 统一社会信用代码 */
  socialCreditCode = ''

  /** 企业名称 */
  title = ''
}

export class SysDepartEditDTO {
  /** 地址 */
  address = ''

  /** 联系人 */
  contact = ''

  /** 联系方式 */
  contactMobile = ''

  /** 所处国家编码 1 中国 2 越南 3 泰国 */
  country = undefined

  /** 工商信息 */
  departBusinessInfo = new DepartBusinessInfoDTO()

  /** 组织名称 */
  departName = ''

  /** id */
  id = undefined

  /** latitude 纬度 */
  lat = ''

  /** longitude 经度 */
  lng = ''

  /** 组织类型 */
  orgCategories = []

  /** 组织编码 */
  orgCode = ''

  /** 父组织id */
  parentId = undefined

  /** 备注 */
  remark = ''
}

export class SysDepartEditVO {
  /** 地址 */
  address = ''

  /** 工商信息 */
  businessInfo = new DepartBusinessInfoDTO()

  /** 联系人 */
  contact = ''

  /** 联系方式 */
  contactMobile = ''

  /** 所处国家 */
  country = undefined

  /** 组织名称 */
  departName = ''

  /** 唯一key,也是depart的id */
  id = undefined

  /** latitude 纬度 */
  lat = ''

  /** longitude 经度 */
  lng = ''

  /** 组织类型列表 */
  orgCategories = []

  /** 组织编码 */
  orgCode = ''

  /** 父组织名称 */
  parentDepartName = ''

  /** 唯一key,也是depart的id */
  parentId = undefined

  /** 备注 */
  remark = ''

  /** 状态 1 启用 99 禁用 */
  status = ''
}

export class SysDepartTreeModel {
  /** 地址 */
  address = ''

  /** 工商信息 */
  businessInfo = new SysDepartBusinessInfo()

  /** children */
  children = []

  /** contract */
  contract = ''

  /** 创建人 */
  createBy = undefined

  /** 创建时间 */
  createTime = ''

  /** 是否删除 */
  deleted = ''

  /** 组织名称 */
  departName = ''

  /** 组织名称缩写 */
  departNameAbbr = ''

  /** 组织英文名 */
  departNameEn = ''

  /** 顺序 */
  departOrder = undefined

  /** 描述 */
  description = undefined

  /** 传真 */
  fax = ''

  /** 唯一key,也是depart的id */
  id = undefined

  /** isLeaf */
  isLeaf = false

  /** 唯一key,也是depart的id */
  key = undefined

  /** 备注 */
  memo = ''

  /** 联系电话 */
  mobile = ''

  /** nameLocale */
  nameLocale = ''

  /** 组织类型列表 */
  orgCategories = []

  /** Category */
  orgCategory = ''

  /** 组织编码 */
  orgCode = ''

  /** 组织类型 */
  orgType = ''

  /** 唯一key,也是depart的id */
  parentId = undefined

  /** 状态 */
  status = ''

  /** 唯一key,也是depart的name */
  title = ''

  /** 更新人 */
  updateBy = undefined

  /** 更新时间 */
  updateTime = ''

  /** 唯一key,也是depart的id */
  value = undefined
}

export class SysDepartUsersVO {
  /** depId */
  depId = undefined

  /** userIdList */
  userIdList = []
}

export class SysDictAddDTO {
  /** 字典描述 */
  description = ''

  /** 字典CODE */
  dictCode = ''

  /** 字典名称 */
  dictName = ''
}

export class SysDictItemAddDTO {
  /** 描述 */
  description = ''

  /** 字典id */
  dictId = undefined

  /** 字典项文本 */
  itemText = ''

  /** 字典项值 */
  itemValue = ''

  /** 排序 */
  sortOrder = undefined
}

export class SysFillRule {
  /** 创建人 */
  createBy = ''

  /** 创建时间 */
  createTime = ''

  /** 主键ID */
  id = ''

  /** 规则实现类 */
  ruleClass = ''

  /** 规则Code */
  ruleCode = ''

  /** 规则名称 */
  ruleName = ''

  /** 规则参数 */
  ruleParams = ''

  /** 修改人 */
  updateBy = ''

  /** 修改时间 */
  updateTime = ''
}

export class SysLoginModel {
  /** 验证码 */
  captcha = ''

  /** 验证码key */
  checkKey = ''

  /** 密码 */
  password = ''

  /** 账号 */
  username = ''
}

export class SysPosition {
  /** 职务编码 */
  code = ''

  /** 公司id */
  companyId = ''

  /** 创建人 */
  createBy = ''

  /** 创建时间 */
  createTime = ''

  /** id */
  id = undefined

  /** 职务名称 */
  name = ''

  /** 职级 */
  postRank = ''

  /** 组织机构编码 */
  sysOrgCode = ''

  /** 修改人 */
  updateBy = ''

  /** 修改时间 */
  updateTime = ''
}

export class SysRole {
  /** 创建人 */
  createBy = undefined

  /** 创建时间 */
  createTime = ''

  /** 描述 */
  description = ''

  /** 主键 */
  id = undefined

  /** 是否是管理员（1：是 2：否） */
  isAdmin = undefined

  /** 角色名 */
  roleName = ''

  /** 状态（1：正常 99：禁用） */
  status = undefined

  /** 更新人 */
  updateBy = undefined

  /** 更新时间 */
  updateTime = ''
}

export class SysSettingPageVO {
  /** 上传时间 */
  createTime = ''

  /** 资源路径 */
  fileVOS = []

  /** 主键 */
  id = undefined

  /** 名称 */
  name = ''

  /** 状态 1_上架 99_下架 */
  status = undefined
}

export class SysSettingQueryDTO {
  /** 资料名称 */
  name = ''

  /** 页码 */
  pageNo = undefined

  /** 每页条数 */
  pageSize = undefined
}

export class SysUser {
  /** 是否同步工作流引擎（1同步0不同步） */
  activitiSync = ''

  /** 头像 */
  avatar = ''

  /** 生日 */
  birthday = ''

  /** 创建人 */
  createBy = undefined

  /** 创建时间 */
  createTime = ''

  /** 删除状态（0：正常 1：已删除） */
  deleted = undefined

  /** 电子邮件 */
  email = ''

  /** 主键 */
  id = undefined

  /** 是否是管理员（1：是 2：否） */
  isAdmin = undefined

  /** 用户名称 */
  nickname = ''

  /** 部门code */
  orgCode = ''

  /** 电话 */
  phone = ''

  /** 职务 */
  post = ''

  /** 真实姓名 */
  realname = ''

  /** 性别（1：男 2：女） */
  sex = undefined

  /** 状态（1：正常 2：冻结） */
  status = undefined

  /** superUser */
  superUser = false

  /** 座机号 */
  telephone = ''

  /** 更新人 */
  updateBy = undefined

  /** 更新时间 */
  updateTime = ''

  /** 登陆账号 */
  username = ''

  /** 工号。唯一值 */
  workNo = ''
}

export class SysUserDepart {
  /** depId */
  depId = undefined

  /** id */
  id = undefined

  /** userId */
  userId = undefined
}

export class SysUserRole {
  /** id */
  id = undefined

  /** roleId */
  roleId = undefined

  /** userId */
  userId = undefined
}

export class SysUserSysDepartModel {
  /** sysDepart */
  sysDepart = new SysDepart()

  /** sysUser */
  sysUser = new SysUser()
}

export class SysUserVO {
  /** 是否同步工作流引擎（1同步0不同步） */
  activitiSync = ''

  /** 头像 */
  avatar = ''

  /** 生日 */
  birthday = ''

  /** 创建人 */
  createBy = undefined

  /** 创建时间 */
  createTime = ''

  /** 组织IDS */
  departIds = []

  /** 电子邮件 */
  email = ''

  /** 主键 */
  id = undefined

  /** 是否是管理员（1：是 2：否） */
  isAdmin = undefined

  /** 用户名称 */
  nickname = ''

  /** 部门Code */
  orgCode = ''

  /** orgNames */
  orgNames = []

  /** permissions */
  permissions = []

  /** 电话 */
  phone = ''

  /** 职务 */
  post = ''

  /** 真实姓名 */
  realname = ''

  /** 角色IDS */
  roleIds = []

  /** roleNames */
  roleNames = []

  /** 性别（1：男 2：女） */
  sex = undefined

  /** 状态（1：正常 2：冻结） */
  status = undefined

  /** 座机号 */
  telephone = ''

  /** 登陆账号 */
  username = ''

  /** 工号。唯一值 */
  workNo = ''
}

export class TableVO {
  /** 表单列 */
  columns = []

  /** 数据集合，key=filed。必返回key=id的数据，为skuId */
  records = []

  /** 商品ID */
  spuId = undefined

  /** 表单标题，即商品名称 */
  title = ''

  /** 总件数 */
  total = undefined
}

export class TempMonitorDetailVO {
  /** 风口 */
  airPort = undefined

  /** 柜次 */
  cabinetBatchCode = ''

  /** 柜号 */
  cabinetCode = ''

  /** 装柜明细 */
  items = []

  /** 温度监控id */
  monitorId = undefined

  /** 是否超期 */
  overdue = false

  /** planid */
  planId = undefined

  /** NORMAL 正常 EXCEPTION 异常 */
  qualityState = ''

  /** 1 原柜 2 转柜 */
  shipmentMethod = undefined

  /** 是否需要做转柜sop 1 需要 99 不需要 */
  sopEnabled = undefined

  /** state */
  state = ''

  /** status */
  status = undefined

  /** 设置温度 */
  temperature = undefined
}

export class TempMonitorListVO {
  /** 风口 */
  airPort = undefined

  /** 进口港 */
  arrivePortName = ''

  /** 柜次 */
  cabinetBatchCode = ''

  /** 柜号 */
  cabinetCode = ''

  /** 是否超期 */
  overdue = false

  /** 计划id */
  planId = undefined

  /** 计划发货时间 */
  planStartShipTime = ''

  /** 商品id */
  productId = ''

  /** 品类 */
  productName = ''

  /** 品类图片 */
  productPic = ''

  /** qualityState */
  qualityState = ''

  /** 收货方 */
  receiverName = []

  /** 1 原柜 2转柜 3装柜 */
  shipmentMethod = undefined

  /** 货运方式翻译 */
  shipmentMethodName = ''

  /** 状态 */
  state = ''

  /** 状态翻译 */
  stateName = ''

  /** 状态 1 处理 2 已处理 */
  status = undefined

  /** statusName */
  statusName = ''

  /** 任务接收时间 */
  taskDate = ''

  /** 设置温度 */
  temperature = undefined
}

export class TempMonitorQueryDTO {
  /** 品类id */
  productIds = []

  /** 状态筛选 */
  states = []

  /** 1 待处理 2 已处理 */
  status = undefined

  /** 任务接受结束时间 */
  taskEndTime = ''

  /** 任务接受开始时间 */
  taskStartTime = ''
}

export class TempMonitorSettingDTO {
  /** 风口 */
  airPort = undefined

  /** 计划id */
  planId = undefined

  /** 是否异常 NORMAL 正常 EXCEPTION 异常 */
  qualityState = ''

  /** 温度 */
  temperature = undefined
}

export class TempMonitorSettingEditDTO {
  /** 风口 */
  airPort = undefined

  /** 监控id */
  monitorId = undefined

  /** 计划id */
  planId = undefined

  /** 是否异常 NORMAL 正常 EXCEPTION 异常 */
  qualityState = ''

  /** 温度 */
  temperature = undefined
}

export class ThirdLoginModel {
  /** 密码 */
  password = ''

  /** 账号 */
  username = ''
}

export class URI {
  /** absolute */
  absolute = false

  /** authority */
  authority = ''

  /** fragment */
  fragment = ''

  /** host */
  host = ''

  /** opaque */
  opaque = false

  /** path */
  path = ''

  /** port */
  port = undefined

  /** query */
  query = ''

  /** rawAuthority */
  rawAuthority = ''

  /** rawFragment */
  rawFragment = ''

  /** rawPath */
  rawPath = ''

  /** rawQuery */
  rawQuery = ''

  /** rawSchemeSpecificPart */
  rawSchemeSpecificPart = ''

  /** rawUserInfo */
  rawUserInfo = ''

  /** scheme */
  scheme = ''

  /** schemeSpecificPart */
  schemeSpecificPart = ''

  /** userInfo */
  userInfo = ''
}

export class URL {
  /** authority */
  authority = ''

  /** content */
  content = undefined

  /** defaultPort */
  defaultPort = undefined

  /** deserializedFields */
  deserializedFields = new URLStreamHandler()

  /** file */
  file = ''

  /** host */
  host = ''

  /** path */
  path = ''

  /** port */
  port = undefined

  /** protocol */
  protocol = ''

  /** query */
  query = ''

  /** ref */
  ref = ''

  /** serializedHashCode */
  serializedHashCode = undefined

  /** userInfo */
  userInfo = ''
}

export class URLStreamHandler {}

export class UpdateBatchProductSkuVO {
  /** 出口货币1: 人民币, 2: 美元 */
  exportCurrency = undefined

  /** 出口单价 */
  exportPrice = undefined

  /** 毛重 */
  grossWeight = undefined

  /** 进口货币，1: 人民币, 2: 美元 */
  importCurrency = undefined

  /** 进口单价 */
  importPrice = undefined

  /** 净重 */
  netWeight = undefined

  /** 运营用户 ID 列表 */
  operators = []

  /** 商品品类 ID */
  productId = undefined

  /** 商品SPU ID */
  productSpuId = undefined

  /** 规格选项列表 */
  specOptions = []
}

export class UpdatePasswordVO {
  /** password */
  password = ''
}

export class UserCreatedVO {
  /** 是否同步工作流引擎（1同步0不同步） */
  activitiSync = ''

  /** 头像 */
  avatar = ''

  /** 生日 */
  birthday = ''

  /** 创建人 */
  createBy = undefined

  /** 创建时间 */
  createTime = ''

  /** 删除状态（0：正常 1：已删除） */
  deleted = undefined

  /** 电子邮件 */
  email = ''

  /** 主键 */
  id = undefined

  /** initialPassword */
  initialPassword = ''

  /** 是否是管理员（1：是 2：否） */
  isAdmin = undefined

  /** 用户名称 */
  nickname = ''

  /** 部门code */
  orgCode = ''

  /** 电话 */
  phone = ''

  /** 职务 */
  post = ''

  /** 真实姓名 */
  realname = ''

  /** 性别（1：男 2：女） */
  sex = undefined

  /** 状态（1：正常 2：冻结） */
  status = undefined

  /** superUser */
  superUser = false

  /** 座机号 */
  telephone = ''

  /** 更新人 */
  updateBy = undefined

  /** 更新时间 */
  updateTime = ''

  /** 登陆账号 */
  username = ''

  /** 工号。唯一值 */
  workNo = ''
}

export class UserEditDTO {
  /** 组织IDS */
  departIds = []

  /** 主键 */
  id = undefined

  /** 用户名称 */
  nickname = ''

  /** 电话 */
  phone = ''

  /** 真实姓名 */
  realname = ''

  /** 角色IDS */
  roleIds = []

  /** 座机号 */
  telephone = ''

  /** 登陆账号 */
  username = ''

  /** 工号。唯一值 */
  workNo = ''
}

export class UserFrozenDTO {
  /** 主键 */
  id = undefined

  /** 状态（1：正常，99：禁用） */
  status = undefined
}

export class UserInfoVO {
  /** permissionIds */
  permissionIds = []

  /** user */
  user = new UserVO()
}

export class UserUpdatePwdDTO {
  /** 旧密码 */
  oldPwd = ''

  /** 新密码 */
  pwd = ''
}

export class UserVO {
  /** 是否同步工作流引擎（1同步0不同步） */
  activitiSync = ''

  /** 头像 */
  avatar = ''

  /** 生日 */
  birthday = ''

  /** 创建人 */
  createBy = undefined

  /** 创建时间 */
  createTime = ''

  /** 组织IDS */
  departIds = []

  /** 电子邮件 */
  email = ''

  /** 主键 */
  id = undefined

  /** 是否是管理员（1：是 2：否） */
  isAdmin = undefined

  /** 用户名称 */
  nickname = ''

  /** 部门Code */
  orgCode = ''

  /** 电话 */
  phone = ''

  /** 职务 */
  post = ''

  /** 真实姓名 */
  realname = ''

  /** 角色IDS */
  roleIds = []

  /** 性别（1：男 2：女） */
  sex = undefined

  /** 状态（1：正常 2：冻结） */
  status = undefined

  /** 座机号 */
  telephone = ''

  /** 登陆账号 */
  username = ''

  /** 工号。唯一值 */
  workNo = ''
}
