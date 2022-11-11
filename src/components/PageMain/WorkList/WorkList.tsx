import React from 'react'

import WorkSingle from './WorkSingle/WorkSingle'

import { Work } from '../../../types/work.type'

import styles from './worklist.module.css'

type WorkListProps = {
    works: Work[]
}

const WorkList: React.FC<WorkListProps> = (props) => {
    return (
        <div aria-label="Список работ" className={ styles.block }>
            <h2 style={ { textAlign: "center" } }>Список работ</h2>
            <ul className={ styles.worklist }>
                {
                    props.works.map((work, index) => {
                        return (<WorkSingle work={ work } key={ index } />)
                    })
                }
            </ul>
        </div>
    )
}

export default WorkList