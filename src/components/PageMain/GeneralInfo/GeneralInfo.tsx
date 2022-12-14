import React from 'react'
import AboutText from './AboutText/AboutText'
import Contacts from '../../_shared/Contacts/Contacts'
import PortfolioPhoto from './ProtfolioPhoto/ProtfolioPhoto'


import styles from './generalinfo.module.css'

type GeneralInfoProps = {}

const GeneralInfo: React.FC<GeneralInfoProps> = (_props) => {
  return (
    <section className={ styles.block }>
      <div className={ styles.leftcolumn }>
        <PortfolioPhoto />
        <div style={ { display: "flex", justifyContent: "center" } }>
          <Contacts />
        </div>
      </div>
      <AboutText />
    </section >
  )
}

export default GeneralInfo