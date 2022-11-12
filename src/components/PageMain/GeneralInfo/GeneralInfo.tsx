import React from 'react'
import AboutText from './AboutText/AboutText'
import Contacts from './Contacts/Contacts'

import styles from './generalinfo.module.css'

type GeneralInfoProps = {}

const GeneralInfo: React.FC<GeneralInfoProps> = (_props) => {
  return (
    <section className={ styles.block }>
      <div className={ styles.contacts }>
        <Contacts />
      </div>
      <div className={ styles.about }>
        <AboutText />
      </div>

    </section>
  )
}

export default GeneralInfo