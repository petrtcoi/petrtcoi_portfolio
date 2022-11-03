import React from "react"
import Link from "next/link"

import BurgerMenuIcon from "../../assets/icons/BurgerMenuIcon"
import PopupMenu from "./PopupMenu"
import ReactLogo from "./../../assets/icons/ReactLogo"

import { MenuStatus } from "../../typings/ui"

import styles from './css/layout.module.css'



type HeaderProps = {}

const Header: React.FC<HeaderProps> = (_props) => {

    const [menuStatus, setMenuStatus] = React.useState<MenuStatus>(MenuStatus.closed)


    return (
        <header data-testid="header">

            {/* LOGO */ }
            <div data-testid="react-logo">
                <Link href="/">
                    <ReactLogo size={ 60 } className={ "logo" } />
                </Link>
            </div>


            {/* TITLE */ }
            <div
                data-testid="header-title"
                className={ styles["header-title"] } >
                Petr Tcoi
            </div>


            {/* BURGER MENU */ }
            <div
                data-testid="popupmenu-burger-button"
                data-should-hide={ menuStatus === MenuStatus.open ? "true" : "" }
                onClick={ () => setMenuStatus(MenuStatus.open) }
            >
                <BurgerMenuIcon size={ 25 } className={ "icon-button" } />
            </div>


            {/* POPUPMENU */ }
            <div data-testid="popup-menu"
                data-popupmenu-status={ menuStatus }
                className={ styles['popup-menu'] }
            >
                <PopupMenu
                    closeMenuFunc={ () => setMenuStatus(MenuStatus.closed) }
                />
            </div>

        </header>
    )

}

export default Header




