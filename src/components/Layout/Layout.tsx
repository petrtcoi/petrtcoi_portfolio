import React from "react"

import HeadMeta from "./HeadMeta/HeadMeta"
import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"
import ThemeWrapper from "./themeWrapper"
import { Theme } from "../../theme/theme.enum"



interface LayoutProps {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {


    return (
        <>
            <HeadMeta />
            <div>
                <Navbar />
                <main>
                    <ThemeWrapper>
                        { children }
                    </ThemeWrapper>
                </main>
                <Footer />
            </div>
        </>
    )
}

export default Layout