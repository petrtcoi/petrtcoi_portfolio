import React from 'react'
import Link from 'next/link'


type AboutTextProps = {}

const AboutText: React.FC<AboutTextProps> = (_props) => {

  return (
    <div>
      <p className="text--large accent" style={ { marginTop: "0px" } }>
        Привет! Меня зовут Петр. Я создал этот сайт в качестве своего портфолио. Здесь буду выкладывать &quot;лабораторные&quot; работы и ссылки на их описание.
      </p>
      <p>
        Пишу сайты на <span className="text--accent">React</span> с 2017 года. Начинал как хобби, но впоследствии прокачался и нашел примение своим умениям в коммерческой области: интернет-магазины, написанные на <span className="text--accent">NextJS</span> (например, <Link href="https://arboniashop.ru" target="_blank" rel="noreferrer">arboniashop.ru</Link>). Создана также рабочая панель для подготовки коммерческих предложений покупателям, интегрированная с прайс-листами, загруженными в Google Docs, онлайн-кассой, складской программой, рабочим WhatsApp (Twilio).
      </p>
      <p>
        Мой основной стек: React / Next, Express, MongoDb, Firebase Realtime. Был хобби-проект на React Native. Также могу написать простые скрипты на Python (использовал для автоматической выгрузки остатков, мониторинга цен и т.п.).
      </p>
      <p>
        Сайт доступен на&nbsp;
        <span>
          <Link
            href="https://github.com/petrtcoi/petrtcoi_portfolio"
            target="_blank"
            className="accent"
          >
            Guthub
          </Link>
        </span>
        . Буду признателен за любую обратную связь.
      </p>
    </div>
  )
}

export default AboutText