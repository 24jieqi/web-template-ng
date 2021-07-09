export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** An RFC-3339 compliant Full Date Scalar */
  Date: any
  /** An RFC-3339 compliant DateTime Scalar */
  DateTime: any
  /** Long type */
  Long: any
  _FieldSet: any
}

/** 开始任务请求参数 */
export type BeginTask = {
  /** 任务id */
  taskId: Scalars['Int']
  /** 实际生产人数 */
  numberActual: Scalars['Int']
}

export type CancelInOrderInput = {
  inOrderId: Scalars['Int']
  inOrderDescription: Scalars['String']
}

export type CancelOutOrderInput = {
  outOrderId: Scalars['Int']
  outOrderDescription: Scalars['String']
}

/** 取消生产计划入参 */
export type CancelPlanInput = {
  /** 计划id */
  planId: Scalars['Int']
  /** 计划文字描述 */
  planLogDescription: Scalars['String']
}

/** 商品品类实体 */
export type CommodityCategoryPayload = {
  __typename?: 'CommodityCategoryPayload'
  /** 品类id */
  categoryId?: Maybe<Scalars['Int']>
  /** 品类名称 */
  categoryName?: Maybe<Scalars['String']>
}

/** 商品详情实体 */
export type CommodityDetailPayload = {
  __typename?: 'CommodityDetailPayload'
  /** 商品名称 */
  commodityName?: Maybe<Scalars['String']>
  /** 商品规格选项 */
  commoditySpecOption?: Maybe<Array<Maybe<CommoditySpecOptionPayload>>>
  /** 期望数量 */
  expectNum?: Maybe<Scalars['Int']>
}

/** 商品入参 */
export type CommodityInput = {
  /** 商品id */
  commodityId: Scalars['Int']
  /** 商品sku id */
  commoditySkuId: Scalars['Int']
  /** 商品规格选项id */
  commoditySpecOptionId: Array<Maybe<Scalars['Int']>>
  /** 期望数量 */
  expectNum: Scalars['String']
}

/** 商品返回实体 */
export type CommodityPayload = {
  __typename?: 'CommodityPayload'
  /** 商品id */
  commodityId?: Maybe<Scalars['Int']>
  /** 商品名称 */
  commodityName?: Maybe<Scalars['String']>
  /** 期望数量 */
  expectNum?: Maybe<Scalars['Int']>
  /** 已生产数量 */
  completedNum?: Maybe<Scalars['Int']>
  /** 规格选项id */
  commoditySpecOptionId?: Maybe<Array<Maybe<Scalars['Int']>>>
  /** sku文字描述,规格选项文字数组 */
  skuTextDescription?: Maybe<Array<Maybe<Scalars['String']>>>
  /** 总计类型 */
  totalType?: Maybe<Scalars['Int']>
  /** 总计类型名称 */
  totalTypeName?: Maybe<Scalars['String']>
}

export type CommoditySkuAndUnitInput = {
  commoditySkuId?: Maybe<Scalars['Int']>
  commoditySpecOptionIds?: Maybe<Array<Maybe<Scalars['Int']>>>
}

export type CommoditySkuAndUnitPayload = {
  __typename?: 'CommoditySkuAndUnitPayload'
  commoditySkuId?: Maybe<Scalars['Int']>
  commoditySpecOptionId?: Maybe<Array<Maybe<Scalars['Int']>>>
  skuTextDescription?: Maybe<Array<Maybe<Scalars['String']>>>
  unitQuantity?: Maybe<Scalars['String']>
  unitType?: Maybe<Scalars['Int']>
  unitTypeName?: Maybe<Scalars['String']>
  totalType?: Maybe<Scalars['Int']>
  totalTypeName?: Maybe<Scalars['String']>
  commodityBomId?: Maybe<Scalars['Int']>
}

/** 商品规格选项实体 */
export type CommoditySpecOptionPayload = {
  __typename?: 'CommoditySpecOptionPayload'
  /** 商品规格选项id */
  commoditySpecOptionId?: Maybe<Scalars['Int']>
  /** 商品规格选项名称 */
  commoditySpecOptionName?: Maybe<Scalars['String']>
}

/** 商品规格实体 */
export type CommoditySpecPayload = {
  __typename?: 'CommoditySpecPayload'
  /** 商品规格id */
  commoditySpecId?: Maybe<Scalars['Int']>
  /** 商品规格名称 */
  commoditySpecName?: Maybe<Scalars['String']>
  /** 商品规格选项列表 */
  commoditySpecOption?: Maybe<Array<Maybe<CommoditySpecOptionPayload>>>
}

export type CountOrderPayload = {
  __typename?: 'CountOrderPayload'
  /** 生产入库数量 */
  inApply?: Maybe<Scalars['Int']>
  /** 原料领料数量 */
  raw?: Maybe<Scalars['Int']>
  /** 辅料领料数量 */
  sub?: Maybe<Scalars['Int']>
}

export type CustomerDistributionInput = {
  /**  配送ID */
  distributionId?: Maybe<Scalars['Int']>
  /**  客户ID */
  customerId?: Maybe<Scalars['Int']>
  /**  配送名称 */
  distributionName?: Maybe<Scalars['String']>
  /**  联系人 */
  contacts?: Maybe<Scalars['String']>
  /**  联系电话 */
  phoneNum?: Maybe<Scalars['String']>
  /**  配送地址 */
  distributionAddr?: Maybe<Scalars['String']>
}

export type CustomerDistributionVo = {
  __typename?: 'CustomerDistributionVO'
  /**  配送ID */
  distributionId?: Maybe<Scalars['Int']>
  /**  客户ID */
  customerId?: Maybe<Scalars['Int']>
  /**  配送名称 */
  distributionName?: Maybe<Scalars['String']>
  /**  联系人 */
  contacts?: Maybe<Scalars['String']>
  /**  联系电话 */
  phoneNum?: Maybe<Scalars['String']>
  /**  配送地址 */
  distributionAddr?: Maybe<Scalars['String']>
}

/** 客户分组实体 */
export type CustomerGroupResponse = {
  __typename?: 'CustomerGroupResponse'
  customerGroupId?: Maybe<Scalars['Int']>
  customerGroupName?: Maybe<Scalars['String']>
}

export type CustomerInput = {
  /**  客户ID */
  customerId?: Maybe<Scalars['Int']>
  /**  客户分组ID */
  customerGroupId?: Maybe<Scalars['Int']>
  /**  客户分组名称 */
  customerGroupName?: Maybe<Scalars['String']>
  /**  客户名称 */
  customerName?: Maybe<Scalars['String']>
  /**  客户简称 */
  customerShortName?: Maybe<Scalars['String']>
  /**  备注信息 */
  remark?: Maybe<Scalars['String']>
  customerDistributions?: Maybe<Array<Maybe<CustomerDistributionInput>>>
}

/** 客户分页实体 */
export type CustomerPageResult = {
  __typename?: 'CustomerPageResult'
  records?: Maybe<Array<Maybe<CustomerVo>>>
  pageCurrent?: Maybe<Scalars['Int']>
  pageSize?: Maybe<Scalars['Int']>
  totalRecords?: Maybe<Scalars['Long']>
}

/**
 * extend type Query {
 *     listCustomerPayload: CustomerPayload
 * }
 * 客户返回实体
 */
export type CustomerVo = {
  __typename?: 'CustomerVO'
  /**  客户ID */
  customerId?: Maybe<Scalars['Int']>
  /**  客户分组ID */
  customerGroupId?: Maybe<Scalars['Int']>
  /**  客户分组名称 */
  customerGroupName?: Maybe<Scalars['String']>
  /**  客户名称 */
  customerName?: Maybe<Scalars['String']>
  /**  客户简称 */
  customerShortName?: Maybe<Scalars['String']>
  /**  备注信息 */
  remark?: Maybe<Scalars['String']>
  /**  创建时间 */
  createTime?: Maybe<Scalars['String']>
  /**  配送信息 */
  customerDistribution?: Maybe<Array<Maybe<CustomerDistributionVo>>>
}

