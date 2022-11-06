import Link from 'next/link'
import React from 'react'

import { Work, WorkLinkLabels } from '../../../../types/work.type'

import styles from './work.module.css'


type WorkSingleProps = {
    work: Work
}

const WorkSingle: React.FC<WorkSingleProps> = (props) => {
    return (
        <div className={ styles.work } data-testid="single_work">
            <div data-testid="single_work_title" className={ styles.work__title }>
                <h3> { props.work.title }</h3>
            </div>
            <div
                data-testid="single_work_description"
                className={ "text--small" }
            >
                { props.work.description }
            </div>
            <div
                data-testid="single_work_tags"
                className={ "text--small accent" }
            >
                { props.work.tags.join(', ') }
            </div>
            <div
                data-testid="single_work_links"
                className={ styles.work__links }
            >
                <span className="text--bold">Подробное описание работы:</span>
                <ul>
                    { props.work.links.devto &&
                        <li>
                            <Link
                                href={ props.work.links.devto }
                                target={ "_blank" }
                                rel="noreferrer"
                                className={styles.work__links__el}
                            >
                                { WorkLinkLabels.devto }
                            </Link>
                        </li>
                    }
                    { props.work.links.vcru &&
                        <li>
                            <Link
                                href={ props.work.links.vcru }
                                target={ "_blank" }
                                rel="noreferrer"
                                className={styles.work__links__el}
                            >
                                { WorkLinkLabels.vcru }
                            </Link>
                        </li>
                    }
                    { props.work.links.local &&
                        <li>
                            <Link
                                href={ props.work.links.local }
                                target={ "_blank" }
                            >
                              <span  className={styles.work__links__el}> { WorkLinkLabels.local }</span> 
                            </Link>
                        </li>
                    }
                </ul>
            </div>
        </div>
    )

}

export default WorkSingle