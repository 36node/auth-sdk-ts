// This file is auto-generated by @hey-api/openapi-ts

export const $HealthCheckResult = {
  type: 'object',
  properties: {
    message: {
      type: 'string',
    },
  },
  required: ['message'],
} as const;

export const $LoginDto = {
  type: 'object',
  properties: {
    login: {
      type: 'string',
      description: '可以是 username/phone/Email',
    },
    password: {
      type: 'string',
      description: '密码',
    },
  },
  required: ['login', 'password'],
} as const;

export const $User = {
  type: 'object',
  properties: {
    password: {
      type: 'string',
      description: '密码',
      writeOnly: true,
    },
    hasPassword: {
      type: 'boolean',
      description: '是否有密码',
      readOnly: true,
    },
    avatar: {
      type: 'string',
      description: '头像',
    },
    data: {
      type: 'string',
      description: '额外数据',
    },
    email: {
      type: 'string',
      description: '邮箱',
    },
    name: {
      type: 'string',
      description: '姓名',
    },
    identity: {
      type: 'string',
    },
    identityVerifiedAt: {
      format: 'date-time',
      type: 'string',
      description: '实名认证时间',
    },
    identityVerified: {
      type: 'boolean',
      description: '实名认证是否通过',
    },
    intro: {
      type: 'string',
      description: '简介',
    },
    language: {
      type: 'string',
      description: '使用语言',
    },
    lastLoginIp: {
      type: 'string',
      description: '最后登录 IP',
    },
    lastSeenAt: {
      format: 'date-time',
      type: 'string',
      description: '最后活跃时间',
    },
    nickname: {
      type: 'string',
      description: '昵称',
    },
    ns: {
      type: 'string',
      description: '所属命名空间',
    },
    phone: {
      type: 'string',
      description: '手机号',
    },
    registerIp: {
      type: 'string',
      description: '注册 IP',
    },
    registerRegion: {
      type: 'string',
      description: '注册地区，存地区编号',
    },
    roles: {
      description: '角色',
      type: 'array',
      items: {
        type: 'string',
      },
    },
    super: {
      type: 'boolean',
      description: '是否超级管理员',
    },
    username: {
      type: 'string',
      description: '用户名',
    },
    employeeId: {
      type: 'string',
      description: `<<<<<<< HEAD
员工编号`,
    },
    permissions: {
      description: '权限',
      type: 'array',
      items: {
        type: 'string',
      },
    },
    groups: {
      description: '团队',
      type: 'array',
      items: {
        type: 'string',
      },
    },
    lastLoginAt: {
      format: 'date-time',
      type: 'string',
      description: '最后登录时间',
    },
    active: {
      type: 'boolean',
      description: '是否启用',
    },
    inviteCode: {
      type: 'string',
      description: '邀请码',
    },
    status: {
      type: 'string',
      description: `=======
>>>>>>> main
状态`,
    },
    expireAt: {
      format: 'date-time',
      type: 'string',
      description: '过期时间',
    },
    id: {
      type: 'string',
      description: 'Entity id',
    },
    createdAt: {
      format: 'date-time',
      type: 'string',
      description: 'Entity created at when',
    },
    updatedAt: {
      format: 'date-time',
      type: 'string',
      description: 'Entity updated at when',
    },
    createdBy: {
      type: 'string',
      description: 'Entity created by who',
    },
    updatedBy: {
      type: 'string',
      description: 'Entity updated by who',
    },
  },
  required: ['id'],
} as const;

export const $SessionWithToken = {
  type: 'object',
  properties: {
    acl: {
      type: 'object',
      description: '访问控制列表',
    },
    expireAt: {
      format: 'date-time',
      type: 'string',
      description: '会话过期时间',
    },
    key: {
      type: 'string',
      description: 'refresh token key',
    },
    user: {
      description: '用户，实际存储 uid',
      allOf: [
        {
          $ref: '#/components/schemas/User',
        },
      ],
    },
    client: {
      type: 'string',
      description: '客户端/设备',
    },
    id: {
      type: 'string',
      description: 'Entity id',
    },
    createdAt: {
      format: 'date-time',
      type: 'string',
      description: 'Entity created at when',
    },
    updatedAt: {
      format: 'date-time',
      type: 'string',
      description: 'Entity updated at when',
    },
    createdBy: {
      type: 'string',
      description: 'Entity created by who',
    },
    updatedBy: {
      type: 'string',
      description: 'Entity updated by who',
    },
    token: {
      type: 'string',
      description: 'token',
    },
    tokenExpireAt: {
      format: 'date-time',
      type: 'string',
      description: 'token 过期时间',
    },
  },
  required: ['expireAt', 'key', 'user', 'id', 'token', 'tokenExpireAt'],
} as const;