export enum ErrorDetail {
  /**
   * Unknown error.
   *
   * This error should only be returned when no other error detail applies.
   * If a client sees an unknown errorDetail, it will be interpreted as UNKNOWN.
   *
   * HTTP Mapping: 500 Internal Server Error
   */
  Unknown = 'UNKNOWN',
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
   * The operation is not implemented or is not currently supported/enabled.
   *
   * HTTP Mapping: 501 Not Implemented
   * Error Type: BAD_REQUEST
   */
  Unimplemented = 'UNIMPLEMENTED',
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
   * Request throttled based on server CPU limits
   *
   * HTTP Mapping: 503 Unavailable.
   * Error Type: UNAVAILABLE
   */
  ThrottledCpu = 'THROTTLED_CPU',
  /**
   * Request throttled based on server concurrency limits.
   *
   * HTTP Mapping: 503 Unavailable
   * Error Type: UNAVAILABLE
   */
  ThrottledConcurrency = 'THROTTLED_CONCURRENCY',
  /**
   * The server detected that the client is exhibiting a behavior that
   * might be generating excessive load.
   *
   * HTTP Mapping: 429 Too Many Requests or 420 Enhance Your Calm
   * Error Type: UNAVAILABLE
   */
  EnhanceYourCalm = 'ENHANCE_YOUR_CALM',
  /**
   * Request failed due to network errors.
   *
   * HTTP Mapping: 503 Unavailable
   * Error Type: UNAVAILABLE
   */
  TcpFailure = 'TCP_FAILURE',
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
}

export enum ErrorType {
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
  Unknown = 'UNKNOWN',
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
   * of users, such as gradual feature rollout or undocumented whitelist,
   * `NOT_FOUND` may be used. If a request is denied for some users within
   * a class of users, such as user-based access control, `PERMISSION_DENIED`
   * must be used.
   *
   * HTTP Mapping: 404 Not Found
   */
  NotFound = 'NOT_FOUND',
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
}

export type InOrder = {
  /** 生产任务id */
  taskId: Scalars['Int']
  /** 出库订单类型，10：成品入库 */
  inOrderType: Scalars['Int']
  /** 商品类型id 3：辅料，6原料 */
  commodityTypeId: Scalars['Int']
  /** 商品类型名称 */
  commodityTypeName: Scalars['String']
  /** 客户id */
  customerId: Scalars['Int']
  /** 客户名称 */
  customerName: Scalars['String']
  /** 客户分组id */
  customerGroupId: Scalars['Int']
  /** 客户分组名称 */
  customerGroupName: Scalars['String']
  /** 客户配送地址id */
  customerDistributionId: Scalars['Int']
  /** 客户配送地址名称 */
  customerDistributionName: Scalars['String']
  /** 仓库id */
  warehouseId: Scalars['Int']
  /** 仓库名称 */
  warehouseName: Scalars['String']
  /** 备注信息 */
  inOrderDescription?: Maybe<Scalars['String']>
  inOrderItem: Array<Maybe<InOrderItem>>
}

/** 入库明细 */
export type InOrderItem = {
  /** 商品id */
  commodityId: Scalars['Int']
  /** 商品名称 */
  commodityName: Scalars['String']
  /** 商品sku id */
  commoditySkuId: Scalars['Int']
  /** 商品规格选项id */
  commoditySpecOptionId: Array<Maybe<Scalars['Int']>>
  /** sku文字描述，规格选项文字数组 */
  skuTextDescription: Array<Maybe<Scalars['String']>>
  /** 单位类型数量（例：kg，个） */
  unitQuantity: Scalars['String']
  /** 单位类型（例：kg，个） */
  unitType: Scalars['Int']
  /** 单位类型名称 */
  unitTypeName: Scalars['String']
  /** 总计类型数量（例：件） */
  totalQuantity: Scalars['String']
  /** 总计类型（例：件） */
  totalType: Scalars['Int']
  /** 总计类型名称 */
  totalTypeName: Scalars['String']
}

/** 入库明细 */
export type InOrderItemUpdate = {
  /** 商品id */
  commodityId: Scalars['Int']
  /** 商品名称 */
  commodityName: Scalars['String']
  /** 商品sku id */
  commoditySkuId: Scalars['Int']
  /** 商品规格选项id */
  commoditySpecOptionId: Array<Maybe<Scalars['Int']>>
  /** sku文字描述，规格选项文字数组 */
  skuTextDescription: Array<Maybe<Scalars['String']>>
  /** 单位类型数量（例：kg，个） */
  unitQuantity: Scalars['String']
  /** 单位类型（例：kg，个） */
  unitType: Scalars['Int']
  /** 单位类型名称 */
  unitTypeName: Scalars['String']
  /** 总计类型数量（例：件） */
  totalQuantity?: Maybe<Scalars['String']>
  /** 总计类型（例：件） */
  totalType?: Maybe<Scalars['Int']>
  /** 总计类型名称 */
  totalTypeName?: Maybe<Scalars['String']>
}

export type InOrderUpdate = {
  /** 生产订单id */
  inOrderId: Scalars['Int']
  /** 客户id */
  customerId: Scalars['Int']
  /** 客户名称 */
  customerName: Scalars['String']
  /** 仓库id */
  warehouseId: Scalars['Int']
  /** 仓库名称 */
  warehouseName: Scalars['String']
  /** 备注信息 */
  inOrderDescription?: Maybe<Scalars['String']>
  /** 商品item信息 */
  inOrderItem: Array<Maybe<InOrderItemUpdate>>
}

export type LoginInput = {
  username?: Maybe<Scalars['String']>
  /**     password:String */
  checkCode?: Maybe<Scalars['String']>
}

export type LoginPayload = {
  __typename?: 'LoginPayload'
  token?: Maybe<Scalars['String']>
  organizationName?: Maybe<Scalars['String']>
  organizationId?: Maybe<Scalars['Int']>
  userName?: Maybe<Scalars['String']>
  userId?: Maybe<Scalars['Int']>
}

export type MobileRepeatPayload = {
  /** 用户id */
  userId?: Maybe<Scalars['Int']>
  /** 用户名称 */
  mobile?: Maybe<Scalars['String']>
}

export type Mutation = {
  __typename?: 'Mutation'
  /** 开始任务 */
  beginTask?: Maybe<Scalars['Boolean']>
  /**     完成任务 */
  completeTask?: Maybe<Scalars['Boolean']>
  /**     领料申请保存，返回新增id */
  addOutOrder?: Maybe<Scalars['Int']>
  /**     生产入库保存，返回新增id */
  addInOrder?: Maybe<Scalars['Int']>
  /** 修改出库订单 */
  modifyOutOrder?: Maybe<Scalars['Boolean']>
  /** 取消出库订单 */
  cancelOutOrder?: Maybe<Scalars['Boolean']>
  /** 提交出库订单 */
  submitOutOrder?: Maybe<Scalars['Boolean']>
  /** 修改入库订单 */
  modifyInOrder?: Maybe<Scalars['Boolean']>
  /** 取消入库订单 */
  cancelInOrder?: Maybe<Scalars['Boolean']>
  /** 入库订单提交库管 */
  submitInOrder?: Maybe<Scalars['Boolean']>
  /** 创建生产计划 */
  doInsertPlan?: Maybe<Scalars['Int']>
  /** 取消生产计划 */
  doCancelPlanStatus?: Maybe<Scalars['Boolean']>
  /** 发布生产计划 */
  doPublishPlan?: Maybe<Scalars['Boolean']>
  /** 修改生产计划基础信息 */
  doUpdatePlanBaseInfo?: Maybe<Scalars['Int']>
  /** 修改生产计划任务信息 */
  doUpdatePlanTaskInfo?: Maybe<Scalars['Int']>
  /** 创建生产计划任务 */
  doInsertPlanTask?: Maybe<Scalars['Int']>
  /** 删除生产计划任务 */
  doDeletePlanTask?: Maybe<Scalars['Boolean']>
  login?: Maybe<LoginPayload>
  sendSms?: Maybe<SendSmsPayload>
  /**  创建客户 */
  createCustomer?: Maybe<Scalars['Int']>
  /**  更新客户 */
  updateCustomer?: Maybe<Scalars['Boolean']>
  /**  删除客户 */
  deleteCustomer?: Maybe<Scalars['Boolean']>
  /**  创建客户地址 */
  createCustomerDistribution?: Maybe<Scalars['Int']>
  /**  更新客户地址 */
  updateCustomerDistribution?: Maybe<Scalars['Boolean']>
  /**  删除客户地址 */
  deleteCustomerDistribution?: Maybe<Scalars['Boolean']>
  /**  创建供应商 */
  createSupplier?: Maybe<Scalars['Int']>
  /**  更新供应商 */
  updateSupplier?: Maybe<Scalars['Int']>
  /**  删除供应商 */
  deleteSupplier?: Maybe<Scalars['Boolean']>
  createUser?: Maybe<Scalars['Int']>
  updateUser?: Maybe<Scalars['Int']>
  deleteUser?: Maybe<Scalars['Boolean']>
}

