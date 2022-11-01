import { FC, useState } from "react"
import BurgerMenuIcon from "../../assets/icons/BurgerMenuIcon"
import { MenuStatus } from "../../typings/status"

import ReactLogo from "../ReactLogo/ReactLogo"

import styles from './css/layout.module.css'
import PopupMenu from "./PopupMenu"


type HeaderProps = {}

const Header: FC<HeaderProps> = (_props) => {

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    return (
        <header data-testid="header">
            <div>
                <ReactLogo size={ 50 } />
            </div>
            <div
                className={ styles.header }
            >
                Petr Tcoi
            </div>


            <div
                onClick={ () => setIsMenuOpen(true) }
                data-testid="popupmenu-burger-button"
            >
                <BurgerMenuIcon size={ 25 } className={ "icon-button" } />
            </div>
            <div
                className={ styles['popup-menu'] }
                data-popupmenu-status={ isMenuOpen ? MenuStatus.open : MenuStatus.closed }
                data-testid="popup-menu"
                hidden={isMenuOpen ? false : true}
            >
                <PopupMenu
                    closeMenuFunc={ () => setIsMenuOpen(false) }
                />
            </div>
        </header>
    )
}

export default Header