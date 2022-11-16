import React from 'react'

import CancelIcon from '../../../assets/icons/CancelIcon'
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher'

import { MenuStatus } from '../../../assets/types/ui.type'


import styles from './popupmenu.module.css'

type PopupMenuProps = {
    menuStatus: MenuStatus
    closeMenuFunc: () => void
}

const PopupMenu: React.FC<PopupMenuProps> = (props) => {

    return (
        <nav
            id="popupmenu"
            
            aria-label="Popup меню"
            className={ styles.popupmenu }
            style={ { zIndex: 1000 } }
        >
            {/* ШАПКА МЕНЮ */ }
            <div className={ styles.header }>
                <button
                    aria-label="Закрыть меню"
                    className={ styles.closebutton }
                    onClick={ props.closeMenuFunc }
                >
                    <CancelIcon size={ 35 } className={ "svg__button" } />
                </button>
                <div className={ styles.title }>
                    МЕНЮ
                </div>
            </div>


            {/* СОДЕРЖАНИЕ МЕНЮ */ }
            <div className={ styles.content }>
                <ThemeSwitcher />
            </div>

        </nav>
    )
}

export default PopupMenu