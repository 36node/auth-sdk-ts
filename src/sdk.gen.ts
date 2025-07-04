// This file is auto-generated by @hey-api/openapi-ts

import { createClient, createConfig, type OptionsLegacyParser } from '@hey-api/client-fetch';
import { type HelloError, type HelloResponse, type CleanupError, type CleanupResponse, type LoginData, type LoginError, type LoginResponse, type GetAuthorizerData, type GetAuthorizerError, type GetAuthorizerResponse, type LoginByGithubData, type LoginByGithubError, type LoginByGithubResponse, type LoginByOAuthData, type LoginByOAuthError, type LoginByOAuthResponse, type LoginByEmailData, type LoginByEmailError, type LoginByEmailResponse, type LoginByPhoneData, type LoginByPhoneError, type LoginByPhoneResponse, type LogoutData, type LogoutError, type LogoutResponse, type RegisterData, type RegisterError, type RegisterResponse, type RegisterByPhoneData, type RegisterByPhoneError, type RegisterByPhoneResponse, type RegisterByEmailData, type RegisterByEmailError, type RegisterByEmailResponse, type SignTokenData, type SignTokenError, type SignTokenResponse, type RefreshData, type RefreshError, type RefreshResponse, type ResetPasswordByPhoneData, type ResetPasswordByPhoneError, type ResetPasswordByPhoneResponse, type ResetPasswordByEmailData, type ResetPasswordByEmailError, type ResetPasswordByEmailResponse, type CreateCaptchaData, type CreateCaptchaError, type CreateCaptchaResponse, type ListCaptchasData, type ListCaptchasError, type ListCaptchasResponse, type GetCaptchaData, type GetCaptchaError, type GetCaptchaResponse, type UpdateCaptchaData, type UpdateCaptchaError, type UpdateCaptchaResponse, type DeleteCaptchaData, type DeleteCaptchaError, type DeleteCaptchaResponse, type VerifyCaptchaData, type VerifyCaptchaError, type VerifyCaptchaResponse, type SendEmailData, type SendEmailError, type SendEmailResponse, type CreateEmailRecordData, type CreateEmailRecordError, type CreateEmailRecordResponse, type ListEmailRecordsData, type ListEmailRecordsError, type ListEmailRecordsResponse, type GetEmailRecordData, type GetEmailRecordError, type GetEmailRecordResponse, type UpdateEmailRecordData, type UpdateEmailRecordError, type UpdateEmailRecordResponse, type DeleteEmailRecordData, type DeleteEmailRecordError, type DeleteEmailRecordResponse, type CreateGroupData, type CreateGroupError, type CreateGroupResponse, type ListGroupsData, type ListGroupsError, type ListGroupsResponse, type GetGroupData, type GetGroupError, type GetGroupResponse, type UpdateGroupData, type UpdateGroupError, type UpdateGroupResponse, type DeleteGroupData, type DeleteGroupError, type DeleteGroupResponse, type UpsertGroupByNameData, type UpsertGroupByNameError, type UpsertGroupByNameResponse, type CreateNamespaceData, type CreateNamespaceError, type CreateNamespaceResponse, type ListNamespacesData, type ListNamespacesError, type ListNamespacesResponse, type GetNamespaceData, type GetNamespaceError, type GetNamespaceResponse, type UpdateNamespaceData, type UpdateNamespaceError, type UpdateNamespaceResponse, type DeleteNamespaceData, type DeleteNamespaceError, type DeleteNamespaceResponse, type CreateSessionData, type CreateSessionError, type CreateSessionResponse, type ListSessionsData, type ListSessionsError, type ListSessionsResponse, type GetSessionData, type GetSessionError, type GetSessionResponse, type UpdateSessionData, type UpdateSessionError, type UpdateSessionResponse, type DeleteSessionData, type DeleteSessionError, type DeleteSessionResponse, type GetSessionByKeyData, type GetSessionByKeyError, type GetSessionByKeyResponse, type SendSmsData, type SendSmsError, type SendSmsResponse, type CreateSmsRecordData, type CreateSmsRecordError, type CreateSmsRecordResponse, type ListSmsRecordsData, type ListSmsRecordsError, type ListSmsRecordsResponse, type GetSmsRecordData, type GetSmsRecordError, type GetSmsRecordResponse, type UpdateSmsRecordData, type UpdateSmsRecordError, type UpdateSmsRecordResponse, type DeleteSmsRecordData, type DeleteSmsRecordError, type DeleteSmsRecordResponse, type CreateThirdPartyData, type CreateThirdPartyError, type CreateThirdPartyResponse, type ListThirdPartyData, type ListThirdPartyError, type ListThirdPartyResponse, type GetThirdPartyData, type GetThirdPartyError, type GetThirdPartyResponse, type UpdateThirdPartyData, type UpdateThirdPartyError, type UpdateThirdPartyResponse, type GetThirdPartyByUidData, type GetThirdPartyByUidError, type GetThirdPartyByUidResponse, type GetThirdPartyByTidData, type GetThirdPartyByTidError, type GetThirdPartyByTidResponse, type BindThirdPartyData, type BindThirdPartyError, type BindThirdPartyResponse, type CreateUserData, type CreateUserError, type CreateUserResponse, type ListUsersData, type ListUsersError, type ListUsersResponse, type CountUsersData, type CountUsersError, type CountUsersResponse, type GetUserData, type GetUserError, type GetUserResponse, type UpdateUserData, type UpdateUserError, type UpdateUserResponse, type DeleteUserData, type DeleteUserError, type DeleteUserResponse, type UpsertUserByEmployeeIdData, type UpsertUserByEmployeeIdError, type UpsertUserByEmployeeIdResponse, type UpsertUserByUsernameData, type UpsertUserByUsernameError, type UpsertUserByUsernameResponse, type UpsertUserByEmailData, type UpsertUserByEmailError, type UpsertUserByEmailResponse, type UpsertUserByPhoneData, type UpsertUserByPhoneError, type UpsertUserByPhoneResponse, type VerifyIdentityData, type VerifyIdentityError, type VerifyIdentityResponse, type UpdatePasswordData, type UpdatePasswordError, type UpdatePasswordResponse, type AggregateUsersData, type AggregateUsersError, type AggregateUsersResponse, type ListIndustriesError, type ListIndustriesResponse, type ListRegionsError, type ListRegionsResponse, type CreateRoleData, type CreateRoleError, type CreateRoleResponse, type ListRolesData, type ListRolesError, type ListRolesResponse, type GetRoleData, type GetRoleError, type GetRoleResponse, type UpdateRoleData, type UpdateRoleError, type UpdateRoleResponse, type DeleteRoleData, type DeleteRoleError, type DeleteRoleResponse, LoginResponseTransformer, LoginByGithubResponseTransformer, LoginByOAuthResponseTransformer, LoginByEmailResponseTransformer, LoginByPhoneResponseTransformer, RegisterResponseTransformer, RegisterByPhoneResponseTransformer, RegisterByEmailResponseTransformer, SignTokenResponseTransformer, RefreshResponseTransformer, CreateCaptchaResponseTransformer, ListCaptchasResponseTransformer, GetCaptchaResponseTransformer, UpdateCaptchaResponseTransformer, CreateEmailRecordResponseTransformer, ListEmailRecordsResponseTransformer, GetEmailRecordResponseTransformer, UpdateEmailRecordResponseTransformer, CreateGroupResponseTransformer, ListGroupsResponseTransformer, GetGroupResponseTransformer, UpdateGroupResponseTransformer, CreateNamespaceResponseTransformer, ListNamespacesResponseTransformer, GetNamespaceResponseTransformer, UpdateNamespaceResponseTransformer, CreateSessionResponseTransformer, ListSessionsResponseTransformer, GetSessionResponseTransformer, UpdateSessionResponseTransformer, GetSessionByKeyResponseTransformer, CreateSmsRecordResponseTransformer, ListSmsRecordsResponseTransformer, GetSmsRecordResponseTransformer, UpdateSmsRecordResponseTransformer, CreateThirdPartyResponseTransformer, BindThirdPartyResponseTransformer, CreateUserResponseTransformer, ListUsersResponseTransformer, GetUserResponseTransformer, UpdateUserResponseTransformer, VerifyIdentityResponseTransformer, ListIndustriesResponseTransformer, CreateRoleResponseTransformer, ListRolesResponseTransformer, GetRoleResponseTransformer, UpdateRoleResponseTransformer } from './types.gen';

