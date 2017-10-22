let fs = require("fs-extra")
let path = require("path")

module.exports = function generateEntry(entryName) {
  if (!entryName) {
    // throw new Error("Empty entryName")
  }
  let entryPath = path.resolve(__dirname, `../../src/entries/${entryName}`)

  fs.outputFile(
    path.join(entryPath, `${entryName}.js`),
    `import { configureStore, renderAppComponent } from "@bruitt/app-entry"

import historySub, { setHistory } from "app/helpers/history"

import "./${entryName}Styles.pcss"
import rootApp from "./${entryName}App"
import routes from "./${entryName}Routes"

setHistory(process.env.HISTORY.${entryName})
historySub({
  // defaultRoute: R.head(routes.notFound),
  reaction: () => {},
  routes
})

let render = renderAppComponent(document.getElementById("mount"), store)
render(rootApp)

if (module.hot) {
  module.hot.accept("./${entryName}App", () => {
    let nextApp = require("./${entryName}App").default

    render(nextApp)
  })
}
`,
  )

  fs.outputFile(
    path.join(entryPath, `${entryName}App.js`),
    `// -- react
import { Component } from "react"

// -- bruitt
import hx from "@bruitt/hyperscript/dist/react"

// -- blocks
// import Page from "app/blocks/Page"

let h = hx({})

class ${entryName}App extends Component {
  render() {
    return h("div", [
      // h(Page, { type: "notFound" }, h(ErrorScreen, { displayText: "404" })),
    ])
  }
}

export default ${entryName}App
`,
  )

  fs.outputFile(
    path.join(entryPath, `${entryName}Routes.js`),
    `export default {
  notFound: [ "/404" ],
  index: [ "/", "/index" ]
}
`,
  )

  fs.outputFile(
    path.join(entryPath, `${entryName}Styles.pcss`),
    `@import "../../styles/common.pcss";

:global {
  :root {
    color: $black;
    @mixin sansSerif;
  }
}
`,
  )

  fs.outputJson(path.join(entryPath, "package.json"), {
    name: entryName,
    version: "0.0.0",
    private: true,
    main: `./${entryName}.js`,
  })
}
