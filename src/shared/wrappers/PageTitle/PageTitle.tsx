import React from 'react'
import Head from 'next/head'

type PageHeaderProps = {
    title?: string
    description?: string
}

const PageTitle: React.FC<PageHeaderProps> = (props) => {

    return (
        <Head>
            { props.title &&
                <title>{ props.title }</title>
            }
            { props.description &&
                <meta
                    name="description"
                    content={ props.description }
                />
            }
        </Head>
    )
}

export default PageTitle