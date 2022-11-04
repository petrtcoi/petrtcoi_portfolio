import React from "react"
import Head from "next/head"

import Footer from "./Footer"
import Header from "./Header"
import { Theme } from "../../typings/ui"

interface LayoutProps {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {

    React.useEffect(() => {
        document.documentElement.setAttribute("data-theme", Theme.dark)
    },[])
    

    return (
        <>
            <Head>
                {/* Общее */ }
                <meta charSet="utf-8" />
                <title>React разработка. Портфолио Petr Tcoi</title>
                <meta name="description" content="Сайт-портфолио от Petr Tcoi. Работаю с ReactJS / NextJS. Открыт к предложениям." />
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />

                {/* Favicons */ }
                <link rel="apple-touch-icon" sizes="180x180" href="/images/favicons/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/images/favicons/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/images/favicons/favicon-16x16.png" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff"></meta>
            </Head>
            <div >
                <Header />
                <main>
                    { children }
                </main>
                <Footer />
            </div>
        </>
    )
}

export default Layout