import vue from 'rollup-plugin-vue'
import scss from 'rollup-plugin-scss'
import buble from 'rollup-plugin-buble'
import eslint from 'rollup-plugin-eslint'
import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'
import uglify from 'rollup-plugin-uglify'

const NODE_ENV = process.env.NODE_ENV
const isProduction = NODE_ENV === 'production'

const plugins = []

const DIST_CSS = isProduction ? 'dist/vue-lazyload-component.css' : '.dev/index.css'
const DIST_JS = isProduction ? 'dist/vue-lazyload-component.js' : '.dev/index.js'
const DIST_ENTRY = isProduction ? 'src/index.js' : 'examples/index.js'

plugins.push(eslint({
  exclude: ['node_modules/**'],
  include: ['**/*.js'],
  formatter: require('eslint-friendly-formatter')
}))

plugins.push(vue({
  compileTemplate: true
}))

plugins.push(url({
  limit: 10 * 1024
}))

plugins.push(scss({
  output: DIST_CSS
}))

plugins.push(buble())

plugins.push(commonjs({
  include: 'node_modules/**'
}))

plugins.push(nodeResolve({
  customResolveOptions: {
    moduleDirectory: ['node_modules']
  }
}))

// 生产坏境
if (isProduction) {
  plugins.push(uglify())
}

export default {
  entry: DIST_ENTRY,
  format: 'cjs',
  plugins: plugins,
  dest: DIST_JS,
  sourceMap: !isProduction
}
