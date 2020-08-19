
// 如果您已经在使用jest-cli，请添加babel-jest，它将使用Babel自动编译JavaScript代码。
const babelJest = require('babel-jest');


module.exports = babelJest.createTransformer({
  // 指向根目录处具有jest-preset.json或jest-preset.js文件的npm模块
  presets: [require.resolve('@umijs/babel-preset-umi/node')],
  babelrc: false,
  configFile: false,
});
