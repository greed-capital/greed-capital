// -- react
import { Component } from "react"

// -- bruitt
import hx from "@bruitt/hyperscript/dist/react"

// -- blocks
import styles from "./IndexPage.pcss"

let h = hx(styles)

class IndexPage extends Component {
  render() {
    return h(".IndexPage", [
      h("h1.logo", { title: "Greed" }),
      h("h2.tagline", {
        title:
          "From the first day to this, sheer greed was the driving spirit of civilization.",
      }),
      h("footer.footer", [
        h(".left", [
          "Simple investing in digital currencies is coming soon to iPhone",
        ]),
        h(".right", [
          h("ul.linksList", [
            h("li.link", [
              h("a", { href: "mailto:shalom@greed.capital" }, [
                "shalom@greed.capital",
              ]),
            ]),
            h("li.link", [
              h(
                "a",
                {
                  href: "https://twitter.com/GreedApp",
                  target: "_blank",
                  rel: "noopener norefferer",
                },
                [ "Twitter" ],
              ),
            ]),
          ]),
        ]),
      ]),
    ])
  }
}

export default IndexPage
