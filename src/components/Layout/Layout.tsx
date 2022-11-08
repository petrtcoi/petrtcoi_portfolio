import React from "react"
import Head from "next/head"

import HeadMeta from "./HeadMeta/HeadMeta"
import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"

import { Theme } from "../../theme/theme.enum"


interface LayoutProps {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {

    React.useEffect(() => {
        document.documentElement.setAttribute("data-theme", Theme.dark)
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