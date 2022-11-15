import Link from 'next/link'
import React from 'react'
import { Work, WorkLinkLabels } from '../../../../assets/types/work.type'
import Highlighted from '../../../../assets/ui-components/Highlighted/Highlighted'


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
        <time aria-label="Дата публицации" className="no-margin text--small text--grey">
          { props.work.publishDate }
        </time>
      </div>

      <p aria-label="Описание работы" className={ "text--small no-margin" } >
        <Highlighted
          text={ props.work.description }
          keywords={ props.work.keywords }
          classString={ "text--green" }
        />
      </p>

      
      <span
        style={ { display: "inline-block", marginTop: "20px" } }
        className="text--small text--grey no-margin"
      >
        Публикации:
      </span>
      <ul className={ styles.sourselist }>
        { props.work.links.devto &&
          <li>
            <Link
              href={ props.work.links.devto }
              target={ "_blank" }
              rel="noreferrer"
            >
              <span className={ styles.sourselink }>{ WorkLinkLabels.devto }</span>
            </Link>
          </li>
        }
        { props.work.links.vcru &&
          <li>
            <Link
              href={ props.work.links.vcru }
              target={ "_blank" }
              rel="noreferrer"
            >
              <span className={ styles.sourselink }>{ WorkLinkLabels.vcru }</span>
            </Link>
          </li>
        }
        { props.work.links.local &&
          <li className={ styles.source }>
            <Link
              href={ props.work.links.local }
              target={ "_blank" }
            >
              <span className={ styles.sourselink }>{ WorkLinkLabels.local }</span>
            </Link>
          </li>
        }
      </ul>





    </li>
  )

}

export default WorkSingle