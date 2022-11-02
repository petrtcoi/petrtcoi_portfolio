import type { NextPage } from 'next'

import PortfolioImage from '../components/PageMain/PortfoliImage'

import styles from './../components/PageMain/css/pagemain.module.css'

type PageMainProps = {}

const PageMain: NextPage<PageMainProps> = (_props) => {


    return (
        <div data-testid="page-home" style={ { display: "flex", flexWrap: "wrap" } }>
            <div className={ styles["portfolio-image"] }>
                <PortfolioImage />
            </div>
            <div className={ styles.information }>
                <h1 style={ { fontSize: "1.8rem" } }>Добро пожаловать на мой сайт</h1>
                <p className="text--larger">
                    Меня зовут Петр. Я решил создать сайт, куда буду выкладывать информацию о своих навыках и ссылки на код. Думаю, это будет более наглядной демонтрацией того, что я могу предложить вам.
                </p>
                <p>
                    Пишу сайты на React с 2017 года. Начинал как хобби, но впоследствии прокачался и нашел примение своим умениям в коммерческой области: интернет-магазины, написанные на NextJS (например, <a href="https://arboniashop.ru" target="_blank" rel="noreferrer">arboniashop.ru</a>). Создана также рабочая панель для подготовки коммерческих предложений покупателям, интегрированная с прайс-листами, загруженными в Google Docs, онлайн-кассой, складской программой, рабочим WhatsApp (Twilio).
                </p>
                <p>
                    Мой основной стек: React / Next, Express, MongoDb. Был хобби-проект на React Native. Также могу написать простые скрипты на Python (использовал для автоматической выгрузки остатков, мониторинга цен и т.п.).
                </p>
                <p>
                    Буду рад любой обратной связи.

                </p>
            </div>

        </div>
    )
}

export default PageMain
