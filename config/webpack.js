let { getMultiTarget, getMultiEnv, getYml } = require("./multitarget")

let webpackBuilder = require("@bruitt/webpack-builder")

let appConfig = getMultiTarget("webpack")
let envConfig = getMultiEnv("env")

let envTargets = Object.assign({}, envConfig, { targets: getYml("./env.yml") })

module.exports = webpackBuilder(appConfig, envTargets)