export type MutationBeginTaskArgs = {
  beginTask?: Maybe<BeginTask>
}

export type MutationCompleteTaskArgs = {
  taskId: Scalars['Int']
}

export type MutationAddOutOrderArgs = {
  outOrder?: Maybe<OutOrder>
}

export type MutationAddInOrderArgs = {
  inOrder?: Maybe<InOrder>
}

export type MutationModifyOutOrderArgs = {
  outOrderUpdate: OutOrderUpdate
}

export type MutationCancelOutOrderArgs = {
  cancelOutOrderInput: CancelOutOrderInput
}

export type MutationSubmitOutOrderArgs = {
  outOrderId: Scalars['Int']
}

export type MutationModifyInOrderArgs = {
  inOrderUpdate: InOrderUpdate
}

export type MutationCancelInOrderArgs = {
  cancelInOrderInput: CancelInOrderInput
}

export type MutationSubmitInOrderArgs = {
  inOrderId: Scalars['Int']
}

export type MutationDoInsertPlanArgs = {
  planInfoInput?: Maybe<PlanInfoInput>
}

export type MutationDoCancelPlanStatusArgs = {
  cancelPlanInput?: Maybe<CancelPlanInput>
}

export type MutationDoPublishPlanArgs = {
  planId?: Maybe<Scalars['Int']>
}

export type MutationDoUpdatePlanBaseInfoArgs = {
  planBaseInfoInput?: Maybe<PlanBaseInfoInput>
}

export type MutationDoUpdatePlanTaskInfoArgs = {
  planTaskInfoInput?: Maybe<PlanTaskInfoInput>
}

export type MutationDoInsertPlanTaskArgs = {
  taskInput?: Maybe<TaskInput>
}

export type MutationDoDeletePlanTaskArgs = {
  taskId?: Maybe<Scalars['Int']>
}

export type MutationLoginArgs = {
  loginInput?: Maybe<LoginInput>
}

export type MutationSendSmsArgs = {
  sendSmsInput?: Maybe<SendSmsInput>
}

export type MutationCreateCustomerArgs = {
  customerInput?: Maybe<CustomerInput>
}

export type MutationUpdateCustomerArgs = {
  customerInput?: Maybe<CustomerInput>
}

export type MutationDeleteCustomerArgs = {
  customerId?: Maybe<Scalars['Int']>
}

export type MutationCreateCustomerDistributionArgs = {
  customerDistributionInput?: Maybe<CustomerDistributionInput>
}

export type MutationUpdateCustomerDistributionArgs = {
  customerDistributionInput?: Maybe<CustomerDistributionInput>
}

export type MutationDeleteCustomerDistributionArgs = {
  distributionId?: Maybe<Scalars['Int']>
}

export type MutationCreateSupplierArgs = {
  supplierInput?: Maybe<SupplierInput>
}

export type MutationUpdateSupplierArgs = {
  supplierInput?: Maybe<SupplierInput>
}

export type MutationDeleteSupplierArgs = {
  supplierId?: Maybe<Scalars['Int']>
}

export type MutationCreateUserArgs = {
  userInput?: Maybe<UserInput>
}

export type MutationUpdateUserArgs = {
  userInput?: Maybe<UserInput>
}

export type MutationDeleteUserArgs = {
  userId?: Maybe<Scalars['Int']>
}

export type Option = {
  __typename?: 'Option'
  label?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['Int']>
}

/** 领料申请保存提交参数 */
export type OutOrder = {
  /** 生产任务id */
  taskId: Scalars['Int']
  /** 出库订单类型，10：原料领料、20：辅料领料 */
  outOrderType: Scalars['Int']
  /** 商品类型id 3：辅料，6原料 */
  commodityTypeId: Scalars['Int']
  /** 商品类型名称 */
  commodityTypeName: Scalars['String']
  /** 客户id */
  customerId: Scalars['Int']
  /** 客户名称 */
  customerName: Scalars['String']
  /** 客户分组id */
  customerGroupId: Scalars['Int']
  /** 客户分组名称 */
  customerGroupName: Scalars['String']
  /** 客户配送地址id */
  customerDistributionId: Scalars['Int']
  /** 客户配送地址名称 */
  customerDistributionName: Scalars['String']
  /** 仓库id */
  warehouseId: Scalars['Int']
  /** 仓库名称 */
  warehouseName: Scalars['String']
  /** 备注信息 */
  outOrderDescription?: Maybe<Scalars['String']>
  outOrderItem: Array<Maybe<OutOrderItem>>
}

/** 领料申请明细 */
export type OutOrderItem = {
  /** 商品id */
  commodityId: Scalars['Int']
  /** 商品名称 */
  commodityName: Scalars['String']
  /** 商品sku id */
  commoditySkuId: Scalars['Int']
  /** 商品规格选项id */
  commoditySpecOptionId: Array<Maybe<Scalars['Int']>>
  /** sku文字描述，规格选项文字数组 */
  skuTextDescription: Array<Maybe<Scalars['String']>>
  /** 单位类型数量（例：kg，个） */
  unitQuantity: Scalars['String']
  /** 单位类型（例：kg，个） */
  unitType: Scalars['Int']
  /** 单位类型名称 */
  unitTypeName: Scalars['String']
  /** 总计类型数量（例：件） */
  totalQuantity?: Maybe<Scalars['String']>
  /** 总计类型（例：件） */
  totalType?: Maybe<Scalars['Int']>
  /** 总计类型名称 */
  totalTypeName?: Maybe<Scalars['String']>
}

export type OutOrderItemUpdate = {
  /** 商品id */
  commodityId: Scalars['Int']
  /** 商品名称 */
  commodityName: Scalars['String']
  /** 商品sku id */
  commoditySkuId: Scalars['Int']
  /** 商品规格选项id */
  commoditySpecOptionId: Array<Maybe<Scalars['Int']>>
  /** sku文字描述，规格选项文字数组 */
  skuTextDescription: Array<Maybe<Scalars['String']>>
  /** 单位类型数量（例：kg，个） */
  unitQuantity: Scalars['String']
  /** 单位类型（例：kg，个） */
  unitType: Scalars['Int']
  /** 单位类型名称 */
  unitTypeName: Scalars['String']
  /** 总计类型数量（例：件） */
  totalQuantity?: Maybe<Scalars['String']>
  /** 总计类型（例：件） */
  totalType?: Maybe<Scalars['Int']>
  /** 总计类型数量（例：件） */
  totalTypeName?: Maybe<Scalars['String']>
}

export type OutOrderUpdate = {
  /** 出库订单id */
  outOrderId: Scalars['Int']
  /** 客户id */
  customerId: Scalars['Int']
  /** 客户名称 */
  customerName: Scalars['String']
  /** 仓库id */
  warehouseId: Scalars['Int']
  /** 仓库名称 */
  warehouseName: Scalars['String']
  /** 备注信息 */
  outOrderDescription: Scalars['String']
  /** 商品信息 */
  outOrderItem: Array<Maybe<OutOrderItemUpdate>>
}

export type Page = {
  /**     offset:Int */
  pageCurrent?: Maybe<Scalars['Int']>
  pageSize?: Maybe<Scalars['Int']>
}

export type Permission = {
  __typename?: 'Permission'
  authId?: Maybe<Scalars['Int']>
  authKey?: Maybe<Scalars['String']>
  authPath?: Maybe<Scalars['String']>
  authName?: Maybe<Scalars['String']>
  leaf?: Maybe<Scalars['Int']>
}

/** 生产计划 */
export type Plan = {
  __typename?: 'Plan'
  /**     计划id */
  planId?: Maybe<Scalars['Int']>
  /**     计划单号 */
  planCode?: Maybe<Scalars['String']>
  /**     计划状态【10：待发布、20：待生产、30：生产中、40：已完成、50：已取消】 */
  planStatus?: Maybe<Scalars['Int']>
  /** 客户id */
  customerId?: Maybe<Scalars['Int']>
  /**     客户名称 */
  customerName?: Maybe<Scalars['String']>
  /** 客户分组id */
  customerGroupId?: Maybe<Scalars['Int']>
  /**     客户分组名称 */
  customerGroupName?: Maybe<Scalars['String']>
  /**     配送地址id */
  customerDistributionId?: Maybe<Scalars['Int']>
  /**     配送地址名称 */
  customerDistributionName?: Maybe<Scalars['String']>
  /**     仓库id */
  warehouseId?: Maybe<Scalars['Int']>
  /**     仓库名称 */
  warehouseName?: Maybe<Scalars['String']>
  /** 生产日期 */
  planDate?: Maybe<Scalars['String']>
  /**     计划开始时间 */
  planStartTime?: Maybe<Scalars['String']>
  /**     计划结束时间 */
  planEndTime?: Maybe<Scalars['String']>
  /**     备注 */
  planDescription?: Maybe<Scalars['String']>
}

