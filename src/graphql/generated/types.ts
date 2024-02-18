export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: number;
  Date: number;
  DateTime: number;
  Long: number;
  Object: any;
};

/** 上传文件可访问类型 */
export const enum AccessType {
  /** 并行文件系统 */
  ParallelFileSystem = 'PARALLEL_FILE_SYSTEM',
  /** 私有访问 */
  Private = 'PRIVATE',
  /** 公开访问 */
  Public = 'PUBLIC',
  UnSpecified = 'UN_SPECIFIED'
};

export type AccountCreateInput = {
  /** 员工名称 */
  accountName: Scalars['String'];
  /** 手机号 */
  phone: Scalars['String'];
  /** 应用类型 */
  type: AppTypeEnum;
};

export type AccountCustomerPayload = AccountLastChooseInterface & AccountNameInterface & AccountPhoneInterface & AccountRoleInterface & UserCustomerInterface & {
  __typename?: 'AccountCustomerPayload';
  /** 员工账号名称 */
  accountName?: Maybe<Scalars['String']>;
  /** 客户ID */
  customerId?: Maybe<Scalars['ID']>;
  /** 客户信息 */
  customerInfo?: Maybe<UserCustomerPayload>;
  /** 账号id */
  id?: Maybe<Scalars['ID']>;
  /** 是否为上次选择的账号 */
  lastChoose?: Maybe<Scalars['Boolean']>;
  /** 手机号 */
  phone?: Maybe<Scalars['String']>;
  /** 角色id数组 */
  roleIdList?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** 角色数组 */
  roleList?: Maybe<Array<Maybe<RolePayload>>>;
};

export type AccountEditInput = {
  /** 员工id */
  accountId: Scalars['ID'];
  /** 员工名称 */
  accountName: Scalars['String'];
  /** 手机号 */
  phone: Scalars['String'];
};

export type AccountEnableInput = {
  /** 员工id */
  accountId: Scalars['ID'];
  /** 目标状态 */
  targetStatus: EnableEnum;
};

export type AccountLastChooseInterface = {
  /** 账号id */
  id?: Maybe<Scalars['ID']>;
  /** 是否为上次选择的账号 */
  lastChoose?: Maybe<Scalars['Boolean']>;
};

export type AccountNameInterface = {
  /** 员工账号名称 */
  accountName?: Maybe<Scalars['String']>;
  /** 账号ID */
  id?: Maybe<Scalars['ID']>;
};

export type AccountPageInput = {
  pageCurrent?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  /** 应用类型 */
  type: AppTypeEnum;
};

export type AccountPagePayload = {
  __typename?: 'AccountPagePayload';
  /** 当前页码 */
  pageCurrent?: Maybe<Scalars['Int']>;
  /** 条数 */
  pageSize?: Maybe<Scalars['Int']>;
  /** 结果 */
  records?: Maybe<Array<Maybe<AccountPayload>>>;
  /** 总记录数 */
  totalRecords?: Maybe<Scalars['Int']>;
};

export type AccountPayload = AccountPhoneInterface & AccountRoleInterface & {
  __typename?: 'AccountPayload';
  /** 员工账号名称 */
  accountName?: Maybe<Scalars['String']>;
  /** 账号id */
  id?: Maybe<Scalars['ID']>;
  /** 手机号 */
  phone?: Maybe<Scalars['String']>;
  /** 角色id数组 */
  roleIdList?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** 角色数组 */
  roleList?: Maybe<Array<Maybe<RolePayload>>>;
  /** 状态 */
  status?: Maybe<EnableEnum>;
};

export type AccountPhoneInterface = {
  /** 账号ID */
  id?: Maybe<Scalars['ID']>;
  /** 手机号 */
  phone?: Maybe<Scalars['String']>;
};

