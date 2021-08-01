
// next.config.js
// const withImages = require('next-images')
const withImages = require('next-images');
const withCSS = require('@zeit/next-css')
module.exports = withCSS({ cssModules: true })
module.exports = withImages()