export type PlanBaseInfoInput = {
  /** 计划id */
  planId: Scalars['Int']
  /** 产品种类数量 */
  categorySum?: Maybe<Scalars['Int']>
  /** 客户id */
  customerId: Scalars['Int']
  /** 客户名称 */
  customerName: Scalars['String']
  /** 客户分组id */
  customerGroupId: Scalars['Int']
  /** 客户分组名称 */
  customerGroupName: Scalars['String']
  /** 配送地址id */
  customerDistributionId: Scalars['Int']
  /** 配送地址名称 */
  customerDistributionName: Scalars['String']
  /** 仓库id */
  warehouseId: Scalars['Int']
  /** 仓库名称 */
  warehouseName: Scalars['String']
  /** 生产日期 */
  planDate: Scalars['String']
  /** 计划开始时间 */
  planStartTime: Scalars['String']
  /** 计划结束时间 */
  planEndTime: Scalars['String']
  /** 备注 */
  planDescription?: Maybe<Scalars['String']>
}

/** 创建生产计划信息入参 */
export type PlanInfoInput = {
  /** 计划id */
  planId?: Maybe<Scalars['Int']>
  /** 客户id */
  customerId: Scalars['Int']
  /** 客户名称 */
  customerName: Scalars['String']
  /** 客户分组id */
  customerGroupId: Scalars['Int']
  /** 客户分组名称 */
  customerGroupName: Scalars['String']
  /** 配送地址id */
  customerDistributionId: Scalars['Int']
  /** 配送地址名称 */
  customerDistributionName: Scalars['String']
  /** 仓库id */
  warehouseId: Scalars['Int']
  /** 仓库名称 */
  warehouseName: Scalars['String']
  /** 生产日期 */
  planDate: Scalars['String']
  /** 计划开始时间 */
  planStartTime: Scalars['String']
  /** 计划结束时间 */
  planEndTime: Scalars['String']
  /** 备注 */
  planDescription?: Maybe<Scalars['String']>
  /** 计划任务信息 */
  task: Array<Maybe<TaskInput>>
}

/** 分页对象 */
export type PlanPageResult = {
  __typename?: 'PlanPageResult'
  records?: Maybe<Array<Maybe<ProductionPlanPayload>>>
  pageCurrent?: Maybe<Scalars['Int']>
  pageSize?: Maybe<Scalars['Int']>
  totalRecords?: Maybe<Scalars['Long']>
}

/** 生产计划查询入参 */
export type PlanQueryInput = {
  /** 模糊查询 */
  param?: Maybe<Scalars['String']>
  /**
   * 列表头筛选
   * 日期
   */
  planDate?: Maybe<Scalars['String']>
  /** 状态 */
  planStatus?: Maybe<Scalars['Int']>
}

export type PlanTaskInfoInput = {
  /** 生产任务id */
  taskId: Scalars['Int']
  /** 生产计划id */
  planId: Scalars['Int']
  /** 生产组长id */
  leaderId: Scalars['Int']
  /** 生产组长名称 */
  leaderName: Scalars['String']
  /** 生产线 */
  line: Scalars['Int']
  /** 计划人数 */
  numberPlan: Scalars['Int']
  /** 商品信息 */
  commodities: Array<Maybe<CommodityInput>>
}

export type PlanTaskInput = {
  planId: Scalars['Int']
  /** 计划任务信息 */
  task: Array<Maybe<TaskInput>>
}

export type ProductionInOrderItemPayload = {
  __typename?: 'ProductionInOrderItemPayload'
  /** 生产入库订单明细id */
  inOrderItemId?: Maybe<Scalars['Int']>
  /** 生库订单id */
  inOrderId?: Maybe<Scalars['Int']>
  /** 商品id */
  commodityId?: Maybe<Scalars['Int']>
  /** 商品名称 */
  commodityName?: Maybe<Scalars['String']>
  /** 商品sku id */
  commoditySkuId?: Maybe<Scalars['Int']>
  /** 商品规格选项id */
  commoditySpecOptionId?: Maybe<Array<Maybe<Scalars['Int']>>>
  /** sku文字描述，规格选项文字数组 */
  skuTextDescription?: Maybe<Array<Maybe<Scalars['String']>>>
  /** 单位类型数量(x个) */
  unitQuantity?: Maybe<Scalars['String']>
  /** 单位类型（例：kg，个） */
  unitType?: Maybe<Scalars['Int']>
  /** 单位类型数量（例：kg，个） */
  unitTypeName?: Maybe<Scalars['String']>
  /** 总计类型数量(x箱) */
  totalQuantity?: Maybe<Scalars['String']>
  /** 总计类型（例：件） */
  totalType?: Maybe<Scalars['Int']>
  /** 总计类型数量（例：件） */
  totalTypeName?: Maybe<Scalars['String']>
  createTime?: Maybe<Scalars['String']>
  createBy?: Maybe<Scalars['Int']>
  updateTime?: Maybe<Scalars['String']>
}

export type ProductionInOrderListInput = {
  /** 生产任务id */
  taskId: Scalars['Int']
  /** 入库订单类型 */
  inOrderType: Scalars['Int']
  /** 任务状态 */
  inOrderStatus: Array<Maybe<Scalars['Int']>>
}

export type ProductionInOrderLogPayload = {
  __typename?: 'ProductionInOrderLogPayload'
  /** 入库订单日志id */
  inOrderLogId?: Maybe<Scalars['Int']>
  /** 入库订单id */
  inOrderId?: Maybe<Scalars['Int']>
  /**
   * 入库订单操作类型
   * 10：创建时间
   * 20：提交时间
   * 30：入库时间
   * 40：取消时间;
   */
  inOrderLogType?: Maybe<Scalars['Int']>
  /** 入库订单操作枚举文字 */
  inOrderLogTypeText?: Maybe<Scalars['String']>
  /** 入库订单操作备注 */
  inOrderLogDescription?: Maybe<Scalars['String']>
  createTime?: Maybe<Scalars['String']>
  createBy?: Maybe<Scalars['Int']>
  /** 创建用户名称 */
  createUserName?: Maybe<Scalars['String']>
}

export type ProductionInOrderPayload = {
  __typename?: 'ProductionInOrderPayload'
  /** 入库订单id */
  inOrderId?: Maybe<Scalars['Int']>
  /** 生产任务id */
  taskId?: Maybe<Scalars['Int']>
  /** 生产任务编号 */
  taskCode?: Maybe<Scalars['String']>
  /** 入库订单编号 */
  inOrderCode?: Maybe<Scalars['String']>
  /** 入库订单类型[10:生产入库] */
  inOrderType?: Maybe<Scalars['Int']>
  /** 入库订单类型名称 */
  inOrderTypeName?: Maybe<Scalars['String']>
  /**
   * 入库订单状态
   * 10：待提交
   * 20：待入库
   * 30：部分入库
   * 40：已完成
   * 50：已取消';
   */
  inOrderStatus?: Maybe<Scalars['Int']>
  /** 订单状态名称 */
  inOrderStatusName?: Maybe<Scalars['String']>
  /** 商品类型id */
  commodityTypeId?: Maybe<Scalars['Int']>
  /** 商品类型名称 */
  commodityTypeName?: Maybe<Scalars['String']>
  /** 客户id */
  customerId?: Maybe<Scalars['Int']>
  /** 客户名称 */
  customerName?: Maybe<Scalars['String']>
  /** 客户分组id */
  customerGroupId?: Maybe<Scalars['Int']>
  /** 客户分组名称 */
  customerGroupName?: Maybe<Scalars['String']>
  /** 客户配送地址id */
  customerDistributionId?: Maybe<Scalars['Int']>
  /** 客户配送地址名称 */
  customerDistributionName?: Maybe<Scalars['String']>
  /** 分公司id */
  organizationId?: Maybe<Scalars['Int']>
  /** 分公司名称 */
  organizationName?: Maybe<Scalars['String']>
  /** 仓库id */
  warehouseId?: Maybe<Scalars['Int']>
  /** 仓库名称 */
  warehouseName?: Maybe<Scalars['String']>
  /** 备注信息 */
  inOrderDescription?: Maybe<Scalars['String']>
  /** 创建时间 */
  createTime?: Maybe<Scalars['String']>
  /** 创建人 */
  createBy?: Maybe<Scalars['Int']>
  /** 创建人名称 */
  createUserName?: Maybe<Scalars['String']>
  /** 更新时间 */
  updateTime?: Maybe<Scalars['String']>
  /** 更新人id */
  updateBy?: Maybe<Scalars['Int']>
  /** 商品信息 */
  commodities?: Maybe<Array<Maybe<ProductionInOrderItemPayload>>>
  /** 取消订单备注 */
  cancelDescription?: Maybe<Scalars['String']>
}

