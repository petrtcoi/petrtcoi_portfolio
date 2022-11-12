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
    <div data-testid={ "layout-header" } className={styles.headerblock}>
      
      {/* LOGO */ }
      <Link href="/">
        <ReactLogo size={ 60 } className={ styles.logo } />
      </Link>


      {/* TITLE */ }
      <h1 className={ styles.title } >
        Petr Tcoi
      </h1>


      {/* BURGER MENU */ }
      <button
        aria-label="Открыть меню"
        data-state-should-hide={ menuStatus === MenuStatus.open ? "true" : "false" }
        onClick={ () => setMenuStatus(MenuStatus.open) }
        className={styles.burgerbutton}
      >
        <BurgerMenuIcon size={ 25 } className={ "svg__button" } />
      </button>


      {/* POPUPMENU */ }
      <PopupMenu
        menuStatus={ menuStatus }
        closeMenuFunc={ () => setMenuStatus(MenuStatus.closed) }
      />

    </div>
  )

}

export default Navbar




