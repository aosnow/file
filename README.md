# @mudas/file

> 简化的 Blob 对象封装，对文件构建、下载、上传提供基础数据支持.  
Simplified Blob Encapsulation to Support File Construction, Download and Upload

## Setup
`mime` 未构建到 `@mudas/file`中，用户可自行单独升级。
```npm
npm i @mudas/file core-js mime -S
```

## Usage
### 1、BlobFile
简化的 Blob 对象封装，可方便的通过运行时内容产出实体文件用于上传或者下载到本地。
```ecmascript 6
/**
 * 创建文件对象
 * @param {Array<*>|Blob} data 数据内容源
 * @param {String} filename 文件名（不包含扩展名）
 * @param {String} [extension] 文件后缀名，默认 'txt'
 * @param {String} [endings] 决定 append() 的数据格式（数据中的 \n 如何被转换）取值为 Endings.transparent 或 Endings.native
 */
constructor(data, filename, extension = 'txt', endings = Endings.native)

// 文件内容
get data();

// 文件名（无后缀）
get filename();

// 文件后缀名
get extension();

// 文件全名（包含后缀）
get fullname();

/**
 * 立即下载该文件到本地
 */
download();
```

### 2、Mime
use `mime 2.4.4`，来做为 blob 文件 mime types 的支撑。
若需要对文件后缀信息进行扩展，请参照以下方法：
```ecmascript 6
Mime.define({
  // 自定义补充的扩展名
  // text/plain: ['txt','ini']
}, false);

// false - 代表不覆盖原有配置，而只扩充
```

### 3、download
Blob 文件引用自 `download()`，内置提供对当前Blob文件的本地下载功能。

## Changelog

### v0.0.5
- 更新 README

### v0.0.4
- 优化构建规则，优化输出包

### v0.0.3
- 增强 download 文件名的默认缺省支持

### v0.0.2
- 修复相关细节，完善 d.ts 类型定义
