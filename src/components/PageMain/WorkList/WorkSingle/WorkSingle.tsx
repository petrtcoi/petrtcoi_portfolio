import Link from 'next/link'
import React from 'react'

import { Work, WorkLinkLabels } from '../../../../types/work.type'

import styles from './work.module.css'


type WorkSingleProps = {
    work: Work
}

const WorkSingle: React.FC<WorkSingleProps> = (props) => {
    return (
        <div
            aria-label="Работа"
            role="listitem"
            className={ styles.work }
        >
            <div style={ { display: "flex", flexDirection: "row", alignItems: "baseline", justifyContent: "space-between" } }>
                <h3 className={ styles.work__title }>
                    { props.work.title }
                </h3>
                <p aria-label="Дата публицации" className="no-margin comment--small">
                    { props.work.publishDate }
                </p>
            </div>


            <p aria-label="Описание работы" className={ "text--small no-margin" } >
                { props.work.description }
            </p>

            <p aria-label="Используемые технологии" className={ "text--small no-margin accent" } >
                { props.work.tags.join(', ') }
            </p>

            <div
                role="list"
                aria-label="Ссылки на публикации работы"
                className={ styles.work__sources }
            >

                <p className="text--bold text--small no-margin">
                    Подробное описание работы:
                </p>

                { props.work.links.devto &&
                    <div className={ styles.work__source } role="listitem">
                        <Link
                            href={ props.work.links.devto }
                            target={ "_blank" }
                            rel="noreferrer"
                            className={ styles.work__links__el }
                        >
                            { WorkLinkLabels.devto }
                        </Link>
                    </div>
                }

                { props.work.links.vcru &&
                    <div className={ styles.work__source } role="listitem">
                        <Link
                            href={ props.work.links.vcru }
                            target={ "_blank" }
                            rel="noreferrer"
                            className={ styles.work__links__el }
                        >
                            { WorkLinkLabels.vcru }
                        </Link>
                    </div>
                }

                { props.work.links.local &&
                    <div className={ styles.work__source } role="listitem">
                        <Link
                            href={ props.work.links.local }
                            target={ "_blank" }
                        >
                            <span className={ styles.work__links__el }> { WorkLinkLabels.local }</span>
                        </Link>
                    </div>
                }
            </div>
        </div>
    )

}

export default WorkSingle