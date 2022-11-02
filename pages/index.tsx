import type { NextPage } from 'next'
import Link from 'next/link'
import ContactInfo from '../components/PageMain/ContactInfo'

import PortfolioImage from '../components/PageMain/PortfoliImage'

import styles from './../components/PageMain/css/pagemain.module.css'

type PageMainProps = {}

const PageMain: NextPage<PageMainProps> = (_props) => {


    return (
        <div data-testid="page-home" style={ { display: "flex", flexWrap: "wrap" } }>
            <div className={ styles["portfolio-image"] }>
                <PortfolioImage />
                <ContactInfo />
            </div>
            <div className={ styles.information }>
                <h1 style={ { fontSize: "1.8rem" } }>Добро пожаловать на мой сайт</h1>
                <p className="text--large">
                    Привет! Меня зовут Петр. Я создал этот сайт в качестве своего портфолио. Здесь буду выкладывать &quot;лабораторные&quot; работы и ссылки на их описание.
                </p>
                <p>
                    Пишу сайты на <span className="text--accent">React</span> с 2017 года. Начинал как хобби, но впоследствии прокачался и нашел примение своим умениям в коммерческой области: интернет-магазины, написанные на <span className="text--accent">NextJS</span> (например, <Link href="https://arboniashop.ru" target="_blank" rel="noreferrer">arboniashop.ru</Link>). Создана также рабочая панель для подготовки коммерческих предложений покупателям, интегрированная с прайс-листами, загруженными в Google Docs, онлайн-кассой, складской программой, рабочим WhatsApp (Twilio).
                </p>
                <p>
                    Мой основной стек: React / Next, Express, MongoDb. Был хобби-проект на React Native. Также могу написать простые скрипты на Python (использовал для автоматической выгрузки остатков, мониторинга цен и т.п.).
                </p>
                <p>
                    Сайт быложен на&nbsp;
                    <Link
                        href="https://github.com/petrtcoi/petrtcoi_portfolio"
                        target="_blank"
                        className="link--accent"
                    >
                        Guthub
                    </Link>
                    . Буду признателен за любую обратную связь.
                </p>
            </div>

        </div>
    )
}

export default PageMain
