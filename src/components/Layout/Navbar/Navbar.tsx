import React from "react"
import Link from "next/link"

import BurgerMenuIcon from "../../../assets/svg-icons/BurgerMenuIcon"
import PopupMenu from "../PopupMenu/PopupMenu"
import ReactLogo from "../../../assets/svg-icons/ReactLogo"

import { MenuStatus } from "../../../types/ui.type"

import styles from './navbar.module.css'



type NavbarProps = {}

const Navbar: React.FC<NavbarProps> = (_props) => {

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
                className={ styles.title } >
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
            <PopupMenu
                menuStatus={ menuStatus }
                closeMenuFunc={ () => setMenuStatus(MenuStatus.closed) }
            />

        </header>
    )

}

export default Navbar




