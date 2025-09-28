import { defaultPlugins, defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  input: 'openapi.json',
  output: {
    indexFile: false, 
    path: 'src/gen',
  },
  // 下面这些参数 现在还不能正确工作
  // experimentalParser: true,
  plugins: [
    ...defaultPlugins,
    {
      dates: true,
      name: '@hey-api/transformers',
    },
    {
      name: '@hey-api/sdk', 
      transformer: true, 
    }
  ],
});
