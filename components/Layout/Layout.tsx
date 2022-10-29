import Head from "next/head"
import { ReactNode } from "react"


interface LayoutProps {
    children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {

    return (
        <>
            <Head>
                {/* Общее */ }
                <meta charSet="utf-8" />
                <title>React разработка. Портфолио Petr Tcoi</title>
                <meta name="description" content="Сайт-портфолио от Petr Tcoi. Работаю с ReactJS / NextJS. Открыт к предложениям."/>

                {/* Favicons */ }
                <link rel="apple-touch-icon" sizes="180x180" href="/images/favicons/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/images/favicons/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/images/favicons/favicon-16x16.png" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff"></meta>
            </Head>
            <header>

            </header>
            <main>
                { children }
            </main>
            <footer>
                ƒ
            </footer>
        </>
    )
}

export default Layout