export type AccountRoleEditInput = {
  /** 员工id */
  accountId: Scalars['ID'];
  /** 角色id */
  roleIdList?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type AccountRoleInterface = {
  /** 账号ID */
  id?: Maybe<Scalars['ID']>;
  /** 角色id数组 */
  roleIdList?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** 角色数组 */
  roleList?: Maybe<Array<Maybe<RolePayload>>>;
};

export const enum AccountTypeEnum {
  /** 渠道 */
  Channel = 'CHANNEL',
  /** 商家 */
  Merchant = 'MERCHANT',
  /** 平台 */
  Platform = 'PLATFORM',
  /** 仅用于返回值。表示此版本中未知的值 */
  Unknown = 'UNKNOWN',
  /** 未知 */
  Unrecognized = 'UNRECOGNIZED',
  /** 未指定 */
  Unspecified = 'UNSPECIFIED'
};

export type AddChannelDeliveryMethodInput = {
  /** 渠道ID */
  channelId: Scalars['ID'];
  /** 配送方式 */
  receiptTypes: Array<InputMaybe<ReceiptTypeEnum>>;
};

export type AddChannelSaleMethodInput = {
  /** 渠道ID */
  channelId: Scalars['ID'];
  /** 销售方式 */
  saleMethods: Array<InputMaybe<SaleMethodEnum>>;
};

export type AddDeliveryMethodInput = {
  /** 子配送方式枚举 */
  receiptTypes: Array<InputMaybe<ReceiptTypeEnum>>;
};

export type AddFrontEndCategoryInput = {
  /** 前端类目名称 */
  frontEndCategoryName: Scalars['String'];
  /** 类目图标 */
  icon: Array<InputMaybe<FileInput>>;
};

export type AddIndexMetaInput = {
  /** 索引重建每批次的个数 */
  batch?: InputMaybe<Scalars['Int']>;
  /** 索引名称 */
  indexType?: InputMaybe<Scalars['String']>;
  /** 索引mapping结构 */
  mapping?: InputMaybe<Scalars['String']>;
  /** 副本分片数 */
  numberOfReplicas?: InputMaybe<Scalars['Int']>;
  /** 主分片数 */
  numberOfShards?: InputMaybe<Scalars['Int']>;
  /** 索引主键名 */
  pkFieldName?: InputMaybe<Scalars['String']>;
  /** 索引重建时间 */
  rebuildTime?: InputMaybe<Scalars['String']>;
  /** 服务提供名，注意一定要grpc+serviceName */
  serverName?: InputMaybe<Scalars['String']>;
};

export type AddSecondLayerFrontEndCategoryInput = {
  /** 关联的后台类目ID列表 */
  categoryIds: Array<InputMaybe<Scalars['ID']>>;
  /** 二级类目名称 */
  frontEndCategoryName: Scalars['String'];
  /** 父前端类目类目ID */
  parentFrontEndCategoryId: Scalars['ID'];
};

export type AddSkuInput = {
  /** 商品ID */
  commodityId: Scalars['ID'];
  /** 一件代发价格 */
  dropShippingPrice?: InputMaybe<Scalars['Float']>;
  /** 单位 */
  marketingUnit?: InputMaybe<MarketingUnitEnum>;
  /** 商家商品编码 */
  merchantSkuCode?: InputMaybe<Scalars['String']>;
  /** 净重 */
  netWeight?: InputMaybe<Scalars['Float']>;
  /** 毛重 */
  roughWeight?: InputMaybe<Scalars['Float']>;
  /** 销售方式 */
  saleMethods?: InputMaybe<Array<InputMaybe<SaleMethodEnum>>>;
  /** 规格名称 */
  skuName: Scalars['String'];
  /** 阶梯价格 */
  skuPrices?: InputMaybe<Array<InputMaybe<AddSkuPriceInput>>>;
  /** 规格属性 */
  specProperty?: InputMaybe<Array<InputMaybe<SkuCategoryPropertyInput>>>;
  /** 销售库存 */
  stock: Scalars['Long'];
};

export type AddSkuPriceInput = {
  /** 起批量 */
  bulk?: InputMaybe<Scalars['Int']>;
  /** 价格 */
  price?: InputMaybe<Scalars['Float']>;
};

export const enum AddressTypeEnum {
  /** 发货仓地址 */
  DeliveryWarehouse = 'DELIVERY_WAREHOUSE',
  /** 快递地址 */
  ExpressDelivery = 'EXPRESS_DELIVERY',
  /** 自提地址 */
  PickUpInStore = 'PICK_UP_IN_STORE'
};

export type AddressTypePayload = {
  __typename?: 'AddressTypePayload';
  /** 地址类型 */
  addressType?: Maybe<AddressTypeEnum>;
  /** 自提地址ID */
  pickUpAddressId?: Maybe<Scalars['ID']>;
};

export type AfterSaleBoolPayload = {
  __typename?: 'AfterSaleBoolPayload';
  /** 是否有售后 */
  hasAfterSale?: Maybe<Scalars['Boolean']>;
  /** 是否有待处理售后 */
  hasProcessingAfterSale?: Maybe<Scalars['Boolean']>;
};

export type AfterSaleMaxBatchPayload = {
  __typename?: 'AfterSaleMaxBatchPayload';
  maxList?: Maybe<Array<Maybe<AfterSaleSkuMaxPayload>>>;
};

export type AfterSaleMaxInput = {
  /** 商品订单id */
  commodityOrderId: Scalars['ID'];
  /** skuId */
  skuIdList: Array<InputMaybe<Scalars['ID']>>;
};

export type AfterSaleMaxPayload = {
  __typename?: 'AfterSaleMaxPayload';
  maxAmount?: Maybe<Scalars['BigDecimal']>;
  maxQuantity?: Maybe<Scalars['Int']>;
};

export type AfterSalePageListPayload = {
  __typename?: 'AfterSalePageListPayload';
  /** 当前页码 */
  pageCurrent: Scalars['Int'];
  /** 条数 */
  pageSize: Scalars['Int'];
  /** 结果 */
  records?: Maybe<Array<Maybe<AfterSalePayload>>>;
  /** 总记录数 */
  totalRecords: Scalars['Int'];
};

export type AfterSalePayload = CommodityOrderMerchantInterface & CommodityOrderSkuUnitPrice & CustomerInterface & SkuInterface & {
  __typename?: 'AfterSalePayload';
  /** 售后单号 */
  afterSaleNo: Scalars['String'];
  /** 售后状态 */
  afterSaleStatus: AfterSalesStatusEnum;
  /** 售后类型 */
  afterSaleType?: Maybe<AfterSalesTypeEnum>;
  /** 售后单id */
  afterSalesId?: Maybe<Scalars['ID']>;
  /** 申请凭证 */
  applyFileResources?: Maybe<Array<Maybe<FilePayload>>>;
  /** 申请时间 */
  applyTime: Scalars['Long'];
  /** 订单ID */
  commodityOrderId?: Maybe<Scalars['ID']>;
  customerId?: Maybe<Scalars['ID']>;
  /** 订单客户信息 */
  customerInfo?: Maybe<OrderCustomerPayload>;
  /** 售后说明 */
  description?: Maybe<Scalars['String']>;
  /** 商品订单商家信息 */
  merchant?: Maybe<CommodityOrderMerchantPayload>;
  /** 退款金额 */
  money?: Maybe<Scalars['BigDecimal']>;
  /** 订单该sku对应数量 */
  originalQuantity?: Maybe<Scalars['Int']>;
  /** 实际支付单价 */
  payUnitPrice?: Maybe<Scalars['BigDecimal']>;
  /** sku单价 */
  price?: Maybe<OrderSkuUnitPricePayload>;
  /** 申请数量 */
  quantity?: Maybe<Scalars['Int']>;
  /** 售后-申请原因 */
  reason: Scalars['String'];
  /** 商家拒绝原因 */
  refuseReason?: Maybe<Scalars['String']>;
  /** skuID */
  skuId: Scalars['ID'];
  /** sku信息 */
  skuInfo?: Maybe<SkuInfoPayload>;
  /** 商家拒绝时：补充凭证 */
  supplementaryFileResources?: Maybe<Array<Maybe<FilePayload>>>;
  /** 商家拒绝时：补充说明 */
  supplementaryInstructions?: Maybe<Scalars['String']>;
};

export type AfterSaleResultDetailPayload = {
  __typename?: 'AfterSaleResultDetailPayload';
  /** 售后程度 */
  afterSaleDegree?: Maybe<SkuAfterSaleStatusEnum>;
  /** 售后总金额 */
  afterSaleTotalAmount?: Maybe<Scalars['BigDecimal']>;
  /** 是否有售后同意 */
  hasAgreed?: Maybe<Scalars['Boolean']>;
};

export type AfterSaleShowPayload = {
  __typename?: 'AfterSaleShowPayload';
  /** 售后id */
  afterSaleId?: Maybe<Scalars['ID']>;
  /** 售后状态 */
  afterSaleStatus?: Maybe<SkuAfterSaleStatusEnum>;
};

export type AfterSaleSkuMaxPayload = {
  __typename?: 'AfterSaleSkuMaxPayload';
  /** 是否部分发货 */
  isSectionDelivery?: Maybe<Scalars['Boolean']>;
  /** 最大退款申请金额 */
  maxAmount?: Maybe<Scalars['BigDecimal']>;
  /** 最大退款申请数量 */
  maxQuantity?: Maybe<Scalars['Int']>;
  /** 部分发货可售后信息 */
  sectionMax?: Maybe<AfterSaleMaxPayload>;
  /** skuId */
  skuId?: Maybe<Scalars['ID']>;
  /** sku单位 */
  skuUnit?: Maybe<OrderMarketingUnitEnum>;
};

/**
 * interface AfterSalesSkuInterface {
 *     """售后单id"""
 *     afterSalesId: ID!
 *     """skuID"""
 *     skuId: ID!
 *     """sku信息"""
 *     skuInfo: AfterSalesSkuInfoPayload
 * }
 */
export type AfterSalesApplyInterface = {
  /** 售后单id */
  afterSalesId?: Maybe<Scalars['ID']>;
  /** 售后单基础信息 */
  baseAfterSales?: Maybe<BaseAfterSalesPayload>;
};

export const enum AfterSalesHandleTypeEnum {
  /** 同意 */
  Agree = 'AGREE',
  /** 拒绝 */
  Refuse = 'REFUSE'
};

export type AfterSalesOrderHandleInput = {
  /** 售后单id */
  afterSalesOrderId: Scalars['ID'];
  /** 拒绝凭证 */
  handleFileList?: InputMaybe<Array<InputMaybe<FileInput>>>;
  /** 拒绝说明 */
  handleRemark?: InputMaybe<Scalars['String']>;
  /** 处理类型 */
  handleType: AfterSalesHandleTypeEnum;
  /** 拒绝原因 */
  reason?: InputMaybe<Scalars['String']>;
};

export type AfterSalesOrderPageInput = {
  /** 售后单id */
  afterSaleId?: InputMaybe<Scalars['ID']>;
  /** 售后单号 */
  afterSaleNo?: InputMaybe<Scalars['String']>;
  /** 商品订单iD */
  commodityOrderId?: InputMaybe<Scalars['ID']>;
  /** 售后单状态 */
  handlerStatus?: InputMaybe<AfterSalesStatusEnum>;
  /** 当前页 */
  pageCurrent: Scalars['Int'];
  /** 每页数量 */
  pageSize: Scalars['Int'];
};

export type AfterSalesOrderPagePayload = {
  __typename?: 'AfterSalesOrderPagePayload';
  /** 当前页码 */
  pageCurrent: Scalars['Int'];
  /** 条数 */
  pageSize: Scalars['Int'];
  /** 结果 */
  records?: Maybe<Array<Maybe<AfterSalesOrderPayload>>>;
  /** 总记录数 */
  totalRecords: Scalars['Int'];
};

export type AfterSalesOrderPayload = AfterSalesApplyInterface & SkuInterface & {
  __typename?: 'AfterSalesOrderPayload';
  /** 售后单id */
  afterSalesId?: Maybe<Scalars['ID']>;
  /** 售后单信息 */
  baseAfterSales?: Maybe<BaseAfterSalesPayload>;
  /** 售后数量 */
  quantity: Scalars['Int'];
  /** skuID */
  skuId?: Maybe<Scalars['ID']>;
  /** sku信息 */
  skuInfo?: Maybe<SkuInfoPayload>;
};

export type AfterSalesOrderRecordInput = {
  /** 订单id */
  commodityOrderId: Scalars['ID'];
  /** skuId */
  skuId?: InputMaybe<Scalars['ID']>;
};

export type AfterSalesPageInput = {
  /** 售后单号 */
  afterSaleNo?: InputMaybe<Scalars['String']>;
  /** 售后状态 */
  afterSaleStatus?: InputMaybe<AfterSalesStatusEnum>;
  /** 售后类型 */
  afterSalesType?: InputMaybe<AfterSalesTypeEnum>;
  /** 当前页码 */
  pageCurrent: Scalars['Int'];
  /** 条数 */
  pageSize: Scalars['Int'];
  /** 订单ID */
  subOrderId?: InputMaybe<Scalars['ID']>;
};

export const enum AfterSalesStatusEnum {
  /** 售后已同意 */
  Agree = 'AGREE',
  /** 售后中 */
  Processing = 'PROCESSING',
  /** 售后已拒绝 */
  Refuse = 'REFUSE'
};

export const enum AfterSalesTypeEnum {
  /** 仅退款 */
  JustRefundMoney = 'JUST_REFUND_MONEY',
  /** 退款退货 */
  RefundMoneyAndGoods = 'REFUND_MONEY_AND_GOODS'
};

export type AmountCalculationGroupCostInfoPayload = {
  __typename?: 'AmountCalculationGroupCostInfoPayload';
  /** 运费 */
  freight?: Maybe<Scalars['BigDecimal']>;
  /** 前端对应唯一key，返回按key给数据 */
  key?: Maybe<Scalars['String']>;
  /** 小计 */
  subTotal?: Maybe<Scalars['BigDecimal']>;
};

export type AmountCalculationGroupInput = {
  /** 如果是快递，地址用于计算运费【暂忽略】 */
  addressInfo?: InputMaybe<Scalars['ID']>;
  /** 配送方式：快递、自提 */
  deliveryMethod?: InputMaybe<Scalars['String']>;
  /** 前端对应唯一key，返回按key给数据 */
  key?: InputMaybe<Scalars['String']>;
  /** 营销活动【暂忽略】 */
  merchantActivity?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** 商户id */
  merchantId: Scalars['ID'];
  /** skuIDs */
  skuIds: Array<InputMaybe<Scalars['ID']>>;
};

export type AmountCalculationInput = {
  /** group 计算条件 */
  amountCalculationGroup?: InputMaybe<Array<InputMaybe<AmountCalculationGroupInput>>>;
  /** 平台 or 渠道 级别营销 */
  platformActivity?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type AmountCalculationPayload = {
  __typename?: 'AmountCalculationPayload';
  /** groupCostInfo */
  groupCostInfo?: Maybe<Array<Maybe<AmountCalculationGroupCostInfoPayload>>>;
  /** 总计 */
  totalAmount?: Maybe<Scalars['BigDecimal']>;
};

export const enum AmountChangeMethodEnum {
  /** 快速改价 */
  Fast = 'FAST',
  /** 精细改价 */
  Precise = 'PRECISE'
};

export const enum AmountChangeTypeEnum {
  Decrease = 'DECREASE',
  Increase = 'INCREASE'
};

export type AppPermissionPayload = {
  __typename?: 'AppPermissionPayload';
  /** 渠道ID */
  channelId?: Maybe<Scalars['ID']>;
  /** 权限ID */
  permissionId?: Maybe<Scalars['ID']>;
  /** 权限名称 */
  permissionName?: Maybe<Scalars['String']>;
  /** 状态 */
  status?: Maybe<EnableEnum>;
};

export const enum AppTypeEnum {
  /** 渠道运营管理系统WEB */
  ChannelWeb = 'CHANNEL_WEB',
  /** 商家运营管理系统APP */
  MerchantApp = 'MERCHANT_APP',
  /** 商家运营管理系统WEB */
  MerchantWeb = 'MERCHANT_WEB',
  /** 平台运营管理系统WEB */
  PlatformWeb = 'PLATFORM_WEB',
  /** 商城端APP */
  ShoppingApp = 'SHOPPING_APP'
};

export type AuditCommodityInput = {
  /** 商品ID */
  commodityId: Scalars['ID'];
  /** 审核的目标状态(从审核通过/审核拒绝两个枚举选择值) */
  targetAuditStatusEnum: CommodityAuditStatusEnum;
};

export type BaseAccountPayload = {
  __typename?: 'BaseAccountPayload';
  /** 账号ID */
  id?: Maybe<Scalars['ID']>;
  /** 账号名称 */
  name?: Maybe<Scalars['String']>;
};

/** } */
export type BaseAfterSalesPayload = CustomerInterface & MerchantInfoInterface & {
  __typename?: 'BaseAfterSalesPayload';
  /** 售后单id */
  afterSalesId: Scalars['ID'];
  /** 售后单号 */
  afterSalesNo: Scalars['String'];
  /** 售后类型 */
  afterSalesType: AfterSalesTypeEnum;
  /** 退款金额 */
  applyAmount?: Maybe<Scalars['BigDecimal']>;
  /** 售后申请凭证 */
  applyFileResources?: Maybe<Array<Maybe<FilePayload>>>;
  /** 售后原因 */
  applyReason: Scalars['String'];
  /** 提交时间 */
  applyTime: Scalars['Long'];
  /** 订单id */
  commodityOrderId: Scalars['ID'];
  /** 申请客户id */
  customerId: Scalars['ID'];
  /** 申请用户信息 */
  customerInfo: OrderCustomerPayload;
  /** sku发货状态 */
  deliveryMoment: DeliveryMomentEnum;
  /** 售后说明 */
  description?: Maybe<Scalars['String']>;
  /** 售后自动同意截止时间 */
  expireTime: Scalars['Long'];
  /** 商家处理时间 */
  handleTime?: Maybe<Scalars['Long']>;
  /** 售后单状态 */
  handlerStatus: AfterSalesStatusEnum;
  /** 商户信息 */
  merchant?: Maybe<CommodityOrderMerchantPayload>;
  /** 申请商户id */
  merchantId: Scalars['ID'];
  /** 拒绝凭证 */
  refuseFileList?: Maybe<Array<Maybe<FilePayload>>>;
  /** 拒绝原因 */
  refuseReason?: Maybe<Scalars['String']>;
  /** 拒绝补充说明 */
  refuseRemark?: Maybe<Scalars['String']>;
};

/** 基本返回参数，用于没有具体数据返回的服务，统一区分成功失败，与grpc的BasicResp对应，免得每次都转成bool */
export type BasicPayload = {
  __typename?: 'BasicPayload';
  /** 返回码 */
  code?: Maybe<Scalars['Int']>;
  /** 信息 */
  msg?: Maybe<Scalars['String']>;
  /** 执行结果 */
  result?: Maybe<Scalars['Boolean']>;
};

export type BatchShoppingCartInput = {
  /** 批量添加到购物车的 多个sku */
  skus?: InputMaybe<Array<InputMaybe<ShoppingCartInput>>>;
};

/** 布尔值请求参数 */
export type BoolValueInput = {
  /** 布尔值 */
  boolValue: Scalars['Boolean'];
  /** id */
  id: Scalars['ID'];
};

export const enum Bucket {
  BucketUnspecified = 'BUCKET_UNSPECIFIED',
  File_001 = 'FILE_001',
  File_006 = 'FILE_006',
  File_007 = 'FILE_007',
  FruitsPublic = 'FRUITS_PUBLIC'
};

export type BusinessHomePageStatisticsPayload = {
  __typename?: 'BusinessHomePageStatisticsPayload';
  /** 待处理售后数量 */
  afterSalesCnt?: Maybe<Scalars['Int']>;
  /** 待改价数量 */
  changePriceCnt?: Maybe<Scalars['Int']>;
  /** 待发货数量 */
  deliveryCnt?: Maybe<Scalars['Int']>;
  /** 待提货数量 */
  receiptBySelfCnt?: Maybe<Scalars['Int']>;
};

export type BusinessOrderDetailPayLoad = CommodityOrderChangeAmountInterface & CommodityOrderCustomerInterface & CommodityOrderDeliveryInterface & CommodityOrderHasAfterSaleInterface & CommodityOrderInterface & CommodityOrderPaymentInterface & CommodityOrderPriceInterface & CommodityOrderReceiptInterface & CommodityOrderSkuInterface & {
  __typename?: 'BusinessOrderDetailPayLoad';
  /** 收货地址 */
  address?: Maybe<CommodityOrderPickUpAddressPayload>;
  /** 售后布尔统计 */
  afterSaleBool?: Maybe<AfterSaleBoolPayload>;
  /** 上一次改价信息【商家改过价才有】 */
  changeAmount?: Maybe<ChangeAmountPayload>;
  /** 订单信息 */
  commodityOrder?: Maybe<CommodityOrderPayload>;
  /** 商品订单ID */
  commodityOrderId?: Maybe<Scalars['ID']>;
  /** 商品客户信息 */
  customer?: Maybe<CommodityOrderCustomerPayload>;
  /** 发货详情集合 */
  deliveryInfoList?: Maybe<Array<Maybe<CommodityOrderDeliveryPayload>>>;
  /** 商品支付信息【下单后，支付后才有】 */
  payment?: Maybe<CommodityOrderPaymentPayload>;
  /** 商品金额明细 */
  price?: Maybe<CommodityOrderPricePayload>;
  /** 收货信息 */
  receipt?: Maybe<CommodityReceiptPayload>;
  /** 商品sku集合 */
  skuList?: Maybe<Array<Maybe<CommodityOrderSkuPayload>>>;
};

export type BusinessOrderInfoPayload = CommodityOrderInterface & CommodityOrderSkuInterface & {
  __typename?: 'BusinessOrderInfoPayload';
  /** 订单商品信息 */
  commodity?: Maybe<OrderCommodityPayload>;
  /** 商品订单 */
  commodityOrder?: Maybe<CommodityOrderPayload>;
  /** 商品订单ID */
  commodityOrderId?: Maybe<Scalars['ID']>;
  /** 订单客户信息 */
  customer?: Maybe<OrderCustomerPayload>;
  /** 实付金额明细 */
  realAmount?: Maybe<OrderRealPaymentPayload>;
  /** 商品sku集合 */
  skuList?: Maybe<Array<Maybe<CommodityOrderSkuPayload>>>;
  /** 订单状态 */
  status?: Maybe<CommodityOrderStatusEnum>;
};

export type CascadingCommodityTypeCategoryListPayload = {
  __typename?: 'CascadingCommodityTypeCategoryListPayload';
  /** 商品品类ID */
  categoryId: Scalars['ID'];
  /** 商品品类名称 */
  categoryName: Scalars['String'];
  /** 商品品种 */
  commodityTypeVariety?: Maybe<Array<Maybe<CascadingCommodityTypeVarietyListPayload>>>;
};

export type CascadingCommodityTypeListPayload = {
  __typename?: 'CascadingCommodityTypeListPayload';
  /** 商品品类 */
  commodityTypeCategory?: Maybe<Array<Maybe<CascadingCommodityTypeCategoryListPayload>>>;
  /** 商品类型ID */
  typeId: Scalars['ID'];
  /** 商品类型名称 */
  typeName: Scalars['String'];
};

export type CascadingCommodityTypeVarietyListPayload = {
  __typename?: 'CascadingCommodityTypeVarietyListPayload';
  /** 商品品种ID */
  varietyId: Scalars['ID'];
  /** 商品品种名称 */
  varietyName: Scalars['String'];
};

export type CategoryPayload = {
  __typename?: 'CategoryPayload';
  /** 类目Id */
  categoryId?: Maybe<Scalars['ID']>;
  /** 类目名称 */
  categoryName?: Maybe<Scalars['String']>;
  /** 商品规格属性 */
  categoryProperties?: Maybe<Array<Maybe<CommodityCategoryProperty>>>;
  /** 产地 */
  placeOrigins?: Maybe<Array<Maybe<CommodityPlaceOriginPayload>>>;
};

export type CategoryPropertyPayload = {
  __typename?: 'CategoryPropertyPayload';
  /** 类目属性ID */
  categoryPropertyId?: Maybe<Scalars['ID']>;
  /** 类目属性名称 */
  categoryPropertyName?: Maybe<Scalars['String']>;
  /** 类目属性值列表 */
  values?: Maybe<Array<Maybe<CategoryPropertyValue>>>;
};

export type CategoryPropertyValue = {
  __typename?: 'CategoryPropertyValue';
  /** 商品属性值ID */
  categoryPropertyValueId?: Maybe<Scalars['ID']>;
  /** 商品规格名称 */
  categoryPropertyValueName?: Maybe<Scalars['String']>;
};

export type CategoryTreePayload = {
  __typename?: 'CategoryTreePayload';
  /** 类目ID */
  frontEndCategoryId: Scalars['ID'];
  /** 前端类目名称 */
  frontEndCategoryName: Scalars['String'];
  /** 类目图标 */
  icon?: Maybe<Array<Maybe<FilePayload>>>;
  /** 二级类目 */
  secondLayers: Array<Maybe<CategoryTreeSecondLayerPayload>>;
};

export type CategoryTreeSecondLayerPayload = {
  __typename?: 'CategoryTreeSecondLayerPayload';
  /** 后端类目列表 */
  categories?: Maybe<Array<Maybe<CategoryPayload>>>;
  /** 类目ID */
  frontEndCategoryId: Scalars['ID'];
  /** 前端类目名称 */
  frontEndCategoryName?: Maybe<Scalars['String']>;
  /** 类目图标 */
  icon?: Maybe<Array<Maybe<FilePayload>>>;
};

/**
 *  必须包含  改价模式：快速 or 精细
 * 修改金额类型: TOTAL_AMOUNT-整单优惠金额，ADDITIONAL_COST_AMOUNT-附加费用金额，TRANSPORT_AMOUNT-运费金额，INCIDENTAL_AMOUNT-杂费金额
 */
export type ChangeAmountPayload = {
  __typename?: 'ChangeAmountPayload';
  /** 附加服务 */
  additionalCostAmount?: Maybe<Scalars['BigDecimal']>;
  /** 改价类型[加 or 减] */
  amountChangeType?: Maybe<AmountChangeTypeEnum>;
  /** 改价模式【快速 or 精细】 */
  changeMethod?: Maybe<AmountChangeMethodEnum>;
  /** 精细sku改价列表 */
  changeUnitPrice?: Maybe<Array<Maybe<ChangeUnitPricePayload>>>;
  /** 杂费金额[后续] */
  incidentalAmount?: Maybe<Scalars['BigDecimal']>;
  /** 原订单总额 */
  originalTotalAmount?: Maybe<Scalars['BigDecimal']>;
  /** 原订单运杂费 */
  originalTransportAmount?: Maybe<Scalars['BigDecimal']>;
  /** 备注【该次改价是填入的备注】 */
  remark?: Maybe<Scalars['String']>;
  /** 商品变更金额【fast mode ：整单优惠，precise：商品变更金额】 */
  totalAmount?: Maybe<Scalars['BigDecimal']>;
  /** 运费金额 */
  transportAmount?: Maybe<Scalars['BigDecimal']>;
};

export type ChangeUnitPriceInput = {
  /** 商品ID */
  commodityId?: InputMaybe<Scalars['ID']>;
  /** 商品SKU ID */
  commoditySkuId?: InputMaybe<Scalars['ID']>;
  /** 商品变更后单价 */
  unitPrice?: InputMaybe<Scalars['BigDecimal']>;
};

export type ChangeUnitPricePayload = {
  __typename?: 'ChangeUnitPricePayload';
  /** 商品SKU ID */
  commoditySkuId?: Maybe<Scalars['ID']>;
  /** 商品变更后单价 */
  unitPrice?: Maybe<Scalars['BigDecimal']>;
};

export type Channel = {
  __typename?: 'Channel';
  /** 经营范围 */
  businessScope?: Maybe<Scalars['String']>;
  /** 渠道ID */
  id: Scalars['ID'];
  /** 小程序号 */
  miniProgramNo?: Maybe<Scalars['String']>;
  /** 渠道名称 */
  name: Scalars['String'];
  /** 开户行账号 */
  openAccount?: Maybe<Scalars['String']>;
  /** 开户银行 */
  openBank?: Maybe<Scalars['String']>;
  /** 渠道主体 */
  subject?: Maybe<Scalars['String']>;
};

export type ChannelCreateInput = {
  /** 经营范围 */
  businessScope?: InputMaybe<Scalars['String']>;
  /** 小程序号 */
  miniProgramNo: Scalars['String'];
  /** 渠道名称 */
  name: Scalars['String'];
  /** 开户行账号 */
  openAccount: Scalars['String'];
  /** 开户银行 */
  openBank: Scalars['String'];
  /** 渠道主体 */
  subject: Scalars['String'];
};

export type ChannelDeliveryMethodPayload = {
  __typename?: 'ChannelDeliveryMethodPayload';
  /** 渠道ID */
  channelId: Scalars['ID'];
  /** 渠道名称 */
  channelName: Scalars['String'];
  /** 配送方式 */
  receiptTypes?: Maybe<Array<Maybe<ReceiptTypeEnum>>>;
};

export type ChannelEditInput = {
  /** 经营范围 */
  businessScope?: InputMaybe<Scalars['String']>;
  /** 渠道ID */
  id: Scalars['ID'];
  /** 小程序号 */
  miniProgramNo: Scalars['String'];
  /** 渠道名称 */
  name: Scalars['String'];
  /** 开户行账号 */
  openAccount: Scalars['String'];
  /** 开户银行 */
  openBank: Scalars['String'];
  /** 渠道主体 */
  subject: Scalars['String'];
};

export type ChannelInfoPayload = {
  __typename?: 'ChannelInfoPayload';
  /** 渠道ID */
  id: Scalars['ID'];
  /** 渠道名称 */
  name: Scalars['String'];
};

export type ChannelSaleMethodPayload = {
  __typename?: 'ChannelSaleMethodPayload';
  /** 渠道ID */
  channelId: Scalars['ID'];
  /** 渠道名称 */
  channelName: Scalars['String'];
  /** 销售方式 */
  saleMethods?: Maybe<Array<Maybe<SaleMethodEnum>>>;
};

export type ChooseCurrentUseInput = {
  /** 来源端 */
  appType: AppTypeEnum;
  /** 选择类型对应的业务ID */
  busId: Scalars['ID'];
  /** 当前选择类型 */
  chooseType: CurrentUseTypeEnum;
};

export type CityPayLoad = {
  __typename?: 'CityPayLoad';
  id: Scalars['ID'];
  /** 维度 */
  lat: Scalars['Float'];
  /** 经度 */
  lng: Scalars['Float'];
  name: Scalars['String'];
  provinceId: Scalars['ID'];
};

export type CityQueryInput = {
  /** 城市名称 */
  cityName?: InputMaybe<Scalars['String']>;
  /** 是否热门 */
  isHot?: InputMaybe<Scalars['Boolean']>;
  /** 省份id */
  provinceId?: InputMaybe<Scalars['ID']>;
};

export type ColumnNamePayload = {
  __typename?: 'ColumnNamePayload';
  /** 对应的业务ID，可能是内容ID或页面配置详情ID */
  busId: Scalars['ID'];
  /** 栏目ID */
  id: Scalars['ID'];
  /** 栏目名称 */
  name: Scalars['String'];
  /** 展现形式 */
  revealShape: RevealShapeEnum;
  /** 规则 */
  ruleType?: Maybe<ColumnRuleTypeEnum>;
};

/** 分页获取内容列表响应对象 */
export type ColumnPagePayload = {
  __typename?: 'ColumnPagePayload';
  /** 当前页码 */
  pageCurrent: Scalars['Int'];
  /** 条数 */
  pageSize: Scalars['Int'];
  /** 结果 */
  records: Array<Maybe<ColumnPayload>>;
  /** 总记录数 */
  totalRecords: Scalars['Int'];
};

export type ColumnPayload = {
  __typename?: 'ColumnPayload';
  /** 创建人 */
  accountInfo: BaseAccountPayload;
  /** 渠道ID */
  channelId?: Maybe<Scalars['ID']>;
  /** 创建时间 */
  createTime: Scalars['Long'];
  /** 状态： false=未启用  true=启用 */
  enabled: Scalars['Boolean'];
  /** 栏目ID */
  id: Scalars['ID'];
  /** 栏目名称 */
  name: Scalars['String'];
  /** 父ID */
  parentId?: Maybe<Scalars['ID']>;
  /** 展现形式 */
  revealShape: RevealShapeEnum;
  /** 规则 */
  ruleType?: Maybe<ColumnRuleTypeEnum>;
};

/** 栏目规则枚举 */
export const enum ColumnRuleTypeEnum {
  /** 关联品类 */
  AssociatedCategory = 'ASSOCIATED_CATEGORY'
};

export const enum CommodityAuditStatusEnum {
  /** 审核通过 */
  Approve = 'APPROVE',
  /** 被驳回 */
  Refuse = 'REFUSE',
  /** 未提交（暂存） */
  Uncommitted = 'UNCOMMITTED',
  /** 待审核 */
  UnderReview = 'UNDER_REVIEW'
};

export type CommodityBrandListPayload = {
  __typename?: 'CommodityBrandListPayload';
  /** 中文名 */
  cnName: Scalars['String'];
  /** 英文名 */
  enName?: Maybe<Scalars['String']>;
  /** 品牌ID */
  id: Scalars['ID'];
  /** 品牌logo */
  logo?: Maybe<Array<Maybe<FilePayload>>>;
  /** 产地id */
  placeOriginId?: Maybe<Scalars['ID']>;
  /** 备注 */
  remark?: Maybe<Scalars['String']>;
};

export type CommodityCategoryPayload = {
  __typename?: 'CommodityCategoryPayload';
  /** 类目ID(后端类目ID) */
  categoryId?: Maybe<Scalars['ID']>;
  /** 后端类目名称 */
  categoryName?: Maybe<Scalars['String']>;
};

export type CommodityCategoryProperty = {
  __typename?: 'CommodityCategoryProperty';
  /** 属性Id */
  categoryPropertyId?: Maybe<Scalars['ID']>;
  /** 商品规格名称 */
  categoryPropertyName?: Maybe<Scalars['String']>;
  /** 规格属性值 */
  categoryPropertyValues?: Maybe<Array<Maybe<CategoryPropertyValue>>>;
};

export type CommodityCategoryPropertyListPayload = {
  __typename?: 'CommodityCategoryPropertyListPayload';
  /** 属性编码 */
  code: Scalars['String'];
  /** 属性ID */
  id: Scalars['ID'];
  /** 属性名称 */
  name: Scalars['String'];
  /** 属性类型 */
  propertyType: PropertyTypeEnum;
  /** 属性值列表 */
  propertyValues?: Maybe<Array<Maybe<CommodityCategoryPropertyValueListPayload>>>;
  /** 是否必填商品属性 */
  requiredField: Scalars['Boolean'];
};

export type CommodityCategoryPropertyValueListPayload = {
  __typename?: 'CommodityCategoryPropertyValueListPayload';
  /** 属性值ID */
  id: Scalars['ID'];
  /** 属性值名称 */
  name: Scalars['String'];
};

export type CommodityDetailPayload = {
  __typename?: 'CommodityDetailPayload';
  /** 售后标准 */
  afterSalesStandard?: Maybe<Array<Maybe<FilePayload>>>;
  /** 商品相册 */
  albumResources?: Maybe<Array<Maybe<FilePayload>>>;
  /** 审核状态 */
  auditStatus?: Maybe<CommodityAuditStatusEnum>;
  /** 商品品类ID */
  categoryId?: Maybe<Scalars['ID']>;
  /** 商品品类名称 */
  categoryName?: Maybe<Scalars['String']>;
  /** 商品品牌Id */
  commodityBrandId?: Maybe<Scalars['ID']>;
  /** 商品品牌名称 */
  commodityBrandName?: Maybe<Scalars['String']>;
  /** 商品编码 */
  commodityCode?: Maybe<Scalars['String']>;
  /** 商品ID */
  commodityId?: Maybe<Scalars['ID']>;
  /** 商品名称 */
  commodityName?: Maybe<Scalars['String']>;
  /** 类型 */
  commodityTypeId?: Maybe<Scalars['ID']>;
  /** 发货仓ID */
  deliveryWarehouseId?: Maybe<Scalars['ID']>;
  /** 商品描述 */
  descResources?: Maybe<Array<Maybe<FilePayload>>>;
  /** 产地Id */
  placeOriginId?: Maybe<Scalars['ID']>;
  /** 产地名称 */
  placeOriginName?: Maybe<Scalars['String']>;
  /** 发布标识 */
  publishIdentify?: Maybe<Scalars['Boolean']>;
  /** 品种ID */
  varietyId?: Maybe<Scalars['ID']>;
  /** 品种名称 */
  varietyName?: Maybe<Scalars['String']>;
};

export type CommodityOnlineDetailPayload = {
  __typename?: 'CommodityOnlineDetailPayload';
  /** 售后标准 */
  afterSalesStandard?: Maybe<Array<Maybe<FilePayload>>>;
  /** 商品相册 */
  albumResources?: Maybe<Array<Maybe<FilePayload>>>;
  /** 商品品类Id */
  categoryId?: Maybe<Scalars['ID']>;
  /** 商品品类名称 */
  categoryName?: Maybe<Scalars['String']>;
  /** 商品类目属性 */
  categoryProperties?: Maybe<Array<Maybe<CategoryPropertyPayload>>>;
  /** 商品编码 */
  commodityCode?: Maybe<Scalars['String']>;
  /** 商品描述 */
  commodityDesc?: Maybe<Array<Maybe<FilePayload>>>;
  /** 商品ID */
  commodityId?: Maybe<Scalars['Long']>;
  /** 商品名称 */
  commodityName?: Maybe<Scalars['String']>;
  /** 发货仓信息 */
  deliveryInfo?: Maybe<DeliveryInfo>;
  /** 最高价 */
  maxPrice?: Maybe<Scalars['Float']>;
  /** 最低价 */
  minPrice?: Maybe<Scalars['Float']>;
  /** 产地Id */
  placeOriginId?: Maybe<Scalars['ID']>;
  /** 产地名称 */
  placeOriginName?: Maybe<Scalars['String']>;
  /** 商家店铺信息 */
  storeInfo?: Maybe<StoreInfoPayload>;
};

export type CommodityOnlinePageInput = {
  /** 后端类目ID集合 */
  categoryIds?: InputMaybe<Array<Scalars['ID']>>;
  /** 商品属性 */
  categoryPropertyValueIds?: InputMaybe<Array<Array<Scalars['ID']>>>;
  channelId?: InputMaybe<Scalars['ID']>;
  /** 纬度 */
  latitude?: InputMaybe<Scalars['Float']>;
  /** 经度 */
  longitude?: InputMaybe<Scalars['Float']>;
  /** 最高价 */
  maxPrice?: InputMaybe<Scalars['Float']>;
  /** 商家ID */
  merchantId?: InputMaybe<Scalars['ID']>;
  /** 最低价 */
  minPrice?: InputMaybe<Scalars['Float']>;
  /** orderBy */
  orderByEnums?: InputMaybe<Array<CommodityOrderByEnum>>;
  /** 分页信息 */
  pageCurrent: Scalars['Int'];
  pageSize: Scalars['Int'];
  /** 产地ID */
  placeOriginId?: InputMaybe<Array<Scalars['ID']>>;
  /** 商品搜索关键词 */
  searchKeyword?: InputMaybe<Scalars['String']>;
};

export type CommodityOnlinePagePayload = {
  __typename?: 'CommodityOnlinePagePayload';
  /** 当前页码 */
  pageCurrent: Scalars['Int'];
  /** 条数 */
  pageSize: Scalars['Int'];
  records?: Maybe<Array<Maybe<CommoditySearchPayload>>>;
  /** 总记录数 */
  totalRecords: Scalars['Int'];
};

export type CommodityOrderApplyCostInput = {
  /** 商品价值 */
  commodityCost?: InputMaybe<Scalars['BigDecimal']>;
  /** 运费 */
  freight?: InputMaybe<Scalars['BigDecimal']>;
  /** 合计 */
  total?: InputMaybe<Scalars['BigDecimal']>;
};

export type CommodityOrderApplyItemInput = {
  /** 费用 */
  cost?: InputMaybe<CommodityOrderApplyCostInput>;
  /** 商品发货仓id */
  deliveryWarehouseId: Scalars['ID'];
  /** 商家id */
  merchantId: Scalars['ID'];
  /** 商家名称 */
  merchantName?: InputMaybe<Scalars['String']>;
  /** 收货信息 */
  receipt: CommodityOrderApplyReceiptInput;
  /** 备注 */
  remark?: InputMaybe<Scalars['String']>;
  /** sku集合 */
  skuList?: InputMaybe<Array<InputMaybe<CommodityOrderApplySkuInput>>>;
};

export type CommodityOrderApplyReceiptInput = {
  /** 市名 */
  cityName?: InputMaybe<Scalars['String']>;
  /** 联系人姓名 */
  contactName: Scalars['String'];
  /** 联系人电话 */
  contactPhone: Scalars['String'];
  /** 详细地址 */
  detailAddress: Scalars['String'];
  /** 区域名 */
  districtName?: InputMaybe<Scalars['String']>;
  /** 维度 */
  latitude?: InputMaybe<Scalars['Float']>;
  /** 经度 */
  longitude?: InputMaybe<Scalars['Float']>;
  /** 省份名 */
  provinceName?: InputMaybe<Scalars['String']>;
  /** 收货地址id-拆单条件 */
  receiptAddressId: Scalars['ID'];
  /** 收货方式 */
  receiptType?: InputMaybe<ReceiptTypeEnum>;
};

export type CommodityOrderApplySkuInput = {
  /** 商品id */
  commodityId?: InputMaybe<Scalars['ID']>;
  /** 商品名称 */
  commodityName?: InputMaybe<Scalars['String']>;
  /** 商品缩略图 */
  commodityPic?: InputMaybe<FileInput>;
  /** sku数量 */
  quantity: Scalars['Int'];
  /** skuId */
  skuId: Scalars['ID'];
  /** sku名称 */
  skuName?: InputMaybe<Scalars['String']>;
  /** 规格描述 */
  spec?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** sku单价 */
  unitPrice: Scalars['BigDecimal'];
};

export const enum CommodityOrderByEnum {
  /** 价格排序 */
  PriceAsc = 'PRICE_ASC',
  PriceDesc = 'PRICE_DESC',
  /** 销量排序 */
  SaleAsc = 'SALE_ASC',
  SaleDesc = 'SALE_DESC'
};

/** # TODO 商品订单改价信息 */
export type CommodityOrderChangeAmountInterface = {
  /** 改价信息 */
  changeAmount?: Maybe<ChangeAmountPayload>;
  /** 商品订单ID */
  commodityOrderId?: Maybe<Scalars['ID']>;
};

/** # TODO 商品订单客户信息 */
export type CommodityOrderCustomerInterface = {
  /** 商品订单ID */
  commodityOrderId?: Maybe<Scalars['ID']>;
  /** 商品客户信息 */
  customer?: Maybe<CommodityOrderCustomerPayload>;
};

export type CommodityOrderCustomerPayload = {
  __typename?: 'CommodityOrderCustomerPayload';
  /** 客户id */
  customerId?: Maybe<Scalars['ID']>;
  /** 客户名称 */
  customerName?: Maybe<Scalars['String']>;
  /** 客户联系电话 */
  customerPhone?: Maybe<Scalars['String']>;
  /** 客户类型 */
  customerType?: Maybe<CustomerTypeEnum>;
  /** 客户所属企业名称 */
  enterpriseName?: Maybe<Scalars['String']>;
};

export type CommodityOrderDeliveryEditInput = {
  /** 车牌号 */
  carNo: Scalars['String'];
  /** 联系电话 */
  contactPhone: Scalars['String'];
  /** 发货id */
  deliveryId: Scalars['ID'];
  /** 司机名称 */
  driverName: Scalars['String'];
  /** 备注 */
  remark?: InputMaybe<Scalars['String']>;
};

export type CommodityOrderDeliveryInput = {
  /** 车牌号 */
  carNo: Scalars['String'];
  /** 商品订单ID */
  commodityOrderId: Scalars['ID'];
  /** 联系电话 */
  contactPhone: Scalars['String'];
  /** 司机名称 */
  driverName: Scalars['String'];
  /** 质检信息 */
  inspectInfoList: Array<InputMaybe<FileInput>>;
  /** 备注 */
  remark?: InputMaybe<Scalars['String']>;
  /** SKU列表 */
  skuList: Array<InputMaybe<CommodityOrderSkuInput>>;
};

export type CommodityOrderDeliveryInterface = {
  /** 商品订单详情ID */
  commodityOrderId?: Maybe<Scalars['ID']>;
  /** 发货详情集合 */
  deliveryInfoList?: Maybe<Array<Maybe<CommodityOrderDeliveryPayload>>>;
};

export type CommodityOrderDeliveryPayload = {
  __typename?: 'CommodityOrderDeliveryPayload';
  /** 发货唯一标识 */
  deliveryId?: Maybe<Scalars['ID']>;
  /** 发货时间 */
  deliveryTime?: Maybe<Scalars['Long']>;
  /** 质检信息 */
  inspectInfoList?: Maybe<Array<Maybe<FilePayload>>>;
  /** 物流信息 */
  logisticsInfo?: Maybe<CommodityOrderLogisticsPayload>;
};

export type CommodityOrderHasAfterSaleInterface = {
  /** 售后布尔统计 */
  afterSaleBool?: Maybe<AfterSaleBoolPayload>;
  /** 商品订单详情ID */
  commodityOrderId?: Maybe<Scalars['ID']>;
};

/** # TODO 商品订单基础信息 */
export type CommodityOrderInterface = {
  /** 商品订单 */
  commodityOrder?: Maybe<CommodityOrderPayload>;
  /** 商品订单ID */
  commodityOrderId?: Maybe<Scalars['ID']>;
};

export type CommodityOrderLogisticsPayload = {
  __typename?: 'CommodityOrderLogisticsPayload';
  /** 车牌号 */
  carNo?: Maybe<Scalars['String']>;
  /** 联系电话 */
  contactPhone?: Maybe<Scalars['String']>;
  /** 司机名称 */
  driverName?: Maybe<Scalars['String']>;
  /** 物流id */
  logisticsId?: Maybe<Scalars['ID']>;
  /** 备注信息 */
  remark?: Maybe<Scalars['String']>;
};

/** # TODO 商品订单商家信息 */
export type CommodityOrderMerchantInterface = {
  /** 商品订单ID */
  commodityOrderId?: Maybe<Scalars['ID']>;
  /** 商品订单商家信息 */
  merchant?: Maybe<CommodityOrderMerchantPayload>;
};

export type CommodityOrderMerchantPayload = {
  __typename?: 'CommodityOrderMerchantPayload';
  /** 商户id */
  merchantId?: Maybe<Scalars['ID']>;
  /** 商户名称 */
  merchantName?: Maybe<Scalars['String']>;
  /** 店铺名称 */
  storeName?: Maybe<Scalars['String']>;
};

export const enum CommodityOrderMoneyChangeTypeEnum {
  /** 优惠 */
  Discount = 'DISCOUNT',
  /** 加价 */
  Raise = 'RAISE'
};

export type CommodityOrderPayload = {
  __typename?: 'CommodityOrderPayload';
  /** 售后过期时间 */
  afterSaleExpireTime?: Maybe<Scalars['Long']>;
  /** 订单提交时间 */
  applyTime?: Maybe<Scalars['Long']>;
  /** 商品订单编号 */
  commodityOrderCode?: Maybe<Scalars['String']>;
  /** 商品订单ID */
  commodityOrderId?: Maybe<Scalars['ID']>;
  /** 支付时间 */
  paidTime?: Maybe<Scalars['Long']>;
  /** 支付过期时间 */
  payExpireTime?: Maybe<Scalars['Long']>;
  /** 支付类型 */
  payType?: Maybe<PayTypeEnum>;
  /** 提货时间 */
  receiptTime?: Maybe<Scalars['Long']>;
  /** 备注 */
  remark?: Maybe<Scalars['String']>;
  /** 状态 */
  status?: Maybe<CommodityOrderStatusEnum>;
};

/** # TODO 商品订单支付信息 */
export type CommodityOrderPaymentInterface = {
  /** 商品订单ID */
  commodityOrderId?: Maybe<Scalars['ID']>;
  /** 商品支付信息 */
  payment?: Maybe<CommodityOrderPaymentPayload>;
};

export type CommodityOrderPaymentPayload = {
  __typename?: 'CommodityOrderPaymentPayload';
  /** 商品订单ID */
  commodityOrderId?: Maybe<Scalars['ID']>;
  /** 支付时间 */
  payTime?: Maybe<Scalars['Long']>;
  /** 支付方式 */
  payType?: Maybe<PayTypeEnum>;
};

export type CommodityOrderPickUpAddressPayload = {
  __typename?: 'CommodityOrderPickUpAddressPayload';
  /** 联系人 */
  contact?: Maybe<Scalars['String']>;
  /** 联系人电话 */
  contactPhone?: Maybe<Scalars['String']>;
  /** 纬度 */
  latitude?: Maybe<Scalars['Float']>;
  /** 经度 */
  longitude?: Maybe<Scalars['Float']>;
  /** 收货/提货地址 */
  receiptAddress?: Maybe<Scalars['String']>;
};

/** # TODO 商品订单金额 */
export type CommodityOrderPriceInterface = {
  /** 商品订单ID */
  commodityOrderId?: Maybe<Scalars['ID']>;
  /** 商品金额明细 */
  price?: Maybe<CommodityOrderPricePayload>;
};

export type CommodityOrderPricePayload = {
  __typename?: 'CommodityOrderPricePayload';
  /** 实付金额 */
  actualPaidAmount?: Maybe<Scalars['BigDecimal']>;
  /** 附加服务金额-最终 */
  additionalCostAmount?: Maybe<Scalars['BigDecimal']>;
  /** 商家修改金额-最终 */
  changeAmount?: Maybe<Scalars['BigDecimal']>;
  /** 改价模式【快速 or 精细】 */
  changeMethod?: Maybe<AmountChangeMethodEnum>;
  /** 商品金额-初始 */
  commodityAmount?: Maybe<Scalars['BigDecimal']>;
  /** 商品改价类型 */
  commodityAmountChangeType?: Maybe<AmountChangeTypeEnum>;
  /** 商品订单ID */
  commodityOrderId?: Maybe<Scalars['ID']>;
  /** 是否存在支付单 */
  isPayOrderExist?: Maybe<Scalars['Boolean']>;
  /** 总金额-应付金额 */
  totalAmount?: Maybe<Scalars['BigDecimal']>;
  /** 运费金额-最终 */
  transportAmount?: Maybe<Scalars['BigDecimal']>;
};

/** # TODO 商品订单收货信息 */
export type CommodityOrderReceiptInterface = {
  /** 收货地址 */
  address?: Maybe<CommodityOrderPickUpAddressPayload>;
  /** 商品订单ID */
  commodityOrderId?: Maybe<Scalars['ID']>;
  /** 收货信息 */
  receipt?: Maybe<CommodityReceiptPayload>;
};

export type CommodityOrderSkuAfterSaleInterface = {
  /** 售后展示 */
  afterSaleShow?: Maybe<AfterSaleShowPayload>;
  /** 商品订单详情ID */
  commodityOrderDetailId?: Maybe<Scalars['ID']>;
};

export type CommodityOrderSkuDetailPayload = {
  __typename?: 'CommodityOrderSkuDetailPayload';
  /** 商品名称 */
  commodityName?: Maybe<Scalars['String']>;
  /** 商品订单id */
  commodityOrderId?: Maybe<Scalars['ID']>;
  /** 数量 */
  quantity?: Maybe<Scalars['Int']>;
  /** skuId */
  skuId?: Maybe<Scalars['ID']>;
  /** sku名称 */
  skuName?: Maybe<Scalars['String']>;
  /** 规格 */
  spec?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** 缩略图 */
  thumbnailImage?: Maybe<Array<Maybe<FilePayload>>>;
  /** 单位 */
  unit?: Maybe<OrderMarketingUnitEnum>;
  /** 单价 */
  unitPrice?: Maybe<Scalars['BigDecimal']>;
  /** 精细改价后单价 */
  unitPriceChange?: Maybe<Scalars['BigDecimal']>;
};

export type CommodityOrderSkuInput = {
  /** 发货数量 */
  quantity: Scalars['Int'];
  /** skuId */
  skuId: Scalars['ID'];
};

/** # TODO 商品订单商品sku详情 */
export type CommodityOrderSkuInterface = {
  /** 商品订单ID */
  commodityOrderId?: Maybe<Scalars['ID']>;
  /** 商品sku集合 */
  skuList?: Maybe<Array<Maybe<CommodityOrderSkuPayload>>>;
};

export type CommodityOrderSkuPayload = CommodityOrderSkuAfterSaleInterface & {
  __typename?: 'CommodityOrderSkuPayload';
  /** 售后展示 */
  afterSaleShow?: Maybe<AfterSaleShowPayload>;
  /** 商品id */
  commodityId?: Maybe<Scalars['ID']>;
  /** 商品名称 */
  commodityName?: Maybe<Scalars['String']>;
  /** 商品订单详情ID */
  commodityOrderDetailId?: Maybe<Scalars['ID']>;
  /** 商品图片 */
  commodityPic?: Maybe<Array<Maybe<FilePayload>>>;
  /** 可发货数量 */
  needDeliveryQuantity?: Maybe<Scalars['Int']>;
  /** 数量 */
  quantity?: Maybe<Scalars['BigDecimal']>;
  /** 商品skuId */
  skuId?: Maybe<Scalars['ID']>;
  /** 商品sku名称 */
  skuName?: Maybe<Scalars['String']>;
  /** 最终单价 */
  skuPreciseChangePrice?: Maybe<Scalars['BigDecimal']>;
  /** 商品sku展示文件 */
  skuShowFileList?: Maybe<Array<Maybe<FilePayload>>>;
  /** 商品规格 */
  specList?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** 单位 */
  unit?: Maybe<OrderMarketingUnitEnum>;
  /** 原始单价 */
  unitPrice?: Maybe<Scalars['BigDecimal']>;
  /** 精细改价Sku信息 */
  unitPriceChange?: Maybe<OrderSkuChangeUnitPricePayload>;
};

/** } */
export type CommodityOrderSkuUnitPrice = {
  commodityOrderId?: Maybe<Scalars['ID']>;
  /** sku单价 */
  price?: Maybe<OrderSkuUnitPricePayload>;
  skuId?: Maybe<Scalars['ID']>;
};

export const enum CommodityOrderStatusEnum {
  /** 全部-仅供前端分页使用 */
  All = 'ALL',
  /** 已取消 */
  Canceled = 'CANCELED',
  /** 已关闭 */
  Closed = 'CLOSED',
  /** 部分发货 */
  DeliverySection = 'DELIVERY_SECTION',
  /** 已完成 */
  Finished = 'FINISHED',
  /** 待发货 */
  WaitDelivery = 'WAIT_DELIVERY',
  /** 待支付 */
  WaitPay = 'WAIT_PAY',
  /** 待收(提)货 */
  WaitReceipt = 'WAIT_RECEIPT'
};

export type CommodityPageInput = {
  /** 审核状态 */
  auditStatus?: InputMaybe<CommodityAuditStatusEnum>;
  /** 商品名称keyword */
  keyword?: InputMaybe<Scalars['String']>;
  /** 分页信息 */
  pageCurrent?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type CommodityPagePayload = {
  __typename?: 'CommodityPagePayload';
  /** 当前页码 */
  pageCurrent?: Maybe<Scalars['Int']>;
  /** 条数 */
  pageSize?: Maybe<Scalars['Int']>;
  /** 角色列表 */
  records?: Maybe<Array<Maybe<CommodityPayload>>>;
  /** 总记录数 */
  totalRecords?: Maybe<Scalars['Int']>;
};

export type CommodityPayload = {
  __typename?: 'CommodityPayload';
  /** 审核状态 */
  auditStatus?: Maybe<CommodityAuditStatusEnum>;
  /** 商品ID */
  commodityId: Scalars['ID'];
  /** 商品名称 */
  commodityName: Scalars['String'];
  /** 是否存在有效的sku */
  hasEnabledSku?: Maybe<Scalars['Boolean']>;
  /** 最高价 */
  maxPrice?: Maybe<Scalars['Float']>;
  /** 最低价 */
  minPrice?: Maybe<Scalars['Float']>;
  /** 发布标识 */
  publishIdentify?: Maybe<Scalars['Boolean']>;
  /** 销量 */
  sales?: Maybe<Scalars['Long']>;
  /** 缩略图 */
  thumbnailImage?: Maybe<Array<Maybe<FilePayload>>>;
};

export type CommodityPickUpAddressPayload = {
  __typename?: 'CommodityPickUpAddressPayload';
  /** 市名称 */
  cityName?: Maybe<Scalars['String']>;
  /** 联系人 */
  contactName?: Maybe<Scalars['String']>;
  /** 详细地址 */
  detailedAddress?: Maybe<Scalars['String']>;
  /** 区名称 */
  districtName?: Maybe<Scalars['String']>;
  /** 联系电话 */
  mobileNo?: Maybe<Scalars['String']>;
  /** 地址Id */
  pickUpAddressId: Scalars['ID'];
  /** 省份名称 */
  provinceName?: Maybe<Scalars['String']>;
};

export type CommodityPlaceOriginListPayload = {
  __typename?: 'CommodityPlaceOriginListPayload';
  /** 商品产地ID */
  id: Scalars['ID'];
  /** 商品产地名称 */
  name: Scalars['String'];
};

export type CommodityPlaceOriginPayload = {
  __typename?: 'CommodityPlaceOriginPayload';
  /** 产地Id */
  placeOriginId?: Maybe<Scalars['ID']>;
  /** 产地名称 */
  placeOriginName?: Maybe<Scalars['String']>;
};

/** 商品属性显示类型枚举 */
export const enum CommodityPropertyDisplayTypeEnum {
  Unknown = 'UNKNOWN',
  Unrecognized = 'UNRECOGNIZED',
  Unspecified = 'UNSPECIFIED'
};

/** 商品属性枚举 */
export const enum CommodityPropertyTypeEnum {
  Unknown = 'UNKNOWN',
  Unrecognized = 'UNRECOGNIZED',
  Unspecified = 'UNSPECIFIED'
};

export const enum CommodityPublishStatusEnum {
  /** 下架 */
  CancelPublish = 'CANCEL_PUBLISH',
  /** 上架 */
  Publish = 'PUBLISH',
  Unknown = 'UNKNOWN',
  Unrecognized = 'UNRECOGNIZED',
  Unspecified = 'UNSPECIFIED'
};

export type CommodityReceiptPayload = {
  __typename?: 'CommodityReceiptPayload';
  /** 发货方式 */
  deliveryMethod?: Maybe<DeliveryMethodEnum>;
  /** 提货码 */
  pickUpCode?: Maybe<Scalars['String']>;
  /** 收货方式 */
  receiptType?: Maybe<ReceiptTypeEnum>;
};

export type CommoditySearchPayload = {
  __typename?: 'CommoditySearchPayload';
  /** 商品品类ID */
  categoryId: Scalars['ID'];
  /** 商品ID */
  commodityId: Scalars['ID'];
  /** 商品名称 */
  commodityName: Scalars['String'];
  /** 最高价 */
  maxPrice?: Maybe<Scalars['Float']>;
  /** 最低价 */
  minPrice?: Maybe<Scalars['Float']>;
  /** 商家店铺信息 */
  storeInfo?: Maybe<StoreInfoPayload>;
  /** 缩略图 */
  thumbnailImage?: Maybe<Array<Maybe<FilePayload>>>;
};

export type CommodityToOnlineInput = {
  /** 商品ID */
  commodityId: Scalars['ID'];
};

export type CommodityToOnlinePayload = {
  __typename?: 'CommodityToOnlinePayload';
  /** 操作结果消息 */
  msg?: Maybe<Scalars['String']>;
  /** 商品上架操作结果 */
  result?: Maybe<CommodityToOnlineResultEnum>;
};

/** 商品上架结果 */
export const enum CommodityToOnlineResultEnum {
  /** 操作失败 */
  Failure = 'FAILURE',
  /** 部分成功 */
  PartSuccess = 'PART_SUCCESS',
  /** 全部成功 */
  Success = 'SUCCESS'
};

export type CommodityTypeCategoryListPayload = {
  __typename?: 'CommodityTypeCategoryListPayload';
  /** 商品类型ID */
  commodityTypeId: Scalars['ID'];
  /** 商品品类ID */
  id: Scalars['ID'];
  /** 商品品类名称 */
  name: Scalars['String'];
};

export type CommodityTypeListPayload = {
  __typename?: 'CommodityTypeListPayload';
  /** 商品类型ID */
  id: Scalars['ID'];
  /** 商品类型名称 */
  name: Scalars['String'];
};

export type CommodityTypeVarietyListPayload = {
  __typename?: 'CommodityTypeVarietyListPayload';
  /** 商品类型ID */
  commodityTypeCategoryId: Scalars['ID'];
  /** 商品品种ID */
  id: Scalars['ID'];
  /** 商品品种名称 */
  name: Scalars['String'];
};

export type ConfirmOrderDetailInput = {
  /** skuId列表 */
  skuIds: Array<Scalars['ID']>;
};

/**  商家 - 发货仓库 - 配送方式 */
export type ConfirmOrderDetailPayload = MerchantInfoInterface & SkuInterface & {
  __typename?: 'ConfirmOrderDetailPayload';
  /** 商品发货仓id */
  deliveryWarehouseId?: Maybe<Scalars['ID']>;
  /** 商户信息 */
  merchant?: Maybe<CommodityOrderMerchantPayload>;
  /** 商户ID */
  merchantId: Scalars['ID'];
  /** 数量 */
  quantity?: Maybe<Scalars['Int']>;
  /** 收货信息 */
  receipt?: Maybe<ConfirmOrderReceiptPayload>;
  /** 购物车明细id */
  shoppingCartDetailId?: Maybe<Scalars['ID']>;
  /** skuID */
  skuId: Scalars['ID'];
  /** sku信息 */
  skuInfo?: Maybe<SkuInfoPayload>;
};

export type ConfirmOrderReceiptPayload = {
  __typename?: 'ConfirmOrderReceiptPayload';
  /** 市名 */
  cityName?: Maybe<Scalars['String']>;
  /** 联系人姓名 */
  contactName?: Maybe<Scalars['String']>;
  /** 联系人电话 */
  contactPhone?: Maybe<Scalars['String']>;
  /** 详细地址 */
  detailAddress?: Maybe<Scalars['String']>;
  /** 区域名 */
  districtName?: Maybe<Scalars['String']>;
  /** 维度 */
  latitude?: Maybe<Scalars['Float']>;
  /** 经度 */
  longitude?: Maybe<Scalars['Float']>;
  /** 省份名 */
  provinceName?: Maybe<Scalars['String']>;
  /** 收货地址id */
  receiptAddressId?: Maybe<Scalars['ID']>;
  /** 收货方式 */
  receiptType: ReceiptTypeEnum;
};

export type ConfirmPaymentInput = {
  /** 订单ID */
  orderId: Array<Scalars['ID']>;
  /** 支付方式 */
  paymentMethod: PaymentMethodEnum;
  /** 订单总金额 */
  totalAmount: Scalars['BigDecimal'];
};

/** 内容审核状态 */
export const enum ContentAuditStatusEnum {
  /** 已授权认证（审核通过） */
  Approve = 'APPROVE',
  /** 拒绝（已驳回） */
  Refuse = 'REFUSE',
  /** 未提交（暂存） */
  Uncommitted = 'UNCOMMITTED',
  /** 认证中（待审核） */
  UnderReview = 'UNDER_REVIEW'
};

export type ContentByTypePayload = {
  __typename?: 'ContentByTypePayload';
  /** 品类ID */
  commodityCategoryId?: Maybe<Scalars['ID']>;
  /** 内容详情 */
  details?: Maybe<Scalars['String']>;
  /** 图片与视频文件资源 */
  fileResources?: Maybe<Array<Maybe<FilePayload>>>;
  /** 简介 */
  introduction?: Maybe<Scalars['String']>;
  /** 关键字 */
  keyWord?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** 对应类型 */
  pageSetupType: PageTypeEnum;
  /** 副标题 */
  subhead?: Maybe<Scalars['String']>;
  /** 系统内置类型（模块） */
  systemContentType: Scalars['String'];
  /** 内容标题 */
  title: Scalars['String'];
};

export type ContentPayload = {
  __typename?: 'ContentPayload';
  /** 创建人 */
  accountInfo: BaseAccountPayload;
  /** 审核状态 */
  auditStatus: ContentAuditStatusEnum;
  /** 渠道ID */
  channelId?: Maybe<Scalars['ID']>;
  /** 所属栏目列表 */
  columnList: Array<ColumnNamePayload>;
  /** 商品品类ID（MDM） */
  commodityCategoryId?: Maybe<Scalars['ID']>;
  /** 创建时间 */
  createTime: Scalars['Long'];
  /** 内容详情 */
  details?: Maybe<Scalars['String']>;
  /** 图片与视频文件资源 */
  fileResources?: Maybe<Array<Maybe<FilePayload>>>;
  /** 内容ID */
  id: Scalars['ID'];
  /** 简介 */
  introduction?: Maybe<Scalars['String']>;
  /** 关键字 */
  keyWord?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** 发布状态： false=未发布 true=已发布 */
  releaseStatus: Scalars['Boolean'];
  /** 副标题 */
  subhead?: Maybe<Scalars['String']>;
  /** 内容标题 */
  title: Scalars['String'];
  /** 更新时间 */
  updateTime: Scalars['Long'];
};

export type CountryPayLoad = {
  __typename?: 'CountryPayLoad';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type CreateAfterSaleInput = {
  /** 售后类型 */
  afterSalesType: AfterSalesTypeEnum;
  /** sku发货状态 */
  deliveryMoment: DeliveryMomentEnum;
  /** 售后说明 */
  description?: InputMaybe<Scalars['String']>;
  /** 售后凭证 */
  images?: InputMaybe<Array<InputMaybe<FileInput>>>;
  /** 退款金额 */
  money?: InputMaybe<Scalars['BigDecimal']>;
  /** 申请数量 */
  quantity?: InputMaybe<Scalars['Int']>;
  /** 售后原因 */
  reason: Scalars['String'];
  /** 发起售后的skuID */
  skuId: Scalars['ID'];
  /** 订单ID */
  subOrderId: Scalars['ID'];
};

export type CreateCommodityInput = {
  /** 售后标准 */
  afterSalesStandard?: InputMaybe<Array<InputMaybe<FileInput>>>;
  /** 商品相册 */
  albumResources: Array<InputMaybe<FileInput>>;
  /** 商品品类ID */
  categoryId: Scalars['ID'];
  /** 商品品牌Id */
  commodityBrandId?: InputMaybe<Scalars['ID']>;
  /** 商品描述 */
  commodityDesc?: InputMaybe<Array<InputMaybe<FileInput>>>;
  /** 商品名称 */
  commodityName: Scalars['String'];
  /** 类型 */
  commodityTypeId: Scalars['ID'];
  /** 发货仓ID */
  deliveryWarehouseId: Scalars['ID'];
  /** 产地Id */
  placeOriginId?: InputMaybe<Scalars['ID']>;
  /** 品种ID */
  varietyId: Scalars['ID'];
};

export type CreateDeliveryWarehouseInput = {
  /** 区域编码 */
  adCode: Scalars['String'];
  /** 联系人 */
  contact: Scalars['String'];
  /** 发货仓名称 */
  deliveryWarehouseName: Scalars['String'];
  /** 详细地址 */
  detailedAddress?: InputMaybe<Scalars['String']>;
  /** 纬度 */
  latitude: Scalars['Float'];
  /** 经度 */
  longitude: Scalars['Float'];
  /** 联系电话 */
  mobileNo: Scalars['String'];
  /** 发货仓发货地址数组 */
  pickUpAddressIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** 配送方式列表 */
  receiptTypes: Array<InputMaybe<ReceiptTypeEnum>>;
};

/** 创建角色Input */
export type CreateRoleInput = {
  /** 应用类型 */
  appType: AppTypeEnum;
  /** 角色名 */
  roleName: Scalars['String'];
};

export type CreateUpAddressInput = {
  /** 区域编码 */
  adCode: Scalars['String'];
  /** 发货地址类型 */
  addressType: AddressTypeEnum;
  /** 联系人 */
  contact: Scalars['String'];
  /** 详细地址 */
  detailedAddress: Scalars['String'];
  /** 纬度 */
  latitude: Scalars['Float'];
  /** 经度 */
  longitude: Scalars['Float'];
  /** 联系电话 */
  mobileNo: Scalars['String'];
};

export type CreateWalletInput = {
  /** 商家或者客户ID */
  businessId: Scalars['ID'];
  /** 渠道ID */
  channelId: Scalars['ID'];
  /** 账户类型 */
  walletType: WalletTypeEnum;
};

export const enum CurrentUseTypeEnum {
  /** 渠道 */
  Channel = 'CHANNEL',
  /** 客户 */
  Customer = 'CUSTOMER',
  /** 商家 */
  Merchant = 'MERCHANT'
};

export type CustomerApplyCommodityOrderResultPayload = {
  __typename?: 'CustomerApplyCommodityOrderResultPayload';
  /** 金额 */
  amount?: Maybe<Scalars['BigDecimal']>;
  /** 拆分后所有订单id-支付接口使用 */
  commodityOrderIdList?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type CustomerCancelCommodityOrderInput = {
  /** 商品订单id */
  commodityOrderId: Scalars['ID'];
  /** 取消原因 */
  reason: Scalars['String'];
};

export type CustomerCommodityDeliveryQuantityInput = {
  /** 订单id */
  commodityOrderId: Scalars['ID'];
  /** skuId */
  skuIds: Array<Scalars['ID']>;
};

export type CustomerCommodityDeliveryQuantityPayload = {
  __typename?: 'CustomerCommodityDeliveryQuantityPayload';
  /** 已发货数量 */
  deliveryQuantity?: Maybe<Scalars['Int']>;
  /** skuId */
  skuId: Scalars['ID'];
  /** 待发货数量 */
  waitDeliveryQuantity?: Maybe<Scalars['Int']>;
};

export type CustomerCommodityOrderApplyInput = {
  /** 申请id */
  applyId: Scalars['ID'];
  /** 订单项 */
  itemList?: InputMaybe<Array<InputMaybe<CommodityOrderApplyItemInput>>>;
  /** 购物车明细id */
  shoppingCartDetailIdList?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** 合计费用 */
  totalCost?: InputMaybe<Scalars['BigDecimal']>;
};

export type CustomerCommodityOrderDetailPayload = CommodityOrderCustomerInterface & CommodityOrderDeliveryInterface & CommodityOrderHasAfterSaleInterface & CommodityOrderInterface & CommodityOrderMerchantInterface & CommodityOrderPaymentInterface & CommodityOrderPriceInterface & CommodityOrderReceiptInterface & CommodityOrderSkuInterface & {
  __typename?: 'CustomerCommodityOrderDetailPayload';
  /** 收货地址 */
  address?: Maybe<CommodityOrderPickUpAddressPayload>;
  /** 售后布尔统计 */
  afterSaleBool?: Maybe<AfterSaleBoolPayload>;
  /** 商品订单 */
  commodityOrder?: Maybe<CommodityOrderPayload>;
  /** 商品订单ID */
  commodityOrderId: Scalars['ID'];
  /** 商品客户信息 */
  customer?: Maybe<CommodityOrderCustomerPayload>;
  /** 发货详情集合 */
  deliveryInfoList?: Maybe<Array<Maybe<CommodityOrderDeliveryPayload>>>;
  /** 商品订单商家信息 */
  merchant?: Maybe<CommodityOrderMerchantPayload>;
  /** 商品支付信息 */
  payment?: Maybe<CommodityOrderPaymentPayload>;
  /** 商品实付金额明细 */
  price?: Maybe<CommodityOrderPricePayload>;
  /** 收货信息 */
  receipt?: Maybe<CommodityReceiptPayload>;
  /** 商品sku集合 */
  skuList?: Maybe<Array<Maybe<CommodityOrderSkuPayload>>>;
};

export type CustomerCommodityOrderPageInput = {
  /** 关键字 */
  key?: InputMaybe<Scalars['String']>;
  /** 当前页 */
  pageCurrent?: InputMaybe<Scalars['Int']>;
  /** 每页数量 */
  pageSize?: InputMaybe<Scalars['Int']>;
  /** 状态 */
  status?: InputMaybe<CommodityOrderStatusEnum>;
};

export type CustomerCommodityOrderPagePayload = {
  __typename?: 'CustomerCommodityOrderPagePayload';
  /** 当前页码 */
  pageCurrent?: Maybe<Scalars['Int']>;
  /** 条数 */
  pageSize?: Maybe<Scalars['Int']>;
  /** 结果 */
  records?: Maybe<Array<Maybe<CustomerCommodityOrderPayload>>>;
  /** 总记录数 */
  totalRecords?: Maybe<Scalars['Int']>;
};

export type CustomerCommodityOrderPayload = CommodityOrderInterface & CommodityOrderMerchantInterface & CommodityOrderPriceInterface & CommodityOrderReceiptInterface & CommodityOrderSkuInterface & {
  __typename?: 'CustomerCommodityOrderPayload';
  /** 收货地址 */
  address?: Maybe<CommodityOrderPickUpAddressPayload>;
  /** 商品订单 */
  commodityOrder?: Maybe<CommodityOrderPayload>;
  /** 商品订单ID */
  commodityOrderId?: Maybe<Scalars['ID']>;
  /** 商品订单商家信息 */
  merchant?: Maybe<CommodityOrderMerchantPayload>;
  /** 商品金额明细 */
  price?: Maybe<CommodityOrderPricePayload>;
  /** 收货信息 */
  receipt?: Maybe<CommodityReceiptPayload>;
  /** 商品sku集合 */
  skuList?: Maybe<Array<Maybe<CommodityOrderSkuPayload>>>;
};

export type CustomerCommodityOrderPricePayload = CommodityOrderPriceInterface & {
  __typename?: 'CustomerCommodityOrderPricePayload';
  /** 商品订单ID */
  commodityOrderId?: Maybe<Scalars['ID']>;
  /** 商品金额明细 */
  price?: Maybe<CommodityOrderPricePayload>;
};

export type CustomerCommodityOrderReceiptCodePayload = CommodityOrderReceiptInterface & {
  __typename?: 'CustomerCommodityOrderReceiptCodePayload';
  /** 收货地址 */
  address?: Maybe<CommodityOrderPickUpAddressPayload>;
  /** 商品订单ID */
  commodityOrderId: Scalars['ID'];
  /** 收货信息 */
  receipt?: Maybe<CommodityReceiptPayload>;
};

export type CustomerInterface = {
  customerId?: Maybe<Scalars['ID']>;
  customerInfo?: Maybe<OrderCustomerPayload>;
};

export type CustomerIsJoinedInterface = {
  /** 客户ID */
  id: Scalars['ID'];
  /** 是否已经加入该企业 */
  joined: Scalars['Boolean'];
};

export type CustomerOrderQuantityPayload = {
  __typename?: 'CustomerOrderQuantityPayload';
  /** 售后 */
  afterSales?: Maybe<Scalars['Int']>;
  /** 全部 */
  all?: Maybe<Scalars['Int']>;
  /** 待发货 */
  waitDelivery?: Maybe<Scalars['Int']>;
  /** 待支付 */
  waitPay?: Maybe<Scalars['Int']>;
  /** 待收货 */
  waitReceipt?: Maybe<Scalars['Int']>;
};

export type CustomerRolePayload = {
  __typename?: 'CustomerRolePayload';
  /** 角色ID */
  roleId?: Maybe<Scalars['ID']>;
  /** 角色名称 */
  roleName?: Maybe<Scalars['String']>;
};

export const enum CustomerTypeEnum {
  /** 企业用户 */
  Enterprise = 'ENTERPRISE',
  /** 个人用户 */
  Individual = 'INDIVIDUAL',
  Unrecognized = 'UNRECOGNIZED'
};

export type DeleteRoleInput = {
  /** 应用类型 */
  appType: AppTypeEnum;
  /** 角色ID */
  roleId: Scalars['ID'];
};

export type DeliveryDetailPayload = DeliverySkuInfoInterface & InspectInfoInterface & LogisticsInfoInterface & {
  __typename?: 'DeliveryDetailPayload';
  /** 发货唯一标识 */
  deliveryId?: Maybe<Scalars['ID']>;
  /** 发货时间 */
  deliveryTime?: Maybe<Scalars['Long']>;
  /** 质检信息 */
  inspectInfoList?: Maybe<Array<Maybe<FilePayload>>>;
  /** 物流信息 */
  logisticsInfo?: Maybe<CommodityOrderLogisticsPayload>;
  /** 发货单商品项 */
  skuList?: Maybe<Array<Maybe<DeliverySkuPayload>>>;
};

export type DeliveryInfo = {
  __typename?: 'DeliveryInfo';
  /** 地址(省市区拼接的地址) */
  address?: Maybe<Scalars['String']>;
  /** 市名称 */
  cityName?: Maybe<Scalars['String']>;
  /** 发货仓ID */
  deliveryWarehouseId?: Maybe<Scalars['ID']>;
  /** 详细地址 */
  detailedAddress?: Maybe<Scalars['String']>;
  /** 区名称 */
  districtName?: Maybe<Scalars['String']>;
  /** 状态 */
  enabled?: Maybe<EnableEnum>;
  /** 自提地址(只有receiptTypes当中包含BY_SELF的时候,这个字段才会有值,当不含有BY_SELF的时候,这个字段为空值) */
  pickUpAddress?: Maybe<CommodityPickUpAddressPayload>;
  /** 省份名称 */
  provinceName?: Maybe<Scalars['String']>;
  /** 配送方式列表 */
  receiptTypes: Array<Maybe<ReceiptTypeEnum>>;
};

/** 一级的配送方式 */
export const enum DeliveryMethodEnum {
  /** 物流 */
  ByLogistics = 'BY_LOGISTICS',
  /** 自提 */
  BySelf = 'BY_SELF'
};

export type DeliveryMethodPayload = {
  __typename?: 'DeliveryMethodPayload';
  /** 子配送方式 */
  childList?: Maybe<Array<Maybe<ReceiptTypePayload>>>;
  /** 配送方式名称 */
  deliveryMethodName: Scalars['String'];
  /** 配送方式类型枚举值 */
  deliveryType: DeliveryMethodEnum;
};

/** 售后单商品发货状态枚举 */
export const enum DeliveryMomentEnum {
  /** 发货后 */
  AfterDelivery = 'AFTER_DELIVERY',
  /** 发货前 */
  BeforeDelivery = 'BEFORE_DELIVERY'
};

export type DeliverySkuInfoInterface = {
  /** 发货唯一标识 */
  deliveryId?: Maybe<Scalars['ID']>;
  /** 发货单商品项 */
  skuList?: Maybe<Array<Maybe<DeliverySkuPayload>>>;
};

/** 发货单商品项 */
export type DeliverySkuPayload = SkuInterface & {
  __typename?: 'DeliverySkuPayload';
  /** 商品订单ID */
  commodityOrderId?: Maybe<Scalars['ID']>;
  /** 发货单唯一标识 */
  deliveryId?: Maybe<Scalars['ID']>;
  /** 发货数量 */
  quantity?: Maybe<Scalars['Int']>;
  /** skuId */
  skuId?: Maybe<Scalars['ID']>;
  /** sku信息 */
  skuInfo?: Maybe<SkuInfoPayload>;
  /** sku发货时的单价 */
  unitPrice?: Maybe<Scalars['BigDecimal']>;
};

export type DeliveryWarehouseDetailPayload = {
  __typename?: 'DeliveryWarehouseDetailPayload';
  /** 区域编码 */
  adCode?: Maybe<Scalars['String']>;
  /** 配送方式/地址类型 */
  addressTypePayloads?: Maybe<Array<Maybe<AddressTypePayload>>>;
  /** 市ID */
  cityId?: Maybe<Scalars['ID']>;
  /** 市名称 */
  cityName?: Maybe<Scalars['String']>;
  /** 联系人 */
  contact?: Maybe<Scalars['String']>;
  /** 国家ID */
  countryId?: Maybe<Scalars['ID']>;
  /** 国家名称 */
  countryName?: Maybe<Scalars['String']>;
  /** 发货仓ID */
  deliveryWarehouseId: Scalars['ID'];
  /** 发货仓名称 */
  deliveryWarehouseName: Scalars['String'];
  /** 发货仓地址ID */
  deliveryWarehousePickUpAddressId?: Maybe<Scalars['ID']>;
  /** 详细地址 */
  detailedAddress?: Maybe<Scalars['String']>;
  /** 区ID */
  districtId?: Maybe<Scalars['ID']>;
  /** 区名称 */
  districtName?: Maybe<Scalars['String']>;
  /** 状态 */
  enabled?: Maybe<EnableEnum>;
  /** 纬度 */
  latitude?: Maybe<Scalars['Float']>;
  /** 经度 */
  longitude?: Maybe<Scalars['Float']>;
  /** 商家ID */
  merchantId: Scalars['Long'];
  /** 联系电话 */
  mobileNo?: Maybe<Scalars['String']>;
  /** 省份 */
  provinceId?: Maybe<Scalars['ID']>;
  /** 省份名称 */
  provinceName?: Maybe<Scalars['String']>;
  /** 二级配送方式枚举 */
  receiptTypes: Array<Maybe<ReceiptTypeEnum>>;
};

export type DeliveryWarehousePageInput = {
  /** 关键词 */
  keywords?: InputMaybe<Scalars['String']>;
  /** 分页信息 */
  pageCurrent?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type DeliveryWarehousePagePayload = {
  __typename?: 'DeliveryWarehousePagePayload';
  /** 当前页码 */
  pageCurrent?: Maybe<Scalars['Int']>;
  /** 条数 */
  pageSize?: Maybe<Scalars['Int']>;
  /** 发货仓列表 */
  records?: Maybe<Array<Maybe<DeliveryWarehousePayload>>>;
  /** 总记录数 */
  totalRecords?: Maybe<Scalars['Int']>;
};

export type DeliveryWarehousePayload = {
  __typename?: 'DeliveryWarehousePayload';
  /** 创建时间 */
  createTime?: Maybe<Scalars['Long']>;
  /** 发货仓ID */
  deliveryWarehouseId?: Maybe<Scalars['ID']>;
  /** 发货仓名称 */
  deliveryWarehouseName?: Maybe<Scalars['String']>;
  /** 状态 */
  enabled?: Maybe<EnableEnum>;
  /** 二级配送方式枚举 */
  receiptTypes?: Maybe<Array<Maybe<ReceiptTypeEnum>>>;
};

/** 字典项公共响应 */
export type DictKeyValuePayload = {
  __typename?: 'DictKeyValuePayload';
  /** 类型 */
  dictType: Scalars['String'];
  /** 中文描述 */
  label: Scalars['String'];
  /** 值 */
  value: Scalars['String'];
};

export type DistrictPayLoad = {
  __typename?: 'DistrictPayLoad';
  cityId: Scalars['ID'];
  id: Scalars['ID'];
  /** 维度 */
  lat: Scalars['Float'];
  /** 经度 */
  lng: Scalars['Float'];
  name: Scalars['String'];
};

export type EditCommodityInput = {
  /** 售后标准 */
  afterSalesStandard?: InputMaybe<Array<InputMaybe<FileInput>>>;
  /** 商品相册 */
  albumResources: Array<InputMaybe<FileInput>>;
  /** 商品品类ID */
  categoryId: Scalars['ID'];
  /** 商品品牌Id */
  commodityBrandId?: InputMaybe<Scalars['ID']>;
  /** 商品描述 */
  commodityDesc?: InputMaybe<Array<InputMaybe<FileInput>>>;
  /** 商品ID */
  commodityId: Scalars['ID'];
  /** 商品名称 */
  commodityName: Scalars['String'];
  /** 类型 */
  commodityTypeId: Scalars['ID'];
  /** 发货仓ID */
  deliveryWarehouseId: Scalars['ID'];
  /** 产地Id */
  placeOriginId?: InputMaybe<Scalars['ID']>;
  /** 品种ID */
  varietyId: Scalars['ID'];
};

export type EditDeliveryWarehouseInput = {
  /** 区域编码 */
  adCode: Scalars['String'];
  /** 联系人 */
  contact: Scalars['String'];
  /** 发货仓ID */
  deliveryWarehouseId: Scalars['ID'];
  /** 发货仓名称 */
  deliveryWarehouseName: Scalars['String'];
  /** 发货仓地址ID */
  deliveryWarehousePickUpAddressId: Scalars['ID'];
  /** 详细地址 */
  detailedAddress?: InputMaybe<Scalars['String']>;
  /** 纬度 */
  latitude: Scalars['Float'];
  /** 经度 */
  longitude: Scalars['Float'];
  /** 联系电话 */
  mobileNo: Scalars['String'];
  /** 发货仓发货地址 */
  pickUpAddressIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** 配送方式列表 */
  receiptTypes: Array<InputMaybe<ReceiptTypeEnum>>;
};

export type EditFrontEndCategoryInput = {
  /** 类目ID */
  frontEndCategoryId: Scalars['ID'];
  /** 前端类目名称 */
  frontEndCategoryName: Scalars['String'];
  /** 类目图标 */
  icon: Array<InputMaybe<FileInput>>;
};

export type EditIndexMetaInput = {
  /** 索引重建每批次的个数 */
  batch?: InputMaybe<Scalars['Int']>;
  /** 主键ID */
  id?: InputMaybe<Scalars['ID']>;
  /** 索引名称 */
  indexType?: InputMaybe<Scalars['String']>;
  /** 索引mapping结构 */
  mapping?: InputMaybe<Scalars['String']>;
  /** 副本分片数 */
  numberOfReplicas?: InputMaybe<Scalars['Int']>;
  /** 主分片数 */
  numberOfShards?: InputMaybe<Scalars['Int']>;
  /** 索引主键名 */
  pkFieldName?: InputMaybe<Scalars['String']>;
  /** 索引重建时间 */
  rebuildTime?: InputMaybe<Scalars['String']>;
  /** 服务提供名，注意一定要grpc+serviceName */
  serverName?: InputMaybe<Scalars['String']>;
};

export type EditPickUpAddressInput = {
  /** 区域编码 */
  adCode: Scalars['String'];
  /** 发货地址类型 */
  addressType?: InputMaybe<AddressTypeEnum>;
  /** 联系人 */
  contact: Scalars['String'];
  /** 详细地址 */
  detailedAddress?: InputMaybe<Scalars['String']>;
  /** 纬度 */
  latitude: Scalars['Float'];
  /** 经度 */
  longitude: Scalars['Float'];
  /** 联系电话 */
  mobileNo: Scalars['String'];
  /** 发货地址ID */
  pickUpAddressId: Scalars['ID'];
};

export type EditRoleNameInput = {
  /** 应用类型 */
  appType: AppTypeEnum;
  /** 角色ID */
  roleId: Scalars['ID'];
  /** 角色名称 */
  roleName: Scalars['String'];
};

export type EditRolePermissionInput = {
  /** 权限 */
  permissionIdList: Array<InputMaybe<Scalars['ID']>>;
  /** 角色ID */
  roleID: Scalars['ID'];
};

export type EditSecondLayerFrontEndCategoryInput = {
  /** 后台类目排序(前端确保关联的后端类目里面的内容和排序的后端类目一样即可，关联后台类目和后台类目排序传一个给后端即可) */
  categoryIds: Array<InputMaybe<Scalars['ID']>>;
  /** 类目ID */
  frontEndCategoryId: Scalars['ID'];
  /** 类目名称 */
  frontEndCategoryName: Scalars['String'];
};

export type EditSkuInput = {
  /** 商品ID */
  commodityId: Scalars['ID'];
  /** 一件代发价格 */
  dropShippingPrice?: InputMaybe<Scalars['Float']>;
  /** 单位 */
  marketingUnit?: InputMaybe<MarketingUnitEnum>;
  /** 商家商品编码 */
  merchantSkuCode?: InputMaybe<Scalars['String']>;
  /** 净重 */
  netWeight?: InputMaybe<Scalars['Float']>;
  /** 毛重 */
  roughWeight?: InputMaybe<Scalars['Float']>;
  /** 销售方式 */
  saleMethods?: InputMaybe<Array<InputMaybe<SaleMethodEnum>>>;
  /** 规格ID */
  skuId: Scalars['ID'];
  /** 规格名称 */
  skuName: Scalars['String'];
  /** 阶梯价格 */
  skuPrices?: InputMaybe<Array<InputMaybe<EditSkuPriceInput>>>;
  /** 规格属性 */
  specProperty?: InputMaybe<Array<InputMaybe<SkuCategoryPropertyInput>>>;
};

export type EditSkuPriceInput = {
  /** 起批量 */
  bulk?: InputMaybe<Scalars['Int']>;
  /** 价格 */
  price?: InputMaybe<Scalars['Float']>;
  /** sku_price_id(新增的传0或者的不传，编辑的传Id) */
  skuPriceId?: InputMaybe<Scalars['ID']>;
};

export type EnableDeliveryWarehouseInput = {
  /** 发货仓ID */
  deliveryWarehouseId: Scalars['ID'];
  /** 启禁用状态 */
  targetState: EnableEnum;
};

export const enum EnableEnum {
  /** 禁用 */
  Disable = 'DISABLE',
  /** 启用 */
  Enable = 'ENABLE',
  Unknown = 'UNKNOWN',
  Unrecognized = 'UNRECOGNIZED',
  Unspecified = 'UNSPECIFIED'
};

export type EnableFrontEndCategoryInput = {
  /** 类目ID */
  frontEndCategoryId: Scalars['ID'];
  /** 启禁用状态 */
  targetState: EnableEnum;
};

export type EnableSkuInput = {
  /** 规格ID */
  skuId: Scalars['ID'];
  /** 启禁用状态 */
  targetState: EnableEnum;
};

export type EnterpriseAuthInfoPayload = {
  __typename?: 'EnterpriseAuthInfoPayload';
  /** 企业代码 */
  enterpriseCode: Scalars['String'];
  /** 法人姓名 */
  legalPersonName: Scalars['String'];
  /** 企业名称 */
  name: Scalars['String'];
};

export type EnterpriseAuthInput = {
  /** 企业代码 */
  enterpriseCode: Scalars['String'];
  /** 法人姓名 */
  legalPersonName: Scalars['String'];
  /** 企业名称 */
  name: Scalars['String'];
};

export type EnterpriseInfoPayload = CustomerIsJoinedInterface & {
  __typename?: 'EnterpriseInfoPayload';
  /** 企业代码 */
  enterpriseCode: Scalars['String'];
  /** 客户ID */
  id: Scalars['ID'];
  /** 是否已经加入该企业 */
  joined: Scalars['Boolean'];
  /** 法人姓名 */
  legalPersonName: Scalars['String'];
  /** 企业名称 */
  name: Scalars['String'];
};

export const enum ErrorDetail {
  /**
   * The deadline expired before the operation could complete.
   *
   * For operations that change the state of the system, this error
   * may be returned even if the operation has completed successfully.
   * For example, a successful response from a server could have been
   * delayed long enough for the deadline to expire.
   *
   * HTTP Mapping: 504 Gateway Timeout
   * Error Type: UNAVAILABLE
   */
  DeadlineExceeded = 'DEADLINE_EXCEEDED',
  /**
   * The server detected that the client is exhibiting a behavior that
   * might be generating excessive load.
   *
   * HTTP Mapping: 429 Too Many Requests or 420 Enhance Your Calm
   * Error Type: UNAVAILABLE
   */
  EnhanceYourCalm = 'ENHANCE_YOUR_CALM',
  /**
   * The requested field is not found in the schema.
   *
   * This differs from `NOT_FOUND` in that `NOT_FOUND` should be used when a
   * query is valid, but is unable to return a result (if, for example, a
   * specific video id doesn't exist). `FIELD_NOT_FOUND` is intended to be
   * returned by the server to signify that the requested field is not known to exist.
   * This may be returned in lieu of failing the entire query.
   * See also `PERMISSION_DENIED` for cases where the
   * requested field is invalid only for the given user or class of users.
   *
   * HTTP Mapping: 404 Not Found
   * Error Type: BAD_REQUEST
   */
  FieldNotFound = 'FIELD_NOT_FOUND',
  /**
   * The client specified an invalid argument.
   *
   * Note that this differs from `FAILED_PRECONDITION`.
   * `INVALID_ARGUMENT` indicates arguments that are problematic
   * regardless of the state of the system (e.g., a malformed file name).
   *
   * HTTP Mapping: 400 Bad Request
   * Error Type: BAD_REQUEST
   */
  InvalidArgument = 'INVALID_ARGUMENT',
  /**
   * The provided cursor is not valid.
   *
   * The most common usage for this error is when a client is paginating
   * through a list that uses stateful cursors. In that case, the provided
   * cursor may be expired.
   *
   * HTTP Mapping: 404 Not Found
   * Error Type: NOT_FOUND
   */
  InvalidCursor = 'INVALID_CURSOR',
  /**
   * Unable to perform operation because a required resource is missing.
   *
   * Example: Client is attempting to refresh a list, but the specified
   * list is expired. This requires an action by the client to get a new list.
   *
   * If the user is simply trying GET a resource that is not found,
   * use the NOT_FOUND error type. FAILED_PRECONDITION.MISSING_RESOURCE
   * is to be used particularly when the user is performing an operation
   * that requires a particular resource to exist.
   *
   * HTTP Mapping: 400 Bad Request or 500 Internal Server Error
   * Error Type: FAILED_PRECONDITION
   */
  MissingResource = 'MISSING_RESOURCE',
  /**
   * Service Error.
   *
   * There is a problem with an upstream service.
   *
   * This may be returned if a gateway receives an unknown error from a service
   * or if a service is unreachable.
   * If a request times out which waiting on a response from a service,
   * `DEADLINE_EXCEEDED` may be returned instead.
   * If a service returns a more specific error Type, the specific error Type may
   * be returned instead.
   *
   * HTTP Mapping: 502 Bad Gateway
   * Error Type: UNAVAILABLE
   */
  ServiceError = 'SERVICE_ERROR',
  /**
   * Request failed due to network errors.
   *
   * HTTP Mapping: 503 Unavailable
   * Error Type: UNAVAILABLE
   */
  TcpFailure = 'TCP_FAILURE',
  /**
   * Request throttled based on server concurrency limits.
   *
   * HTTP Mapping: 503 Unavailable
   * Error Type: UNAVAILABLE
   */
  ThrottledConcurrency = 'THROTTLED_CONCURRENCY',
  /**
   * Request throttled based on server CPU limits
   *
   * HTTP Mapping: 503 Unavailable.
   * Error Type: UNAVAILABLE
   */
  ThrottledCpu = 'THROTTLED_CPU',
  /**
   * The operation is not implemented or is not currently supported/enabled.
   *
   * HTTP Mapping: 501 Not Implemented
   * Error Type: BAD_REQUEST
   */
  Unimplemented = 'UNIMPLEMENTED',
  /**
   * Unknown error.
   *
   * This error should only be returned when no other error detail applies.
   * If a client sees an unknown errorDetail, it will be interpreted as UNKNOWN.
   *
   * HTTP Mapping: 500 Internal Server Error
   */
  Unknown = 'UNKNOWN'
};

export const enum ErrorType {
  /**
   * Bad Request.
   *
   * There is a problem with the request.
   * Retrying the same request is not likely to succeed.
   * An example would be a query or argument that cannot be deserialized.
   *
   * HTTP Mapping: 400 Bad Request
   */
  BadRequest = 'BAD_REQUEST',
  /**
   * The operation was rejected because the system is not in a state
   * required for the operation's execution.  For example, the directory
   * to be deleted is non-empty, an rmdir operation is applied to
   * a non-directory, etc.
   *
   * Service implementers can use the following guidelines to decide
   * between `FAILED_PRECONDITION` and `UNAVAILABLE`:
   *
   * - Use `UNAVAILABLE` if the client can retry just the failing call.
   * - Use `FAILED_PRECONDITION` if the client should not retry until
   * the system state has been explicitly fixed.  E.g., if an "rmdir"
   *      fails because the directory is non-empty, `FAILED_PRECONDITION`
   * should be returned since the client should not retry unless
   * the files are deleted from the directory.
   *
   * HTTP Mapping: 400 Bad Request or 500 Internal Server Error
   */
  FailedPrecondition = 'FAILED_PRECONDITION',
  /**
   * Internal error.
   *
   * An unexpected internal error was encountered. This means that some
   * invariants expected by the underlying system have been broken.
   * This error code is reserved for serious errors.
   *
   * HTTP Mapping: 500 Internal Server Error
   */
  Internal = 'INTERNAL',
  /**
   * The requested entity was not found.
   *
   * This could apply to a resource that has never existed (e.g. bad resource id),
   * or a resource that no longer exists (e.g. cache expired.)
   *
   * Note to server developers: if a request is denied for an entire class
   * of users, such as gradual feature rollout or undocumented allowlist,
   * `NOT_FOUND` may be used. If a request is denied for some users within
   * a class of users, such as user-based access control, `PERMISSION_DENIED`
   * must be used.
   *
   * HTTP Mapping: 404 Not Found
   */
  NotFound = 'NOT_FOUND',
  /**
   * The caller does not have permission to execute the specified
   * operation.
   *
   * `PERMISSION_DENIED` must not be used for rejections
   * caused by exhausting some resource or quota.
   * `PERMISSION_DENIED` must not be used if the caller
   * cannot be identified (use `UNAUTHENTICATED`
   * instead for those errors).
   *
   * This error Type does not imply the
   * request is valid or the requested entity exists or satisfies
   * other pre-conditions.
   *
   * HTTP Mapping: 403 Forbidden
   */
  PermissionDenied = 'PERMISSION_DENIED',
  /**
   * The request does not have valid authentication credentials.
   *
   * This is intended to be returned only for routes that require
   * authentication.
   *
   * HTTP Mapping: 401 Unauthorized
   */
  Unauthenticated = 'UNAUTHENTICATED',
  /**
   * Currently Unavailable.
   *
   * The service is currently unavailable.  This is most likely a
   * transient condition, which can be corrected by retrying with
   * a backoff.
   *
   * HTTP Mapping: 503 Unavailable
   */
  Unavailable = 'UNAVAILABLE',
  /**
   * Unknown error.
   *
   * For example, this error may be returned when
   * an error code received from another address space belongs to
   * an error space that is not known in this address space.  Also
   * errors raised by APIs that do not return enough error information
   * may be converted to this error.
   *
   * If a client sees an unknown errorType, it will be interpreted as UNKNOWN.
   * Unknown errors MUST NOT trigger any special behavior. These MAY be treated
   * by an implementation as being equivalent to INTERNAL.
   *
   * When possible, a more specific error should be provided.
   *
   * HTTP Mapping: 520 Unknown Error
   */
  Unknown = 'UNKNOWN'
};

/** 通用文件请求 */
export type FileInput = {
  /** 文件 MIME 类型 */
  contentType: Scalars['String'];
  /** 文件ID */
  fileId: Scalars['String'];
  /** 文件名称 */
  fileName: Scalars['String'];
  /** 文件上传时间 GMT+8 yyyy-MM-dd HH:mm:ss */
  fileUploadTime: Scalars['Long'];
  /** 文件地址 */
  fileUrl: Scalars['String'];
};

/** 通用文件响应 */
export type FilePayload = {
  __typename?: 'FilePayload';
  /** 文件 MIME 类型 */
  contentType: Scalars['String'];
  /** 文件ID */
  fileId: Scalars['String'];
  /** 文件名称 */
  fileName: Scalars['String'];
  /** 文件上传时间 GMT+8 yyyy-MM-dd HH:mm:ss */
  fileUploadTime: Scalars['Long'];
  /** 文件地址 */
  fileUrl: Scalars['String'];
};

export type FrontEndCategoryPayload = {
  __typename?: 'FrontEndCategoryPayload';
  /** 状态 */
  enable?: Maybe<EnableEnum>;
  /** 前端类目ID */
  frontEndCategoryId?: Maybe<Scalars['ID']>;
  /** 前端类目名称 */
  frontEndCategoryName?: Maybe<Scalars['String']>;
  /** 类目图标 */
  icon?: Maybe<Array<Maybe<FilePayload>>>;
  /** 二级类目名称列表 */
  secondLayerCategoryName?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FrontEndSecondLayerPayload = {
  __typename?: 'FrontEndSecondLayerPayload';
  /** 关联的后端类目 */
  backendCategories?: Maybe<Array<Maybe<CommodityCategoryPayload>>>;
  /** 状态 */
  enable?: Maybe<EnableEnum>;
  /** 前端类目ID */
  frontEndCategoryId?: Maybe<Scalars['ID']>;
  /** 前端类目名称 */
  frontEndCategoryName?: Maybe<Scalars['String']>;
};

export type GetAppPermissionListInput = {
  /** 应用类型 */
  appType: AppTypeEnum;
};

export type GetChannelCanAddDeliveryMethodInput = {
  /** 渠道ID */
  channelId: Scalars['ID'];
};

export type GetChannelCanAddSaleMethodInput = {
  /** 渠道ID */
  channelId: Scalars['ID'];
};

export type GetPickupAddressListInput = {
  /** 发货地址类型(不要填DELIVERY_WAREHOUSE) */
  addressType: AddressTypeEnum;
};

export type GetSkuOnlineListInput = {
  /** 渠道ID */
  channelId: Scalars['ID'];
  /** 商品ID */
  commodityId: Scalars['ID'];
};

export type GetWalletInfoInput = {
  /** 商家或者客户ID */
  businessId: Scalars['ID'];
  /** 渠道ID */
  channelId: Scalars['ID'];
  /** 账户类型 */
  walletType: WalletTypeEnum;
};

export type GoodsOrderSimplePayload = {
  __typename?: 'GoodsOrderSimplePayload';
  /** 创建时间 */
  createTime?: Maybe<Scalars['Long']>;
  /** 订单号 */
  goodsOrderCode?: Maybe<Scalars['String']>;
  /** 支付时间 */
  paidTime?: Maybe<Scalars['Long']>;
  /** 商品金额明细 */
  price?: Maybe<CommodityOrderPricePayload>;
  /** 商品sku集合 */
  skuList?: Maybe<Array<Maybe<CommodityOrderSkuPayload>>>;
};

export type IndexEnableInput = {
  /** 主键ID */
  id?: InputMaybe<Scalars['ID']>;
  /** 索引名称 */
  indexType?: InputMaybe<Scalars['String']>;
  /** 启禁用状态 */
  targetState: EnableEnum;
};

export type IndexMetaPageInput = {
  pageCurrent?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type IndexMetaPagePayload = {
  __typename?: 'IndexMetaPagePayload';
  /** 当前页码 */
  pageCurrent?: Maybe<Scalars['Int']>;
  /** 条数 */
  pageSize?: Maybe<Scalars['Int']>;
  /** 角色列表 */
  records?: Maybe<Array<Maybe<IndexMetaPayload>>>;
  /** 总记录数 */
  totalRecords?: Maybe<Scalars['Int']>;
};

export type IndexMetaPayload = {
  __typename?: 'IndexMetaPayload';
  /** 索引重建每批次的个数 */
  batch?: Maybe<Scalars['Int']>;
  /** 主键ID */
  id?: Maybe<Scalars['ID']>;
  /** 索引名称 */
  indexType?: Maybe<Scalars['String']>;
  /** 索引mapping结构 */
  mapping?: Maybe<Scalars['String']>;
  /** 副本分片数 */
  numberOfReplicas?: Maybe<Scalars['Int']>;
  /** 主分片数 */
  numberOfShards?: Maybe<Scalars['Int']>;
  /** 索引主键名 */
  pkFieldName?: Maybe<Scalars['String']>;
  /** 索引重建时间 */
  rebuildTime?: Maybe<Scalars['String']>;
  /** 服务提供名，注意一定要grpc+serviceName */
  serverName?: Maybe<Scalars['String']>;
  /** 索引状态 */
  status?: Maybe<Scalars['Boolean']>;
};

export type InitialGroupPayLoad = {
  __typename?: 'InitialGroupPayLoad';
  cities?: Maybe<Array<Maybe<CityPayLoad>>>;
  /** 首字母 */
  initial: Scalars['String'];
};

export type InspectInfoInterface = {
  /** 发货唯一标识 */
  deliveryId?: Maybe<Scalars['ID']>;
  /** 质检信息 */
  inspectInfoList?: Maybe<Array<Maybe<FilePayload>>>;
};

export type IsExitSameRoleNameInput = {
  /** 应用类型 */
  appType: AppTypeEnum;
  /** 角色名称 */
  roleName: Scalars['String'];
};

export type KingKongCategoryPayload = {
  __typename?: 'KingKongCategoryPayload';
  /** 类目ID */
  frontEndCategoryId?: Maybe<Scalars['ID']>;
  /** 前端类目名称 */
  frontEndCategoryName?: Maybe<Scalars['String']>;
  /** 类目图标 */
  icon?: Maybe<Array<Maybe<FilePayload>>>;
  /** 跳转链接（需要制定跳转到哪个二级目录还有其他的参数，和前端商量，待定） */
  jumpUrl?: Maybe<Scalars['String']>;
};

export type LocationPayLoad = {
  __typename?: 'LocationPayLoad';
  /**  市id【根据此id获取区县】 */
  cityId: Scalars['ID'];
  /** 城市名称 */
  cityName: Scalars['String'];
  /** 区县名称 */
  districtName: Scalars['String'];
  /** 维度 */
  lat: Scalars['Float'];
  /** 经度 */
  lng: Scalars['Float'];
  /** 省份名称 */
  provinceName: Scalars['String'];
  /** 位置名称 */
  regionName?: Maybe<Scalars['String']>;
};

export type LocationQueryInput = {
  /** 维度 */
  lat: Scalars['Float'];
  /** 经度 */
  lng: Scalars['Float'];
  /** 位置名称 */
  regionName?: InputMaybe<Scalars['String']>;
};

export type LoginByMiniAccountInput = {
  /** 来源端 */
  appType: AppTypeEnum;
  /** 渠道ID */
  channelId: Scalars['ID'];
  /** 微信手机号获取凭证 */
  code: Scalars['String'];
};

export type LoginByMiniAccountPayload = {
  __typename?: 'LoginByMiniAccountPayload';
  /** 用户Token */
  token: Scalars['String'];
};

export type LoginByPhoneInput = {
  /** 来源端 */
  appType: AppTypeEnum;
  /** 密码 */
  password: Scalars['String'];
  /** 手机号 */
  phone: Scalars['String'];
};

export type LoginByPhonePayload = {
  __typename?: 'LoginByPhonePayload';
  /** 用户Token */
  token: Scalars['String'];
};

export type LogisticsInfoInterface = {
  /** 发货唯一标识 */
  deliveryId?: Maybe<Scalars['ID']>;
  /** 物流信息 */
  logisticsInfo?: Maybe<CommodityOrderLogisticsPayload>;
};

export const enum MarketingUnitEnum {
  /** 箱 */
  BigBox = 'BIG_BOX',
  /** 盒 */
  Box = 'BOX',
  /** 千克 */
  Kg = 'KG',
  /** 件 */
  Piece = 'PIECE'
};

export type MerchantCreateInput = {
  /** 营业执照 */
  businessLicense: Array<InputMaybe<FileInput>>;
  /** 商家名称 */
  merchantName: Scalars['String'];
  /** 手机号码 */
  phone: Scalars['String'];
  /** 配送方式 */
  receiptTypes?: InputMaybe<Array<InputMaybe<ReceiptTypeEnum>>>;
  /** 销售方式 */
  saleMethods?: InputMaybe<Array<InputMaybe<SaleMethodEnum>>>;
  /** 主体名称 */
  subject: Scalars['String'];
};

export type MerchantDeliveryMethodPageInput = {
  /** 分页信息 */
  pageCurrent?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type MerchantDeliveryMethodPagePayload = {
  __typename?: 'MerchantDeliveryMethodPagePayload';
  /** 当前页码 */
  pageCurrent?: Maybe<Scalars['Int']>;
  /** 条数 */
  pageSize?: Maybe<Scalars['Int']>;
  /** 配送方式列表 */
  records?: Maybe<Array<Maybe<MerchantDeliveryMethodPayload>>>;
  /** 总记录数 */
  totalRecords?: Maybe<Scalars['Int']>;
};

export type MerchantDeliveryMethodPayload = {
  __typename?: 'MerchantDeliveryMethodPayload';
  /** 商家Id */
  merchantId: Scalars['ID'];
  /** 商家名称 */
  merchantName: Scalars['String'];
  /** 配送方式 */
  receiptTypes?: Maybe<Array<Maybe<ReceiptTypeEnum>>>;
};

export type MerchantEditInput = {
  /** 营业执照 */
  businessLicense: Array<InputMaybe<FileInput>>;
  /** 商家id */
  merchantId: Scalars['ID'];
  /** 商家名称 */
  merchantName: Scalars['String'];
  /** 手机号码 */
  phone: Scalars['String'];
  /** 配送方式 */
  receiptTypes?: InputMaybe<Array<InputMaybe<ReceiptTypeEnum>>>;
  /** 销售方式 */
  saleMethods?: InputMaybe<Array<InputMaybe<SaleMethodEnum>>>;
  /** 主体名称 */
  subject: Scalars['String'];
};

export type MerchantInfoInterface = {
  /** 商户信息 */
  merchant?: Maybe<CommodityOrderMerchantPayload>;
  /** 商户id */
  merchantId?: Maybe<Scalars['ID']>;
};

export type MerchantPagePayload = {
  __typename?: 'MerchantPagePayload';
  /** 当前页码 */
  pageCurrent?: Maybe<Scalars['Int']>;
  /** 条数 */
  pageSize?: Maybe<Scalars['Int']>;
  /** 结果 */
  records?: Maybe<Array<Maybe<MerchantPayload>>>;
  /** 总记录数 */
  totalRecords?: Maybe<Scalars['Int']>;
};

export type MerchantPayload = {
  __typename?: 'MerchantPayload';
  /** 营业执照 */
  businessLicense?: Maybe<Array<Maybe<FilePayload>>>;
  /** 责任人姓名 */
  legalPersonName?: Maybe<Scalars['String']>;
  /** 责任人电话 */
  legalPersonPhone?: Maybe<Scalars['String']>;
  /** 商户ID */
  merchantId?: Maybe<Scalars['ID']>;
  /** 商户名称 */
  name?: Maybe<Scalars['String']>;
  /** 配送方式 */
  receiptTypes?: Maybe<Array<Maybe<ReceiptTypeEnum>>>;
  /** 销售方式 */
  saleMethods?: Maybe<Array<Maybe<SaleMethodEnum>>>;
  /** 主体信息 */
  subject?: Maybe<Scalars['String']>;
};

export type MerchantSaleMethodPageInput = {
  /** 分页信息 */
  pageCurrent?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type MerchantSaleMethodPagePayload = {
  __typename?: 'MerchantSaleMethodPagePayload';
  /** 当前页码 */
  pageCurrent?: Maybe<Scalars['Int']>;
  /** 条数 */
  pageSize?: Maybe<Scalars['Int']>;
  /** 销售方式列表 */
  records?: Maybe<Array<Maybe<MerchantSaleMethodPayload>>>;
  /** 总记录数 */
  totalRecords?: Maybe<Scalars['Int']>;
};

export type MerchantSaleMethodPayload = {
  __typename?: 'MerchantSaleMethodPayload';
  /** 商家Id */
  merchantId?: Maybe<Scalars['ID']>;
  /** 商家名称 */
  merchantName?: Maybe<Scalars['String']>;
  /** 销售方式 */
  saleMethods?: Maybe<Array<Maybe<SaleMethodEnum>>>;
};

export type MerchantStorePayload = {
  __typename?: 'MerchantStorePayload';
  /** 地址 */
  address?: Maybe<Scalars['String']>;
  /** 公告 */
  announcement?: Maybe<Scalars['String']>;
  /** 商家logo */
  logo?: Maybe<Array<Maybe<FilePayload>>>;
  /** 证件文件 */
  merchantCertificate?: Maybe<Array<Maybe<FilePayload>>>;
  /** 商家名称 */
  merchantName?: Maybe<Scalars['String']>;
  /** 店铺名称 */
  storeName?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** 配送方式:渠道添加配送方式 */
  addChannelDeliveryMethod?: Maybe<Scalars['Boolean']>;
  /** 销售方式:新增渠道销售方式 */
  addChannelSaleMethod?: Maybe<Scalars['Boolean']>;
  /** 商品规格相关:新增规格 */
  addCommoditySku?: Maybe<Scalars['ID']>;
  /** 配送方式:(已删除)渠道/商家WEB添加配送方式 */
  addDeliveryMethod?: Maybe<Scalars['Boolean']>;
  /** 前台类目管理:新增一级前台类目 */
  addFrontEndCategory?: Maybe<Scalars['Long']>;
  /** 索引相关接口:添加索引 */
  addIndexMeta?: Maybe<Scalars['Boolean']>;
  /** 前台类目管理:新增二级类目 */
  addSecondLayerFrontEndCategory?: Maybe<Scalars['Boolean']>;
  /** 商城app:进货单-添加进货单 */
  addShoppingCart?: Maybe<Scalars['Boolean']>;
  /** 客户: 申请加入企业 */
  applyJoinEnterprise: Scalars['ID'];
  /** 商品相关接口:商品审核 */
  auditCommodity?: Maybe<Scalars['Boolean']>;
  /** 商家运营app: 售后-商家售后处理 */
  businessAfterSalesOrderHandle: Scalars['Boolean'];
  /** 商家运营app: 订单中心-快速修改价格【包括增加 减少】 */
  businessCommodityOrderChangeAmount?: Maybe<Scalars['Boolean']>;
  /** 商家运营app: 订单中心-精细修改价格【包括增加 减少整单 + 修改单价】 */
  businessCommodityOrderChangeAmountDetail?: Maybe<Scalars['Boolean']>;
  /** 商家运营app: 订单中心-关闭订单 */
  businessCommodityOrderClose?: Maybe<Scalars['Boolean']>;
  /** 商家运营app: 订单发货 */
  businessCommodityOrderDelivery?: Maybe<Scalars['ID']>;
  /** 商家运营app: 订单发货编辑 */
  businessCommodityOrderDeliveryEdit?: Maybe<Scalars['ID']>;
  /** 商家运营app: 扫码提货-核销商品订单 */
  businessCommodityOrderVerify?: Maybe<Scalars['Boolean']>;
  /** 渠道web-商家管理: (已删除) 新增 */
  channelCreateMerchant?: Maybe<Scalars['ID']>;
  /** 渠道web-商家管理: (已删除) 编辑 */
  channelEditeMerchant?: Maybe<Scalars['Boolean']>;
  /** 渠道web-商家管理: (已删除) 发送验证码 */
  channelSendCaptcha?: Maybe<Scalars['Boolean']>;
  /** 渠道web-商家管理:(已删除)  校验手机验证码 */
  channelValidCaptcha?: Maybe<Scalars['Boolean']>;
  /** 用户: 选择商家、客户、渠道 */
  chooseCurrentUse: Scalars['Boolean'];
  /** 商品相关接口:商品更新 */
  commodityRefresh?: Maybe<Scalars['Boolean']>;
  /** 商品相关接口:商品上架 */
  commodityToOnline?: Maybe<CommodityToOnlinePayload>;
  /** 收银台: 确认支付 */
  confirmPayment?: Maybe<Scalars['Boolean']>;
  /** 员工管理: 新增员工  */
  createAccount?: Maybe<Scalars['ID']>;
  /** 平台管理web-渠道管理: 创建渠道 */
  createChannel?: Maybe<Scalars['ID']>;
  /** 商品相关接口:新建商品 */
  createCommodity?: Maybe<Scalars['ID']>;
  /** 发货仓管理:新增发货仓 */
  createDeliveryWarehouse?: Maybe<Scalars['ID']>;
  /** 商家管理:新增 */
  createMerchant?: Maybe<Scalars['ID']>;
  /** 发货地址相关接口:新建发货地址 */
  createPickUpAddress?: Maybe<Scalars['ID']>;
  /** 角色相关的操作:创建角色名称 */
  createRole?: Maybe<Scalars['ID']>;
  /** OBS: 生成临时安全凭证 */
  createTemporaryAccessKey?: Maybe<TemporaryAccessKeyPayload>;
  /** 代运营管理: 批量新增代运营商家 */
  createThirdPartnerMerchantBatch?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** 代运营管理: 添加代运营 */
  createThirdPartnerUser?: Maybe<Scalars['ID']>;
  /** 钱包相关接口:新建账户接口 */
  createWallet?: Maybe<Scalars['Long']>;
  /** 商城app: 订单中心-提交订单 */
  customerApplyCommodityOrder?: Maybe<CustomerApplyCommodityOrderResultPayload>;
  /** 商城app: 订单中心-申请请求id(幂等操作) */
  customerApplyReqId?: Maybe<Scalars['ID']>;
  /** 商城app: 订单中心-取消订单 */
  customerCancelCommodityOrder?: Maybe<Scalars['Boolean']>;
  /** 商城app: 订单中心-客户确认收货 */
  customerConfirmReceipt?: Maybe<Scalars['Boolean']>;
  /** 商城app: 售后-发起售后 */
  customerCreateAfterSale: Scalars['Boolean'];
  /** 前台类目管理:删除前台类目(一级、二级类目的启禁用状态变更都用此接口) */
  delFrontEndCategory?: Maybe<Scalars['Boolean']>;
  /** 员工管理: 删除员工 */
  deleteAccount?: Maybe<Scalars['Boolean']>;
  /** 栏目: 删除 */
  deleteColumn: Scalars['Boolean'];
  /** 内容管理: 删除 */
  deleteContent: Scalars['Boolean'];
  /** 页面配置详情: 删除 */
  deletePageSetupDetail: Scalars['Boolean'];
  /** 用户收货地址: 删除收货地址 */
  deleteReceivingAddress: Scalars['Boolean'];
  /** 角色相关的操作:删除角色 */
  deleteRole?: Maybe<Scalars['Boolean']>;
  /** 商城app:进货单-删除进货单多个sku */
  deleteShoppingCart?: Maybe<Scalars['Boolean']>;
  /** 代运营管理: 删除代运营商家 */
  deleteThirdPartnerMerchant?: Maybe<Scalars['Boolean']>;
  /** 代运营管理: 删除代运营 */
  deleteThirdPartnerUser?: Maybe<Scalars['Boolean']>;
  /** 员工管理: 编辑员工 */
  editAccount?: Maybe<Scalars['Boolean']>;
  /** 员工管理: 编辑员工角色 */
  editAccountRole?: Maybe<Scalars['Boolean']>;
  /** 平台管理web-渠道管理: 编辑渠道 */
  editChannel?: Maybe<Scalars['Boolean']>;
  /** 栏目: 编辑 */
  editColumn: Scalars['Boolean'];
  /** 商品相关接口:编辑商品 */
  editCommodity?: Maybe<Scalars['Boolean']>;
  /** 商品规格相关:编辑规格 */
  editCommoditySku?: Maybe<Scalars['Boolean']>;
  /** 内容管理: 编辑 */
  editContent: Scalars['Boolean'];
  /** 发货仓管理:编辑发货仓 */
  editDeliveryWarehouse?: Maybe<Scalars['Boolean']>;
  /** 前台类目管理:编辑前台类目 */
  editFrontEndCategory?: Maybe<Scalars['Boolean']>;
  /** 索引相关接口:编辑索引 */
  editIndexMeta?: Maybe<Scalars['Boolean']>;
  /** 页面配置详情: 编辑配置 */
  editPageSetupDetail: Scalars['Boolean'];
  /** 页面配置: 状态变更 */
  editPageSetupStatus: Scalars['Boolean'];
  /** 发货地址相关接口:编辑发货地址 */
  editPickUpAddress?: Maybe<Scalars['Boolean']>;
  /** 内容管理: 发布状态变更 */
  editReleaseStatus: Scalars['Boolean'];
  /** 角色相关的操作:修改角色名 */
  editRoleName?: Maybe<Scalars['Boolean']>;
  /** 权限相关的操作接口:编辑角色权限 */
  editRolePermission?: Maybe<Scalars['Boolean']>;
  /** 前台类目管理:编辑二级类目 */
  editSecondLayerFrontEndCategory?: Maybe<Scalars['Boolean']>;
  /** 栏目: 状态变更 */
  editStatus: Scalars['Boolean'];
  /** 商家管理:编辑 */
  editeMerchant?: Maybe<Scalars['Boolean']>;
  /** 员工管理: 启用禁用 */
  enableAccount?: Maybe<Scalars['Boolean']>;
  /** 商品规格相关:启用/禁用规格 */
  enableCommoditySku?: Maybe<Scalars['Boolean']>;
  /** 发货仓管理:启用/禁用发货仓 */
  enableDeliveryWarehouse?: Maybe<Scalars['Boolean']>;
  /** 前台类目管理:启用/禁用前台类目(一级、二级类目的启禁用状态变更都用此接口) */
  enableFrontEndCategory?: Maybe<Scalars['Boolean']>;
  /** 索引相关接口:启用禁用 */
  enableIndex?: Maybe<Scalars['Boolean']>;
  /** 发货地址相关接口:更新发货地址状态 */
  enablePickUpAddress?: Maybe<Scalars['Boolean']>;
  /** 角色相关的操作:更新角色状态 */
  enableRole?: Maybe<Scalars['Boolean']>;
  /** 客户: 企业认证 */
  enterpriseAuth: Scalars['ID'];
  /** 用户: 小程序登录 */
  loginByMiniAccount: LoginByMiniAccountPayload;
  /** 用户: web端使用手机号和密码登录 */
  loginByPhone: LoginByPhonePayload;
  /** 用户: 注销登录 */
  logout: Scalars['Boolean'];
  /** 客户: 个人认证 */
  personalAuth: Scalars['Boolean'];
  /** 商品相关接口:商品上下架 */
  publishCommodity?: Maybe<Scalars['Boolean']>;
  /** 索引相关接口:重建索引 */
  reIndexOn?: Maybe<Scalars['Boolean']>;
  /** 用户: 刷新token */
  refreshToken: RefreshTokenPayload;
  /** 用户: 设置密码 */
  resetPassword: Scalars['Boolean'];
  /** 栏目: 保存 */
  saveColumn: Scalars['ID'];
  /** 内容管理: 保存 */
  saveContent: Scalars['ID'];
  /** 库存调整: 保存库存调整 */
  saveInventoryAdjustment: Scalars['Boolean'];
  /** OBS: 保存文件数据 */
  saveObsFile?: Maybe<SaveFilePayload>;
  /** 用户收货地址: 新增或修改收货地址 */
  saveOrUpdateReceivingAddress: Scalars['Boolean'];
  /** 页面配置详情: 添加配置 */
  savePageSetupDetail: Scalars['ID'];
  /** 用户: 完善个人信息 */
  saveUserInfo: Scalars['Boolean'];
  /** 商家管理:发送验证码 */
  sendCaptcha?: Maybe<Scalars['Boolean']>;
  /** 用户: 设置密码获取验证码 */
  sendResetPwdSms: Scalars['Boolean'];
  /** 前台类目管理:调整一级前台类目排序 */
  sortFrontEndCategory?: Maybe<Scalars['Boolean']>;
  /** 商品相关接口:提交商品 */
  submitCommodity?: Maybe<Scalars['Boolean']>;
  /** 内容管理: 提交内容 */
  submitContent: Scalars['Boolean'];
  /** 商城app:进货单-修改进货单sku数量 */
  updateShoppingCartQuantity?: Maybe<Scalars['Boolean']>;
  /** 商城app:进货单-修改配送方式 */
  updateShoppingCartReceiptInfo?: Maybe<Scalars['Boolean']>;
  /** 商城app:进货单-修改规格 */
  updateShoppingCartSpec?: Maybe<Scalars['Boolean']>;
  /** 员工管理: 校验员工手机号是否存在-true不存在，false存在 */
  validAccountPhone?: Maybe<Scalars['Boolean']>;
  /** 商家管理:校验手机验证码 */
  validCaptcha?: Maybe<Scalars['Boolean']>;
  /** 钱包相关接口:钱包充值接口 */
  walletRecharge?: Maybe<Scalars['Boolean']>;
  /** 商品相关接口:商家撤回商品 */
  withdrawCommodity?: Maybe<Scalars['Boolean']>;
};


export type MutationAddChannelDeliveryMethodArgs = {
  input?: InputMaybe<Array<InputMaybe<AddChannelDeliveryMethodInput>>>;
};


export type MutationAddChannelSaleMethodArgs = {
  input?: InputMaybe<Array<InputMaybe<AddChannelSaleMethodInput>>>;
};


export type MutationAddCommoditySkuArgs = {
  input?: InputMaybe<AddSkuInput>;
};


export type MutationAddDeliveryMethodArgs = {
  input?: InputMaybe<AddDeliveryMethodInput>;
};


export type MutationAddFrontEndCategoryArgs = {
  input?: InputMaybe<AddFrontEndCategoryInput>;
};


export type MutationAddIndexMetaArgs = {
  input?: InputMaybe<AddIndexMetaInput>;
};


export type MutationAddSecondLayerFrontEndCategoryArgs = {
  input?: InputMaybe<AddSecondLayerFrontEndCategoryInput>;
};


export type MutationAddShoppingCartArgs = {
  input?: InputMaybe<BatchShoppingCartInput>;
};


export type MutationApplyJoinEnterpriseArgs = {
  id: Scalars['ID'];
};


export type MutationAuditCommodityArgs = {
  input?: InputMaybe<AuditCommodityInput>;
};


export type MutationBusinessAfterSalesOrderHandleArgs = {
  input?: InputMaybe<AfterSalesOrderHandleInput>;
};


export type MutationBusinessCommodityOrderChangeAmountArgs = {
  input?: InputMaybe<OrderChangeAmountDetailInput>;
};


export type MutationBusinessCommodityOrderChangeAmountDetailArgs = {
  input?: InputMaybe<OrderChangeAmountDetailInput>;
};


export type MutationBusinessCommodityOrderCloseArgs = {
  commodityOrderId: Scalars['ID'];
};


export type MutationBusinessCommodityOrderDeliveryArgs = {
  input?: InputMaybe<CommodityOrderDeliveryInput>;
};


export type MutationBusinessCommodityOrderDeliveryEditArgs = {
  input?: InputMaybe<CommodityOrderDeliveryEditInput>;
};


export type MutationBusinessCommodityOrderVerifyArgs = {
  commodityOrderId: Scalars['ID'];
};


export type MutationChannelCreateMerchantArgs = {
  input?: InputMaybe<MerchantCreateInput>;
};


export type MutationChannelEditeMerchantArgs = {
  input?: InputMaybe<MerchantEditInput>;
};


export type MutationChannelSendCaptchaArgs = {
  phone: Scalars['String'];
};


export type MutationChannelValidCaptchaArgs = {
  input?: InputMaybe<ValidCaptchaInput>;
};


export type MutationChooseCurrentUseArgs = {
  input: ChooseCurrentUseInput;
};


export type MutationCommodityRefreshArgs = {
  commodityId: Scalars['ID'];
};


export type MutationCommodityToOnlineArgs = {
  input?: InputMaybe<CommodityToOnlineInput>;
};


export type MutationConfirmPaymentArgs = {
  input: ConfirmPaymentInput;
};


export type MutationCreateAccountArgs = {
  input?: InputMaybe<AccountCreateInput>;
};


export type MutationCreateChannelArgs = {
  input?: InputMaybe<ChannelCreateInput>;
};


export type MutationCreateCommodityArgs = {
  input?: InputMaybe<CreateCommodityInput>;
};


export type MutationCreateDeliveryWarehouseArgs = {
  input?: InputMaybe<CreateDeliveryWarehouseInput>;
};


export type MutationCreateMerchantArgs = {
  input?: InputMaybe<MerchantCreateInput>;
};


export type MutationCreatePickUpAddressArgs = {
  input?: InputMaybe<CreateUpAddressInput>;
};


export type MutationCreateRoleArgs = {
  input?: InputMaybe<CreateRoleInput>;
};


export type MutationCreateTemporaryAccessKeyArgs = {
  input?: InputMaybe<TemporaryAccessKeyInput>;
};


export type MutationCreateThirdPartnerMerchantBatchArgs = {
  input?: InputMaybe<ThirdPartnerMerchantBatchInput>;
};


export type MutationCreateThirdPartnerUserArgs = {
  input?: InputMaybe<ThirdPartnerUserCreateInput>;
};


export type MutationCreateWalletArgs = {
  input?: InputMaybe<CreateWalletInput>;
};


export type MutationCustomerApplyCommodityOrderArgs = {
  input?: InputMaybe<CustomerCommodityOrderApplyInput>;
};


export type MutationCustomerCancelCommodityOrderArgs = {
  input?: InputMaybe<CustomerCancelCommodityOrderInput>;
};


export type MutationCustomerConfirmReceiptArgs = {
  commodityOrderId: Scalars['ID'];
};


export type MutationCustomerCreateAfterSaleArgs = {
  input: Array<CreateAfterSaleInput>;
};


export type MutationDelFrontEndCategoryArgs = {
  frontEndCategoryId: Scalars['ID'];
};


export type MutationDeleteAccountArgs = {
  accountId: Scalars['ID'];
};


export type MutationDeleteColumnArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type MutationDeleteContentArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePageSetupDetailArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteReceivingAddressArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteRoleArgs = {
  input?: InputMaybe<DeleteRoleInput>;
};


export type MutationDeleteShoppingCartArgs = {
  input?: InputMaybe<ShoppingCartDeleteInput>;
};


export type MutationDeleteThirdPartnerMerchantArgs = {
  merchantId?: InputMaybe<Scalars['ID']>;
};


export type MutationDeleteThirdPartnerUserArgs = {
  accountId: Scalars['ID'];
};


export type MutationEditAccountArgs = {
  input?: InputMaybe<AccountEditInput>;
};


export type MutationEditAccountRoleArgs = {
  input?: InputMaybe<AccountRoleEditInput>;
};


export type MutationEditChannelArgs = {
  input?: InputMaybe<ChannelEditInput>;
};


export type MutationEditColumnArgs = {
  input: OperationColumnInput;
};


export type MutationEditCommodityArgs = {
  input?: InputMaybe<EditCommodityInput>;
};


export type MutationEditCommoditySkuArgs = {
  input?: InputMaybe<EditSkuInput>;
};


export type MutationEditContentArgs = {
  input: OperationContentInput;
};


export type MutationEditDeliveryWarehouseArgs = {
  input?: InputMaybe<EditDeliveryWarehouseInput>;
};


export type MutationEditFrontEndCategoryArgs = {
  input?: InputMaybe<EditFrontEndCategoryInput>;
};


export type MutationEditIndexMetaArgs = {
  input?: InputMaybe<EditIndexMetaInput>;
};


export type MutationEditPageSetupDetailArgs = {
  input: OperationPageSetupDetailInput;
};


export type MutationEditPageSetupStatusArgs = {
  input?: InputMaybe<BoolValueInput>;
};


export type MutationEditPickUpAddressArgs = {
  input?: InputMaybe<EditPickUpAddressInput>;
};


export type MutationEditReleaseStatusArgs = {
  input: BoolValueInput;
};


export type MutationEditRoleNameArgs = {
  input?: InputMaybe<EditRoleNameInput>;
};


export type MutationEditRolePermissionArgs = {
  input?: InputMaybe<EditRolePermissionInput>;
};


export type MutationEditSecondLayerFrontEndCategoryArgs = {
  input?: InputMaybe<EditSecondLayerFrontEndCategoryInput>;
};


export type MutationEditStatusArgs = {
  input: BoolValueInput;
};


export type MutationEditeMerchantArgs = {
  input?: InputMaybe<MerchantEditInput>;
};


export type MutationEnableAccountArgs = {
  input?: InputMaybe<AccountEnableInput>;
};


export type MutationEnableCommoditySkuArgs = {
  input?: InputMaybe<EnableSkuInput>;
};


export type MutationEnableDeliveryWarehouseArgs = {
  input?: InputMaybe<EnableDeliveryWarehouseInput>;
};


export type MutationEnableFrontEndCategoryArgs = {
  input?: InputMaybe<EnableFrontEndCategoryInput>;
};


export type MutationEnableIndexArgs = {
  input?: InputMaybe<IndexEnableInput>;
};


export type MutationEnablePickUpAddressArgs = {
  input?: InputMaybe<PickUpAddressEnableInput>;
};


export type MutationEnableRoleArgs = {
  input?: InputMaybe<RoleEnableInput>;
};


export type MutationEnterpriseAuthArgs = {
  input: EnterpriseAuthInput;
};


export type MutationLoginByMiniAccountArgs = {
  input: LoginByMiniAccountInput;
};


export type MutationLoginByPhoneArgs = {
  input: LoginByPhoneInput;
};


export type MutationPersonalAuthArgs = {
  input: PersonalAuthInput;
};


export type MutationPublishCommodityArgs = {
  input?: InputMaybe<PublishCommodityInput>;
};


export type MutationReIndexOnArgs = {
  indexType: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  input: ResetPasswordInput;
};


export type MutationSaveColumnArgs = {
  input: OperationColumnInput;
};


export type MutationSaveContentArgs = {
  input: OperationContentInput;
};


export type MutationSaveInventoryAdjustmentArgs = {
  input: SaveInventoryAdjustmentInput;
};


export type MutationSaveObsFileArgs = {
  input?: InputMaybe<SaveFileInput>;
};


export type MutationSaveOrUpdateReceivingAddressArgs = {
  input: OperationReceivingAddressInput;
};


export type MutationSavePageSetupDetailArgs = {
  input: OperationPageSetupDetailInput;
};


export type MutationSaveUserInfoArgs = {
  input: SaveUserInfoInput;
};


export type MutationSendCaptchaArgs = {
  phone: Scalars['String'];
};


export type MutationSendResetPwdSmsArgs = {
  input: SendResetPwdSmsInput;
};


export type MutationSortFrontEndCategoryArgs = {
  frontEndCategoryIdList: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationSubmitCommodityArgs = {
  input?: InputMaybe<SubmitCommodityInput>;
};


export type MutationSubmitContentArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateShoppingCartQuantityArgs = {
  input?: InputMaybe<ShoppingCartUpdateInput>;
};


export type MutationUpdateShoppingCartReceiptInfoArgs = {
  input?: InputMaybe<ShoppingCartUpdateReceiptInfoInput>;
};


export type MutationUpdateShoppingCartSpecArgs = {
  input?: InputMaybe<ShoppingCartUploadInput>;
};


export type MutationValidAccountPhoneArgs = {
  phone: Scalars['String'];
};


export type MutationValidCaptchaArgs = {
  input?: InputMaybe<ValidCaptchaInput>;
};


export type MutationWalletRechargeArgs = {
  input?: InputMaybe<WalletRechargeInput>;
};


export type MutationWithdrawCommodityArgs = {
  input?: InputMaybe<WithdrawCommodityInput>;
};

/** 操作栏目请求 */
export type OperationColumnInput = {
  /** 子栏目新增：父栏目ID,编辑：当前编辑栏目ID */
  id?: InputMaybe<Scalars['ID']>;
  /** 栏目名称 */
  name: Scalars['String'];
  /** 展现形式 */
  revealShape: RevealShapeEnum;
  /** 规则 */
  ruleType?: InputMaybe<ColumnRuleTypeEnum>;
};

export type OperationContentInput = {
  /** 栏目ID */
  columnId: Scalars['ID'];
  /** 商品品类ID（MDM） */
  commodityCategoryId?: InputMaybe<Scalars['ID']>;
  /** 内容详情 */
  details?: InputMaybe<Scalars['String']>;
  /** 图片与视频文件资源 */
  fileResources?: InputMaybe<Array<InputMaybe<FileInput>>>;
  /** 内容ID，编辑时传 */
  id?: InputMaybe<Scalars['ID']>;
  /** 简介 */
  introduction?: InputMaybe<Scalars['String']>;
  /** 关键字 */
  keyWord?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** 副标题 */
  subhead?: InputMaybe<Scalars['String']>;
  /** 内容标题 */
  title: Scalars['String'];
};

export type OperationPageSetupDetailInput = {
  /** 对应栏目ID */
  columnId: Scalars['ID'];
  /** 对应模块项的字典Type */
  dictType: Scalars['String'];
  /** 新增：页面配置ID，编辑：页面配置详情ID */
  id: Scalars['ID'];
  /** 对应类型 */
  pageSetupType: PageTypeEnum;
  /** 系统内置类型（模块） */
  systemContentType: Scalars['String'];
};

export type OperationReceivingAddressInput = {
  /** 详细地址 */
  address: Scalars['String'];
  /** 市 */
  city: Scalars['String'];
  /** 市Id */
  cityId: Scalars['ID'];
  /** 区 */
  district: Scalars['String'];
  /** 区Id */
  districtId: Scalars['ID'];
  /** 地址ID,为空新增，不为空则修改 */
  id?: InputMaybe<Scalars['ID']>;
  /** 维度 */
  latitude: Scalars['Float'];
  /** 经度 */
  longitude: Scalars['Float'];
  /** 姓名 */
  name: Scalars['String'];
  /** 手机号 */
  phone: Scalars['String'];
  /** 省 */
  province: Scalars['String'];
  /** 省ID */
  provinceId: Scalars['ID'];
  /** 街道 */
  street: Scalars['String'];
  /** 街道Id */
  streetId: Scalars['ID'];
};

export type OrderChangeAmountDetailInput = {
  /** 订单价格变更类型 */
  amountChangeType?: InputMaybe<AmountChangeTypeEnum>;
  /** 商品变更列表 */
  changeUnitPrice?: InputMaybe<Array<InputMaybe<ChangeUnitPriceInput>>>;
  /** 商品订单ID */
  commodityOrderId?: InputMaybe<Scalars['ID']>;
  /** 附加服务变更金额 */
  extraServiceAmount?: InputMaybe<Scalars['BigDecimal']>;
  /** 运杂费变更金额 */
  freightAmount?: InputMaybe<Scalars['BigDecimal']>;
  /** 备注 */
  remark?: InputMaybe<Scalars['String']>;
  /** 整单优惠 */
  totalAmount?: InputMaybe<Scalars['BigDecimal']>;
};

export type OrderChangeAmountInput = {
  /** skuId */
  skuIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** 变更后单价 */
  unitPrice?: InputMaybe<Scalars['BigDecimal']>;
};

export type OrderCommodityAfterSaleDetailInput = {
  /** 商品订单id */
  commodityOrderId: Scalars['ID'];
  /** skuId */
  skuId: Scalars['ID'];
};

export type OrderCommodityAfterSaleDetailPayload = {
  __typename?: 'OrderCommodityAfterSaleDetailPayload';
  /** 售后记录 */
  afterSaleApplyList?: Maybe<Array<Maybe<AfterSalePayload>>>;
  /** 售后过期时间 */
  afterSaleExpireTime?: Maybe<Scalars['Long']>;
  /** 售后结果 */
  afterSaleResult?: Maybe<AfterSaleResultDetailPayload>;
  /** 售后SKU信息 */
  afterSaleSku?: Maybe<CommodityOrderSkuDetailPayload>;
  /** 是否有售后 */
  hasAfterSale?: Maybe<Scalars['Boolean']>;
};

export type OrderCommodityPayload = {
  __typename?: 'OrderCommodityPayload';
  /** 商品列表 */
  list?: Maybe<Array<Maybe<CommodityOrderSkuPayload>>>;
  /** 订单备注 */
  note?: Maybe<Scalars['String']>;
  /** 总数量 */
  totalQuantity?: Maybe<Scalars['Int']>;
};

export type OrderCustomerPayload = {
  __typename?: 'OrderCustomerPayload';
  /** 客户id */
  customerId?: Maybe<Scalars['ID']>;
  /** 客户名称 */
  customerName?: Maybe<Scalars['String']>;
  /** 客户电话 */
  customerPhone?: Maybe<Scalars['String']>;
};

export const enum OrderMarketingUnitEnum {
  /** 箱 */
  BigBox = 'BIG_BOX',
  /** 盒 */
  Box = 'BOX',
  /** 千克 */
  Kg = 'KG',
  /** 件 */
  Piece = 'PIECE'
};

export type OrderPageListInput = {
  /** 订单号 */
  orderNo?: InputMaybe<Scalars['String']>;
  /** 当前页 */
  pageCurrent?: InputMaybe<Scalars['Int']>;
  /** 每页数量 */
  pageSize?: InputMaybe<Scalars['Int']>;
  /** 订单状态 */
  status?: InputMaybe<CommodityOrderStatusEnum>;
};

export type OrderPageListPayload = {
  __typename?: 'OrderPageListPayload';
  /** 当前页码 */
  pageCurrent?: Maybe<Scalars['Int']>;
  /** 条数 */
  pageSize?: Maybe<Scalars['Int']>;
  /** 结果 */
  records?: Maybe<Array<Maybe<OrderPageListResultPayload>>>;
  /** 总记录数 */
  totalRecords?: Maybe<Scalars['Int']>;
};

export type OrderPageListResultPayload = CommodityOrderCustomerInterface & CommodityOrderInterface & CommodityOrderPaymentInterface & CommodityOrderPriceInterface & CommodityOrderReceiptInterface & CommodityOrderSkuInterface & {
  __typename?: 'OrderPageListResultPayload';
  /** 收货地址 */
  address?: Maybe<CommodityOrderPickUpAddressPayload>;
  /** 商品订单 */
  commodityOrder?: Maybe<CommodityOrderPayload>;
  /** 商品订单ID */
  commodityOrderId?: Maybe<Scalars['ID']>;
  /** 订单客户信息 */
  customer?: Maybe<CommodityOrderCustomerPayload>;
  /** 商品支付信息 */
  payment?: Maybe<CommodityOrderPaymentPayload>;
  /** 商品金额明细 */
  price?: Maybe<CommodityOrderPricePayload>;
  /** 收货信息 */
  receipt?: Maybe<CommodityReceiptPayload>;
  /** 商品sku集合 */
  skuList?: Maybe<Array<Maybe<CommodityOrderSkuPayload>>>;
};

export type OrderRealPaymentPayload = {
  __typename?: 'OrderRealPaymentPayload';
  /** 商家修改金额 */
  changeAmount?: Maybe<Scalars['BigDecimal']>;
  /** 商品金额 */
  commodityAmount?: Maybe<Scalars['BigDecimal']>;
  /** 附加服务金额 */
  extraServiceAmount?: Maybe<Scalars['BigDecimal']>;
  /** 运费金额 */
  freightAmount?: Maybe<Scalars['BigDecimal']>;
};

export type OrderSkuChangeUnitPricePayload = {
  __typename?: 'OrderSkuChangeUnitPricePayload';
  /** 改后价格 */
  afterUnitPrice?: Maybe<Scalars['BigDecimal']>;
  /** 改前价格 */
  beforeUnitPrice?: Maybe<Scalars['BigDecimal']>;
};

export type OrderSkuPricePayload = {
  __typename?: 'OrderSkuPricePayload';
  /** skuID */
  bulk: Scalars['Int'];
  /** sku价格 */
  price: Scalars['BigDecimal'];
};

export type OrderSkuUnitPricePayload = {
  __typename?: 'OrderSkuUnitPricePayload';
  /** sku单价 */
  unitPrice?: Maybe<Scalars['BigDecimal']>;
  /** sku修改后单价 */
  unitPriceChange?: Maybe<Scalars['BigDecimal']>;
};

export type PageColumInput = {
  /** 栏目名称 */
  columnName?: InputMaybe<Scalars['String']>;
};

export type PageContentByTypeInput = {
  /** 渠道ID */
  channelId: Scalars['ID'];
  /** 品类ID */
  commodityCategoryId?: InputMaybe<Scalars['ID']>;
  /** 系统内置类型（模块） */
  systemContentType: Scalars['String'];
};

/** 分页获取内容列表响应对象 */
export type PageContentByTypePayload = {
  __typename?: 'PageContentByTypePayload';
  /** 当前页码 */
  pageCurrent: Scalars['Int'];
  /** 条数 */
  pageSize: Scalars['Int'];
  /** 结果 */
  records: Array<Maybe<ContentByTypePayload>>;
  /** 总记录数 */
  totalRecords: Scalars['Int'];
};

export type PageContentInput = {
  /** 审核状态 */
  auditStatus?: InputMaybe<ContentAuditStatusEnum>;
  /** 栏目名称 */
  columnName?: InputMaybe<Scalars['String']>;
  /** 内容标题 */
  title?: InputMaybe<Scalars['String']>;
};

/** 分页获取内容列表响应对象 */
export type PageContentPayload = {
  __typename?: 'PageContentPayload';
  /** 当前页码 */
  pageCurrent: Scalars['Int'];
  /** 条数 */
  pageSize: Scalars['Int'];
  /** 结果 */
  records: Array<Maybe<ContentPayload>>;
  /** 总记录数 */
  totalRecords: Scalars['Int'];
};

export type PageEnterpriseInfoInput = {
  /** 企业名称 */
  name?: InputMaybe<Scalars['String']>;
};

export type PageEnterpriseInfoPayload = {
  __typename?: 'PageEnterpriseInfoPayload';
  /** 当前页码 */
  pageCurrent: Scalars['Int'];
  /** 条数 */
  pageSize: Scalars['Int'];
  /** 结果 */
  records?: Maybe<Array<Maybe<EnterpriseInfoPayload>>>;
  /** 总记录数 */
  totalRecords: Scalars['Int'];
};

export type PageInput = {
  pageCurrent: Scalars['Int'];
  pageSize: Scalars['Int'];
};

export type PagePageSetupInput = {
  /** appType */
  appType?: InputMaybe<AppTypeEnum>;
  /** 页面，dictKey: page_setup */
  pageSetup?: InputMaybe<Scalars['String']>;
};

/** 分页获取内容列表响应对象 */
export type PagePageSetupPayload = {
  __typename?: 'PagePageSetupPayload';
  /** 当前页码 */
  pageCurrent: Scalars['Int'];
  /** 条数 */
  pageSize: Scalars['Int'];
  /** 结果 */
  records: Array<PageSetupPayload>;
  /** 总记录数 */
  totalRecords: Scalars['Int'];
};

export type PageReceivingAddressInput = {
  /** 姓名/地址 */
  keyword?: InputMaybe<Scalars['String']>;
};

export type PageReceivingAddressPayload = {
  __typename?: 'PageReceivingAddressPayload';
  /** 当前页码 */
  pageCurrent: Scalars['Int'];
  /** 条数 */
  pageSize: Scalars['Int'];
  /** 结果 */
  records?: Maybe<Array<Maybe<ReceivingAddressPayload>>>;
  /** 总记录数 */
  totalRecords: Scalars['Int'];
};

export type PageSetupDetailPayload = {
  __typename?: 'PageSetupDetailPayload';
  /** 对应栏目 */
  column: Array<Maybe<ColumnNamePayload>>;
  /** Detail ID */
  id: Scalars['ID'];
  /** 页面配置ID */
  pageSetupId: Scalars['ID'];
  /** 对应类型 */
  pageSetupType: PageTypeEnum;
  /** 系统内置类型（模块） */
  systemContentType: DictKeyValuePayload;
};

export type PageSetupPayload = {
  __typename?: 'PageSetupPayload';
  /** appType */
  appType: AppTypeEnum;
  /** 配置列表 */
  detailList?: Maybe<Array<Maybe<PageSetupDetailPayload>>>;
  /** 对应模块项的字典Type */
  dictType: Scalars['String'];
  /** 状态： false=未启用  true=启用 */
  enabled: Scalars['Boolean'];
  /** 页面配置ID */
  id: Scalars['ID'];
  /** 页面，dictKey: page_setup */
  pageSetup: DictKeyValuePayload;
  /** 对应栏目规则类型 */
  ruleType: ColumnRuleTypeEnum;
};

/** 分页获取内容列表响应对象 */
export type PageStockLogPayload = {
  __typename?: 'PageStockLogPayload';
  /** 当前页码 */
  pageCurrent: Scalars['Int'];
  /** 条数 */
  pageSize: Scalars['Int'];
  /** 结果 */
  records: Array<Maybe<StockLogPayload>>;
  /** 总记录数 */
  totalRecords: Scalars['Int'];
};

export const enum PageTypeEnum {
  /** 内容 */
  Content = 'CONTENT'
};

export type PageUserMerchantPayload = {
  __typename?: 'PageUserMerchantPayload';
  /** 当前页码 */
  pageCurrent: Scalars['Int'];
  /** 条数 */
  pageSize: Scalars['Int'];
  /** 结果 */
  records?: Maybe<Array<Maybe<UserMerchantPayload>>>;
  /** 总记录数 */
  totalRecords: Scalars['Int'];
};

export const enum PayTypeEnum {
  /** 先用后付 */
  PayLater = 'PAY_LATER',
  /** 钱包 */
  Wallet = 'WALLET'
};

export type PaymentCustomerPayload = {
  __typename?: 'PaymentCustomerPayload';
  /** 客户ID */
  customerId: Scalars['ID'];
  /** 客户类型 */
  customerType: CustomerTypeEnum;
  /** 手机号 */
  mobileNo: Scalars['String'];
};

export const enum PaymentMethodEnum {
  /** 先用后付 */
  PayLater = 'PAY_LATER',
  /** 钱包 */
  Wallet = 'WALLET'
};

export type PaymentMethodInfoPayload = {
  __typename?: 'PaymentMethodInfoPayload';
  /** 余额（只有钱包有） */
  balance?: Maybe<Scalars['BigDecimal']>;
  /** 支付方式 */
  paymentMethod: PaymentMethodEnum;
};

export type PersonalAuthInfoPayload = {
  __typename?: 'PersonalAuthInfoPayload';
  /** 身份证号码 */
  idCardNo: Scalars['String'];
  /** 手机号码 */
  mobileNo: Scalars['String'];
  /** 姓名 */
  name: Scalars['String'];
};

export type PersonalAuthInput = {
  /** 身份证号码 */
  idCardNo: Scalars['String'];
  /** 姓名 */
  name: Scalars['String'];
};

export type PickUpAddressEnableInput = {
  /** 自提地址ID */
  pickUpAddressId?: InputMaybe<Scalars['ID']>;
  /** 启禁用状态 */
  targetState: EnableEnum;
};

export type PickUpAddressInput = {
  addressType: AddressTypeEnum;
  /** 分页信息 */
  pageCurrent?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type PickUpAddressPagePayload = {
  __typename?: 'PickUpAddressPagePayload';
  /** 当前页码 */
  pageCurrent?: Maybe<Scalars['Int']>;
  /** 条数 */
  pageSize?: Maybe<Scalars['Int']>;
  /** 角色列表 */
  records?: Maybe<Array<Maybe<PickUpAddressPayload>>>;
  /** 总记录数 */
  totalRecords?: Maybe<Scalars['Int']>;
};

export type PickUpAddressPayload = {
  __typename?: 'PickUpAddressPayload';
  /** 区域编码 */
  adCode?: Maybe<Scalars['String']>;
  /** 地址类型 */
  addressType?: Maybe<AddressTypeEnum>;
  /** 市ID */
  cityId?: Maybe<Scalars['ID']>;
  /** 市名称 */
  cityName?: Maybe<Scalars['String']>;
  /** 联系人 */
  contact?: Maybe<Scalars['String']>;
  /** 国家ID */
  countryId?: Maybe<Scalars['ID']>;
  /** 国家名称 */
  countryName?: Maybe<Scalars['String']>;
  /** 详细地址 */
  detailedAddress?: Maybe<Scalars['String']>;
  /** 区ID */
  districtId?: Maybe<Scalars['ID']>;
  /** 区名称 */
  districtName?: Maybe<Scalars['String']>;
  /** 纬度 */
  latitude?: Maybe<Scalars['Float']>;
  /** 经度 */
  longitude?: Maybe<Scalars['Float']>;
  /** 联系电话 */
  mobileNo?: Maybe<Scalars['String']>;
  /** 发货地址ID */
  pickUpAddressId?: Maybe<Scalars['ID']>;
  /** 省份 */
  provinceId?: Maybe<Scalars['ID']>;
  /** 省份名称 */
  provinceName?: Maybe<Scalars['String']>;
  /** 状态 */
  status?: Maybe<EnableEnum>;
};

export type ProvincePayLoad = {
  __typename?: 'ProvincePayLoad';
  countryId: Scalars['ID'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type PublishCommodityInput = {
  /** 商品ID */
  commodityIds: Array<InputMaybe<Scalars['ID']>>;
  /** 上下架 */
  targetPublishStatus: CommodityPublishStatusEnum;
};

export type Query = {
  __typename?: 'Query';
  /** 员工管理:详情 */
  accountDetail?: Maybe<AccountPayload>;
  /** 员工管理:分页 */
  accountPage?: Maybe<AccountPagePayload>;
  /** 员工管理:可用角色 */
  accountRoleSelect?: Maybe<Array<Maybe<SelectTextOption>>>;
  /** 商城app-商家店铺: 商家月销 */
  appMerchantMonthSales?: Maybe<Scalars['Int']>;
  /** 商城app-商家店铺: 商家店铺详情 */
  appMerchantStoreDetail?: Maybe<MerchantStorePayload>;
  /** 商家运营app: 售后-详情 */
  businessAfterSalesOrderDetail?: Maybe<AfterSalesOrderPayload>;
  /** 商家运营app: 售后-售后单分页查询 */
  businessAfterSalesOrderPage?: Maybe<AfterSalesOrderPagePayload>;
  /** 商家运营app: 售后-售后记录查询  是否需要排除？ 排除当前？ 那如果查看 历史的 售后记录， 那这是 展示的  售后记录又是？ */
  businessAfterSalesOrderRecords?: Maybe<Array<Maybe<AfterSalesOrderPayload>>>;
  /** 商家运营app: 订单中心-订单详情 */
  businessCommodityOrderDetail?: Maybe<BusinessOrderDetailPayLoad>;
  /** 商家运营app：首页-统计 */
  businessHomePageStatistics?: Maybe<BusinessHomePageStatisticsPayload>;
  /** 商家运营app：订单中心-订单分页列表 */
  businessOrderPageList?: Maybe<OrderPageListPayload>;
  /** 商家运营app: 扫码提货-提货码提货 */
  businessRouteCommodityOrderByPickCode?: Maybe<Scalars['ID']>;
  /** 渠道web-商家管理:(已删除) 详情 */
  channelMerchantDetail?: Maybe<MerchantPayload>;
  /** 渠道web-商家管理:(已删除) 分页 */
  channelMerchantPage?: Maybe<MerchantPagePayload>;
  /** 商品相关接口:获取商品关联的发货仓信息 */
  commodityDeliveryWarehouseInfo?: Maybe<DeliveryInfo>;
  /** 商品相关接口:管理后台中商品管理中获取商品详情 */
  commodityDetail?: Maybe<CommodityDetailPayload>;
  /** 商品相关接口:小程序在线商品详情 */
  commodityOnlineDetail?: Maybe<CommodityOnlineDetailPayload>;
  /** 商品相关接口:小程序中的在线商品搜索列表接口（首页商品列表，搜索页商品列表，店铺商品列表页） */
  commodityOnlinePage?: Maybe<CommodityOnlinePagePayload>;
  /** 商品相关接口:管理后台中商品管理中的商品列表 */
  commodityPage?: Maybe<CommodityPagePayload>;
  /** 栏目: 根据栏目ID统计关联的内容数量 */
  countContentByColumnId: Scalars['Int'];
  createUser?: Maybe<Scalars['String']>;
  /** 商城app: 售后-获取订单下某个sku可申请售后信息 */
  customerAfterSaleMaxInfo?: Maybe<AfterSaleMaxBatchPayload>;
  /** 商城app-获取订单已发货，待发货数量 */
  customerCommodityOrderDeliveryQuantity?: Maybe<Array<Maybe<CustomerCommodityDeliveryQuantityPayload>>>;
  /** 商城app: 订单中心-订单详情 */
  customerCommodityOrderDetail?: Maybe<CustomerCommodityOrderDetailPayload>;
  /** 商城app: 订单中心-订单关键字搜索记录 */
  customerCommodityOrderKeySearchHistory?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** 商城app: 订单中心-订单分页/搜索 */
  customerCommodityOrderPage?: Maybe<CustomerCommodityOrderPagePayload>;
  /** 商城app-获取订单价格 */
  customerCommodityOrderPrice?: Maybe<CustomerCommodityOrderPricePayload>;
  /** 商城app: 订单中心-收货码查询 */
  customerCommodityOrderReceiptCode?: Maybe<CustomerCommodityOrderReceiptCodePayload>;
  /** 商城app: 售后-获取当前售后详情 */
  customerGetAfterSaleDetail?: Maybe<AfterSalePayload>;
  /** 商城app: 订单列表-退款售后type-订单售后分页列表 */
  customerGetAfterSalesPageList: AfterSalePageListPayload;
  /** 商城app: 售后-订单商品维度下售后信息 */
  customerOrderCommodityAfterSaleDetail?: Maybe<OrderCommodityAfterSaleDetailPayload>;
  /** 商城app: 订单中心-数量统计 */
  customerOrderQuantity?: Maybe<CustomerOrderQuantityPayload>;
  /** 商城app: 订单中心-服务器时间获取(用于订单过期时间校验计算) */
  customerServerTime?: Maybe<Scalars['Long']>;
  /** 发货单: 发货单详情 */
  deliveryOrderDetail?: Maybe<DeliveryDetailPayload>;
  /** 发货仓管理:根据ID获取发货仓 */
  deliveryWarehouseDetail?: Maybe<DeliveryWarehouseDetailPayload>;
  /** 发货仓管理:发货仓分页列表 */
  deliveryWarehousePage?: Maybe<DeliveryWarehousePagePayload>;
  /** 发货仓管理:可用发货仓列表 */
  enabledDeliveryWarehouseList?: Maybe<Array<Maybe<DeliveryWarehousePayload>>>;
  /** 平台管理web-渠道管理: 获取所有渠道 */
  getAllChannels?: Maybe<Array<Maybe<Channel>>>;
  /** MDM: 获取所有城市【根据首字母分组】 */
  getAllCitiesGroupByInitial?: Maybe<Array<Maybe<InitialGroupPayLoad>>>;
  /** MDM: 获取后端类目下品牌列表 */
  getAllCommodityBrandByCategoryId?: Maybe<Array<Maybe<CommodityBrandListPayload>>>;
  /** MDM: 获取商品品类下  属性列表 */
  getAllCommodityCategoryProperty?: Maybe<Array<Maybe<CommodityCategoryPropertyListPayload>>>;
  /** MDM: 获取商品品类产地列表 */
  getAllCommodityPlaceOriginByCategoryId?: Maybe<Array<Maybe<CommodityPlaceOriginListPayload>>>;
  /** MDM: 获取所有商品-类型 */
  getAllCommodityType?: Maybe<Array<Maybe<CommodityTypeListPayload>>>;
  /** MDM: 获取级联 [类型/品类/品种] */
  getAllCommodityTypeCascade?: Maybe<Array<Maybe<CascadingCommodityTypeListPayload>>>;
  /** MDM: 获取所有商品-品类[可根据 商品类型id 查询该类型下所有 品类，不传则查询所有品类] */
  getAllCommodityTypeCategory?: Maybe<Array<Maybe<CommodityTypeCategoryListPayload>>>;
  /** MDM: 获取所有商品-品种 */
  getAllCommodityTypeVariety?: Maybe<Array<Maybe<CommodityTypeVarietyListPayload>>>;
  /** MDM: 获取所有国家 */
  getAllCountry?: Maybe<Array<Maybe<CountryPayLoad>>>;
  /** 权限相关的操作接口:查询权限列表 */
  getAppPermissionList?: Maybe<Array<Maybe<AppPermissionPayload>>>;
  /** 配送方式:(已删除)查询渠道WEB/商家WEB可以添加的配送方式列表 */
  getCanAddDeliveryMethod?: Maybe<Array<Maybe<DeliveryMethodPayload>>>;
  /** 前台类目:获取类目树 */
  getCategoryTree?: Maybe<Array<Maybe<CategoryTreePayload>>>;
  /** 配送方式:查询渠道 */
  getChannelCanAddDeliveryMethod?: Maybe<Array<Maybe<ReceiptTypeEnum>>>;
  /** 销售方式:查询渠道可供添加的销售方式 */
  getChannelCanAddSaleMethod?: Maybe<Array<Maybe<SaleMethodEnum>>>;
  /** 配送方式:查询渠道的配送方式 */
  getChannelDeliveryMethod?: Maybe<Array<Maybe<ChannelDeliveryMethodPayload>>>;
  /** 销售方式:查询渠道销售方式 */
  getChannelSaleMethod?: Maybe<Array<Maybe<ChannelSaleMethodPayload>>>;
  /** MDM: 根据查询条件查询【支持 省份id， 是否热门】 */
  getCities?: Maybe<Array<Maybe<CityPayLoad>>>;
  /** 栏目: 根据栏目ID获取子栏目列表 */
  getColumnById?: Maybe<Array<Maybe<SubColumnPayload>>>;
  /** 内容管理: 根据内容ID获取详情 */
  getContentById?: Maybe<ContentPayload>;
  /** 配送方式:(已删除) 查询现有的配送方式（商家WEB，平台WEB，渠道WEB都用这个接口） */
  getDeliveryMethod?: Maybe<Array<Maybe<DeliveryMethodPayload>>>;
  /** 数据字典: 根据字典类型批量获取字典数据项 */
  getDictByTypeList: Array<Maybe<SystemDictPayload>>;
  /** MDM: 根据城市获取区县【不传城市id则查所有区县】 */
  getDistrictByCityId?: Maybe<Array<Maybe<DistrictPayLoad>>>;
  /** 前台类目管理:获取第一级级类目列表（前台类目的Id统一用变量名FrontEndCategoryId，后台类目使用变量名categoryId） */
  getFrontEndCategories?: Maybe<Array<Maybe<FrontEndCategoryPayload>>>;
  /** 前台类目管理:获取第二级级类目列表 */
  getFrontEndSecondLayerCategories?: Maybe<Array<Maybe<FrontEndSecondLayerPayload>>>;
  /** 索引相关接口:根据索引名获取索引信息 */
  getIndexMeta?: Maybe<IndexMetaPayload>;
  /** 索引相关接口:获取索引分页列表 */
  getIndexMetaPage?: Maybe<IndexMetaPagePayload>;
  /** 前台类目:获取金刚区类目(按类目排序展示，如存在类目禁用则自动顺延，商城端金刚区本期仅展示最多8个类目) */
  getKingKongCategories?: Maybe<Array<Maybe<KingKongCategoryPayload>>>;
  /** MDM: 根据经纬度信息查询位置 */
  getLocationByLatAndLng?: Maybe<LocationPayLoad>;
  /** 发货仓管理:下拉框中获取当前商家在渠道支持的发货方式(下拉框只需返回二级配送方式，不需要返回树形结构) */
  getMerchantDeliveryMethod?: Maybe<Array<Maybe<ReceiptTypePayload>>>;
  /** 销售方式:查询商家的销售方式 */
  getMerchantSaleMethod?: Maybe<Array<Maybe<SaleMethodEnum>>>;
  /** 页面配置: 根据页面配置ID获取详情 */
  getPageSetupById: PageSetupPayload;
  /** 权限相关的操作接口:查询权限详情 */
  getPermissionDetail?: Maybe<AppPermissionPayload>;
  /** 发货地址相关接口:根据ID获取发货地址 */
  getPickUpAddressById?: Maybe<PickUpAddressPayload>;
  /** 发货地址相关接口:获取发货地址列表（新建发货仓中选择发货地址下拉框的内容从这里查询） */
  getPickupAddressList?: Maybe<Array<Maybe<PickUpAddressPayload>>>;
  /** 配送方式:查询平台的配送方式 */
  getPlatformDeliveryMethod?: Maybe<Array<Maybe<ReceiptTypeEnum>>>;
  /** 销售方式:查询平台的销售方式 */
  getPlatformSaleMethod?: Maybe<Array<Maybe<SaleMethodEnum>>>;
  /** MDM: 获取所有省份【不传国家id则查所有省份】 */
  getProvinceByCountryId?: Maybe<Array<Maybe<ProvincePayLoad>>>;
  /** 用户收货地址: 根据收货地址ID查询 */
  getReceivingAddressById?: Maybe<ReceivingAddressPayload>;
  /** 权限相关的操作接口:查询一个角色拥有的权限 */
  getRolePermissionList?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** 商品规格相关:通过ID获取规格 */
  getSku?: Maybe<SkuPayload>;
  /** 商品规格相关:获取在线规格列表 */
  getSkuOnlineList?: Maybe<Array<Maybe<SkuOnlinePayload>>>;
  /** MDM: 根据区县ID获取街道 */
  getStreetByDistrictId?: Maybe<Array<Maybe<StreetPayLoad>>>;
  /** 用户: 获取已登录用户信息 */
  getUserInfo: UserInfoPayload;
  /** 权限相关的操作接口:查询一个用户拥有的权限列表 */
  getUserPermissionList?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** 钱包相关接口:获取钱包信息 */
  getWalletInfo?: Maybe<WalletInfoPayload>;
  /** 钱包相关接口:账户流水 */
  getWalletLogList?: Maybe<WalletLogListPayload>;
  /** 发货仓管理:是否存在同名的发货仓 */
  isExitSameDeliveryWarehouseName?: Maybe<Scalars['Boolean']>;
  /** 角色相关的操作:校验当前应用下是否有重名的角色 */
  isExitSameRoleName?: Maybe<Scalars['Boolean']>;
  /** 用户: 获取拥有的身份列表，供切换角色时使用 */
  listAccount: Array<AccountCustomerPayload>;
  /** 用户: 获取当前用户可以选择的渠道 */
  listChannel?: Maybe<Array<Maybe<ChannelInfoPayload>>>;
  /** 栏目: 所属栏目下拉 */
  listColumn: Array<SubColumnPayload>;
  /** 数据字典: 查询字典全量数据（管理界面开发前使用，供开发时前端查询全量数据） */
  listDict: Array<Maybe<SystemDictPayload>>;
  /** 配送方式:分页获取商家的配送方式 */
  merchantDeliveryMethodPage?: Maybe<MerchantDeliveryMethodPagePayload>;
  /** 商家管理:详情 */
  merchantDetail?: Maybe<MerchantPayload>;
  /** 商家管理:分页 */
  merchantPage?: Maybe<MerchantPagePayload>;
  /** 销售方式:分页获取商家的销售方式 */
  merchantSaleMethodPage?: Maybe<MerchantSaleMethodPagePayload>;
  /** 商城app:进货单-我的进货单列表 */
  myShoppingCart?: Maybe<Array<Maybe<ShoppingCartListPayload>>>;
  /** 栏目: 分页获取栏目列表 */
  pageColumn: ColumnPagePayload;
  /** 内容管理: 分页获取内容列表 */
  pageContent?: Maybe<PageContentPayload>;
  /** 内容管理: 根据模块类型获取内容项 */
  pageContentByType: PageContentByTypePayload;
  /** 客户: 分页查询企业列表 */
  pageEnterpriseInfo: PageEnterpriseInfoPayload;
  /** 页面配置: 分页获取页面配置列表 */
  pagePageSetup: PagePageSetupPayload;
  /** 用户收货地址: 分页查询收货地址列表 */
  pageReceivingAddress: PageReceivingAddressPayload;
  /** 库存: 库存流水 */
  pageStockLog: PageStockLogPayload;
  /** 用户: 获取当前用户可以选择的商家 */
  pageUserMerchant: PageUserMerchantPayload;
  /** 收银台: 支付方式列表 */
  paymentMethod: Array<PaymentMethodInfoPayload>;
  /** 发货地址相关接口:分页获取发货地址 */
  pickUpAddressPage?: Maybe<PickUpAddressPagePayload>;
  /** 角色相关的操作:角色详情 */
  roleDetail?: Maybe<RolePayload>;
  /** 角色相关的操作:角色列表页 */
  rolePage?: Maybe<RolePagePayload>;
  /** 商城app:进货单-进货单共计 */
  shoppingCartAmountCalculation?: Maybe<AmountCalculationPayload>;
  /** 商城app:进货单-确认订单-详情界面 */
  shoppingCartConfirmOrderDetail?: Maybe<Array<Maybe<ConfirmOrderDetailPayload>>>;
  shows?: Maybe<Array<Maybe<Show>>>;
  /** 商品规格相关:获取规格列表 */
  skuPage?: Maybe<SkuPagePayload>;
  /** 库存调整: 调整类型下拉(只能手动选择的) */
  stockVariationTypeOption?: Maybe<Array<Maybe<SelectTextOption>>>;
  /** 代运营管理: 代运营账号分页 */
  thirdPartnerAccountPage?: Maybe<ThirdPartnerAccountPagePayload>;
  /** 代运营管理: 商家分页 */
  thirdPartnerMerchantPage?: Maybe<ThirdPartnerMerchantPagePayload>;
  /** 代运营管理: 商家下拉 */
  thirdPartnerMerchantSelect?: Maybe<Array<Maybe<SelectTextOption>>>;
  /** 代运营管理: 可代运营角色下拉（商家角色） */
  thirdPartnerRoleSelect?: Maybe<Array<Maybe<SelectTextOption>>>;
  /** 代运营管理: 可用代运营下拉（渠道员工） */
  thirdPartnerSelect?: Maybe<Array<Maybe<SelectTextOption>>>;
  /** 钱包相关接口:流水详情 */
  walletLogDetail?: Maybe<WalletLogPayload>;
};


export type QueryAccountDetailArgs = {
  accountId?: InputMaybe<Scalars['ID']>;
};


export type QueryAccountPageArgs = {
  input?: InputMaybe<AccountPageInput>;
};


export type QueryAccountRoleSelectArgs = {
  appType: AppTypeEnum;
};


export type QueryAppMerchantMonthSalesArgs = {
  merchantId?: InputMaybe<Scalars['ID']>;
};


export type QueryAppMerchantStoreDetailArgs = {
  merchantId?: InputMaybe<Scalars['ID']>;
};


export type QueryBusinessAfterSalesOrderDetailArgs = {
  afterSalesId?: InputMaybe<Scalars['ID']>;
};


export type QueryBusinessAfterSalesOrderPageArgs = {
  input?: InputMaybe<AfterSalesOrderPageInput>;
};


export type QueryBusinessAfterSalesOrderRecordsArgs = {
  input?: InputMaybe<AfterSalesOrderRecordInput>;
};


export type QueryBusinessCommodityOrderDetailArgs = {
  subOrderId: Scalars['ID'];
};


export type QueryBusinessOrderPageListArgs = {
  input?: InputMaybe<OrderPageListInput>;
};


export type QueryBusinessRouteCommodityOrderByPickCodeArgs = {
  pickCode: Scalars['String'];
};


export type QueryChannelMerchantDetailArgs = {
  merchantId: Scalars['ID'];
};


export type QueryChannelMerchantPageArgs = {
  input?: InputMaybe<PageInput>;
};


export type QueryCommodityDeliveryWarehouseInfoArgs = {
  commodityId: Scalars['ID'];
};


export type QueryCommodityDetailArgs = {
  commodityId: Scalars['ID'];
};


export type QueryCommodityOnlineDetailArgs = {
  commodityId: Scalars['ID'];
};


export type QueryCommodityOnlinePageArgs = {
  input?: InputMaybe<CommodityOnlinePageInput>;
};


export type QueryCommodityPageArgs = {
  input?: InputMaybe<CommodityPageInput>;
};


export type QueryCountContentByColumnIdArgs = {
  id: Scalars['ID'];
};


export type QueryCreateUserArgs = {
  user?: InputMaybe<User>;
};


export type QueryCustomerAfterSaleMaxInfoArgs = {
  input?: InputMaybe<AfterSaleMaxInput>;
};


export type QueryCustomerCommodityOrderDeliveryQuantityArgs = {
  input?: InputMaybe<CustomerCommodityDeliveryQuantityInput>;
};


export type QueryCustomerCommodityOrderDetailArgs = {
  commodityOrderId?: InputMaybe<Scalars['ID']>;
};


export type QueryCustomerCommodityOrderPageArgs = {
  input?: InputMaybe<CustomerCommodityOrderPageInput>;
};


export type QueryCustomerCommodityOrderPriceArgs = {
  commodityOrderId?: InputMaybe<Scalars['ID']>;
};


export type QueryCustomerCommodityOrderReceiptCodeArgs = {
  commodityOrderId?: InputMaybe<Scalars['ID']>;
};


export type QueryCustomerGetAfterSaleDetailArgs = {
  afterSaleId: Scalars['ID'];
};


export type QueryCustomerGetAfterSalesPageListArgs = {
  input?: InputMaybe<AfterSalesPageInput>;
};


export type QueryCustomerOrderCommodityAfterSaleDetailArgs = {
  input?: InputMaybe<OrderCommodityAfterSaleDetailInput>;
};


export type QueryDeliveryOrderDetailArgs = {
  deliveryId: Scalars['ID'];
};


export type QueryDeliveryWarehouseDetailArgs = {
  deliveryWarehouseId: Scalars['ID'];
};


export type QueryDeliveryWarehousePageArgs = {
  input?: InputMaybe<DeliveryWarehousePageInput>;
};


export type QueryGetAllCommodityBrandByCategoryIdArgs = {
  categoryId: Scalars['ID'];
};


export type QueryGetAllCommodityCategoryPropertyArgs = {
  categoryId: Scalars['ID'];
};


export type QueryGetAllCommodityPlaceOriginByCategoryIdArgs = {
  categoryId?: InputMaybe<Scalars['ID']>;
};


export type QueryGetAllCommodityTypeCategoryArgs = {
  commodityTypeId?: InputMaybe<Scalars['ID']>;
};


export type QueryGetAllCommodityTypeVarietyArgs = {
  commodityCategoryId?: InputMaybe<Scalars['ID']>;
};


export type QueryGetAppPermissionListArgs = {
  input?: InputMaybe<GetAppPermissionListInput>;
};


export type QueryGetCategoryTreeArgs = {
  channelId: Scalars['ID'];
};


export type QueryGetChannelCanAddDeliveryMethodArgs = {
  input?: InputMaybe<GetChannelCanAddDeliveryMethodInput>;
};


export type QueryGetChannelCanAddSaleMethodArgs = {
  input?: InputMaybe<GetChannelCanAddSaleMethodInput>;
};


export type QueryGetCitiesArgs = {
  input?: InputMaybe<CityQueryInput>;
};


export type QueryGetColumnByIdArgs = {
  id: Scalars['ID'];
};


export type QueryGetContentByIdArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryGetDictByTypeListArgs = {
  input: Array<InputMaybe<Scalars['String']>>;
};


export type QueryGetDistrictByCityIdArgs = {
  cityId?: InputMaybe<Scalars['ID']>;
};


export type QueryGetFrontEndSecondLayerCategoriesArgs = {
  frontEndCategoryId: Scalars['ID'];
};


export type QueryGetIndexMetaArgs = {
  indexType?: InputMaybe<Scalars['String']>;
};


export type QueryGetIndexMetaPageArgs = {
  input?: InputMaybe<IndexMetaPageInput>;
};


export type QueryGetKingKongCategoriesArgs = {
  channelId: Scalars['ID'];
};


export type QueryGetLocationByLatAndLngArgs = {
  input?: InputMaybe<LocationQueryInput>;
};


export type QueryGetMerchantSaleMethodArgs = {
  merchantId: Scalars['ID'];
};


export type QueryGetPageSetupByIdArgs = {
  id: Scalars['ID'];
};


export type QueryGetPermissionDetailArgs = {
  permissionId: Scalars['ID'];
};


export type QueryGetPickUpAddressByIdArgs = {
  pickUpAddressId: Scalars['ID'];
};


export type QueryGetPickupAddressListArgs = {
  input?: InputMaybe<GetPickupAddressListInput>;
};


export type QueryGetProvinceByCountryIdArgs = {
  countryId?: InputMaybe<Scalars['ID']>;
};


export type QueryGetReceivingAddressByIdArgs = {
  id: Scalars['ID'];
};


export type QueryGetRolePermissionListArgs = {
  roleId: Scalars['ID'];
};


export type QueryGetSkuArgs = {
  skuId?: InputMaybe<Scalars['ID']>;
};


export type QueryGetSkuOnlineListArgs = {
  input: GetSkuOnlineListInput;
};


export type QueryGetStreetByDistrictIdArgs = {
  districtId: Scalars['ID'];
};


export type QueryGetWalletInfoArgs = {
  input?: InputMaybe<GetWalletInfoInput>;
};


export type QueryGetWalletLogListArgs = {
  input?: InputMaybe<WalletLogListInput>;
};


export type QueryIsExitSameDeliveryWarehouseNameArgs = {
  deliveryWarehouseName?: InputMaybe<Scalars['String']>;
};


export type QueryIsExitSameRoleNameArgs = {
  input?: InputMaybe<IsExitSameRoleNameInput>;
};


export type QueryListAccountArgs = {
  channelId: Scalars['ID'];
};


export type QueryListColumnArgs = {
  input?: InputMaybe<PageTypeEnum>;
  ruleType?: InputMaybe<ColumnRuleTypeEnum>;
};


export type QueryMerchantDeliveryMethodPageArgs = {
  input?: InputMaybe<MerchantDeliveryMethodPageInput>;
};


export type QueryMerchantDetailArgs = {
  merchantId: Scalars['ID'];
};


export type QueryMerchantPageArgs = {
  input?: InputMaybe<PageInput>;
};


export type QueryMerchantSaleMethodPageArgs = {
  input?: InputMaybe<MerchantSaleMethodPageInput>;
};


export type QueryPageColumnArgs = {
  input?: InputMaybe<PageInput>;
  pageColumInput?: InputMaybe<PageColumInput>;
};


export type QueryPageContentArgs = {
  input?: InputMaybe<PageInput>;
  pageContentInput: PageContentInput;
};


export type QueryPageContentByTypeArgs = {
  input: PageInput;
  pageContentByTypeInput: Array<PageContentByTypeInput>;
};


export type QueryPageEnterpriseInfoArgs = {
  input: PageEnterpriseInfoInput;
  page: PageInput;
};


export type QueryPagePageSetupArgs = {
  input: PageInput;
  pagePageSetupInput: PagePageSetupInput;
};


export type QueryPageReceivingAddressArgs = {
  input: PageReceivingAddressInput;
  page?: InputMaybe<PageInput>;
};


export type QueryPageStockLogArgs = {
  input: PageInput;
  skuId: Scalars['ID'];
};


export type QueryPageUserMerchantArgs = {
  input: PageInput;
};


export type QueryPickUpAddressPageArgs = {
  input?: InputMaybe<PickUpAddressInput>;
};


export type QueryRoleDetailArgs = {
  roleId: Scalars['ID'];
};


export type QueryRolePageArgs = {
  input?: InputMaybe<RolePageInput>;
};


export type QueryShoppingCartAmountCalculationArgs = {
  input?: InputMaybe<AmountCalculationInput>;
};


export type QueryShoppingCartConfirmOrderDetailArgs = {
  input?: InputMaybe<ConfirmOrderDetailInput>;
};


export type QueryShowsArgs = {
  titleFilter?: InputMaybe<Scalars['String']>;
};


export type QuerySkuPageArgs = {
  input?: InputMaybe<SkuPageInput>;
};


export type QueryThirdPartnerAccountPageArgs = {
  input?: InputMaybe<ThirdPartnerPageInput>;
};


export type QueryThirdPartnerMerchantPageArgs = {
  input?: InputMaybe<ThirdPartnerMerchantPageInput>;
};


export type QueryThirdPartnerSelectArgs = {
  merchantId: Scalars['ID'];
};


export type QueryWalletLogDetailArgs = {
  walletLogId: Scalars['ID'];
};

export type ReceiptInfoInput = {
  /** 收货地址id */
  addressId?: InputMaybe<Scalars['ID']>;
  /** 配送方式 */
  receiptType: ReceiptTypeEnum;
};

/** 二级的配送方式/收货类型 */
export const enum ReceiptTypeEnum {
  /** 空运 */
  AirTransport = 'AIR_TRANSPORT',
  /** 自提 */
  BySelf = 'BY_SELF',
  /** 快递 */
  Express = 'EXPRESS',
  /** 不合法的配送方式(购物车特殊处理：配送方式被删除) */
  Illegal = 'ILLEGAL',
  /** 零担 */
  PartLoad = 'PART_LOAD',
  /** 铁运 */
  RailwayTransport = 'RAILWAY_TRANSPORT',
  /** 船运 */
  Shipping = 'SHIPPING',
  /** 整车运输 */
  TruckLoad = 'TRUCK_LOAD'
};

export type ReceiptTypePayload = {
  __typename?: 'ReceiptTypePayload';
  /** 子配送方式枚举值 */
  receiptType: ReceiptTypeEnum;
  /** 子配送方式名称 */
  receiptTypeName: Scalars['String'];
};

export type ReceivingAddressPayload = {
  __typename?: 'ReceivingAddressPayload';
  /** 详细地址 */
  address: Scalars['String'];
  /** 市 */
  city: Scalars['String'];
  /** 市Id */
  cityId: Scalars['ID'];
  /** 是否默认地址 */
  defaultAddress: Scalars['Boolean'];
  /** 区 */
  district: Scalars['String'];
  /** 区Id */
  districtId: Scalars['ID'];
  /** 完整的地址 */
  fullAddress: Scalars['String'];
  /** 地址ID */
  id: Scalars['ID'];
  /** 维度 */
  latitude: Scalars['Float'];
  /** 经度 */
  longitude: Scalars['Float'];
  /** 姓名 */
  name: Scalars['String'];
  /** 手机号 */
  phone: Scalars['String'];
  /** 省 */
  province: Scalars['String'];
  /** 省ID */
  provinceId: Scalars['ID'];
  /** 街道 */
  street: Scalars['String'];
  /** 街道Id */
  streetId: Scalars['ID'];
};

export type RefreshTokenPayload = {
  __typename?: 'RefreshTokenPayload';
  /** 用户Token */
  token: Scalars['String'];
};

export type ResetPasswordInput = {
  /** 来源端 */
  appType: AppTypeEnum;
  /** 验证码 */
  captcha: Scalars['String'];
  /** 密码 */
  password: Scalars['String'];
  /** 手机号 */
  phone: Scalars['String'];
};

/** 展现形式枚举 */
export const enum RevealShapeEnum {
  /** 图文 */
  ImageText = 'IMAGE_TEXT',
  /** 纯图 */
  PureGraph = 'PURE_GRAPH'
};

export type RoleEnableInput = {
  /** 应用类型 */
  appType: AppTypeEnum;
  /** 角色ID */
  roleId: Scalars['ID'];
  /** 启禁用状态 */
  targetState: EnableEnum;
};

export type RoleListInterface = {
  /** 角色id数组 */
  roleIdList?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** 角色数组 */
  roleList?: Maybe<Array<Maybe<RolePayload>>>;
};

export type RolePageInput = {
  /** 应用类型 */
  appType: AppTypeEnum;
  /** 分页信息 */
  pageCurrent?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type RolePagePayload = {
  __typename?: 'RolePagePayload';
  /** 当前页码 */
  pageCurrent?: Maybe<Scalars['Int']>;
  /** 条数 */
  pageSize?: Maybe<Scalars['Int']>;
  /** 角色列表 */
  records?: Maybe<Array<Maybe<RolePayload>>>;
  /** 总记录数 */
  totalRecords?: Maybe<Scalars['Int']>;
};

export type RolePayload = {
  __typename?: 'RolePayload';
  /** 应用类型 */
  appType?: Maybe<AppTypeEnum>;
  /** 角色ID */
  roleId?: Maybe<Scalars['ID']>;
  /** 角色名称 */
  roleName?: Maybe<Scalars['String']>;
  /** 角色状态 */
  roleStatus?: Maybe<EnableEnum>;
};

export type Sku = {
  __typename?: 'SKU';
  /** skuID */
  skuId: Scalars['ID'];
  /** sku名称 */
  skuName?: Maybe<Scalars['String']>;
};

/** 发货方式 */
export const enum SaleMethodEnum {
  /** 一件批发 */
  DropShipping = 'DROP_SHIPPING',
  /** 批发 */
  Wholesale = 'WHOLESALE'
};

export type SaveFileInput = {
  /** 访问文件类型 */
  accessType?: InputMaybe<AccessType>;
  /** 文件类型 */
  contentType?: InputMaybe<Scalars['String']>;
  /** 文件Url地址 */
  fileUrl?: InputMaybe<Scalars['String']>;
  /** 文件名称 */
  name?: InputMaybe<Scalars['String']>;
};

export type SaveFilePayload = {
  __typename?: 'SaveFilePayload';
  errCode?: Maybe<Scalars['Int']>;
  errMsg?: Maybe<Scalars['String']>;
  /** fileID */
  fileId?: Maybe<Scalars['String']>;
};

export type SaveInventoryAdjustmentInput = {
  /** 调整数量 */
  quantity: Scalars['Int'];
  /** 调整备注 */
  remark?: InputMaybe<Scalars['String']>;
  /** skuId */
  skuId: Scalars['ID'];
  /** 调整类型 */
  stockVariationType: StockVariationTypeEnum;
};

export type SaveUserInfoInput = {
  /** 头像url */
  avatar: Array<FileInput>;
  /** 用户名称 */
  name: Scalars['String'];
};

export type SelectTextOption = {
  __typename?: 'SelectTextOption';
  label: Scalars['String'];
  value: Scalars['ID'];
};

export type SendResetPwdSmsInput = {
  /** 来源端 */
  appType: AppTypeEnum;
  /** 手机号 */
  phone: Scalars['String'];
};

export type ShoppingCartDeleteInput = {
  /** 删除的购物车skuID列表 */
  skuIds: Array<InputMaybe<Scalars['ID']>>;
};

export type ShoppingCartInput = {
  /** 商品ID */
  commodityId: Scalars['ID'];
  /** 商户ID */
  merchantId: Scalars['ID'];
  /** 数量 */
  quantity: Scalars['Int'];
  /** 配送信息 */
  receiptInfo: ReceiptInfoInput;
  /** skuID */
  skuId: Scalars['ID'];
};

export type ShoppingCartListPayload = MerchantInfoInterface & {
  __typename?: 'ShoppingCartListPayload';
  /** 商户信息 */
  merchant?: Maybe<CommodityOrderMerchantPayload>;
  /** 商户ID */
  merchantId?: Maybe<Scalars['ID']>;
  /** skuList */
  skuList?: Maybe<Array<Maybe<ShoppingCartSkuListPayload>>>;
};

export type ShoppingCartSkuInfoPayload = SkuInterface & {
  __typename?: 'ShoppingCartSkuInfoPayload';
  /** 购物车数量 */
  quantity: Scalars['Int'];
  /** skuID */
  skuId: Scalars['ID'];
  /** sku信息 */
  skuInfo?: Maybe<SkuInfoPayload>;
};

export type ShoppingCartSkuInterface = {
  /** skuID */
  skuId: Scalars['ID'];
  /** sku信息 */
  skuInfo?: Maybe<ShoppingCartSkuInfoPayload>;
};

export type ShoppingCartSkuListPayload = SkuInterface & {
  __typename?: 'ShoppingCartSkuListPayload';
  /** 进货单ID */
  id: Scalars['ID'];
  /** 数量 */
  quantity?: Maybe<Scalars['Int']>;
  /** 配送方式信息 */
  receiptInfo?: Maybe<ConfirmOrderReceiptPayload>;
  /** skuID */
  skuId: Scalars['ID'];
  /** sku信息 */
  skuInfo?: Maybe<SkuInfoPayload>;
};

export type ShoppingCartUpdateInput = {
  /** 数量 */
  quantity: Scalars['Int'];
  /** skuID */
  skuId: Scalars['ID'];
};

export type ShoppingCartUpdateReceiptInfoInput = {
  /** 购物车id */
  cartId: Scalars['ID'];
  /** 配送信息 */
  receiptInfo: ReceiptInfoInput;
  /** skuID */
  skuId: Scalars['ID'];
};

export type ShoppingCartUploadInput = {
  /** 商品ID */
  newSkuId: Scalars['ID'];
  /** skuID */
  originSkuId: Scalars['ID'];
};

export type Show = {
  __typename?: 'Show';
  releaseYear?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

export const enum SkuAfterSaleStatusEnum {
  /** 售后中 */
  AfterSaleProcessing = 'AFTER_SALE_PROCESSING',
  /** 全部售后 */
  AllAfterSale = 'ALL_AFTER_SALE',
  /** 未售后 */
  NoAfterSale = 'NO_AFTER_SALE',
  /** 部分售后 */
  SectionAfterSale = 'SECTION_AFTER_SALE'
};

export type SkuCategoryPropertyInput = {
  /** 商品属性ID */
  categoryPropertyId?: InputMaybe<Scalars['ID']>;
  /** 商品属性值ID */
  categoryPropertyValueId?: InputMaybe<Scalars['ID']>;
};

export type SkuCategoryPropertyPayload = {
  __typename?: 'SkuCategoryPropertyPayload';
  /** 商品属性ID */
  categoryPropertyId?: Maybe<Scalars['ID']>;
  /** 属性名称 */
  categoryPropertyName?: Maybe<Scalars['String']>;
  /** 商品属性值ID */
  categoryPropertyValueId?: Maybe<Scalars['ID']>;
  /** 商品属性值名称 */
  categoryPropertyValueName?: Maybe<Scalars['String']>;
};

export type SkuInfoPayload = {
  __typename?: 'SkuInfoPayload';
  /** 商品id */
  commodityId?: Maybe<Scalars['ID']>;
  /** 商品名称 */
  commodityName?: Maybe<Scalars['String']>;
  /** 商品缩略图 */
  commodityPic?: Maybe<Array<Maybe<FilePayload>>>;
  /** 最小起批量 */
  minBulk?: Maybe<Scalars['Int']>;
  /** sku价格 */
  priceList?: Maybe<Array<Maybe<OrderSkuPricePayload>>>;
  /** skuId */
  skuId?: Maybe<Scalars['ID']>;
  /** sku名称 */
  skuName?: Maybe<Scalars['String']>;
  /** 规格描述 */
  spec?: Maybe<Array<Maybe<SkuSpecPropertyPayload>>>;
  /** sku状态 */
  status?: Maybe<SkuStatus>;
  /** sku库存 */
  stock?: Maybe<Scalars['Int']>;
  /** 单位 */
  unit?: Maybe<OrderMarketingUnitEnum>;
};

export type SkuInterface = {
  /** skuID */
  skuId?: Maybe<Scalars['ID']>;
  /** sku信息 */
  skuInfo?: Maybe<SkuInfoPayload>;
};

/** 商城小程序的在线商品Online */
export type SkuOnlinePayload = {
  __typename?: 'SkuOnlinePayload';
  /** 一件代发价格 */
  dropShippingPrice?: Maybe<Scalars['Float']>;
  /** 单位Enum */
  marketingUnit?: Maybe<MarketingUnitEnum>;
  /** ID */
  skuOnlineId: Scalars['ID'];
  /** sku名称 */
  skuOnlineName?: Maybe<Scalars['String']>;
  /** 阶梯价格 */
  skuPricesOnline?: Maybe<Array<Maybe<SkuPriceOnlinePayload>>>;
  /** 库存 */
  stock: Scalars['Long'];
};

export type SkuPageInput = {
  /** 商品ID */
  commodityId: Scalars['ID'];
  /** 分页信息 */
  pageCurrent?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type SkuPagePayload = {
  __typename?: 'SkuPagePayload';
  /** 当前页码 */
  pageCurrent?: Maybe<Scalars['Int']>;
  /** 条数 */
  pageSize?: Maybe<Scalars['Int']>;
  records?: Maybe<Array<Maybe<SkuPayload>>>;
  /** 总记录数 */
  totalRecords?: Maybe<Scalars['Int']>;
};

export type SkuPayload = {
  __typename?: 'SkuPayload';
  /** 可用库存 */
  availableStock?: Maybe<Scalars['Long']>;
  /** 一件代发价格 */
  dropShippingPrice?: Maybe<Scalars['Float']>;
  /** 状态 */
  enable?: Maybe<EnableEnum>;
  /** 单位 */
  marketingUnit?: Maybe<MarketingUnitEnum>;
  /** 商家商品编码 */
  merchantSkuCode?: Maybe<Scalars['String']>;
  /** 净重 */
  netWeight?: Maybe<Scalars['Float']>;
  /** 毛重 */
  roughWeight?: Maybe<Scalars['Float']>;
  /** 销售方式 */
  saleMethods?: Maybe<Array<Maybe<SaleMethodEnum>>>;
  /** 规格ID */
  skuId?: Maybe<Scalars['ID']>;
  /** 规格名称 */
  skuName?: Maybe<Scalars['String']>;
  /** 阶梯价格 */
  skuPrices?: Maybe<Array<Maybe<SkuPricePayload>>>;
  /** 规格属性 */
  specProperty?: Maybe<Array<Maybe<SkuCategoryPropertyPayload>>>;
  /** 销售库存 */
  stock?: Maybe<Scalars['Long']>;
};

export type SkuPriceOnlinePayload = {
  __typename?: 'SkuPriceOnlinePayload';
  /** 起批量 */
  bulk?: Maybe<Scalars['Int']>;
  /** 价格 */
  price?: Maybe<Scalars['Float']>;
  /** skuOnlineId */
  skuOnlineId?: Maybe<Scalars['ID']>;
  /** 主键ID */
  skuPriceId?: Maybe<Scalars['ID']>;
};

export type SkuPricePayload = {
  __typename?: 'SkuPricePayload';
  /** 起批量 */
  bulk?: Maybe<Scalars['Int']>;
  /** 价格 */
  price?: Maybe<Scalars['Float']>;
  /** sku_price_id */
  skuPriceId?: Maybe<Scalars['ID']>;
};

/**
 * type WarehousePayload {
 *     """仓库ID"""
 *     deliveryWareHouseId: ID
 *     """仓库名称"""
 *     deliveryWareHouseName: String
 *     """仓库地址"""
 *     receiptInfo: ConfirmOrderReceiptPayload
 * }
 */
export type SkuSpecPropertyPayload = {
  __typename?: 'SkuSpecPropertyPayload';
  /** 商品属性ID */
  categoryPropertyId?: Maybe<Scalars['ID']>;
  /** 属性名称 */
  categoryPropertyName?: Maybe<Scalars['String']>;
  /** 商品属性值ID */
  categoryPropertyValueId?: Maybe<Scalars['ID']>;
  /** 商品属性值名称 */
  categoryPropertyValueName?: Maybe<Scalars['String']>;
};

export const enum SkuStatus {
  /** 已失效【商品规格禁用】 */
  InvalidSkuDis = 'INVALID_SKU_DIS',
  /** 已失效【发货仓禁用】 */
  InvalidWhsDis = 'INVALID_WHS_DIS',
  /** 生效中 */
  Normal = 'NORMAL',
  /** 下架 */
  OffShelf = 'OFF_SHELF',
  /** 售罄 */
  SellOut = 'SELL_OUT'
};

export type StockLogPayload = {
  __typename?: 'StockLogPayload';
  /** 调整后数量 */
  afterQuantity: Scalars['Int'];
  /** 调整前数量 */
  beforeQuantity: Scalars['Int'];
  /** 单据号 */
  businessId?: Maybe<Scalars['ID']>;
  /** 调整时间 */
  createTime: Scalars['Long'];
  /** 流水ID */
  id: Scalars['ID'];
  /** 调整数量 */
  quantity: Scalars['Int'];
  /** 调整备注 */
  remark?: Maybe<Scalars['String']>;
  /** sku信息 */
  sku: Sku;
  /** 调整类型 */
  stockVariationType: StockVariationTypeEnum;
};

/** 调整类型枚举 */
export const enum StockVariationTypeEnum {
  /** 减少（手动选择） */
  Decrease = 'DECREASE',
  /** 增加（手动选择） */
  Increase = 'INCREASE',
  /** 销售订单出库 */
  OrderDelivery = 'ORDER_DELIVERY',
  /** 采购入库 */
  Procurement = 'PROCUREMENT',
  /** 退货入库 */
  SalesReturn = 'SALES_RETURN'
};

export type StoreInfoPayload = {
  __typename?: 'StoreInfoPayload';
  /** 商家ID */
  merchantId: Scalars['ID'];
  /** 店铺Logo */
  storeLogo?: Maybe<Array<Maybe<FilePayload>>>;
  /** 店铺名称 */
  storeName: Scalars['String'];
};

export type StreetPayLoad = {
  __typename?: 'StreetPayLoad';
  /** 区县id */
  districtId: Scalars['ID'];
  /** 街道id */
  id: Scalars['ID'];
  /** 维度 */
  lat: Scalars['Float'];
  /** 经度 */
  lng: Scalars['Float'];
  /** 街道名称 */
  name: Scalars['String'];
};

/** 子栏目列表 */
export type SubColumnPayload = {
  __typename?: 'SubColumnPayload';
  /** 状态： false=未启用  true=启用 */
  enabled: Scalars['Boolean'];
  /** 主键 */
  id: Scalars['ID'];
  /** 栏目名称 */
  name: Scalars['String'];
  /** 父ID */
  parentId?: Maybe<Scalars['ID']>;
  /** 展现形式 */
  revealShape: RevealShapeEnum;
  /** 规则 */
  ruleType?: Maybe<ColumnRuleTypeEnum>;
};

export type SubmitCommodityInput = {
  /** 商品ID */
  commodityId: Scalars['ID'];
};

export type SystemDictPayload = {
  __typename?: 'SystemDictPayload';
  /** 类型 */
  dictType: Scalars['String'];
  /** 中文描述 */
  label: Scalars['String'];
  /** 备注 */
  remark?: Maybe<Scalars['String']>;
  /** 排序 */
  sort: Scalars['Int'];
  /** 值 */
  value: Scalars['String'];
};

export type TemporaryAccessKeyInput = {
  /** 待上传/访问文件类型 */
  accessType?: InputMaybe<AccessType>;
  /** 上传的文件桶(指定bucket后不需要指定access_type */
  bucket?: InputMaybe<Bucket>;
  /** 临时访问密钥和securitytoken的有效期，时间单位为秒。取值范围：15分钟 ~ 24小时 (900s-86400s) ，默认为15分钟。 */
  durationSeconds?: InputMaybe<Scalars['Int']>;
};

export type TemporaryAccessKeyPayload = {
  __typename?: 'TemporaryAccessKeyPayload';
  ak?: Maybe<Scalars['String']>;
  bucket?: Maybe<Scalars['String']>;
  endpoint?: Maybe<Scalars['String']>;
  errCode?: Maybe<Scalars['String']>;
  errMsg?: Maybe<Scalars['String']>;
  expiresAt?: Maybe<Scalars['String']>;
  securityToken?: Maybe<Scalars['String']>;
  sk?: Maybe<Scalars['String']>;
};

export type ThirdPartnerAccountPagePayload = {
  __typename?: 'ThirdPartnerAccountPagePayload';
  /** 当前页码 */
  pageCurrent?: Maybe<Scalars['Int']>;
  /** 条数 */
  pageSize?: Maybe<Scalars['Int']>;
  /** 结果 */
  records?: Maybe<Array<Maybe<AccountPayload>>>;
  /** 总记录数 */
  totalRecords?: Maybe<Scalars['Int']>;
};

export type ThirdPartnerMerchantBatchInput = {
  /** 商家id */
  merchantIdList?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type ThirdPartnerMerchantPageInput = {
  /** 商家名称 */
  name?: InputMaybe<Scalars['String']>;
  pageCurrent?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type ThirdPartnerMerchantPagePayload = {
  __typename?: 'ThirdPartnerMerchantPagePayload';
  /** 当前页码 */
  pageCurrent?: Maybe<Scalars['Int']>;
  /** 条数 */
  pageSize?: Maybe<Scalars['Int']>;
  /** 结果 */
  records?: Maybe<Array<Maybe<ThirdPartnerMerchantPayload>>>;
  /** 总记录数 */
  totalRecords?: Maybe<Scalars['Int']>;
};

export type ThirdPartnerMerchantPayload = ThirdPartnerUserInterface & {
  __typename?: 'ThirdPartnerMerchantPayload';
  /** 商户id */
  merchantId?: Maybe<Scalars['ID']>;
  /** 商户名称 */
  merchantName?: Maybe<Scalars['String']>;
  /** 代运营id */
  thirdId?: Maybe<Scalars['ID']>;
  /** 代运营姓名集合 */
  thirdPartnerNameList?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ThirdPartnerPageInput = {
  /** 代运营商家id */
  merchantId: Scalars['ID'];
  pageCurrent?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type ThirdPartnerUserCreateInput = {
  /** 代运营商家id */
  merchantId: Scalars['ID'];
  /** 运营角色id数组 */
  roleIdList: Array<InputMaybe<Scalars['ID']>>;
  /** 代运营用户id */
  userId: Scalars['ID'];
};

export type ThirdPartnerUserInterface = {
  /** 商户id */
  merchantId?: Maybe<Scalars['ID']>;
  /** 代运营姓名集合 */
  thirdPartnerNameList?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** 时间区间 */
export type TimeRange = {
  /** 结束时间 */
  endTime?: InputMaybe<Scalars['Long']>;
  /** 起始时间 */
  startTime?: InputMaybe<Scalars['Long']>;
};

export type User = {
  phoneNo?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
  userName?: InputMaybe<Scalars['String']>;
};

export type UserCustomerInterface = {
  /** 客户ID */
  customerId?: Maybe<Scalars['ID']>;
  /** 客户信息 */
  customerInfo?: Maybe<UserCustomerPayload>;
};

export type UserCustomerPayload = {
  __typename?: 'UserCustomerPayload';
  /** 实名认证状态 */
  authStatus: Scalars['Boolean'];
  /** 认证时间 */
  authTime?: Maybe<Scalars['Long']>;
  /** 注册时间 */
  createTime: Scalars['Long'];
  /** 企业认证信息 */
  enterpriseAuthInfo?: Maybe<EnterpriseAuthInfoPayload>;
  /** 客户ID */
  id?: Maybe<Scalars['ID']>;
  /** 客户名称 */
  name?: Maybe<Scalars['String']>;
  /** 个人认证信息 */
  personalAuthInfo?: Maybe<PersonalAuthInfoPayload>;
  /** 客户手机号 */
  phone?: Maybe<Scalars['String']>;
  /** 客户类型 个人用户、企业用户 */
  userType: CustomerTypeEnum;
};

export type UserInfoPayload = {
  __typename?: 'UserInfoPayload';
  /** 账户信息(选择后的) */
  accountInfo?: Maybe<AccountCustomerPayload>;
  /** 头像url */
  avatar: Array<FilePayload>;
  /** 注册时间 */
  createdTime: Scalars['Long'];
  /** 商家信息(选择后的) */
  merchantInfo?: Maybe<UserMerchantPayload>;
  /** 用户名称 */
  nikeName: Scalars['String'];
  /** 手机号码 */
  phone: Scalars['String'];
  /** 用户ID */
  userId: Scalars['ID'];
};

export type UserMerchantPayload = {
  __typename?: 'UserMerchantPayload';
  /** 账号ID */
  id?: Maybe<Scalars['ID']>;
  /** 商户ID */
  merchantId?: Maybe<Scalars['ID']>;
  /** 商户名称 */
  name?: Maybe<Scalars['String']>;
};

export type ValidCaptchaInput = {
  /** 验证码 */
  captcha: Scalars['String'];
  /** 手机号 */
  phone: Scalars['String'];
};

export const enum WalletChangeReasonEnum {
  /** 提现 */
  Deposit = 'DEPOSIT',
  /** 消费 */
  Pay = 'PAY',
  /** 充值 */
  Recharge = 'RECHARGE'
};

export type WalletInfoPayload = {
  __typename?: 'WalletInfoPayload';
  /** 余额 */
  balance: Scalars['Float'];
  /** 商家或者客户ID */
  businessId: Scalars['ID'];
  /** 渠道ID */
  channelId: Scalars['ID'];
  /** 钱包ID */
  walletId: Scalars['ID'];
  /** 账户类型 */
  walletType: WalletTypeEnum;
};

export type WalletLogListInput = {
  /** offset(第一次请求的时候不用传) */
  offset?: InputMaybe<Scalars['ID']>;
  /** 每页大小 */
  pageSize: Scalars['Int'];
  walletId: Scalars['ID'];
};

export type WalletLogListPayload = {
  __typename?: 'WalletLogListPayload';
  /** hasMore */
  hasMore?: Maybe<Scalars['Boolean']>;
  /** offset */
  offset?: Maybe<Scalars['ID']>;
  /** 钱包流水列表 */
  records?: Maybe<Array<Maybe<WalletLogPayload>>>;
};

export type WalletLogPayload = {
  __typename?: 'WalletLogPayload';
  /** 商家或者客户ID */
  businessId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** 变动金额 */
  changePrice?: Maybe<Scalars['Float']>;
  /** 变更原因 */
  changeReason?: Maybe<WalletChangeReasonEnum>;
  /** 日期 */
  date?: Maybe<Scalars['Long']>;
  /** 流水log */
  walletLogId?: Maybe<Scalars['ID']>;
};

export type WalletRechargeInput = {
  /** 充值金额 */
  rechargeAmount?: InputMaybe<Scalars['Float']>;
  /** 钱包ID */
  walletId: Scalars['ID'];
};

export const enum WalletTypeEnum {
  /** 客户 */
  Customer = 'CUSTOMER',
  /** 商家 */
  Merchant = 'MERCHANT'
};

export type WithdrawCommodityInput = {
  /** 商品ID */
  commodityId: Scalars['ID'];
};

export const enum PropertyTypeEnum {
  /** 属性类型 */
  CommodityProperty = 'COMMODITY_PROPERTY',
  /** 关键属性 */
  KeyProperty = 'KEY_PROPERTY',
  /** 非关键属性 */
  NonKeyProperty = 'NON_KEY_PROPERTY',
  /** 规格属性 */
  SpecProperty = 'SPEC_PROPERTY'
};
