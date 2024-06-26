// Generated by openapi-ts-gen. DO NOT EDIT
/* eslint-disable */
export interface HealthCheckResult {
  message: string
}
export interface CreateUserDto {
  password?: string
  avatar?: string
  intro?: string
  data?: string
  email?: string
  language?: string
  lastSeenAt?: string
  lastLoginIp?: string
  nickname?: string
  ns: string
  phone?: string
  registerIp?: string
  registerRegion?: string
  roles?: string[]
  super?: boolean
  username?: string
  dialingPrefix?: string
}
export enum IdentityType {
  ID = "ID",
}
export type IdentityTypeType = typeof IdentityType[keyof typeof IdentityType];
export interface Identity {
  type?: IdentityType
  name?: string
  verifyAt?: string
  verified: boolean
}
export interface User {
  password?: string
  avatar?: string
  intro?: string
  data?: string
  email?: string
  language?: string
  lastSeenAt?: string
  lastLoginIp?: string
  nickname?: string
  ns: string
  phone?: string
  registerIp?: string
  registerRegion?: string
  roles?: string[]
  super?: boolean
  username?: string
  dialingPrefix?: string
  identity?: Identity
  id: string
  createAt?: string
  updateAt?: string
  createBy?: string
  updateBy?: string
}
export interface UpdateUserDto {
  password?: string
  avatar?: string
  intro?: string
  data?: string
  email?: string
  language?: string
  lastSeenAt?: string
  lastLoginIp?: string
  nickname?: string
  ns?: string
  phone?: string
  registerIp?: string
  registerRegion?: string
  roles?: string[]
  super?: boolean
  username?: string
  dialingPrefix?: string
}
export interface CreateNamespaceDto {
  data?: string
  desc?: string
  labels?: string[]
  name: string
  key: string
  parent?: string
  registerDefaultRoles?: string[]
  passwordRegExp?: string
}
export interface Namespace {
  data?: string
  desc?: string
  labels?: string[]
  name: string
  key: string
  parent?: string
  isScope: boolean
  ns: string
  registerDefaultRoles?: string[]
  passwordRegExp?: string
  id: string
  createAt?: string
  updateAt?: string
  createBy?: string
  updateBy?: string
}
export interface UpdateNamespaceDto {
  data?: string
  desc?: string
  labels?: string[]
  name?: string
  registerDefaultRoles?: string[]
  passwordRegExp?: string
}
export enum CaptchaPurpose {
  REGISTER = "REGISTER",
  LOGIN = "LOGIN",
  RESET_PASSWORD = "RESET_PASSWORD",
  UPDATE_PHONE = "UPDATE_PHONE",
  UPDATE_EMAIL = "UPDATE_EMAIL",
}
export type CaptchaPurposeType = typeof CaptchaPurpose[keyof typeof CaptchaPurpose];
export interface CreateCaptchaBySmsDto {
  purpose: CaptchaPurpose
  phone: string
  dialingPrefix: string
  scope: string
}
export interface CaptchaBySmsResult {
  purpose: CaptchaPurpose
  phone: string
  scope: string
  dialingPrefix?: string
  expireAt: string
}
export interface CreateCaptchaByEmailDto {
  purpose: CaptchaPurpose
  email: string
  scope: string
}
export interface CaptchaByEmailResult {
  purpose: CaptchaPurpose
  email: string
  scope: string
  expireAt: string
}
export interface CreateCaptchaByPhotoDto {
  purpose: CaptchaPurpose
  key: string
  scope: string
}
export interface CaptchaByPhotoResult {
  purpose: CaptchaPurpose
  capchaGifHex: string
  scope: string
  key: string
  expireAt: string
}
export interface CreateSessionDto {
  uid: string
  acl?: CreateSessionDto.Acl
  expireAt: string
  client?: string
  tokenExpiresIn?: string
}
export namespace CreateSessionDto {
  export interface Acl {
  }
}
export interface Session {
  acl?: Session.Acl
  expireAt: string
  key: string
  user: User
  client?: string
  tokenExpiresIn?: string
  id: string
  createAt?: string
  updateAt?: string
  createBy?: string
  updateBy?: string
}
export namespace Session {
  export interface Acl {
  }
}
export interface UpdateSessionDto {
  acl?: UpdateSessionDto.Acl
  expireAt?: string
  client?: string
  tokenExpiresIn?: string
  uid?: string
}
export namespace UpdateSessionDto {
  export interface Acl {
  }
}
export interface RestrictTokenDto {
  expiresIn: string
  acl?: RestrictTokenDto.Acl
  key: string
  ns?: string
}
export namespace RestrictTokenDto {
  export interface Acl {
  }
}
export interface OnlyToken {
  token: string
  tokenExpireAt: string
}
export interface Region {
  code: string
  nameZh: string
  namePinyin: string
  nameEn: string
  dialingPrefix: string
}
export interface MyInfo {
  password?: string
  avatar?: string
  intro?: string
  data?: string
  email?: string
  language?: string
  lastSeenAt?: string
  lastLoginIp?: string
  nickname?: string
  ns: string
  phone?: string
  registerIp?: string
  registerRegion?: string
  roles?: string[]
  super?: boolean
  username?: string
  dialingPrefix?: string
  identity?: Identity
  id: string
  createAt?: string
  updateAt?: string
  createBy?: string
  updateBy?: string
  hasPassword: boolean
}
export interface UpdateMyInfoDto {
  avatar?: string
  registerRegion?: string
  language?: string
  nickname?: string
  username?: string
  intro?: string
}
export interface UpdateMyPasswordDto {
  oldPassword?: string
  newPassword: string
}
export interface ResetMyPasswordDto {
  scope: string
  code: string
  newPassword: string
  email?: string
  phone?: string
  dialingPrefix?: string
}
export interface RegisterUserByPhoneDto {
  scope: string
  phone: string
  dialingPrefix: string
  code: string
  password?: string
}
export interface SessionWithToken {
  user: MyInfo
  acl?: SessionWithToken.Acl
  expireAt: string
  key: string
  client?: string
  tokenExpiresIn?: string
  id: string
  createAt?: string
  updateAt?: string
  createBy?: string
  updateBy?: string
  token: string
  tokenExpireAt: string
}
export namespace SessionWithToken {
  export interface Acl {
  }
}
export interface RegisterUserByEmailDto {
  scope: string
  email: string
  code: string
  password?: string
}
export interface RegisterUserByUsernameDto {
  scope: string
  username: string
  password: string
}
export interface LoginSessionDto {
  scope: string
  login: string
  password: string
}
export interface LoginSessionByPhoneDto {
  phone: string
  code: string
  dialingPrefix: string
  scope: string
}
export interface LoginSessionByEmailDto {
  email: string
  code: string
  scope: string
}
export interface UpdateMyEmailDto {
  email: string
  code: string
  scope: string
}
export interface UpdateMyPhoneDto {
  phone: string
  code: string
  scope: string
  dialingPrefix: string
}
export interface LogoutSessionDto {
  key: string
}
export interface RefreshSessionDto {
  key: string
}
export interface VerifyIdentityDto {
  type: IdentityType
  name: string
  identity: string
}
export interface HelloRequest {
}
export interface CreateUserRequest {
  body: CreateUserDto
}
export interface ListUsersRequest {
  ns?: string[]
  ns_scope?: string[]
  _sort?: ListUsersRequest.Sort
  id?: string[]
  name_like?: string
  username?: string
  username_like?: string
  nickname_like?: string
  email?: string
  phone?: string
  registerRegion?: string
  roles?: string[]
  dialingPrefix?: string
  _limit?: number
  _offset?: number
}
export namespace ListUsersRequest {
  export enum Sort {
    CREATE_AT = "createAt",
    CREATE_AT_DESC = "-createAt",
    UPDATE_AT = "updateAt",
    UPDATE_AT_DESC = "-updateAt",
  }
  export type SortType = typeof Sort[keyof typeof Sort];
}
export interface GetUserRequest {
  userId: string
}
export interface UpdateUserRequest {
  userId: string
  body: UpdateUserDto
}
export interface DeleteUserRequest {
  userId: string
}
export interface CreateNamespaceRequest {
  body: CreateNamespaceDto
}
export interface ListNamespacesRequest {
  parent?: string[]
  parent_scope?: string[]
  _sort?: ListNamespacesRequest.Sort
  name_like?: string
  labels?: string[]
  _limit?: number
  _offset?: number
}
export namespace ListNamespacesRequest {
  export enum Sort {
    CREATE_AT = "createAt",
    CREATE_AT_DESC = "-createAt",
    UPDATE_AT = "updateAt",
    UPDATE_AT_DESC = "-updateAt",
  }
  export type SortType = typeof Sort[keyof typeof Sort];
}
export interface GetNamespaceRequest {
  namespaceIdOrNs: string
}
export interface UpdateNamespaceRequest {
  namespaceId: string
  body: UpdateNamespaceDto
}
export interface DeleteNamespaceRequest {
  namespaceId: string
}
export interface ListScopesRequest {
  parent?: string[]
  _sort?: ListScopesRequest.Sort
  labels?: string[]
  _limit?: number
  _offset?: number
  name_like?: string
}
export namespace ListScopesRequest {
  export enum Sort {
    CREATE_AT = "createAt",
    CREATE_AT_DESC = "-createAt",
    UPDATE_AT = "updateAt",
    UPDATE_AT_DESC = "-updateAt",
  }
  export type SortType = typeof Sort[keyof typeof Sort];
}
export interface CreateCaptchaBySmsRequest {
  body: CreateCaptchaBySmsDto
}
export interface CreateCaptchaByEmailRequest {
  body: CreateCaptchaByEmailDto
}
export interface CreateCaptchaByPhotoRequest {
  body: CreateCaptchaByPhotoDto
}
export interface CreateSessionRequest {
  body: CreateSessionDto
}
export interface ListSessionsRequest {
  _sort?: ListSessionsRequest.Sort
  key?: string
  client?: string
  tokenExpiresIn?: string
  uid?: string
  _limit?: number
  _offset?: number
}
export namespace ListSessionsRequest {
  export enum Sort {
    CREATE_AT = "createAt",
    CREATE_AT_DESC = "-createAt",
    UPDATE_AT = "updateAt",
    UPDATE_AT_DESC = "-updateAt",
    EXPIRE_AT = "expireAt",
    EXPIRE_AT_DESC = "-expireAt",
  }
  export type SortType = typeof Sort[keyof typeof Sort];
}
export interface GetSessionRequest {
  sessionId: string
}
export interface UpdateSessionRequest {
  sessionId: string
  body: UpdateSessionDto
}
export interface DeleteSessionRequest {
  sessionId: string
}
export interface RestrictTokenRequest {
  body: RestrictTokenDto
}
export interface ListRegionsRequest {
}
export interface InitRequest {
}
export interface GetMyInfoRequest {
}
export interface UpdateMyInfoRequest {
  body: UpdateMyInfoDto
}
export interface UpdateMyPasswordRequest {
  body: UpdateMyPasswordDto
}
export interface ResetMyPasswordRequest {
  body: ResetMyPasswordDto
}
export interface RegisterUserByPhoneRequest {
  body: RegisterUserByPhoneDto
}
export interface RegisterUserByEmailRequest {
  body: RegisterUserByEmailDto
}
export interface RegisterRequest {
  body: RegisterUserByUsernameDto
}
export interface LoginRequest {
  body: LoginSessionDto
}
export interface LoginByPhoneRequest {
  body: LoginSessionByPhoneDto
}
export interface LoginByEmailRequest {
  body: LoginSessionByEmailDto
}
export interface UpdateMyEmailRequest {
  body: UpdateMyEmailDto
}
export interface UpdateMyPhoneRequest {
  body: UpdateMyPhoneDto
}
export interface LogoutRequest {
  body: LogoutSessionDto
}
export interface RefreshSessionRequest {
  body: RefreshSessionDto
}
export interface VerifyIdentityRequest {
  body: VerifyIdentityDto
}