import { Component, PropTypes } from "react"

import hx from "@bruitt/hyperscript/dist/react"
import { sanitizeMods, getPropTypes, getDefaultProps } from "app/helpers/utils"

import styles from "./Heading.pcss"

let h = hx(styles)

let propDefs = {
  align: {
    type: PropTypes.string,
    mod: true,
  },
  children: {

  },
  className: {
    type: PropTypes.string,
  },
  level: {
    type: PropTypes.number,
    mod: true,
    default: 1,
  },
  spacing: {
    type: PropTypes.string,
    mod: true,
    default: "none",
  },
  tag: {
    type: PropTypes.string,
    default: "h2",
  },
  weight: {
    type: PropTypes.string,
    mod: true,
    default: "regular",
  },
  uppercase: {
    type: PropTypes.bool,
    mod: true,
  },
}

export default class Heading extends Component {
  static propTypes = getPropTypes(propDefs)
  static defaultProps = getDefaultProps(propDefs)

  render() {
    let { children, className, tag } = this.props
    let mods = sanitizeMods(propDefs)(this.props)

    return h(`${tag}.Heading`, {
      className, mods,
    }, [
      children,
    ])
  }
}
