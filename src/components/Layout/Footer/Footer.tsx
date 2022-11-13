import React from "react"
import Contacts from "../../_shared/Contacts/Contacts"
import styles from './footer.module.css'

type FooterProps = {}

const Footer: React.FC<FooterProps> = (_props) => {

  return (
    <footer data-testid={ "layout-footer" } className={ styles.footerblock }>
      <p className="text--small">
        Открыт для любых предложений
        <br />
        С уважением, Цой Петр
      </p>
      <div style={{marginTop: "40px"}}>
        <Contacts />
      </div>
    </footer >
  )
}

export default Footer