#!/usr/bin/env node
const { yParser, chalk, createDebug } = require('@umijs/utils');
const debug = createDebug('umi:test');

// 解析控制台对象
const args = yParser(process.argv.slice(2), {
  // 命令别名定义
  alias: {
    watch: ['w'],
    version: ['v'],
  },
  // 将一下对象的值解析成boolean
  boolean: ['coverage', 'watch', 'version', 'debug', 'e2e'],
  // 定义默认值
  default: {
    e2e: true,
  },
});

// 引用bin包
require('../lib')
  .default(args)
  .catch((e) => {
    console.error(chalk.red(e));
    process.exit(1);
  });
