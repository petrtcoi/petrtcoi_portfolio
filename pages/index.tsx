import Head from 'next/head'
import { useEffect } from 'react'


export default function Home() {

  useEffect(() => {
    // document.documentElement.setAttribute("data-theme", "dar1k")
    setTimeout(() => document.documentElement.setAttribute("data-theme", "dark"), 2000)

  }, [])

  return (
    <div id="page-home">
      <main>
        <h1>Заголовок 1</h1>
        <h2>Заголовок2</h2>
        Обычный текст
      </main>
    </div>
  )
}
