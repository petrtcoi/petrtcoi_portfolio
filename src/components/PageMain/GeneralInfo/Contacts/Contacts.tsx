import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import EmailIcon from '../../../../shared/svg-icons/EmailIcon'
import LinkedinIcon from '../../../../shared/svg-icons/LinkedinIcon'
import TelegramIcon from '../../../../shared/svg-icons/TelegramIcon'

import styles from './contacts.module.css'


type ContactsProps = {}

const Contacts: React.FC<ContactsProps> = (_props) => {

    return (
        <div className={styles.block}>
            <div className={ styles.photo }>
                <Image
                    data-testid="portfolio-photo"
                    priority
                    src={ "/images/portfolio-image.jpg" }
                    fill
                    sizes="(max-width: 800px) 200px
                            (min-width: 801px) 300px"
                    alt={ "Фотография Petr Tcoi для портфолио" }
                    title={ "Моя фотография. Я люблю React" }     
                    style={{borderRadius: "50%"}}
                />
            </div>
            <div>
                <div className={ styles.row } >
                    <div className={ styles.row__icon }>
                        <TelegramIcon size={ 20 } className={"svg__text" } />
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