export const client = createClient(createConfig());

/**
 * health check
 */
export const hello = <ThrowOnError extends boolean = true>(options?: OptionsLegacyParser<unknown, ThrowOnError>) => {
    return (options?.client ?? client).get<HelloResponse, HelloError, ThrowOnError>({
        ...options,
        url: '/hello'
    });
};

/**
 * clearnup all data
 */
export const cleanup = <ThrowOnError extends boolean = true>(options?: OptionsLegacyParser<unknown, ThrowOnError>) => {
    return (options?.client ?? client).get<CleanupResponse, CleanupError, ThrowOnError>({
        ...options,
        url: '/cleanup'
    });
};

/**
 * login with username/phone/email and password
 */
export const login = <ThrowOnError extends boolean = true>(options: OptionsLegacyParser<LoginData, ThrowOnError>) => {
    return (options?.client ?? client).post<LoginResponse, LoginError, ThrowOnError>({
        ...options,
        url: '/auth/@login',
        responseTransformer: LoginResponseTransformer
    });
};

export const getAuthorizer = <ThrowOnError extends boolean = true>(options: OptionsLegacyParser<GetAuthorizerData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetAuthorizerResponse, GetAuthorizerError, ThrowOnError>({
        ...options,
        url: '/auth/authorizer'
    });
};

