import Link from 'next/link'
import React from 'react'

import { Work, WorkLinkLabels } from '../../../../types/work.type'

import styles from './work.module.css'


type WorkSingleProps = {
  work: Work
}

const WorkSingle: React.FC<WorkSingleProps> = (props) => {
  return (
    <li
      aria-label="Работа"
      className={ styles.work }
    >
      <div style={ { display: "flex", flexDirection: "row", alignItems: "baseline", justifyContent: "space-between" } }>
        <h3 className={ styles.title }>
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
        className={ styles.sourceslist }
      >
        <p className="text--bold text--small no-margin">
          Публикации:
        </p>
        { props.work.links.devto &&
          <div className={ styles.source } role="listitem">
            <Link
              href={ props.work.links.devto }
              target={ "_blank" }
              rel="noreferrer"
            >
              { WorkLinkLabels.devto }
            </Link>
          </div>
        }

        { props.work.links.vcru &&
          <div className={ styles.source } role="listitem">
            <Link
              href={ props.work.links.vcru }
              target={ "_blank" }
              rel="noreferrer"
            >
              { WorkLinkLabels.vcru }
            </Link>
          </div>
        }

        { props.work.links.local &&
          <div className={ styles.source } role="listitem">
            <Link
              href={ props.work.links.local }
              target={ "_blank" }
            >
              { WorkLinkLabels.local }
            </Link>
          </div>
        }
      </div>
    </li>
  )

}

export default WorkSingle