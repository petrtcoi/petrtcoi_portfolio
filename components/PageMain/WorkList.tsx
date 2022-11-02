import React from 'react'
import Link from 'next/link'
import styles from './css/styles.module.css'
import Work from './Work'

type WorkListProps = {}

const WorkList: React.FC<WorkListProps> = (_props) => {
    return (
        <div className={ styles["worklist-block"] } >
            <h2 style={ { textAlign: "center" } }>Работы</h2>
            <div className={styles.worklist}>
                <Work
                    index={ 1 }
                    title={ "Запуск сайта" }
                    description={ "Начальная настройка сайта. Главная страница. CSS-переменные. Переключатель темы." }
                    tags={ 'NextJs, CSS, Flexbox' }
                    links={ {devTo: "2", zenYandex: "2"} }
                />
                <Work
                    index={ 2 }
                    title={ "Запуск сайта" }
                    description={ "Начальная настройка сайта. Главная страница. CSS-переменные. Переключатель темы." }
                    tags={ 'NextJs, CSS, Flexbox' }
                    links={ {devTo: "2", zenYandex: "2"} }
                />
                <Work
                    index={ 3 }
                    title={ "Запуск сайта" }
                    description={ "Начальная настройка сайта. Главная страница. CSS-переменные. Переключатель темы." }
                    tags={ 'NextJs, CSS, Flexbox' }
                    links={ {devTo: "2", zenYandex: "2"} }
                />
                <div className={styles["work--empty"]} />
            </div>
        </div>
    )
}

export default WorkList