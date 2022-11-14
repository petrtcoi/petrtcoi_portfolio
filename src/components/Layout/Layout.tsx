import React from "react"
import { useRouter } from 'next/router'
import HeadMetaTags from "./HeadMetaTags/HeadMetaTags"
import Footer from "./Footer/Footer"

import * as ga from '../../assets/utils/ga'
import { setUiTheme } from "../../assets/utils/setUiTheme"
import Header from "./Header/Header"
import { ThemeColorSchema } from "../../assets/types/ui.type"

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {

  const router = useRouter()

  React.useEffect(() => {
    const handleRouteChange = (url: string) => {
      ga.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

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