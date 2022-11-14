import Layout from '../src/components/Layout/Layout'
import type { AppProps } from 'next/app'


import '../src/assets/styles/_styles.css'
import React from 'react'



export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component { ...pageProps } />
    </Layout>
  )
}