/**
 * login by Github
 */
export const loginByGithub = <ThrowOnError extends boolean = true>(options: OptionsLegacyParser<LoginByGithubData, ThrowOnError>) => {
    return (options?.client ?? client).post<LoginByGithubResponse, LoginByGithubError, ThrowOnError>({
        ...options,
        url: '/auth/@loginByGithub',
        responseTransformer: LoginByGithubResponseTransformer
    });
};

/**
 * login by OAuth
 */
export const loginByOAuth = <ThrowOnError extends boolean = true>(options: OptionsLegacyParser<LoginByOAuthData, ThrowOnError>) => {
    return (options?.client ?? client).post<LoginByOAuthResponse, LoginByOAuthError, ThrowOnError>({
        ...options,
        url: '/auth/@loginByOAuth',
        responseTransformer: LoginByOAuthResponseTransformer
    });
};

/**
 * login by email and code
 */
export const loginByEmail = <ThrowOnError extends boolean = true>(options: OptionsLegacyParser<LoginByEmailData, ThrowOnError>) => {
    return (options?.client ?? client).post<LoginByEmailResponse, LoginByEmailError, ThrowOnError>({
        ...options,
        url: '/auth/@loginByEmail',
        responseTransformer: LoginByEmailResponseTransformer
    });
};

/**
 * login with phone and code
 */
export const loginByPhone = <ThrowOnError extends boolean = true>(options: OptionsLegacyParser<LoginByPhoneData, ThrowOnError>) => {
    return (options?.client ?? client).post<LoginByPhoneResponse, LoginByPhoneError, ThrowOnError>({
        ...options,
        url: '/auth/@loginByPhone',
        responseTransformer: LoginByPhoneResponseTransformer
    });
};

/**
 * logout
 */
export const logout = <ThrowOnError extends boolean = true>(options: OptionsLegacyParser<LogoutData, ThrowOnError>) => {
    return (options?.client ?? client).post<LogoutResponse, LogoutError, ThrowOnError>({
        ...options,
        url: '/auth/@logout'
    });
};

/**
 * register with username and password
 */
export const register = <ThrowOnError extends boolean = true>(options: OptionsLegacyParser<RegisterData, ThrowOnError>) => {
    return (options?.client ?? client).post<RegisterResponse, RegisterError, ThrowOnError>({
        ...options,
        url: '/auth/@register',
        responseTransformer: RegisterResponseTransformer
    });
};

/**
 * register with phone and code
 */
export const registerByPhone = <ThrowOnError extends boolean = true>(options: OptionsLegacyParser<RegisterByPhoneData, ThrowOnError>) => {
    return (options?.client ?? client).post<RegisterByPhoneResponse, RegisterByPhoneError, ThrowOnError>({
        ...options,
        url: '/auth/@registerByPhone',
        responseTransformer: RegisterByPhoneResponseTransformer
    });
};

/**
 * register with email and code
 */
export const registerByEmail = <ThrowOnError extends boolean = true>(options: OptionsLegacyParser<RegisterByEmailData, ThrowOnError>) => {
    return (options?.client ?? client).post<RegisterByEmailResponse, RegisterByEmailError, ThrowOnError>({
        ...options,
        url: '/auth/@registerByEmail',
        responseTransformer: RegisterByEmailResponseTransformer
    });
};

/**
 * sign token
 * 为用户签发一个一次性的 token 无法 refresh
 */
export const signToken = <ThrowOnError extends boolean = true>(options: OptionsLegacyParser<SignTokenData, ThrowOnError>) => {
    return (options?.client ?? client).post<SignTokenResponse, SignTokenError, ThrowOnError>({
        ...options,
        url: '/auth/@signToken',
        responseTransformer: SignTokenResponseTransformer
    });
};

/**
 * refresh
 */
export const refresh = <ThrowOnError extends boolean = true>(options: OptionsLegacyParser<RefreshData, ThrowOnError>) => {
    return (options?.client ?? client).post<RefreshResponse, RefreshError, ThrowOnError>({
        ...options,
        url: '/auth/@refresh',
        responseTransformer: RefreshResponseTransformer
    });
};

/**
 * Reset password by phone
 */
export const resetPasswordByPhone = <ThrowOnError extends boolean = true>(options: OptionsLegacyParser<ResetPasswordByPhoneData, ThrowOnError>) => {
    return (options?.client ?? client).post<ResetPasswordByPhoneResponse, ResetPasswordByPhoneError, ThrowOnError>({
        ...options,
        url: '/auth/@resetPasswordByPhone'
    });
};

/**
 * Reset password by email
 */
export const resetPasswordByEmail = <ThrowOnError extends boolean = true>(options: OptionsLegacyParser<ResetPasswordByEmailData, ThrowOnError>) => {
    return (options?.client ?? client).post<ResetPasswordByEmailResponse, ResetPasswordByEmailError, ThrowOnError>({
        ...options,
        url: '/auth/@resetPasswordByEmail'
    });
};

