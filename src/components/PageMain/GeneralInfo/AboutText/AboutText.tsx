import React from 'react'
import Link from 'next/link'

import styles from './abouttext.module.css'


type AboutTextProps = {}

const AboutText: React.FC<AboutTextProps> = (_props) => {

  return (
    <div className={ styles.abouttextblock }>
      <p className={ styles.header__text }>
        Привет! Меня зовут Петр. Это мое портфолио.
      </p>
      <p style={ { marginTop: "60px" } }>
        Создаю сайты с использованием <span className="text--bold text--red">React</span>, <span className=" text--green text--bold">TypeScript</span>, <span className="text--bold text--blue">Express</span>, <span className="text--bold text--gold">MongoDb</span>. <span className="text--grey">Также владею CSS, HTML, Firebase Realtime и React Native. </span>
      </p>
      <p style={ { marginTop: "30px" } } className={ "text--small" }>
        Хочу работать в команде профессионалов и развивать свои навыки в направлении front-end с использованием библиотек React и Next. На практике знаком с принципами TDD. Использую <span className="text--bold">jest</span>, <span className="text--bold">playwright</span> и <span className="text--bold">storybook</span>.
      </p>
      
      <p style={ { marginTop: "40px" } } className={"text--grey"}>
        Код этого сайта доступен на&nbsp;
        <span>
          <Link
            href="https://github.com/petrtcoi/petrtcoi_portfolio"
            target="_blank"
            className="link--accent"
          >
            Github
          </Link>
        </span>
        .<br/>Буду признателен за любую обратную связь.
      </p>
    </div>
  )
}

export default AboutText