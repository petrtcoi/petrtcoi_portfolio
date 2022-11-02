import React from 'react'

import CancelIcon from '../../assets/icons/CancelIcon'
import ThemeSwitcher from '../ui-components/ThemeSwitcher/ThemeSwitcher'

import styles from './css/layout.module.css'

type PopupMenuProps = {
    closeMenuFunc: () => void
}

const PopupMenu: React.FC<PopupMenuProps> = (props) => {

    return (
        <div>
            {/* ШАПКА МЕНЮ */ }
            <div className={ styles["popup-menu__header"] }>
                <div
                    style={ { display: 'inline-block' } }
                    onClick={ props.closeMenuFunc }
                    data-testid="popupmenu-close-button"
                >
                    <CancelIcon size={ 35 } className={ "icon-button" } />
                </div>
                <div
                    style={ { display: 'inline-block' } }
                >
                    МЕНЮ
                </div>
            </div>

            <div className="popup-menu__content">
                <div style={ { marginTop: "30px" } }>
                    <h3 style={ { textAlign: "center", marginBottom: "20px" } }>Переключение темы</h3>
                    <ThemeSwitcher />
                </div>
            </div>

            {/* СМЕНА ТЕМЫ */ }


        </div>
    )



}

export default PopupMenu