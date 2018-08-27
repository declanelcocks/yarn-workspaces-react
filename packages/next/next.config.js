const webpack = require('webpack')
const withPlugins = require('next-compose-plugins')
const withCss = require('@zeit/next-css')
const withTM = require('next-plugin-transpile-modules')

module.exports = withCss(withTM({
  transpileModules: ['@8securities/ui'],
}))