/**
 * Create captcha
 */
export const createCaptcha = <ThrowOnError extends boolean = true>(options: OptionsLegacyParser<CreateCaptchaData, ThrowOnError>) => {
    return (options?.client ?? client).post<CreateCaptchaResponse, CreateCaptchaError, ThrowOnError>({
        ...options,
        url: '/captchas',
        responseTransformer: CreateCaptchaResponseTransformer
    });
};

/**
 * List captchas
 */
export const listCaptchas = <ThrowOnError extends boolean = true>(options?: OptionsLegacyParser<ListCaptchasData, ThrowOnError>) => {
    return (options?.client ?? client).get<ListCaptchasResponse, ListCaptchasError, ThrowOnError>({
        ...options,
        url: '/captchas',
        responseTransformer: ListCaptchasResponseTransformer
    });
};

/**
 * Find captcha by id
 */
export const getCaptcha = <ThrowOnError extends boolean = true>(options: OptionsLegacyParser<GetCaptchaData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetCaptchaResponse, GetCaptchaError, ThrowOnError>({
        ...options,
        url: '/captchas/{captchaId}',
        responseTransformer: GetCaptchaResponseTransformer
    });
};

/**
 * Update captcha
 */
export const updateCaptcha = <ThrowOnError extends boolean = true>(options: OptionsLegacyParser<UpdateCaptchaData, ThrowOnError>) => {
    return (options?.client ?? client).patch<UpdateCaptchaResponse, UpdateCaptchaError, ThrowOnError>({
        ...options,
        url: '/captchas/{captchaId}',
        responseTransformer: UpdateCaptchaResponseTransformer
    });
};

/**
 * Delete captcha
 */
export const deleteCaptcha = <ThrowOnError extends boolean = true>(options: OptionsLegacyParser<DeleteCaptchaData, ThrowOnError>) => {
    return (options?.client ?? client).delete<DeleteCaptchaResponse, DeleteCaptchaError, ThrowOnError>({
        ...options,
        url: '/captchas/{captchaId}'
    });
};

/**
 * verify captcha
 */
export const verifyCaptcha = <ThrowOnError extends boolean = true>(options: OptionsLegacyParser<VerifyCaptchaData, ThrowOnError>) => {
    return (options?.client ?? client).post<VerifyCaptchaResponse, VerifyCaptchaError, ThrowOnError>({
        ...options,
        url: '/captchas/@verifyCaptcha'
    });
};

/**
 * Send plain text email
 */
export const sendEmail = <ThrowOnError extends boolean = true>(options: OptionsLegacyParser<SendEmailData, ThrowOnError>) => {
    return (options?.client ?? client).post<SendEmailResponse, SendEmailError, ThrowOnError>({
        ...options,
        url: '/email/@sendEmail'
    });
};

/**
 * Create email record
 */
export const createEmailRecord = <ThrowOnError extends boolean = true>(options: OptionsLegacyParser<CreateEmailRecordData, ThrowOnError>) => {
    return (options?.client ?? client).post<CreateEmailRecordResponse, CreateEmailRecordError, ThrowOnError>({
        ...options,
        url: '/email/records',
        responseTransformer: CreateEmailRecordResponseTransformer
    });
};

/**
 * List email records
 */
export const listEmailRecords = <ThrowOnError extends boolean = true>(options?: OptionsLegacyParser<ListEmailRecordsData, ThrowOnError>) => {
    return (options?.client ?? client).get<ListEmailRecordsResponse, ListEmailRecordsError, ThrowOnError>({
        ...options,
        url: '/email/records',
        responseTransformer: ListEmailRecordsResponseTransformer
    });
};

/**
 * Find email record by id
 */
export const getEmailRecord = <ThrowOnError extends boolean = true>(options: OptionsLegacyParser<GetEmailRecordData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetEmailRecordResponse, GetEmailRecordError, ThrowOnError>({
        ...options,
        url: '/email/records/{emailRecordId}',
        responseTransformer: GetEmailRecordResponseTransformer
    });
};

/**
 * Update email record
 */
export const updateEmailRecord = <ThrowOnError extends boolean = true>(options: OptionsLegacyParser<UpdateEmailRecordData, ThrowOnError>) => {
    return (options?.client ?? client).patch<UpdateEmailRecordResponse, UpdateEmailRecordError, ThrowOnError>({
        ...options,
        url: '/email/records/{emailRecordId}',
        responseTransformer: UpdateEmailRecordResponseTransformer
    });
};

/**
 * Delete email record
 */
export const deleteEmailRecord = <ThrowOnError extends boolean = true>(options: OptionsLegacyParser<DeleteEmailRecordData, ThrowOnError>) => {
    return (options?.client ?? client).delete<DeleteEmailRecordResponse, DeleteEmailRecordError, ThrowOnError>({
        ...options,
        url: '/email/records/{emailRecordId}'
    });
};

