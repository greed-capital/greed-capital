import "react-hot-loader/patch"
import "app/helpers/polyfills"
import "normalize.css/normalize.css"
import "@bruitt/app-entry/lib/reset.pcss"

import { createElement as h } from "react"
import { render as renderDom } from "react-dom"
import { AppContainer } from "react-hot-loader"

import "./LandingStyles.pcss"
import rootApp from "./LandingApp"

let wrapAppComponent = (app) => {
  return h(AppContainer, {}, h(app))
}

let renderAppComponent = (root) => (app) => {
  let wrappedComponent = wrapAppComponent(app)
  renderDom(wrappedComponent, root)
}

let render = renderAppComponent(document.getElementById("mount"))
render(rootApp)

if (module.hot) {
  module.hot.accept("./LandingApp", () => {
    render(rootApp)
  })
}
