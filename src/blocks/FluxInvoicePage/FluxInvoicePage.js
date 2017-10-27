// -- react
import { Component } from "react"

// -- bruitt
import hx from "@bruitt/hyperscript/dist/react"

// -- modules
// import $ from "jquery"

// -- blocks
// import * as Button from "app/blocks/Button"
// import Control from "app/blocks/Control"

// -- helpers
// import { wrapActions } from "app/helpers/utils"

// -- reducers
// import dataActions from "app/reducers/data"

// -- services
// import { localForage } from "app/services"

import styles from "./FluxInvoicePage.pcss"

let h = hx(styles)

class FluxInvoicePage extends Component {
  render() {
    return h(".FluxInvoicePage", [
      h("p.email", [
        "Email: ",
        h("a", { href: "mailto:morhetz@gmail.com" }, [ "morhetz@gmail.com" ]),
      ]),
      h("h3.name", [ "Account holder name in Cyrillic " ]),
      h("p.lastName", [ "Last name: Перцев" ]),
      h("p.firstName", [ "First name: Павел" ]),
      h("p.patronymicName", [ "Patronymic name: Сергеевич" ]),
      h("h3.name", [ "Bank details" ]),
      h("p.bankName", [ "Bank name: ТОЧКА ПАО БАНКА \"ФК ОТКРЫТИЕ\"" ]),
      h("p.accountNumber", [ "Account number: 40817810610500000525" ]),
      h("p.bik", [ "BIK (Bank Code): 044525999" ]),
      h("p.region", [ "Region: Moscow" ]),
      h("p.inn", [ "INN (Taxpayer Identification Number): 290221784772" ]),
      h("p.corrAccount", [
        "Correspondent account number: 30101810845250000999",
      ]),
    ])
  }
}

export default FluxInvoicePage