export const $LoginByEmailDto = {
  type: 'object',
  properties: {
    email: {
      type: 'string',
      description: '邮箱',
    },
    key: {
      type: 'string',
      description: '验证码 key',
    },
    code: {
      type: 'string',
      description: '验证码 code',
    },
  },
  required: ['email', 'key', 'code'],
} as const;

export const $LoginByPhoneDto = {
  type: 'object',
  properties: {
    phone: {
      type: 'string',
      description: '手机号',
    },
    key: {
      type: 'string',
      description: '验证码 key',
    },
    code: {
      type: 'string',
      description: '验证码 code',
    },
  },
  required: ['phone', 'key', 'code'],
} as const;

export const $RegisterDto = {
  type: 'object',
  properties: {
    username: {
      type: 'string',
      description: '用户名',
    },
    password: {
      type: 'string',
      description: '密码',
    },
    ns: {
      type: 'string',
      description: '命名空间',
    },
  },
  required: ['username', 'password'],
} as const;

export const $RegisterbyPhoneDto = {
  type: 'object',
  properties: {
    phone: {
      type: 'string',
      description: '手机号',
    },
    key: {
      type: 'string',
      description: '验证码 key',
    },
    code: {
      type: 'string',
      description: '验证码 code',
    },
    ns: {
      type: 'string',
      description: '命名空间',
    },
  },
  required: ['phone', 'key', 'code'],
} as const;

export const $RegisterByEmailDto = {
  type: 'object',
  properties: {
    email: {
      type: 'string',
      description: '邮箱',
    },
    key: {
      type: 'string',
      description: '验证码 key',
    },
    code: {
      type: 'string',
      description: '验证码 code',
    },
    ns: {
      type: 'string',
      description: '命名空间',
    },
  },
  required: ['email', 'key', 'code'],
} as const;

export const $SignTokenDto = {
  type: 'object',
  properties: {
    expiresIn: {
      type: 'string',
      description: `short time span string

refs: https://github.com/vercel/ms

eg: "2 days", "10h", "7d", "120s", "2.5 hrs", "2h", "1m", "5s", "1y", "100", "1y1m1d"

m => minute
h => hour
d => day
w => week
M => month
y => year
s => second
ms => millisecond
无单位 => millisecond`,
    },
    acl: {
      type: 'object',
      description: '访问控制列表',
    },
    uid: {
      type: 'string',
      description: 'user id',
    },
  },
  required: ['expiresIn', 'uid'],
} as const;

export const $Token = {
  type: 'object',
  properties: {
    token: {
      type: 'string',
      description: 'token',
    },
    tokenExpireAt: {
      format: 'date-time',
      type: 'string',
      description: 'token 过期时间',
    },
  },
  required: ['token', 'tokenExpireAt'],
} as const;

export const $RefreshTokenDto = {
  type: 'object',
  properties: {
    key: {
      type: 'string',
      description: 'user id',
    },
  },
  required: ['key'],
} as const;

export const $CreateUserDto = {
  type: 'object',
  properties: {
    password: {
      type: 'string',
      description: '密码',
      writeOnly: true,
    },
    hasPassword: {
      type: 'boolean',
      description: '是否有密码',
      readOnly: true,
    },
    avatar: {
      type: 'string',
      description: '头像',
    },
    data: {
      type: 'string',
      description: '额外数据',
    },
    email: {
      type: 'string',
      description: '邮箱',
    },
    name: {
      type: 'string',
      description: '姓名',
    },
    identity: {
      type: 'string',
    },
    identityVerifiedAt: {
      format: 'date-time',
      type: 'string',
      description: '实名认证时间',
    },
    identityVerified: {
      type: 'boolean',
      description: '实名认证是否通过',
    },
    intro: {
      type: 'string',
      description: '简介',
    },
    language: {
      type: 'string',
      description: '使用语言',
    },
    nickname: {
      type: 'string',
      description: '昵称',
    },
    ns: {
      type: 'string',
      description: '所属命名空间',
    },
    phone: {
      type: 'string',
      description: '手机号',
    },
    registerRegion: {
      type: 'string',
      description: '注册地区，存地区编号',
    },
    roles: {
      description: '角色',
      type: 'array',
      items: {
        type: 'string',
      },
    },
    super: {
      type: 'boolean',
      description: '是否超级管理员',
    },
    username: {
      type: 'string',
      description: '用户名',
    },
    employeeId: {
      type: 'string',
      description: `<<<<<<< HEAD
员工编号`,
    },
    permissions: {
      description: '权限',
      type: 'array',
      items: {
        type: 'string',
      },
    },
    groups: {
      description: '团队',
      type: 'array',
      items: {
        type: 'string',
      },
    },
    active: {
      type: 'boolean',
      description: '是否启用',
    },
    inviteCode: {
      type: 'string',
      description: '邀请码',
    },
    status: {
      type: 'string',
      description: `=======
>>>>>>> main
状态`,
    },
    expireAt: {
      format: 'date-time',
      type: 'string',
      description: '过期时间',
    },
  },
} as const;

