import type { AppProps } from 'next/app'
import Layout from '../src/components/Layout/Layout'

import '../src/css/variables.css'
import '../src/css/fonts-faces.css'
import '../src/css/globals.css'
import '../src/css/tables.css'

import '../src/theme/theme.css'



export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <Layout>
      <Component { ...pageProps } />
    </Layout>
  )
}