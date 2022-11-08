import React from "react"
import Link from "next/link"

import BurgerMenuIcon from "../../../shared/svg-icons/BurgerMenuIcon"
import PopupMenu from "../PopupMenu/PopupMenu"
import ReactLogo from "../../../shared/svg-icons/ReactLogo"

import { MenuStatus } from "../../../types/ui.type"

import styles from './navbar.module.css'



type NavbarProps = {}

const Navbar: React.FC<NavbarProps> = (_props) => {

  const [menuStatus, setMenuStatus] = React.useState<MenuStatus>(MenuStatus.closed)


  return (
    <header>

      {/* LOGO */ }
      <Link href="/">
        <ReactLogo size={ 60 } className={ "logo" } />
      </Link>


      {/* TITLE */ }
      <h1 className={ styles.title } >
        Petr Tcoi
      </h1>


      {/* BURGER MENU */ }
      <div
        aria-label="Открыть меню"
        role="button"
        data-should-hide={ menuStatus === MenuStatus.open ? "true" : "false" }
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




