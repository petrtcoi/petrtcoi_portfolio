import React from "react"

import HeadMeta from "./HeadMeta/HeadMeta"
import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"

import { setUiTheme } from "../../shared/helpers/setUiTheme"
import { Theme } from "../../theme/theme.enum"

interface LayoutProps {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {

    const useSomeEffect = typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect
    useSomeEffect(() => {
        setUiTheme(Theme.dark)
    }, [])


    return (
        <>
            <HeadMeta />
            <div>
                <Navbar />
                <main>
                    { children }
                </main>
                <Footer />
            </div>
        </>
    )
}

export default Layout