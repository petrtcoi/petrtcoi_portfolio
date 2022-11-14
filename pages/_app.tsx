import Layout from '../src/components/Layout/Layout'
import TagManager from 'react-gtm-module'
import type { AppProps } from 'next/app'


import '../src/assets/styles/_styles.css'
import React from 'react'



export default function App({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    TagManager.initialize({ gtmId: 'G-Z972NPKMWH' });
}, []);
  return (
    <Layout>
      <Component { ...pageProps } />
    </Layout>
  )
}