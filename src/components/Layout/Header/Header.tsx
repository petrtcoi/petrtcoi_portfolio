import React from "react"
import Link from "next/link"

import BurgerMenuIcon from "../../../assets/icons/BurgerMenuIcon"
import PopupMenu from "../PopupMenu/PopupMenu"
import ReactLogo from "../../../assets/icons/ReactLogo"


import styles from './header.module.css'
import { MenuStatus } from "../../../assets/types/ui.type"



type NavbarProps = {}

const Navbar: React.FC<NavbarProps> = (_props) => {

  const [menuStatus, setMenuStatus] = React.useState<MenuStatus>(MenuStatus.closed)


  return (
    <header data-testid={ "layout-header" } className={ styles.headerblock }>

      {/* LOGO */ }
      <Link href="/">
        <ReactLogo size={ 50 } className={ styles.logo } />
      </Link>


      {/* TITLE */ }
      <h1 style={{textAlign: "center"}}>
        <div className={ styles.title }>
        Petr Tcoi
        </div>
        <div className={ styles.subtitle }>
          портфолио
        </div>
        
      </h1>


      {/* BURGER MENU */ }
      <button
        aria-label={ "Открыть меню" }
        data-state-hide={ menuStatus === MenuStatus.open ? "true" : "false" }
        className={ styles.burgerbutton }
        onClick={ () => setMenuStatus(MenuStatus.open) }
      >
        <BurgerMenuIcon size={ 25 } className={ "svg__button" } />
      </button>


      {/* POPUPMENU */ }
      <PopupMenu
        menuStatus={ menuStatus }
        closeMenuFunc={ () => setMenuStatus(MenuStatus.closed) }
      />

    </header>
  )

}

export default Navbar




