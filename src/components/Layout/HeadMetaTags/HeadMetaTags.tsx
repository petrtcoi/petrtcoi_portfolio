import Head from 'next/head'
import Script from 'next/script'
import React from 'react'


type HeadMetaProps = {}

const HeadMeta: React.FC<HeadMetaProps> = (_props) => {
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
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=G-Z972NPKMWH`}
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                { `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){window.dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-Z972NPKMWH');
                `}
            </Script>
        </>
    )
}

export default HeadMeta