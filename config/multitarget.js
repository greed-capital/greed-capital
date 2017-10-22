require("require-yaml")

process.env.TARGET = process.env.TARGET || process.env.NODE_ENV || "production"

function getYml(path) {
  /* eslint-disable */
  let yml = {}
  try {
    yml = require(path)
  } catch (e) {
    yml = {}
  }
  return yml
  /* eslint-enable */
}

function getMultiTarget(path) {
  let target = process.env.TARGET

  let keyCommon = getYml(`./${path}.yml`)
  let keyConfig = keyCommon[target] || keyCommon.default || {}

  let keyTarget = getYml(`./${path}.${target}.yml`)
  let keyLocal = getYml(`./${path}.local.yml`)

  return Object.assign({}, keyConfig, keyTarget, keyLocal)
}

function getMultiEnv(path) {
  let envConfig = getMultiTarget(path)

  Object.keys(envConfig).forEach((key) => {
    if (!process.env[key]) {
      process.env[key] = envConfig[key]
    } else {
      envConfig[key] = process.env[key]
    }
  })

  return envConfig
}

module.exports = {
  getMultiEnv,
  getMultiTarget,
  getYml,
}
