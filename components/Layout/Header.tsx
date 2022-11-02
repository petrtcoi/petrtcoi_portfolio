import { FC, useState } from "react"
import BurgerMenuIcon from "../../assets/icons/BurgerMenuIcon"
import { MenuStatus } from "../../typings/ui"

import ReactLogo from "../elements/ReactLogo/ReactLogo"

import styles from './css/layout.module.css'
import PopupMenu from "./PopupMenu"


type HeaderProps = {}

const Header: FC<HeaderProps> = (_props) => {

    const [menuStatus, setMenuStatus] = useState<MenuStatus>(MenuStatus.closed)


    return (
        <header data-testid="header">

            {/* LOGO */}
            <ReactLogo size={ 50 } />
        

            {/* TITLE */}
            <div
                data-testid="header-title"
                className={ styles["header-title"] } >
                Petr Tcoi
            </div>


            {/* BURGER MENU */}
            <div
                data-testid="popupmenu-burger-button"
                onClick={ () => setMenuStatus(MenuStatus.open) }
            >
                <BurgerMenuIcon size={ 25 } className={ "icon-button" } />
            </div>


            {/* POPUPMENU */}
            <div data-testid="popup-menu"
                data-popupmenu-status={ menuStatus }
                className={ styles['popup-menu'] }
                style={ { opacity: menuStatus === MenuStatus.closed ? 0 : 100 } }
            >
                <PopupMenu
                    closeMenuFunc={ () => setMenuStatus(MenuStatus.closed) }
                />
            </div>

        </header>
    )

}

export default Header




