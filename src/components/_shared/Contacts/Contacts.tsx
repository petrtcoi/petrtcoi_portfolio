import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import EmailIcon from '../../../assets/icons/EmailIcon'
import LinkedinIcon from '../../../assets/icons/LinkedinIcon'
import TelegramIcon from '../../../assets/icons/TelegramIcon'

import styles from './contacts.module.css'


type ContactsProps = {}

const Contacts: React.FC<ContactsProps> = (_props) => {

    return (
        <div className={ styles.block }>
            <div>
                <div className={ styles.row } >
                    <div className={ styles.row__icon }>
                        <TelegramIcon size={ 20 } className={ "svg__text" } />
                    </div>
                    <address className={ styles.row__data }>
                        <Link
                            href="http://t.me/thepetrtcoi"
                            target={ "_blank" }
                            rel="noreferrer">
                            @thepetrtcoi
                        </Link>
                    </address>
                </div>

                <div className={ styles.row } >
                    <div className={ styles.row__icon }>
                        <LinkedinIcon size={ 15 } className={ "svg__text" } />
                    </div>
                    <address className={ styles.row__data }>
                        <Link
                            href="https://www.linkedin.com/in/petrtcoi/"
                            target={ "_blank" }
                            rel="noreferrer">
                            /petrtcoi
                        </Link>
                    </address>
                </div>
                <div className={ styles.row } >
                    <div className={ styles.row__icon }>
                        <EmailIcon size={ 15 } className={ "svg__text" } />
                    </div>
                    <address className={ styles.row__data }>
                        <Link
                            href="mailto:petrtcoi@gmail.com"
                            target={ "_blank" }
                            rel="noreferrer">
                            petrtcoi@gmail.com
                        </Link>
                    </address>
                </div>
                <div className={ styles.row } >
                    <address className={ styles.row__icon }>
                        <EmailIcon size={ 15 } className={ "svg__text" } />
                    </address>
                    <div className={ styles.row__data }>

                        petrtcoi@<a
                            href="mailto:petrtcoi@gmail.com"
                            className="link--accent"
                        >
                            &lt;ваш домен?&gt;
                        </a>

                    </div>
                </div>
            </div >
        </div>
    )
}

export default Contacts