export const $UpdateUserDto = {
  type: 'object',
  properties: {
    hasPassword: {
      type: 'boolean',
      description: '是否有密码',
      readOnly: true,
    },
    avatar: {
      type: 'string',
      description: '头像',
    },
    data: {
      type: 'string',
      description: '额外数据',
    },
    email: {
      type: 'string',
      description: '邮箱',
    },
    name: {
      type: 'string',
      description: '姓名',
    },
    identity: {
      type: 'string',
    },
    identityVerifiedAt: {
      format: 'date-time',
      type: 'string',
      description: '实名认证时间',
    },
    identityVerified: {
      type: 'boolean',
      description: '实名认证是否通过',
    },
    intro: {
      type: 'string',
      description: '简介',
    },
    language: {
      type: 'string',
      description: '使用语言',
    },
    lastLoginIp: {
      type: 'string',
      description: '最后登录 IP',
    },
    lastSeenAt: {
      format: 'date-time',
      type: 'string',
      description: '最后活跃时间',
    },
    nickname: {
      type: 'string',
      description: '昵称',
    },
    ns: {
      type: 'string',
      description: '所属命名空间',
    },
    phone: {
      type: 'string',
      description: '手机号',
    },
    registerIp: {
      type: 'string',
      description: '注册 IP',
    },
    registerRegion: {
      type: 'string',
      description: '注册地区，存地区编号',
    },
    roles: {
      description: '角色',
      type: 'array',
      items: {
        type: 'string',
      },
    },
    super: {
      type: 'boolean',
      description: '是否超级管理员',
    },
    username: {
      type: 'string',
      description: '用户名',
    },
    employeeId: {
      type: 'string',
      description: `<<<<<<< HEAD
员工编号`,
    },
    permissions: {
      description: '权限',
      type: 'array',
      items: {
        type: 'string',
      },
    },
    groups: {
      description: '团队',
      type: 'array',
      items: {
        type: 'string',
      },
    },
    lastLoginAt: {
      format: 'date-time',
      type: 'string',
      description: '最后登录时间',
    },
    active: {
      type: 'boolean',
      description: '是否启用',
    },
    inviteCode: {
      type: 'string',
      description: '邀请码',
    },
    status: {
      type: 'string',
      description: `=======
>>>>>>> main
状态`,
    },
    expireAt: {
      format: 'date-time',
      type: 'string',
      description: '过期时间',
    },
  },
} as const;

export const $ResetPasswordDto = {
  type: 'object',
  properties: {
    password: {
      type: 'string',
      description: '密码',
    },
  },
} as const;

export const $UpdatePasswordDto = {
  type: 'object',
  properties: {
    oldPassword: {
      type: 'string',
      description: '旧密码',
    },
    newPassword: {
      type: 'string',
      description: '新密码',
    },
  },
  required: ['newPassword'],
} as const;

export const $CreateNamespaceDto = {
  type: 'object',
  properties: {
    data: {
      type: 'string',
      description: '额外数据',
    },
    desc: {
      type: 'string',
      description: '描述',
    },
    labels: {
      description: '标签',
      type: 'array',
      items: {
        type: 'string',
      },
    },
    name: {
      type: 'string',
      description: '名称',
    },
    key: {
      type: 'string',
      description: `命名空间的 key

允许的字符 ^[a-zA-Z][a-zA-Z0-9._/-]{0,30}$`,
    },
    ns: {
      type: 'string',
      description: '所属的 namespace',
    },
    permissions: {
      description: '权限',
      type: 'array',
      items: {
        type: 'string',
      },
    },
    active: {
      type: 'boolean',
      description: '是否启用',
    },
    defaultPassword: {
      type: 'string',
      description: '默认密码',
    },
    exportable: {
      type: 'boolean',
      description: '是否可导出',
    },
    userCount: {
      type: 'number',
      description: '人数',
    },
  },
  required: ['name', 'key'],
} as const;