export type ProductionOutOrderDetailPayload = {
  __typename?: 'ProductionOutOrderDetailPayload'
  /** 生产出库订单明细id */
  outOrderItemId?: Maybe<Scalars['Int']>
  /** 生库订单id */
  outOrderId?: Maybe<Scalars['Int']>
  /** 商品id */
  commodityId?: Maybe<Scalars['Int']>
  /** 商品名称 */
  commodityName?: Maybe<Scalars['String']>
  /** 商品sku id */
  commoditySkuId?: Maybe<Scalars['Int']>
  /** 商品规格选项id */
  commoditySpecOptionId?: Maybe<Array<Maybe<Scalars['Int']>>>
  /** sku文字描述，规格选项文字数组 */
  skuTextDescription?: Maybe<Array<Maybe<Scalars['String']>>>
  /** 单位类型数量 */
  unitQuantity?: Maybe<Scalars['String']>
  /** 单位类型（例：kg，个） */
  unitType?: Maybe<Scalars['Int']>
  /** 单位类型数量（例：kg，个） */
  unitTypeName?: Maybe<Scalars['String']>
  /** 总计类型数量 */
  totalQuantity?: Maybe<Scalars['String']>
  /** 总计类型（例：件） */
  totalType?: Maybe<Scalars['Int']>
  /** 总计类型数量（例：件） */
  totalTypeName?: Maybe<Scalars['String']>
  /** 库存单位类型数量(x箱) */
  stockUnitQuantity?: Maybe<Scalars['String']>
  /** 库存总计类型数量(x箱) */
  stockTotalQuantity?: Maybe<Scalars['String']>
  createTime?: Maybe<Scalars['String']>
  createBy?: Maybe<Scalars['Int']>
  updateTime?: Maybe<Scalars['String']>
}

export type ProductionOutOrderListInput = {
  /** 生产任务id */
  taskId: Scalars['Int']
  /** 出库订单类型 */
  outOrderType: Scalars['Int']
  /** 任务状态 */
  outOrderStatus: Array<Maybe<Scalars['Int']>>
}

export type ProductionOutOrderLogPayload = {
  __typename?: 'ProductionOutOrderLogPayload'
  /** 出库订单日志id */
  outOrderLogId?: Maybe<Scalars['Int']>
  /** 出库订单id */
  outOrderId?: Maybe<Scalars['Int']>
  /**
   * 出库订单操作类型
   * 10：创建时间
   * 20：提交时间
   * 30：出库时间
   * 40：取消时间;
   */
  outOrderLogType?: Maybe<Scalars['Int']>
  /** 出库订单操作枚举文字 */
  outOrderLogTypeText?: Maybe<Scalars['String']>
  /** 出库订单操作备注 */
  outOrderLogDescription?: Maybe<Scalars['String']>
  createTime?: Maybe<Scalars['String']>
  createBy?: Maybe<Scalars['Int']>
  /** 创建用户名称 */
  createUserName?: Maybe<Scalars['String']>
}

export type ProductionOutOrderPayload = {
  __typename?: 'ProductionOutOrderPayload'
  /** 出库订单id */
  outOrderId?: Maybe<Scalars['Int']>
  /** 生产任务id */
  taskId?: Maybe<Scalars['Int']>
  /** 生产任务编号 */
  taskCode?: Maybe<Scalars['String']>
  /** 出库订单编号 */
  outOrderCode?: Maybe<Scalars['String']>
  /** 出库订单类型[10：原料领料出库、20：辅料领料出库] */
  outOrderType?: Maybe<Scalars['Int']>
  /** 出库订单类型名称 */
  outOrderTypeName?: Maybe<Scalars['String']>
  /**
   * 出库订单状态
   * 10：待提交
   * 20：待出库
   * 30：部分出库
   * 40：已完成
   * 50：已取消';
   */
  outOrderStatus?: Maybe<Scalars['Int']>
  /** 订单状态名称 */
  outOrderStatusName?: Maybe<Scalars['String']>
  /** 商品类型id */
  commodityTypeId?: Maybe<Scalars['Int']>
  /** 商品类型名称 */
  commodityTypeName?: Maybe<Scalars['String']>
  /** 客户id */
  customerId?: Maybe<Scalars['Int']>
  /** 客户名称 */
  customerName?: Maybe<Scalars['String']>
  /** 客户分组id */
  customerGroupId?: Maybe<Scalars['Int']>
  /** 客户分组名称 */
  customerGroupName?: Maybe<Scalars['String']>
  /** 客户配送地址id */
  customerDistributionId?: Maybe<Scalars['Int']>
  /** 客户配送地址名称 */
  customerDistributionName?: Maybe<Scalars['String']>
  /** 分公司id */
  organizationId?: Maybe<Scalars['Int']>
  /** 分公司名称 */
  organizationName?: Maybe<Scalars['String']>
  /** 仓库id */
  warehouseId?: Maybe<Scalars['Int']>
  /** 仓库名称 */
  warehouseName?: Maybe<Scalars['String']>
  /** 备注信息 */
  outOrderDescription?: Maybe<Scalars['String']>
  /** 创建时间 */
  createTime?: Maybe<Scalars['String']>
  /** 创建人 */
  createBy?: Maybe<Scalars['Int']>
  /** 创建人名称 */
  createUserName?: Maybe<Scalars['String']>
  /** 更新时间 */
  updateTime?: Maybe<Scalars['String']>
  /** 更新人id */
  updateBy?: Maybe<Scalars['Int']>
  /** 商品信息 */
  commodities?: Maybe<Array<Maybe<ProductionOutOrderDetailPayload>>>
  /** 取消订单备注 */
  cancelDescription?: Maybe<Scalars['String']>
}

/** 生产计划详情 */
export type ProductionPlanDetailPayload = {
  __typename?: 'ProductionPlanDetailPayload'
  /** 计划id */
  planId?: Maybe<Scalars['Int']>
  /** 订单号 */
  planCode?: Maybe<Scalars['String']>
  /** 任务状态ID */
  planStatus?: Maybe<Scalars['Int']>
  /** 任务状态名称 */
  planStatusName?: Maybe<Scalars['String']>
  /** 客户id */
  customerId?: Maybe<Scalars['Int']>
  /** 客户名称 */
  customerName?: Maybe<Scalars['String']>
  /** 客户分组id */
  customerGroupId?: Maybe<Scalars['Int']>
  /** 客户分组名称 */
  customerGroupName?: Maybe<Scalars['String']>
  /** 配送地址id */
  customerDistributionId?: Maybe<Scalars['Int']>
  /** 配送地址名称 */
  customerDistributionName?: Maybe<Scalars['String']>
  /** 仓库id */
  warehouseId?: Maybe<Scalars['Int']>
  /** 仓库名称 */
  warehouseName?: Maybe<Scalars['String']>
  /** 生产日期 */
  planDate?: Maybe<Scalars['String']>
  /** 计划开始时间 */
  planStartTime?: Maybe<Scalars['String']>
  /** 计划结束时间 */
  planEndTime?: Maybe<Scalars['String']>
  /** 备注 */
  planDescription?: Maybe<Scalars['String']>
  /** 生产计划日志备注 */
  planLogDescription?: Maybe<Scalars['String']>
  /** 计划任务信息 */
  task?: Maybe<Array<Maybe<TaskPayload>>>
}

/** 生产计划操作日志 */
export type ProductionPlanLogPayLoad = {
  __typename?: 'ProductionPlanLogPayLoad'
  /** 生产计划日志id */
  planLogId?: Maybe<Scalars['Int']>
  /** 生产计划id */
  planId?: Maybe<Scalars['Int']>
  /** 日志操作类型 */
  planLogType?: Maybe<Scalars['Int']>
  /** 日志操作类型枚举文字 */
  planLogTypeText?: Maybe<Scalars['String']>
  /** 日志备注 */
  planLogDescription?: Maybe<Scalars['String']>
  /** 创建时间 */
  createTime?: Maybe<Scalars['String']>
  /** 创建人id */
  createBy?: Maybe<Scalars['Int']>
  /** 创建人名称 */
  createUserName?: Maybe<Scalars['String']>
}