/**
 * Create group
 */
export const createGroup = <ThrowOnError extends boolean = true>(options: OptionsLegacyParser<CreateGroupData, ThrowOnError>) => {
    return (options?.client ?? client).post<CreateGroupResponse, CreateGroupError, ThrowOnError>({
        ...options,
        url: '/groups',
        responseTransformer: CreateGroupResponseTransformer
    });
};

/**
 * List groups
 */
export const listGroups = <ThrowOnError extends boolean = true>(options?: OptionsLegacyParser<ListGroupsData, ThrowOnError>) => {
    return (options?.client ?? client).get<ListGroupsResponse, ListGroupsError, ThrowOnError>({
        ...options,
        url: '/groups',
        responseTransformer: ListGroupsResponseTransformer
    });
};

/**
 * Find group by id or name
 */
export const getGroup = <ThrowOnError extends boolean = true>(options: OptionsLegacyParser<GetGroupData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetGroupResponse, GetGroupError, ThrowOnError>({
        ...options,
        url: '/groups/{groupIdOrName}',
        responseTransformer: GetGroupResponseTransformer
    });
};

/**
 * Update group
 */
export const updateGroup = <ThrowOnError extends boolean = true>(options: OptionsLegacyParser<UpdateGroupData, ThrowOnError>) => {
    return (options?.client ?? client).patch<UpdateGroupResponse, UpdateGroupError, ThrowOnError>({
        ...options,
        url: '/groups/{groupId}',
        responseTransformer: UpdateGroupResponseTransformer
    });
};

/**
 * Delete group
 */
export const deleteGroup = <ThrowOnError extends boolean = true>(options: OptionsLegacyParser<DeleteGroupData, ThrowOnError>) => {
    return (options?.client ?? client).delete<DeleteGroupResponse, DeleteGroupError, ThrowOnError>({
        ...options,
        url: '/groups/{groupId}'
    });
};

/**
 * 根据 groupName 创建 group
 */
export const upsertGroupByName = <ThrowOnError extends boolean = true>(options: OptionsLegacyParser<UpsertGroupByNameData, ThrowOnError>) => {
    return (options?.client ?? client).post<UpsertGroupByNameResponse, UpsertGroupByNameError, ThrowOnError>({
        ...options,
        url: '/groups/{groupName}/@upsertGroupByName'
    });
};

/**
 * Create namespace
 */
export const createNamespace = <ThrowOnError extends boolean = true>(options: OptionsLegacyParser<CreateNamespaceData, ThrowOnError>) => {
    return (options?.client ?? client).post<CreateNamespaceResponse, CreateNamespaceError, ThrowOnError>({
        ...options,
        url: '/namespaces',
        responseTransformer: CreateNamespaceResponseTransformer
    });
};

/**
 * List namespaces
 */
export const listNamespaces = <ThrowOnError extends boolean = true>(options?: OptionsLegacyParser<ListNamespacesData, ThrowOnError>) => {
    return (options?.client ?? client).get<ListNamespacesResponse, ListNamespacesError, ThrowOnError>({
        ...options,
        url: '/namespaces',
        responseTransformer: ListNamespacesResponseTransformer
    });
};

/**
 * Find namespace by id or key
 */
export const getNamespace = <ThrowOnError extends boolean = true>(options: OptionsLegacyParser<GetNamespaceData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetNamespaceResponse, GetNamespaceError, ThrowOnError>({
        ...options,
        url: '/namespaces/{namespaceIdOrKey}',
        responseTransformer: GetNamespaceResponseTransformer
    });
};

/**
 * Update namespace
 */
export const updateNamespace = <ThrowOnError extends boolean = true>(options: OptionsLegacyParser<UpdateNamespaceData, ThrowOnError>) => {
    return (options?.client ?? client).patch<UpdateNamespaceResponse, UpdateNamespaceError, ThrowOnError>({
        ...options,
        url: '/namespaces/{namespaceIdOrKey}',
        responseTransformer: UpdateNamespaceResponseTransformer
    });
};

/**
 * Delete namespace
 */
export const deleteNamespace = <ThrowOnError extends boolean = true>(options: OptionsLegacyParser<DeleteNamespaceData, ThrowOnError>) => {
    return (options?.client ?? client).delete<DeleteNamespaceResponse, DeleteNamespaceError, ThrowOnError>({
        ...options,
        url: '/namespaces/{namespaceId}'
    });
};

/**
 * Create session
 */
export const createSession = <ThrowOnError extends boolean = true>(options: OptionsLegacyParser<CreateSessionData, ThrowOnError>) => {
    return (options?.client ?? client).post<CreateSessionResponse, CreateSessionError, ThrowOnError>({
        ...options,
        url: '/sessions',
        responseTransformer: CreateSessionResponseTransformer
    });
};