export const $Namespace = {
  type: 'object',
  properties: {
    data: {
      type: 'string',
      description: '额外数据',
    },
    desc: {
      type: 'string',
      description: '描述',
    },
    labels: {
      description: '标签',
      type: 'array',
      items: {
        type: 'string',
      },
    },
    name: {
      type: 'string',
      description: '名称',
    },
    key: {
      type: 'string',
      description: `命名空间的 key

允许的字符 ^[a-zA-Z][a-zA-Z0-9._/-]{0,30}$`,
    },
    ns: {
      type: 'string',
      description: '所属的 namespace',
    },
    permissions: {
      description: '权限',
      type: 'array',
      items: {
        type: 'string',
      },
    },
    active: {
      type: 'boolean',
      description: '是否启用',
    },
    defaultPassword: {
      type: 'string',
      description: '默认密码',
    },
    exportable: {
      type: 'boolean',
      description: '是否可导出',
    },
    userCount: {
      type: 'number',
      description: '人数',
    },
    id: {
      type: 'string',
      description: 'Entity id',
    },
    createdAt: {
      format: 'date-time',
      type: 'string',
      description: 'Entity created at when',
    },
    updatedAt: {
      format: 'date-time',
      type: 'string',
      description: 'Entity updated at when',
    },
    createdBy: {
      type: 'string',
      description: 'Entity created by who',
    },
    updatedBy: {
      type: 'string',
      description: 'Entity updated by who',
    },
  },
  required: ['name', 'key', 'id'],
} as const;

export const $UpdateNamespaceDto = {
  type: 'object',
  properties: {
    data: {
      type: 'string',
      description: '额外数据',
    },
    desc: {
      type: 'string',
      description: '描述',
    },
    labels: {
      description: '标签',
      type: 'array',
      items: {
        type: 'string',
      },
    },
    name: {
      type: 'string',
      description: '名称',
    },
    permissions: {
      description: '权限',
      type: 'array',
      items: {
        type: 'string',
      },
    },
    active: {
      type: 'boolean',
      description: '是否启用',
    },
    defaultPassword: {
      type: 'string',
      description: '默认密码',
    },
    exportable: {
      type: 'boolean',
      description: '是否可导出',
    },
    userCount: {
      type: 'number',
      description: '人数',
    },
  },
} as const;

export const $CreateSessionDto = {
  type: 'object',
  properties: {
    uid: {
      type: 'string',
      description: '用户 ID',
    },
    acl: {
      type: 'object',
      description: '访问控制列表',
    },
    expireAt: {
      format: 'date-time',
      type: 'string',
      description: '会话过期时间',
    },
    client: {
      type: 'string',
      description: '客户端/设备',
    },
  },
  required: ['uid', 'expireAt'],
} as const;

export const $Session = {
  type: 'object',
  properties: {
    acl: {
      type: 'object',
      description: '访问控制列表',
    },
    expireAt: {
      format: 'date-time',
      type: 'string',
      description: '会话过期时间',
    },
    key: {
      type: 'string',
      description: 'refresh token key',
    },
    user: {
      description: '用户，实际存储 uid',
      allOf: [
        {
          $ref: '#/components/schemas/User',
        },
      ],
    },
    client: {
      type: 'string',
      description: '客户端/设备',
    },
    id: {
      type: 'string',
      description: 'Entity id',
    },
    createdAt: {
      format: 'date-time',
      type: 'string',
      description: 'Entity created at when',
    },
    updatedAt: {
      format: 'date-time',
      type: 'string',
      description: 'Entity updated at when',
    },
    createdBy: {
      type: 'string',
      description: 'Entity created by who',
    },
    updatedBy: {
      type: 'string',
      description: 'Entity updated by who',
    },
  },
  required: ['expireAt', 'key', 'user', 'id'],
} as const;

export const $UpdateSessionDto = {
  type: 'object',
  properties: {
    acl: {
      type: 'object',
      description: '访问控制列表',
    },
    expireAt: {
      format: 'date-time',
      type: 'string',
      description: '会话过期时间',
    },
    client: {
      type: 'string',
      description: '客户端/设备',
    },
    uid: {
      type: 'string',
      description: '用户 ID',
    },
  },
} as const;