/** 生产计划实体 */
export type ProductionPlanPayload = {
  __typename?: 'ProductionPlanPayload'
  /** 计划id */
  planId?: Maybe<Scalars['Int']>
  /** 计划单号 */
  planCode?: Maybe<Scalars['String']>
  /** 计划状态 */
  planStatus?: Maybe<Scalars['Int']>
  /** 计划状态名称 */
  planStatusName?: Maybe<Scalars['String']>
  /** 产品种类数量 */
  categorySum?: Maybe<Scalars['Int']>
  /** 客户id */
  customerId?: Maybe<Scalars['Int']>
  /** 客户名称 */
  customerName?: Maybe<Scalars['String']>
  /** 客户分组id */
  customerGroupId?: Maybe<Scalars['Int']>
  /** 客户分组名称 */
  customerGroupName?: Maybe<Scalars['String']>
  /** 配送地址id */
  customerDistributionId?: Maybe<Scalars['Int']>
  /** 配送地址名称 */
  customerDistributionName?: Maybe<Scalars['String']>
  /** 仓库id */
  warehouseId?: Maybe<Scalars['Int']>
  /** 仓库名称 */
  warehouseName?: Maybe<Scalars['String']>
  /** 分公司id */
  organizationId?: Maybe<Scalars['Int']>
  /** 分公司名称 */
  organizationName?: Maybe<Scalars['String']>
  /** 生产日期 */
  planDate?: Maybe<Scalars['String']>
  /** 计划开始时间 */
  planStartTime?: Maybe<Scalars['String']>
  /** 计划结束时间 */
  planEndTime?: Maybe<Scalars['String']>
  /** 备注 */
  planDescription?: Maybe<Scalars['String']>
  /** 创建时间 */
  createTime?: Maybe<Scalars['String']>
  /** 创建人id */
  createBy?: Maybe<Scalars['Int']>
  /** 更新时间 */
  updateTime?: Maybe<Scalars['String']>
  /** 更新人id */
  updateBy?: Maybe<Scalars['Int']>
  /** 总期望数 */
  expectNumSum?: Maybe<Scalars['Int']>
  /** 总完成数 */
  completedNumSum?: Maybe<Scalars['Int']>
}

/** 生产计划状态下拉 */
export type ProductionPlanStatus = {
  __typename?: 'ProductionPlanStatus'
  /** 待发布数量 */
  toBeReleasedNum?: Maybe<Scalars['Int']>
  /** 进行中数量 */
  processingNum?: Maybe<Scalars['Int']>
  /** 已完成数量 */
  completedNum?: Maybe<Scalars['Int']>
}

export type Query = {
  __typename?: 'Query'
  /** 生产任务列表 */
  tasks?: Maybe<TaskPageResult>
  /** 查询生产任务列表 */
  keywordTasks?: Maybe<TaskPageResult>
  /**     生产任务统计 */
  taskStatistics?: Maybe<TaskStatistics>
  /**     生产任务详情 */
  task?: Maybe<Task>
  /**     库存列表 */
  stocks?: Maybe<Array<Maybe<Stock>>>
  /**     任务明细列表 */
  taskItems?: Maybe<Array<Maybe<TaskItem>>>
  /**     生产任务操作记录 */
  taskLogs?: Maybe<Array<Maybe<TaskLog>>>
  /** 查询全部出库订单 */
  outOrderList?: Maybe<Array<Maybe<ProductionOutOrderPayload>>>
  /** 查询出库订单详情 */
  outOrderDetail?: Maybe<ProductionOutOrderPayload>
  /** 查询出库订单记录 */
  outOrderLog?: Maybe<Array<Maybe<ProductionOutOrderLogPayload>>>
  /** 查询全部入库订单 */
  inOrderList?: Maybe<Array<Maybe<ProductionInOrderPayload>>>
  /** 单个入库订单详情 */
  inOrderDetail?: Maybe<ProductionInOrderPayload>
  /** 入库订单记录 */
  inOrderLog?: Maybe<Array<Maybe<ProductionInOrderLogPayload>>>
  /** 查询订单数量（生产入库，原料领料，辅料领料） */
  countOrder?: Maybe<CountOrderPayload>
  /** 计划列表 */
  pageProductionPlan?: Maybe<PlanPageResult>
  /** 生产计划详情 */
  getProductionPlanDetail?: Maybe<ProductionPlanDetailPayload>
  /** 操作日志列表 */
  productionPlanLogs?: Maybe<Array<Maybe<ProductionPlanLogPayLoad>>>
  /** 生产计划状态下拉列表 */
  productionPlanStatusOption?: Maybe<ProductionPlanStatus>
  /** 商品品类列表信息 */
  listCommodityCategoryOption?: Maybe<Array<Maybe<CommodityCategoryPayload>>>
  /** 品类id查询商品列表信息 */
  listCommodityOptionByCategoryId?: Maybe<Array<Maybe<CommodityPayload>>>
  /** 商品列表信息品类（商品名称查询） */
  listCommodities?: Maybe<Array<Maybe<CommodityPayload>>>
  /** 商品规格和商品规格选项列表信息 */
  listCommoditySpecAndOption?: Maybe<Array<Maybe<CommoditySpecPayload>>>
  /** 根据商品sku id和规格列表查询具体信息 */
  getCommoditySkuAndUnitInfo?: Maybe<CommoditySkuAndUnitPayload>
  /** 商品规格选项id数据和文字描述映射关系列表信息 */
  listCommoditySkuAndUnit?: Maybe<Array<Maybe<CommoditySkuAndUnitPayload>>>
  /**  基础管理-商品分类-|商品类型接口| */
  commodityList?: Maybe<Array<Maybe<Option>>>
  supplierCommodityList?: Maybe<Array<Maybe<Option>>>
  permissions?: Maybe<Array<Maybe<Permission>>>
  loginUserInfo?: Maybe<UserPayload>
  /**  客户列表 */
  customers?: Maybe<CustomerPageResult>
  /**  客户详情 */
  customer?: Maybe<CustomerVo>
  /**  客户分组列表 */
  customerGroups?: Maybe<Array<Maybe<CustomerGroupResponse>>>
  supplierPages?: Maybe<SupplierPageResult>
  supplier?: Maybe<SupplierResponse>
  listStorehouse?: Maybe<Array<Maybe<StorehousePayload>>>
  listProductLeader?: Maybe<Array<Maybe<Option>>>
  userInformation?: Maybe<UserPayload>
  userInformationList?: Maybe<UserPageResult>
  mobileRepeat?: Maybe<Scalars['Boolean']>
  roles?: Maybe<Array<Maybe<RolePayload>>>
  _service?: Maybe<_Service>
}

export type QueryTasksArgs = {
  taskCondition?: Maybe<TaskCondition>
  page?: Maybe<Page>
}

export type QueryKeywordTasksArgs = {
  keyword?: Maybe<Scalars['String']>
  page?: Maybe<Page>
}

export type QueryTaskStatisticsArgs = {
  date?: Maybe<Scalars['String']>
}

export type QueryTaskArgs = {
  taskId: Scalars['Int']
}

export type QueryStocksArgs = {
  stockCondition?: Maybe<StockCondition>
}

export type QueryTaskItemsArgs = {
  taskId: Scalars['Int']
}

export type QueryTaskLogsArgs = {
  taskId: Scalars['Int']
}

export type QueryOutOrderListArgs = {
  productionOutOrderListInput: ProductionOutOrderListInput
}

export type QueryOutOrderDetailArgs = {
  outOrderId: Scalars['Int']
}

export type QueryOutOrderLogArgs = {
  outOrderId: Scalars['Int']
}

export type QueryInOrderListArgs = {
  productionInOrderListInput: ProductionInOrderListInput
}

export type QueryInOrderDetailArgs = {
  inOrderId: Scalars['Int']
}

export type QueryInOrderLogArgs = {
  inOrderId: Scalars['Int']
}

export type QueryCountOrderArgs = {
  taskId: Scalars['Int']
}

export type QueryPageProductionPlanArgs = {
  planQueryInput?: Maybe<PlanQueryInput>
  page?: Maybe<Page>
}

export type QueryGetProductionPlanDetailArgs = {
  planId?: Maybe<Scalars['Int']>
}

