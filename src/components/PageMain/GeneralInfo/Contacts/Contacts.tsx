import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import EmailIcon from '../../../../assets/svg-icons/EmailIcon'
import LinkedinIcon from '../../../../assets/svg-icons/LinkedinIcon'
import TelegramIcon from '../../../../assets/svg-icons/TelegramIcon'

import styles from './contacts.module.css'


type ContactsProps = {}

const Contacts: React.FC<ContactsProps> = (_props) => {

    return (
        <div className={styles.block}>
            <div className={ styles.portfolioimage }>
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
                        <TelegramIcon size={ 20 } className={ "svg-icon-text" } />
                    </div>
                    <div className={ styles.row__data }>
                        <Link
                            href="http://t.me/thepetrtcoi"
                            target={ "_blank" }
                            rel="noreferrer">
                            @thepetrtcoi
                        </Link>
                    </div>
                </div>

                <div className={ styles.row } >
                    <div className={ styles.row__icon }>
                        <LinkedinIcon size={ 15 } className={ "svg-icon-text" } />
                    </div>
                    <div className={ styles.row__data }>
                        <Link
                            href="https://www.linkedin.com/in/petrtcoi/"
                            target={ "_blank" }
                            rel="noreferrer">
                            /petrtcoi
                        </Link>
                    </div>
                </div>
                <div className={ styles.row } >
                    <div className={ styles.row__icon }>
                        <EmailIcon size={ 15 } className={ "svg-icon-text" } />
                    </div>
                    <div className={ styles.row__data }>
                        <Link
                            href="mailto:petrtcoi@gmail.com"
                            target={ "_blank" }
                            rel="noreferrer">
                            petrtcoi@gmail.com
                        </Link>
                    </div>
                </div>
                <div className={ styles.row } >
                    <div className={ styles.row__icon }>
                        <EmailIcon size={ 15 } className={ "svg-icon-text" } />
                    </div>
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