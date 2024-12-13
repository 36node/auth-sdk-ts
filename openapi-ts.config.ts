import { defaultPlugins, defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  client: '@hey-api/client-fetch',
  input: 'openapi.json',
  output: 'src',
  // 下面这些参数 现在还不能正确工作
  // experimentalParser: true,
  plugins: [
    ...defaultPlugins,
    {
      dates: true,
      name: '@hey-api/transformers',
    },
  ],
});