export const $CreateCaptchaDto = {
  type: 'object',
  properties: {
    code: {
      type: 'string',
      description: '验证码',
    },
    expireAt: {
      format: 'date-time',
      type: 'string',
      description: '过期时间',
    },
    key: {
      type: 'string',
      description: 'key',
    },
  },
  required: ['key'],
} as const;

export const $Captcha = {
  type: 'object',
  properties: {
    code: {
      type: 'string',
      description: '验证码',
    },
    expireAt: {
      format: 'date-time',
      type: 'string',
      description: '过期时间',
    },
    key: {
      type: 'string',
      description: 'key',
    },
    id: {
      type: 'string',
      description: 'Entity id',
    },
    createdAt: {
      format: 'date-time',
      type: 'string',
      description: 'Entity created at when',
    },
    updatedAt: {
      format: 'date-time',
      type: 'string',
      description: 'Entity updated at when',
    },
    createdBy: {
      type: 'string',
      description: 'Entity created by who',
    },
    updatedBy: {
      type: 'string',
      description: 'Entity updated by who',
    },
  },
  required: ['code', 'expireAt', 'key', 'id'],
} as const;

export const $UpdateCaptchaDto = {
  type: 'object',
  properties: {
    code: {
      type: 'string',
      description: '验证码',
    },
    expireAt: {
      format: 'date-time',
      type: 'string',
      description: '过期时间',
    },
    key: {
      type: 'string',
      description: 'key',
    },
  },
} as const;

export const $SendEmailDto = {
  type: 'object',
  properties: {
    from: {
      type: 'string',
    },
    to: {
      type: 'string',
    },
    subject: {
      type: 'string',
    },
    content: {
      type: 'string',
    },
  },
  required: ['from', 'to', 'subject', 'content'],
} as const;

export const $EmailStatus = {
  type: 'string',
  description: '发送状态',
  enum: ['pending', 'sent'],
} as const;

export const $CreateEmailRecordDto = {
  type: 'object',
  properties: {
    status: {
      $ref: '#/components/schemas/EmailStatus',
    },
    from: {
      type: 'string',
      description: '发件者',
    },
    to: {
      type: 'string',
      description: '收件者',
    },
    subject: {
      type: 'string',
      description: '主题',
    },
    content: {
      type: 'string',
      description: '内容',
    },
    sentAt: {
      format: 'date-time',
      type: 'string',
      description: '发送时间',
    },
  },
  required: ['status', 'from', 'to', 'subject', 'content'],
} as const;

export const $EmailRecord = {
  type: 'object',
  properties: {
    status: {
      $ref: '#/components/schemas/EmailStatus',
    },
    from: {
      type: 'string',
      description: '发件者',
    },
    to: {
      type: 'string',
      description: '收件者',
    },
    subject: {
      type: 'string',
      description: '主题',
    },
    content: {
      type: 'string',
      description: '内容',
    },
    sentAt: {
      format: 'date-time',
      type: 'string',
      description: '发送时间',
    },
    id: {
      type: 'string',
      description: 'Entity id',
    },
    createdAt: {
      format: 'date-time',
      type: 'string',
      description: 'Entity created at when',
    },
    updatedAt: {
      format: 'date-time',
      type: 'string',
      description: 'Entity updated at when',
    },
    createdBy: {
      type: 'string',
      description: 'Entity created by who',
    },
    updatedBy: {
      type: 'string',
      description: 'Entity updated by who',
    },
  },
  required: ['status', 'from', 'to', 'subject', 'content', 'id'],
} as const;

export const $UpdateEmailRecordDto = {
  type: 'object',
  properties: {
    status: {
      $ref: '#/components/schemas/EmailStatus',
    },
    from: {
      type: 'string',
      description: '发件者',
    },
    to: {
      type: 'string',
      description: '收件者',
    },
    subject: {
      type: 'string',
      description: '主题',
    },
    content: {
      type: 'string',
      description: '内容',
    },
    sentAt: {
      format: 'date-time',
      type: 'string',
      description: '发送时间',
    },
  },
} as const;

export const $Industry = {
  type: 'object',
  properties: {
    code: {
      type: 'string',
      description: '编码',
    },
    name: {
      type: 'string',
      description: '名称',
    },
    children: {
      description: '子集',
      type: 'array',
      items: {
        $ref: '#/components/schemas/Industry',
      },
    },
  },
  required: ['code', 'name', 'children'],
} as const;

