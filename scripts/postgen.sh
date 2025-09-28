#!/bin/bash

# 脚本：处理生成后的文件
# 1. 替换 ThrowOnError 默认值从 false 改为 true
# 2. 删除无用的 @ts-expect-error 注释

set -e

echo "🔧 Processing generated files..."

# 查找所有 TypeScript 文件并进行处理
find ./src/gen -type f -name "*.ts" | while read -r file; do
  echo "Processing: $file"
  
  # 1. 替换 ThrowOnError 默认值
  perl -pi -e 's/ThrowOnError extends boolean = false/ThrowOnError extends boolean = true/g' "$file"
  
  # 2. 删除单行的 @ts-expect-error 注释（包括前面的缩进）
  # 兼容 macOS (BSD sed) 和 Linux (GNU sed)
  if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    sed -i '' '/^[[:space:]]*\/\/ @ts-expect-error[[:space:]]*$/d' "$file"
  else
    # Linux
    sed -i '/^[[:space:]]*\/\/ @ts-expect-error[[:space:]]*$/d' "$file"
  fi
done

echo "✅ Post-generation processing completed!"