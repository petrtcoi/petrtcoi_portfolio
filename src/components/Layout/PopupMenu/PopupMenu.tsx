import React from 'react'

import CancelIcon from '../../../assets/svg-icons/CancelIcon'
import ThemeSwitcher from '../../../assets/ui-components/ThemeSwitcher/ThemeSwitcher'
import { MenuStatus } from '../../../types/ui.type'

import styles from './popupmenu.module.css'

type PopupMenuProps = {
    menuStatus: MenuStatus
    closeMenuFunc: () => void
}

const PopupMenu: React.FC<PopupMenuProps> = (props) => {

    return (
        <div
            data-testid="popup-menu"
            data-popupmenu-status={ props.menuStatus }
            className={ styles.popupmenu }
            style={ { zIndex: 1000 } }
        >
            {/* ШАПКА МЕНЮ */ }
            <div className={ styles.header }>
                <div
                    data-testid="popupmenu-close-button"
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

        </div>
    )



}

export default PopupMenu