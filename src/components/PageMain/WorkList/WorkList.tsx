import React from 'react'

import WorkSingle from './WorkSingle/WorkSingle'

import { Work } from '../../../types/work.type'

import styles from './worklist.module.css'


type WorkListProps = {
    works: Work[]
}


const WorkList: React.FC<WorkListProps> = (props) => {
    return (
        <div className={ styles.block } data-testid="worklist">
            <h2 style={ { textAlign: "center" } } data-testid="worklist_title">Список работ</h2>
            <div className={ styles.worklist }>
                {
                    props.works.map((work, index) => {
                        return (<WorkSingle work={ work } key={ index } />)
                    })
                }
            </div>
        </div>
    )
}

export default WorkList