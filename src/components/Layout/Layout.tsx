import React from "react"
import { ThemeColorSchema } from "../../assets/types/ui.type"
import { Provider } from "react-redux"

import HeadMetaTags from "./HeadMetaTags/HeadMetaTags"
import Footer from "./Footer/Footer"
import Header from "./Header/Header"

import { setUiTheme } from "../../assets/utils/setUiTheme"

import { store } from "../../redux/store"

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
      <Provider store={ store }>
        <HeadMetaTags />
        <Header />
        <main>
          { children }
        </main>
        <Footer />
      </Provider>
    </>
  )
}

export default Layout