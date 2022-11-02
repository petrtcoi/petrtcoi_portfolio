import React from 'react'
import CancelIcon from '../../assets/icons/CancelIcon'
import ThemeSwitcher from '../elements/ThemeSwitcher/ThemeSwitcher'

type PopupMenuProps = {
    closeMenuFunc: () => void
}

const PopupMenu: React.FC<PopupMenuProps> = (props) => {

    return (
        <div>
            {/* ЗАКРЫТЬ МЕНЮ */}
            <div
                style={ { display: 'inline-block' } }
                onClick={ props.closeMenuFunc }
                data-testid="popupmenu-close-button"
            >
                <CancelIcon size={ 35 } className={ "icon-button" } />
            </div>


            {/* СМЕНА ТЕМЫ */}
            <div style={{marginTop: "30px"}}>
                <h3 style={ { textAlign: "center", marginBottom: "20px" } }>Переключение темы</h3>
                <ThemeSwitcher />
            </div>

        </div>
    )

    

}

export default PopupMenu