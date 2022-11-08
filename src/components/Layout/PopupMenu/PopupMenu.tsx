import React from 'react'

import CancelIcon from '../../../shared/svg-icons/CancelIcon'
import ThemeSwitcher from '../../../shared/ui-components/ThemeSwitcher/ThemeSwitcher'
import { MenuStatus } from '../../../types/ui.type'

import styles from './popupmenu.module.css'

type PopupMenuProps = {
    menuStatus: MenuStatus
    closeMenuFunc: () => void
}

const PopupMenu: React.FC<PopupMenuProps> = (props) => {

    return (
        <nav
            data-popupmenu-status={ props.menuStatus }
            aria-label="Popup меню"
            className={ styles.popupmenu }
            style={ { zIndex: 1000 } }
        >
            {/* ШАПКА МЕНЮ */ }
            <div className={ styles.header }>
                <div
                    aria-label="Закрыть меню"
                    role="button"
                    className={ styles.header__closebutton }
                    onClick={ props.closeMenuFunc }
                >
                    <CancelIcon size={ 35 } className={ "icon-button" } />
                </div>
                <div className={ styles.header__title }>
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