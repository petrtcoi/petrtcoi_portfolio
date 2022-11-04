import React from 'react'
import Link from 'next/link'

import EmailIcon from  './../../assets/icons/EmailIcon'
import LinkedinIcon from './../../assets/icons/LinkedinIcon'
import TelegramIcon from './../../assets/icons/TelegramIcon'

import styles from './css/styles.module.css'

const ContactInfo: React.FC = () => {

    return (
        <div>
            <div className={ styles["contact-row"] } >
                <div className={ styles["contact-row__icon"] }>
                    <TelegramIcon size={ 20 } className={ "svg-icon-text" } />
                </div>
                <div className={ styles["contact-row_data"] }>
                    <Link
                        href="http://t.me/thepetrtcoi"
                        target={ "_blank" }
                        rel="noreferrer">
                        @thepetrtcoi
                    </Link>
                </div>
            </div>

            <div className={ styles["contact-row"] } >
                <div className={ styles["contact-row__icon"] }>
                    <LinkedinIcon size={ 15 } className={ "svg-icon-text" } />
                </div>
                <div className={ styles["contact-row_data"] }>
                    <Link
                        href="https://www.linkedin.com/in/petrtcoi/"
                        target={ "_blank" }
                        rel="noreferrer">
                        /petrtcoi
                    </Link>
                </div>
            </div>
            <div className={ styles["contact-row"] } >
                <div className={ styles["contact-row__icon"] }>
                    <EmailIcon size={ 15 } className={ "svg-icon-text" } />
                </div>
                <div className={ styles["contact-row_data"] }>
                    <Link
                        href="mailto:petrtcoi@gmail.com"
                        target={ "_blank" }
                        rel="noreferrer">
                        petrtcoi@gmail.com
                    </Link>
                </div>
            </div>
            <div className={ styles["contact-row"] } >
                <div className={ styles["contact-row__icon"] }>
                    <EmailIcon size={ 15 } className={ "svg-icon-text" } />
                </div>
                <div className={ styles["contact-row_data"] }>

                    petrtcoi@<a
                        href="mailto:petrtcoi@gmail.com"
                        className={"link--accent"}
                    >
                        &lt;ваш домен?&gt;
                    </a>

                </div>
            </div>


        </div >
    )
}

export default ContactInfo