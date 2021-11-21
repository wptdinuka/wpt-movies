import { Fragment } from 'react'
import Layout from '../components/Layout'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      
      <main className='container'>
      <Layout>
      <Component {...pageProps} />
      </Layout>
      </main>
    </Fragment>
  )
}

export default MyApp