/**
 * List sessions
 */
export const listSessions = <ThrowOnError extends boolean = true>(options?: OptionsLegacyParser<ListSessionsData, ThrowOnError>) => {
    return (options?.client ?? client).get<ListSessionsResponse, ListSessionsError, ThrowOnError>({
        ...options,
        url: '/sessions',
        responseTransformer: ListSessionsResponseTransformer
    });
};

/**
 * Find session by id
 */
export const getSession = <ThrowOnError extends boolean = true>(options: OptionsLegacyParser<GetSessionData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetSessionResponse, GetSessionError, ThrowOnError>({
        ...options,
        url: '/sessions/{sessionId}',
        responseTransformer: GetSessionResponseTransformer
    });
};

/**
 * Update session
 */
export const updateSession = <ThrowOnError extends boolean = true>(options: OptionsLegacyParser<UpdateSessionData, ThrowOnError>) => {
    return (options?.client ?? client).patch<UpdateSessionResponse, UpdateSessionError, ThrowOnError>({
        ...options,
        url: '/sessions/{sessionId}',
        responseTransformer: UpdateSessionResponseTransformer
    });
};

/**
 * Delete session
 */
export const deleteSession = <ThrowOnError extends boolean = true>(options: OptionsLegacyParser<DeleteSessionData, ThrowOnError>) => {
    return (options?.client ?? client).delete<DeleteSessionResponse, DeleteSessionError, ThrowOnError>({
        ...options,
        url: '/sessions/{sessionId}'
    });
};

/**
 * Find session by key
 */
export const getSessionByKey = <ThrowOnError extends boolean = true>(options: OptionsLegacyParser<GetSessionByKeyData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetSessionByKeyResponse, GetSessionByKeyError, ThrowOnError>({
        ...options,
        url: '/sessions/byKey/{key}',
        responseTransformer: GetSessionByKeyResponseTransformer
    });
};

/**
 * Send sms
 */
export const sendSms = <ThrowOnError extends boolean = true>(options: OptionsLegacyParser<SendSmsData, ThrowOnError>) => {
    return (options?.client ?? client).post<SendSmsResponse, SendSmsError, ThrowOnError>({
        ...options,
        url: '/sms/@sendSms'
    });
};

/**
 * Create sms record
 */
export const createSmsRecord = <ThrowOnError extends boolean = true>(options: OptionsLegacyParser<CreateSmsRecordData, ThrowOnError>) => {
    return (options?.client ?? client).post<CreateSmsRecordResponse, CreateSmsRecordError, ThrowOnError>({
        ...options,
        url: '/sms/records',
        responseTransformer: CreateSmsRecordResponseTransformer
    });
};

/**
 * List sms records
 */
export const listSmsRecords = <ThrowOnError extends boolean = true>(options?: OptionsLegacyParser<ListSmsRecordsData, ThrowOnError>) => {
    return (options?.client ?? client).get<ListSmsRecordsResponse, ListSmsRecordsError, ThrowOnError>({
        ...options,
        url: '/sms/records',
        responseTransformer: ListSmsRecordsResponseTransformer
    });
};

/**
 * Find sms record by id
 */
export const getSmsRecord = <ThrowOnError extends boolean = true>(options: OptionsLegacyParser<GetSmsRecordData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetSmsRecordResponse, GetSmsRecordError, ThrowOnError>({
        ...options,
        url: '/sms/records/{smsRecordId}',
        responseTransformer: GetSmsRecordResponseTransformer
    });
};

/**
 * Update sms record
 */
export const updateSmsRecord = <ThrowOnError extends boolean = true>(options: OptionsLegacyParser<UpdateSmsRecordData, ThrowOnError>) => {
    return (options?.client ?? client).patch<UpdateSmsRecordResponse, UpdateSmsRecordError, ThrowOnError>({
        ...options,
        url: '/sms/records/{smsRecordId}',
        responseTransformer: UpdateSmsRecordResponseTransformer
    });
};

/**
 * Delete sms record
 */
export const deleteSmsRecord = <ThrowOnError extends boolean = true>(options: OptionsLegacyParser<DeleteSmsRecordData, ThrowOnError>) => {
    return (options?.client ?? client).delete<DeleteSmsRecordResponse, DeleteSmsRecordError, ThrowOnError>({
        ...options,
        url: '/sms/records/{smsRecordId}'
    });
};

/**
 * create third party
 */
export const createThirdParty = <ThrowOnError extends boolean = true>(options: OptionsLegacyParser<CreateThirdPartyData, ThrowOnError>) => {
    return (options?.client ?? client).post<CreateThirdPartyResponse, CreateThirdPartyError, ThrowOnError>({
        ...options,
        url: '/third-parties',
        responseTransformer: CreateThirdPartyResponseTransformer
    });
};

/**
 * list third party
 */
