import React from 'react'
import WorkSingle from './WorkSingle/WorkSingle'
import { Work } from '../../../assets/types/work.type'
import styles from './worklist.module.css'

type WorkListProps = {
  works: Work[]
}

const WorkList: React.FC<WorkListProps> = (props) => {
  return (
    <section aria-label="Список работ" className={ styles.block }>
      <h2 className={styles.header}>Список работ</h2>
      <ul className={ styles.worklist }>
        {
          props.works.map((work, index) => {
            return (<WorkSingle work={ work } key={ index } />)
          })
        }
      </ul>
    </section>
  )
}

export default WorkList