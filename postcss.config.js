const postcssEasyImport = require('postcss-easy-import')
const postcssNested = require('postcss-nested')
const postcssCalc = require('postcss-calc')
const autoprefixer = require('autoprefixer')
const postcssFor = require('postcss-for')
const calc = require('postcss-calc')

// 使用プラグイン
const initPlugin = [
  postcssEasyImport({}),
  postcssFor({}),
  postcssNested({}),
  require('postcss-simple-vars'),
  postcssCalc({}),
  autoprefixer({}),
  calc({})
]

// 実行
module.exports = {
  plugins: initPlugin
}