export const listThirdParty = <ThrowOnError extends boolean = true>(options?: OptionsLegacyParser<ListThirdPartyData, ThrowOnError>) => {
    return (options?.client ?? client).get<ListThirdPartyResponse, ListThirdPartyError, ThrowOnError>({
        ...options,
        url: '/third-parties'
    });
};

/**
 * get third party
 */
export const getThirdParty = <ThrowOnError extends boolean = true>(options: OptionsLegacyParser<GetThirdPartyData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetThirdPartyResponse, GetThirdPartyError, ThrowOnError>({
        ...options,
        url: '/third-parties/{id}'
    });
};

/**
 * update third party
 */
export const updateThirdParty = <ThrowOnError extends boolean = true>(options: OptionsLegacyParser<UpdateThirdPartyData, ThrowOnError>) => {
    return (options?.client ?? client).patch<UpdateThirdPartyResponse, UpdateThirdPartyError, ThrowOnError>({
        ...options,
        url: '/third-parties/{id}'
    });
};

/**
 * get third party by uid
 */
export const getThirdPartyByUid = <ThrowOnError extends boolean = true>(options: OptionsLegacyParser<GetThirdPartyByUidData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetThirdPartyByUidResponse, GetThirdPartyByUidError, ThrowOnError>({
        ...options,
        url: '/third-parties/source/{source}/uid/{uid}'
    });
};

/**
 * get third party by tid
 */
export const getThirdPartyByTid = <ThrowOnError extends boolean = true>(options: OptionsLegacyParser<GetThirdPartyByTidData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetThirdPartyByTidResponse, GetThirdPartyByTidError, ThrowOnError>({
        ...options,
        url: '/third-parties/source/{source}/tid/{tid}'
    });
};

/**
 * bind third party
 */
export const bindThirdParty = <ThrowOnError extends boolean = true>(options: OptionsLegacyParser<BindThirdPartyData, ThrowOnError>) => {
    return (options?.client ?? client).post<BindThirdPartyResponse, BindThirdPartyError, ThrowOnError>({
        ...options,
        url: '/third-parties/@bind',
        responseTransformer: BindThirdPartyResponseTransformer
    });
};

/**
 * Create user
 */
export const createUser = <ThrowOnError extends boolean = true>(options: OptionsLegacyParser<CreateUserData, ThrowOnError>) => {
    return (options?.client ?? client).post<CreateUserResponse, CreateUserError, ThrowOnError>({
        ...options,
        url: '/users',
        responseTransformer: CreateUserResponseTransformer
    });
};

/**
 * List users
 */
export const listUsers = <ThrowOnError extends boolean = true>(options?: OptionsLegacyParser<ListUsersData, ThrowOnError>) => {
    return (options?.client ?? client).get<ListUsersResponse, ListUsersError, ThrowOnError>({
        ...options,
        url: '/users',
        responseTransformer: ListUsersResponseTransformer
    });
};

/**
 * Count users
 */
export const countUsers = <ThrowOnError extends boolean = true>(options?: OptionsLegacyParser<CountUsersData, ThrowOnError>) => {
    return (options?.client ?? client).post<CountUsersResponse, CountUsersError, ThrowOnError>({
        ...options,
        url: '/users/@countUsers'
    });
};

/**
 * Find user
 */
export const getUser = <ThrowOnError extends boolean = true>(options: OptionsLegacyParser<GetUserData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetUserResponse, GetUserError, ThrowOnError>({
        ...options,
        url: '/users/{userId}',
        responseTransformer: GetUserResponseTransformer
    });
};

/**
 * Update user
 */
export const updateUser = <ThrowOnError extends boolean = true>(options: OptionsLegacyParser<UpdateUserData, ThrowOnError>) => {
    return (options?.client ?? client).patch<UpdateUserResponse, UpdateUserError, ThrowOnError>({
        ...options,
        url: '/users/{userId}',
        responseTransformer: UpdateUserResponseTransformer
    });
};

/**
 * Delete user
 */
export const deleteUser = <ThrowOnError extends boolean = true>(options: OptionsLegacyParser<DeleteUserData, ThrowOnError>) => {
    return (options?.client ?? client).delete<DeleteUserResponse, DeleteUserError, ThrowOnError>({
        ...options,
        url: '/users/{userId}'
    });
};

/**
 * Upsert user by employeeId
 */
export const upsertUserByEmployeeId = <ThrowOnError extends boolean = true>(options: OptionsLegacyParser<UpsertUserByEmployeeIdData, ThrowOnError>) => {
    return (options?.client ?? client).post<UpsertUserByEmployeeIdResponse, UpsertUserByEmployeeIdError, ThrowOnError>({
        ...options,
        url: '/users/{employeeId}/@upsertUserByEmployeeId'
    });
};

/**
 * Upsert user by username
 */
