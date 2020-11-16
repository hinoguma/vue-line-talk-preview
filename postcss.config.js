const postcssEasyImport = require('postcss-easy-import')
const postcssNested = require('postcss-nested')
const postcssCalc = require('postcss-calc')
const autoprefixer = require('autoprefixer')
const postcssFor = require('postcss-for')

// 使用プラグイン
const initPlugin = [
  postcssEasyImport({}),
  postcssFor({}),
  postcssNested({}),
  require('postcss-simple-vars'),
  postcssCalc({}),
  autoprefixer({})
]

// 実行
module.exports = {
  plugins: initPlugin
}
