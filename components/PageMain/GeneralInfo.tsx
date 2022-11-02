import React from 'react'
import Link from 'next/link'
import styles from './css/styles.module.css'

type GeneralInfoProps = {}

const GeneralInfo: React.FC<GeneralInfoProps> = (_props) => {
    return (
        <div className={ styles["general-info"] }>
            <h1>Добро пожаловать на мой сайт</h1>
            <p className="text--large">
                Привет! Меня зовут Петр. Я создал этот сайт в качестве своего портфолио. Здесь буду выкладывать &quot;лабораторные&quot; работы и ссылки на их описание.
            </p>
            <p>
                Пишу сайты на <span className="text--accent">React</span> с 2017 года. Начинал как хобби, но впоследствии прокачался и нашел примение своим умениям в коммерческой области: интернет-магазины, написанные на <span className="text--accent">NextJS</span> (например, <Link href="https://arboniashop.ru" target="_blank" rel="noreferrer">arboniashop.ru</Link>). Создана также рабочая панель для подготовки коммерческих предложений покупателям, интегрированная с прайс-листами, загруженными в Google Docs, онлайн-кассой, складской программой, рабочим WhatsApp (Twilio).
            </p>
            <p>
                Мой основной стек: React / Next, Express, MongoDb, Firebase Realtime. Был хобби-проект на React Native. Также могу написать простые скрипты на Python (использовал для автоматической выгрузки остатков, мониторинга цен и т.п.).
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
    )
}

export default GeneralInfo