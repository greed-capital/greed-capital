let fs = require("fs-extra")
let minimist = require("minimist")
let path = require("path")
let { execSync } = require("child_process")

let argv = minimist(process.argv.slice(2))
let exec = cmd => execSync(cmd, { stdio: [0, 1, 2] })

let targetMap = {
  dev: "development",
  test: "staging",
  prod: "production",
  stats: "stats",
  nope: "nope",
}

let target = targetMap[argv._[0]] || "production"

if (target === "stats") {
  console.log("→ stats analyzer")
  exec(
    "webpack --config config/webpack.js --json | webpack-bundle-size-analyzer",
  )
  return
}

let { release } = argv

if (release) {
  console.log(`→ release ${release}`)
  process.env.RELEASE = release
  fs.writeJsonSync(path.resolve(process.cwd(), "./.env"), { release })
}

// pre
console.log("→ removing public")
fs.removeSync("./public")

if (target === "nope") {
  return
}

// build
console.log(`→ webpack TARGET=${target}`)
process.env.TARGET = target
exec("npx webpack --config config/webpack.js --env.nocolors")

// post
// console.log("")
