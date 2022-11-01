import { FC, useState } from "react"
import BurgerMenuIcon from "../../assets/icons/BurgerMenuIcon"
import { MenuStatus } from "../../typings/status"

import ReactLogo from "../ReactLogo/ReactLogo"

import styles from './css/layout.module.css'
import PopupMenu from "./PopupMenu"


type HeaderProps = {}

const Header: FC<HeaderProps> = (_props) => {

    const [menuStatus, setMenuStatus] = useState<MenuStatus>(MenuStatus.closed)

    return (
        <header data-testid="header">


            <div
                data-testid="react-logo"
            >
                <ReactLogo size={ 50 } />
            </div>


            <div
                data-testid="header-title"
                className={ styles["header-title"] } >
                Petr Tcoi
            </div>


            <div
                data-testid="popupmenu-burger-button"
                onClick={ () => setMenuStatus(MenuStatus.open) }
            >
                <BurgerMenuIcon size={ 25 } className={ "icon-button" } />
            </div>


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