export type QueryProductionPlanLogsArgs = {
  planId?: Maybe<Scalars['Int']>
}

export type QueryProductionPlanStatusOptionArgs = {
  planDate?: Maybe<Scalars['String']>
}

export type QueryListCommodityOptionByCategoryIdArgs = {
  categoryId?: Maybe<Scalars['Int']>
}

export type QueryListCommoditiesArgs = {
  commodityName?: Maybe<Scalars['String']>
}

export type QueryListCommoditySpecAndOptionArgs = {
  commodityId?: Maybe<Scalars['Int']>
}

export type QueryGetCommoditySkuAndUnitInfoArgs = {
  commoditySkuAndUnitInput?: Maybe<CommoditySkuAndUnitInput>
}

export type QueryListCommoditySkuAndUnitArgs = {
  commodityId?: Maybe<Scalars['Int']>
}

export type QueryCustomersArgs = {
  page?: Maybe<Page>
  keyword?: Maybe<Scalars['String']>
}

export type QueryCustomerArgs = {
  customerId?: Maybe<Scalars['Int']>
}

export type QuerySupplierPagesArgs = {
  page?: Maybe<Page>
  supplierCondition?: Maybe<SupplierCondition>
}

export type QuerySupplierArgs = {
  supplierId?: Maybe<Scalars['Int']>
}

export type QueryListProductLeaderArgs = {
  storehouseId: Scalars['Int']
}

export type QueryUserInformationArgs = {
  userId?: Maybe<Scalars['Int']>
}

export type QueryUserInformationListArgs = {
  page?: Maybe<Page>
}

export type QueryMobileRepeatArgs = {
  mobileRepeatPayload?: Maybe<MobileRepeatPayload>
}

export type RoleInput = {
  roleId?: Maybe<Scalars['Int']>
  roleName?: Maybe<Scalars['String']>
}

export type RolePayload = {
  __typename?: 'RolePayload'
  roleId?: Maybe<Scalars['Int']>
  roleName?: Maybe<Scalars['String']>
  roleCode?: Maybe<Scalars['String']>
}

export type SendSmsInput = {
  mobile?: Maybe<Scalars['String']>
}

export type SendSmsPayload = {
  __typename?: 'SendSmsPayload'
  success: Scalars['Boolean']
}

/** 库存 */
export type Stock = {
  __typename?: 'Stock'
  /**     商品类型id */
  commodityTypeId?: Maybe<Scalars['Int']>
  /**     商品类型名称 */
  commodityTypeName?: Maybe<Scalars['String']>
  /**     商品id */
  commodityId?: Maybe<Scalars['Int']>
  /**     商品名称 */
  commodityName?: Maybe<Scalars['String']>
  /**     商品sku id */
  commoditySkuId?: Maybe<Scalars['Int']>
  /**     商品规格选项id */
  commoditySpecOptionId?: Maybe<Array<Maybe<Scalars['Int']>>>
  /** sku文字描述，规格选项文字数组 */
  skuTextDescription?: Maybe<Array<Maybe<Scalars['String']>>>
  /**     客户id */
  customerId?: Maybe<Scalars['Int']>
  /**     客户名称 */
  customerName?: Maybe<Scalars['String']>
  /**     客户分组id */
  customerGroupId?: Maybe<Scalars['Int']>
  /**     客户分组名称 */
  customerGroupName?: Maybe<Scalars['String']>
  /**     单位类型数量 */
  stockUnitQuantity?: Maybe<Scalars['String']>
  /** 单位类型 */
  stockUnitType?: Maybe<Scalars['Int']>
  /**     单位类型名称 */
  stockUnitTypeName?: Maybe<Scalars['String']>
  /**     总计类型数量 */
  stockTotalQuantity?: Maybe<Scalars['String']>
  /**     总计类型 */
  stockTotalType?: Maybe<Scalars['Int']>
  /**     总计类型名称 */
  stockTotalTypeName?: Maybe<Scalars['String']>
}

/** 库存列表请求参数 */
export type StockCondition = {
  /** 任务id */
  taskId: Scalars['Int']
  /** 商品类型 10原料，20辅料 */
  commodityType: Scalars['Int']
}

/** 仓库列表下拉 */
export type StorehousePayload = {
  __typename?: 'StorehousePayload'
  storehouseId?: Maybe<Scalars['Int']>
  storehouseName?: Maybe<Scalars['String']>
}

export type SupplierCondition = {
  keyword?: Maybe<Scalars['String']>
  commodityId?: Maybe<Scalars['Int']>
}

export type SupplierInput = {
  supplierId?: Maybe<Scalars['Int']>
  supplierName?: Maybe<Scalars['String']>
  supplierShortName?: Maybe<Scalars['String']>
  commodityTypeId?: Maybe<Scalars['Int']>
  commodityType?: Maybe<Scalars['String']>
  phoneNum?: Maybe<Scalars['String']>
  supplierAddress?: Maybe<Scalars['String']>
  houseNum?: Maybe<Scalars['String']>
  remark?: Maybe<Scalars['String']>
}

/** 客户分页实体 */
export type SupplierPageResult = {
  __typename?: 'SupplierPageResult'
  records?: Maybe<Array<Maybe<SupplierResponse>>>
  pageCurrent?: Maybe<Scalars['Int']>
  pageSize?: Maybe<Scalars['Int']>
  totalRecords?: Maybe<Scalars['Long']>
}

export type SupplierResponse = {
  __typename?: 'SupplierResponse'
  supplierId?: Maybe<Scalars['Int']>
  supplierName?: Maybe<Scalars['String']>
  supplierShortName?: Maybe<Scalars['String']>
  commodityTypeId?: Maybe<Scalars['Int']>
  commodityType?: Maybe<Scalars['String']>
  phoneNum?: Maybe<Scalars['String']>
  supplierAddress?: Maybe<Scalars['String']>
  houseNum?: Maybe<Scalars['String']>
  remark?: Maybe<Scalars['String']>
  createTime?: Maybe<Scalars['Date']>
}

/** 生产任务详情 */
export type Task = {
  __typename?: 'Task'
  /** 生产计划id */
  planId?: Maybe<Scalars['Int']>
  /** 生产任务id */
  taskId?: Maybe<Scalars['Int']>
  /** 任务单号 */
  taskCode?: Maybe<Scalars['String']>
  /**     任务状态【10：无状态，计划未发布时任务没有状态、20：待生产、30：生产中、40：已完成、50：已取消】 */
  taskStatus?: Maybe<Scalars['Int']>
  /**     任务状态名称 */
  taskStatusName?: Maybe<Scalars['String']>
  /**     生产组长id */
  leaderId?: Maybe<Scalars['Int']>
  /**     生产组长名称 */
  leaderName?: Maybe<Scalars['String']>
  /** 生产线 */
  line?: Maybe<Scalars['Int']>
  /**     计划人数 */
  numberPlan?: Maybe<Scalars['Int']>
  /**     实际生产人数 */
  numberActual?: Maybe<Scalars['Int']>
  /**      取消原因 */
  cancelReason?: Maybe<Scalars['String']>
  /**     生产计划 */
  plan?: Maybe<Plan>
  /**     生产任务明细 */
  taskItems?: Maybe<Array<Maybe<TaskItem>>>
}

/** 生产任务列表查询 */
export type TaskCondition = {
  /**     时间 yyyy-MM-dd */
  date?: Maybe<Scalars['String']>
  /**     任务状态 */
  taskStatus?: Maybe<Scalars['Int']>
}

/** 生产任务添加入参 */
export type TaskInput = {
  /** 生产组长id */
  leaderId: Scalars['Int']
  /** 生产组长名称 */
  leaderName: Scalars['String']
  /** 生产线 */
  line: Scalars['Int']
  /** 计划人数 */
  numberPlan: Scalars['Int']
  /** 商品信息 */
  commodities: Array<Maybe<CommodityInput>>
}

