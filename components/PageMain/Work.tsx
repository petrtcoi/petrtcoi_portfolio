import { linkSync } from 'fs'
import React from 'react'

import styles from './css/styles.module.css'

type WorkProps = {
    index: number
    title: string
    description: string
    tags: string
    links: {
        devTo?: string
        zenYandex?: string
        local?: string
    }
}

const Work: React.FC<WorkProps> = (props) => {

    return (
        <div className={ styles.work }>
            <div className={ styles.work__index }>{ props.index }</div>
            <h3 className={ styles.work__title }>{ props.title }</h3>
            <p className={ styles.work__description }>{ props.description }</p>
            <p className={ styles.work__tags }>{ props.tags }</p>
            { (props.links.devTo || props.links.local || props.links.zenYandex) &&
                <div className="text--small">
                    <ul>
                        {props.links.local && <li>демонстрация на сайте</li>}
                        {props.links.devTo && <li>описание на dev.to</li>}
                        {props.links.zenYandex && <li>описание на zen.yandex</li>}
                    </ul>
                </div>
            }
        </div>
    )

}

export default Work