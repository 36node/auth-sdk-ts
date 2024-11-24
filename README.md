# auth-sdk-ts

Typescript auth sdk for 36node/auth service.

本工程是通过 `@hey-api/openapi-ts` 生成

## 配置 baseUrl 和 拦截器

```ts
import { client } from '@36node/auth-sdk';

// configure internal service client
client.setConfig({
  // set default base url for requests
  baseUrl: 'https://petstore3.swagger.io/api/v3',
  // set default headers for requests
  headers: {
    Authorization: 'Bearer <token_from_service_client>',
  },
});

client.interceptors.response.use((response) => {
  if (response.status === 200) {
    console.log(`request to ${response.url} was successful`);
  }
  return response;
});
```