export const upsertUserByUsername = <ThrowOnError extends boolean = true>(options: OptionsLegacyParser<UpsertUserByUsernameData, ThrowOnError>) => {
    return (options?.client ?? client).post<UpsertUserByUsernameResponse, UpsertUserByUsernameError, ThrowOnError>({
        ...options,
        url: '/users/{username}/@upsertUserByUsername'
    });
};

/**
 * Upsert user by email
 */
export const upsertUserByEmail = <ThrowOnError extends boolean = true>(options: OptionsLegacyParser<UpsertUserByEmailData, ThrowOnError>) => {
    return (options?.client ?? client).post<UpsertUserByEmailResponse, UpsertUserByEmailError, ThrowOnError>({
        ...options,
        url: '/users/{email}/@upsertUserByEmail'
    });
};

/**
 * Upsert user by phone
 */
export const upsertUserByPhone = <ThrowOnError extends boolean = true>(options: OptionsLegacyParser<UpsertUserByPhoneData, ThrowOnError>) => {
    return (options?.client ?? client).post<UpsertUserByPhoneResponse, UpsertUserByPhoneError, ThrowOnError>({
        ...options,
        url: '/users/{phone}/@upsertUserByPhone'
    });
};

/**
 * Verify identity
 */
export const verifyIdentity = <ThrowOnError extends boolean = true>(options: OptionsLegacyParser<VerifyIdentityData, ThrowOnError>) => {
    return (options?.client ?? client).post<VerifyIdentityResponse, VerifyIdentityError, ThrowOnError>({
        ...options,
        url: '/users/{userId}/@verifyIdentity',
        responseTransformer: VerifyIdentityResponseTransformer
    });
};

/**
 * Update password
 */
export const updatePassword = <ThrowOnError extends boolean = true>(options: OptionsLegacyParser<UpdatePasswordData, ThrowOnError>) => {
    return (options?.client ?? client).post<UpdatePasswordResponse, UpdatePasswordError, ThrowOnError>({
        ...options,
        url: '/users/{userId}/@updatePassword'
    });
};

/**
 * Aggregate user
 */
export const aggregateUsers = <ThrowOnError extends boolean = true>(options: OptionsLegacyParser<AggregateUsersData, ThrowOnError>) => {
    return (options?.client ?? client).post<AggregateUsersResponse, AggregateUsersError, ThrowOnError>({
        ...options,
        url: '/users/@aggregate'
    });
};

/**
 * List Industries
 */
export const listIndustries = <ThrowOnError extends boolean = true>(options?: OptionsLegacyParser<unknown, ThrowOnError>) => {
    return (options?.client ?? client).get<ListIndustriesResponse, ListIndustriesError, ThrowOnError>({
        ...options,
        url: '/industries',
        responseTransformer: ListIndustriesResponseTransformer
    });
};

/**
 * List Regions
 */
export const listRegions = <ThrowOnError extends boolean = true>(options?: OptionsLegacyParser<unknown, ThrowOnError>) => {
    return (options?.client ?? client).get<ListRegionsResponse, ListRegionsError, ThrowOnError>({
        ...options,
        url: '/regions'
    });
};

/**
 * Create role
 */
export const createRole = <ThrowOnError extends boolean = true>(options: OptionsLegacyParser<CreateRoleData, ThrowOnError>) => {
    return (options?.client ?? client).post<CreateRoleResponse, CreateRoleError, ThrowOnError>({
        ...options,
        url: '/roles',
        responseTransformer: CreateRoleResponseTransformer
    });
};

/**
 * List roles
 */
export const listRoles = <ThrowOnError extends boolean = true>(options?: OptionsLegacyParser<ListRolesData, ThrowOnError>) => {
    return (options?.client ?? client).get<ListRolesResponse, ListRolesError, ThrowOnError>({
        ...options,
        url: '/roles',
        responseTransformer: ListRolesResponseTransformer
    });
};

/**
 * Find role by id or key
 */
export const getRole = <ThrowOnError extends boolean = true>(options: OptionsLegacyParser<GetRoleData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetRoleResponse, GetRoleError, ThrowOnError>({
        ...options,
        url: '/roles/{roleIdOrKey}',
        responseTransformer: GetRoleResponseTransformer
    });
};

/**
 * Update role
 */
export const updateRole = <ThrowOnError extends boolean = true>(options: OptionsLegacyParser<UpdateRoleData, ThrowOnError>) => {
    return (options?.client ?? client).patch<UpdateRoleResponse, UpdateRoleError, ThrowOnError>({
        ...options,
        url: '/roles/{roleId}',
        responseTransformer: UpdateRoleResponseTransformer
    });
};

/**
 * Delete role
 */
export const deleteRole = <ThrowOnError extends boolean = true>(options: OptionsLegacyParser<DeleteRoleData, ThrowOnError>) => {
    return (options?.client ?? client).delete<DeleteRoleResponse, DeleteRoleError, ThrowOnError>({
        ...options,
        url: '/roles/{roleId}'
    });
};