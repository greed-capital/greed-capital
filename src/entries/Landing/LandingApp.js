// -- react
import { Component } from "react"

// -- bruitt
import hx from "@bruitt/hyperscript/dist/react"

// -- blocks
import IndexPage from "app/blocks/IndexPage"

let h = hx({})

class LandingApp extends Component {
  render() {
    return h(IndexPage)
  }
}

export default LandingApp
