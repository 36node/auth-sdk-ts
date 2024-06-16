import fs from 'fs';

import { gen } from '@36node/openapi-ts-gen';
import commander from 'commander';

const rootDir = __dirname + '/..';
const openapiPath = `${rootDir}/openapi.json`;

async function main(output = './', filePath = openapiPath) {
  // 创建目录
  const srcDir = `${output}/src`;
  if (!fs.existsSync(srcDir)) {
    fs.mkdirSync(srcDir, { recursive: true });
  }

  // 生成 sdk
  console.log('generate sdk to: ', srcDir);
  const result = gen({ name: 'core', input: filePath });
  result.files.forEach((file) => {
    fs.writeFileSync(srcDir + '/' + file.filename, file.content);
  });
}

const program = new commander.Command();
program
  .name('openapi-generator')
  .option('-o, --output <path>', 'sdk output directory')
  .option('-f, --filePath <path>', 'openapi json file path')
  .option('-v, --version <version>', 'sdk version')
  .action((options) => {
    main(options.output, options.filePath).catch((err) => {
      console.error(err);
      process.exit(1);
    });
  });

program.parse(process.argv);
