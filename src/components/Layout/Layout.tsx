import React from "react"

import HeadMetaTags from "./HeadMetaTags/HeadMetaTags"
import Footer from "./Footer/Footer"

import { setUiTheme } from "../../assets/utils/setUiTheme"
import Header from "./Header/Header"
import { ThemeColorSchema } from "../../assets/types/ui.type"

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {

  const useSomeEffect = typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect
  useSomeEffect(() => {
    setUiTheme(ThemeColorSchema.dark)
  }, [])


  return (
    <>
      <HeadMetaTags />
      <Header />
      <main>
        { children }
      </main>
      <Footer />

    </>
  )
}

export default Layout