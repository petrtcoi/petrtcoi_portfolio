import React from 'react'
import CancelIcon from '../../assets/icons/CancelIcon'

type PopupMenuProps = {
    closeMenuFunc: () => void
}

const PopupMenu: React.FC<PopupMenuProps> = (props) => {

    return (
        <div>
            <div
                style={ { display: 'inline-block' } }
                onClick={ props.closeMenuFunc }
                data-testid="popupmenu-close-button"
            >
                <CancelIcon size={ 35 } className={ "icon-button" } />
            </div>
            <p>Привет. Я - меню.</p>
            <p>Во мне нет никакого смысла, кроме демонстрации того, что я есть.</p>
            <p>Я реализовано силами только CSS + изменением значения data-... в родительском node.</p>
        </div>
    )

}

export default PopupMenu