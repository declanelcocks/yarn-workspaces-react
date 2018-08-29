const withPlugins = require('next-compose-plugins')
const withCss = require('@zeit/next-css')
const withTM = require('next-plugin-transpile-modules')

// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.css'] = () => {}
}

module.exports = withPlugins([
  withCss,
  [withTM, {
    transpileModules: ['@8securities/ui'],
  }],
])
