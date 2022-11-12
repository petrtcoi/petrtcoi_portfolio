import React from "react"
import styles from './footer.module.css'

type FooterProps = {}

const Footer: React.FC<FooterProps> = (_props) => {

  return (
    <div data-testid={ "layout-footer" } className={styles.footerblock}>
      <div className="text--small" style={ { textAlign: "center" } }>
        <div>Открыт для любых предложений</div>
        <div>Публицация на dev.to и vc.ru</div>
      </div>
    </div>
  )
}

export default Footer