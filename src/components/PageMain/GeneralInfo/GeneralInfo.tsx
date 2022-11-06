import React from 'react'
import AboutText from './AboutText/AboutText'
import Contacts from './Contacts/Contacts'

import styles from './generalinfo.module.css'

type GeneralInfoProps = {}

const GeneralInfo: React.FC<GeneralInfoProps> = (_props) => {
    return (
        <div className={ styles.block }>
            <div className={ styles.block__contacts }>
                <Contacts />
            </div>
            <div className={ styles.block__about }>
                <AboutText />
            </div>

        </div>
    )
}

export default GeneralInfo