/** 生产任务明细 */
export type TaskItem = {
  __typename?: 'TaskItem'
  /**     生产任务明细id */
  taskItemId?: Maybe<Scalars['Int']>
  /** 生产计划id */
  planId?: Maybe<Scalars['Int']>
  /**     生产任务id */
  taskId?: Maybe<Scalars['Int']>
  /**     商品id */
  commodityId?: Maybe<Scalars['Int']>
  /**     商品名称 */
  commodityName?: Maybe<Scalars['String']>
  /**     bom id */
  commodityBomId?: Maybe<Scalars['Int']>
  /**     商品sku id */
  commoditySkuId?: Maybe<Scalars['Int']>
  /**     商品规格选项id */
  commoditySpecOptionId?: Maybe<Array<Maybe<Scalars['Int']>>>
  /**     sku文字描述，规格选项文字数组 */
  skuTextDescription?: Maybe<Array<Maybe<Scalars['String']>>>
  /**     期望数量 */
  expectNum?: Maybe<Scalars['String']>
  /**     已生产数量，默认0 */
  completedNum?: Maybe<Scalars['String']>
  /** 单位数量 */
  unitQuantity?: Maybe<Scalars['String']>
  /** 单位类型 */
  unitType?: Maybe<Scalars['Int']>
  /**     单位类型名称 */
  unitTypeName?: Maybe<Scalars['String']>
  /**     总计类型 */
  totalType?: Maybe<Scalars['Int']>
  /**     总计类型名称 */
  totalTypeName?: Maybe<Scalars['String']>
}

/** 生产任务列表商品信息 */
export type TaskItems = {
  __typename?: 'TaskItems'
  /**     商品名称 */
  commodityName?: Maybe<Scalars['String']>
  /**     sku选项 */
  skuTextDescription?: Maybe<Array<Maybe<Scalars['String']>>>
  /**     总计类型名称 */
  totalTypeName?: Maybe<Scalars['String']>
  /**     期望数量 */
  expectNum?: Maybe<Scalars['String']>
}

/** 生产操作记录 */
export type TaskLog = {
  __typename?: 'TaskLog'
  /** 生产任务操作日志id */
  taskLogId?: Maybe<Scalars['Int']>
  /** 生产计划id */
  planId?: Maybe<Scalars['Int']>
  /** 生产任务id */
  taskId?: Maybe<Scalars['Int']>
  /** 生产任务操作日志类型【10：开始任务、20：原料领料、30：辅料领料、40：成品入库、50：结束任务】 */
  taskLogType?: Maybe<Scalars['Int']>
  /** 生产任务操作类型枚举文字 */
  taskLogTypeText?: Maybe<Scalars['String']>
  /** 生产任务操作日志备注 */
  taskLogDescription?: Maybe<Scalars['String']>
  /** 创建时间 */
  createTime?: Maybe<Scalars['String']>
  /** 创建人id */
  createBy?: Maybe<Scalars['Int']>
  /** 创建人名称 */
  createUserName?: Maybe<Scalars['String']>
}

/** 分页对象 */
export type TaskPageResult = {
  __typename?: 'TaskPageResult'
  records?: Maybe<Array<Maybe<Tasks>>>
  pageCurrent?: Maybe<Scalars['Int']>
  pageSize?: Maybe<Scalars['Int']>
  totalRecords?: Maybe<Scalars['Long']>
}

/** 任务实体 */
export type TaskPayload = {
  __typename?: 'TaskPayload'
  /** 生产任务id */
  taskId?: Maybe<Scalars['Int']>
  /** 生产组长id */
  leaderId?: Maybe<Scalars['Int']>
  /** 生产组长名称 */
  leaderName?: Maybe<Scalars['String']>
  /** 任务状态ID */
  taskStatus?: Maybe<Scalars['Int']>
  /** 任务状态名称 */
  taskStatusName?: Maybe<Scalars['String']>
  /** 任务单号名称 */
  taskCode?: Maybe<Scalars['String']>
  /** 生产线 */
  line?: Maybe<Scalars['Int']>
  /** 计划人数 */
  numberPlan?: Maybe<Scalars['Int']>
  /** 商品信息 */
  commodities?: Maybe<Array<Maybe<CommodityPayload>>>
}

/** 生产任务统计 */
export type TaskStatistics = {
  __typename?: 'TaskStatistics'
  /**     待生产数量 */
  toBeProduced?: Maybe<Scalars['Int']>
  /**     生产中数量 */
  inProduction?: Maybe<Scalars['Int']>
  /** 已完成数量 */
  completed?: Maybe<Scalars['Int']>
}

/** 生产任务列表 */
export type Tasks = {
  __typename?: 'Tasks'
  /**     生产任务id */
  taskId?: Maybe<Scalars['Int']>
  /**     任务状态【10：无状态、20：待生产、30：生产中、40：已完成、50：已取消】 */
  taskStatus?: Maybe<Scalars['Int']>
  /**     任务状态名称 */
  taskStatusName?: Maybe<Scalars['String']>
  /**     任务单号 */
  taskCode?: Maybe<Scalars['String']>
  /** 开始时间 */
  startTime?: Maybe<Scalars['String']>
  /**     结束时间 */
  endTime?: Maybe<Scalars['String']>
  /**     生产进度 */
  schedule?: Maybe<Scalars['String']>
  /**     总预期数量 */
  totalExpectNum?: Maybe<Scalars['String']>
  /**     总实际生产数量 */
  totalCompletedNum?: Maybe<Scalars['String']>
  /**     客户名称 */
  customerName?: Maybe<Scalars['String']>
  /**     仓库名称 */
  warehouseName?: Maybe<Scalars['String']>
  /**     任务明细 */
  taskItems?: Maybe<Array<Maybe<TaskItems>>>
}

export type UserInput = {
  userId?: Maybe<Scalars['Int']>
  /**  用户名称 */
  userName?: Maybe<Scalars['String']>
  /**  用户电话号码 */
  userPhoneNum?: Maybe<Scalars['String']>
  /**  座机号码 */
  landlineNum?: Maybe<Scalars['String']>
  /**  创建时间 */
  createTime?: Maybe<Scalars['String']>
  /**  组织名称 */
  organizationName?: Maybe<Scalars['String']>
  roles?: Maybe<Array<Maybe<RoleInput>>>
  stores?: Maybe<Array<Maybe<UserStoreInput>>>
}

export type UserListPayload = {
  __typename?: 'UserListPayload'
  userId?: Maybe<Scalars['Int']>
  /**  用户名称 */
  userName?: Maybe<Scalars['String']>
  /**  用户电话号码 */
  userPhoneNum?: Maybe<Scalars['String']>
  /**  座机号码 */
  landlineNum?: Maybe<Scalars['String']>
  /**  创建时间 */
  createTime?: Maybe<Scalars['String']>
  /**  组织名称 */
  organizationName?: Maybe<Scalars['String']>
  roles?: Maybe<Array<Maybe<Scalars['String']>>>
  stores?: Maybe<Array<Maybe<Scalars['String']>>>
}

/** 用户账户密码返回 */
export type UserLoginResponse = {
  __typename?: 'UserLoginResponse'
  /** 用户id */
  userId?: Maybe<Scalars['Int']>
  /** 用户名称 */
  userName?: Maybe<Scalars['String']>
  token?: Maybe<Scalars['String']>
  /** 组织名称 */
  organizationName?: Maybe<Scalars['String']>
  /** 组织id */
  organizationId?: Maybe<Scalars['Int']>
}

export type UserPageResult = {
  __typename?: 'UserPageResult'
  records?: Maybe<Array<Maybe<UserListPayload>>>
  pageCurrent?: Maybe<Scalars['Int']>
  pageSize?: Maybe<Scalars['Int']>
  totalRecords?: Maybe<Scalars['Long']>
}

export type UserPayload = {
  __typename?: 'UserPayload'
  userId?: Maybe<Scalars['Int']>
  /**  用户名称 */
  userName?: Maybe<Scalars['String']>
  /**  用户电话号码 */
  userPhoneNum?: Maybe<Scalars['String']>
  /**  座机号码 */
  landlineNum?: Maybe<Scalars['String']>
  /**  创建时间 */
  createTime?: Maybe<Scalars['String']>
  /**  组织名称 */
  organizationName?: Maybe<Scalars['String']>
  roles?: Maybe<Array<Maybe<RolePayload>>>
  stores?: Maybe<Array<Maybe<UserStorePayload>>>
}

export type UserStoreInput = {
  /**  用户id */
  userId?: Maybe<Scalars['Int']>
  /**  仓库ID */
  storehouseId?: Maybe<Scalars['Int']>
  /**  仓库名称 */
  storehouseName?: Maybe<Scalars['String']>
}

export type UserStorePayload = {
  __typename?: 'UserStorePayload'
  /**  用户id */
  userId?: Maybe<Scalars['Int']>
  /**  仓库ID */
  storehouseId?: Maybe<Scalars['Int']>
  /**  仓库名称 */
  storehouseName?: Maybe<Scalars['String']>
}

export type _Service = {
  __typename?: '_Service'
  sdl: Scalars['String']
}
