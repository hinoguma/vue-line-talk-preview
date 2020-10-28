const postcssEasyImport = require('postcss-easy-import')
const postcssSimpleVars = require('postcss-simple-vars')
const postcssNested = require('postcss-nested')
const postcssCalc = require('postcss-calc')
const autoprefixer = require('autoprefixer')

// 使用プラグイン
const initPlugin = [
    postcssEasyImport({}),
    postcssSimpleVars({}),
    postcssNested({}),
    postcssCalc({}),
    autoprefixer({})
]

// 実行
module.exports = {
    plugins: initPlugin
}