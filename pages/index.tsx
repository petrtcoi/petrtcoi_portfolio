import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import PageTitle from '../components/helpers/PageTitle'



export default function Home() {

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", "light")
        setTimeout(() => document.documentElement.setAttribute("data-theme", "dark"), 2000)
        setTimeout(() => document.documentElement.setAttribute("data-theme", "light"), 4000)

    }, [])

    return (
        <div data-testid="page-home">
            <h1>Заголовок 1</h1>
            <h2>Заголовок2</h2>
            <p>Обычный текст</p>
            <p className="comment--small--grey">серый текст</p>
            <p className="text-accent">акцент на тексте</p>
            <a href="#">Ссылка на что-либ2о</a>

            {/* <ReactLogo fill="red" /> */ }
            <div>
                <Image
                    src={ "/images/icons/logo-react.svg" }
                    width={ 200 }
                    height={ 200 }
                    alt=""

                    style={ {
                        filter: "invert(51%) sepia(85%) saturate(2665%) hue-rotate(322deg) brightness(111%) contrast(99%)"
                    } }
                />
            </div>
        </div>
    )
}
