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
            <Script id="yandex-metrika" strategy="afterInteractive"> 
                { `
                    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                    m[i].l=1*new Date();
                    for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
                 
                    ym(91236839, "init", {
                         clickmap:true,
                         trackLinks:true,
                         accurateTrackBounce:true
                    });
                `}
            </Script>
        </>
    )
}

export default HeadMeta