export const $CreateGroupDto = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      description: '名称',
    },
    permissions: {
      description: '权限',
      type: 'array',
      items: {
        type: 'string',
      },
    },
    active: {
      type: 'boolean',
      description: '是否启用',
    },
    userCount: {
      type: 'number',
      description: '人数',
    },
  },
  required: ['name'],
} as const;

export const $Group = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      description: '名称',
    },
    permissions: {
      description: '权限',
      type: 'array',
      items: {
        type: 'string',
      },
    },
    active: {
      type: 'boolean',
      description: '是否启用',
    },
    userCount: {
      type: 'number',
      description: '人数',
    },
    id: {
      type: 'string',
      description: 'Entity id',
    },
    createdAt: {
      format: 'date-time',
      type: 'string',
      description: 'Entity created at when',
    },
    updatedAt: {
      format: 'date-time',
      type: 'string',
      description: 'Entity updated at when',
    },
    createdBy: {
      type: 'string',
      description: 'Entity created by who',
    },
    updatedBy: {
      type: 'string',
      description: 'Entity updated by who',
    },
  },
  required: ['name', 'id'],
} as const;

export const $UpdateGroupDto = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      description: '名称',
    },
    permissions: {
      description: '权限',
      type: 'array',
      items: {
        type: 'string',
      },
    },
    active: {
      type: 'boolean',
      description: '是否启用',
    },
    userCount: {
      type: 'number',
      description: '人数',
    },
  },
} as const;

export const $Region = {
  type: 'object',
  properties: {
    code: {
      type: 'string',
      description: '缩写',
    },
    nameZh: {
      type: 'string',
      description: '中文名称',
    },
    namePinyin: {
      type: 'string',
      description: '中文拼音',
    },
    nameEn: {
      type: 'string',
      description: '英文名称',
    },
    dialingPrefix: {
      type: 'string',
      description: '电话前缀',
    },
  },
  required: ['code', 'nameZh', 'namePinyin', 'nameEn', 'dialingPrefix'],
} as const;

export const $SendSmsDto = {
  type: 'object',
  properties: {
    phone: {
      type: 'string',
    },
    sign: {
      type: 'string',
    },
    template: {
      type: 'string',
    },
    params: {
      type: 'object',
    },
  },
  required: ['phone', 'sign', 'template'],
} as const;

export const $SmsStatus = {
  type: 'string',
  description: '发送状态',
  enum: ['pending', 'sent'],
} as const;

export const $CreateSmsRecordDto = {
  type: 'object',
  properties: {
    status: {
      $ref: '#/components/schemas/SmsStatus',
    },
    phone: {
      type: 'string',
      description: '手机号',
    },
    sign: {
      type: 'string',
      description: '签名',
    },
    template: {
      type: 'string',
      description: '模板',
    },
    params: {
      type: 'string',
      description: '参数',
    },
    sentAt: {
      format: 'date-time',
      type: 'string',
      description: '发送时间',
    },
  },
  required: ['status', 'phone', 'sign', 'template'],
} as const;

export const $SmsRecord = {
  type: 'object',
  properties: {
    status: {
      $ref: '#/components/schemas/SmsStatus',
    },
    phone: {
      type: 'string',
      description: '手机号',
    },
    sign: {
      type: 'string',
      description: '签名',
    },
    template: {
      type: 'string',
      description: '模板',
    },
    params: {
      type: 'string',
      description: '参数',
    },
    sentAt: {
      format: 'date-time',
      type: 'string',
      description: '发送时间',
    },
    id: {
      type: 'string',
      description: 'Entity id',
    },
    createdAt: {
      format: 'date-time',
      type: 'string',
      description: 'Entity created at when',
    },
    updatedAt: {
      format: 'date-time',
      type: 'string',
      description: 'Entity updated at when',
    },
    createdBy: {
      type: 'string',
      description: 'Entity created by who',
    },
    updatedBy: {
      type: 'string',
      description: 'Entity updated by who',
    },
  },
  required: ['status', 'phone', 'sign', 'template', 'id'],
} as const;

export const $UpdateSmsRecordDto = {
  type: 'object',
  properties: {
    status: {
      $ref: '#/components/schemas/SmsStatus',
    },
    phone: {
      type: 'string',
      description: '手机号',
    },
    sign: {
      type: 'string',
      description: '签名',
    },
    template: {
      type: 'string',
      description: '模板',
    },
    params: {
      type: 'string',
      description: '参数',
    },
    sentAt: {
      format: 'date-time',
      type: 'string',
      description: '发送时间',
    },
  },
} as const;
