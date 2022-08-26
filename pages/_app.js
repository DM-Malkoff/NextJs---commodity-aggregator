import '../styles/globals.scss'

import React, {useState} from "react";
import {Context} from "../context/context";
import Router from "next/router";
import Loader from "../components/loader";
import Head from "next/head";
import NProgress from "nprogress";
NProgress.configure({ showSpinner: false });

function MyApp({ Component, pageProps }) {
  const [context, setContext] = useState('Test context')
    const [loading, setLoading] = useState(false)

    Router.events.on('routeChangeStart',(url)=>{
        setLoading(true)
        NProgress.start();
    })
    Router.events.on('routeChangeComplete',(url)=>{
        setLoading(false)
        NProgress.done();
    })
  return (
      <>
          <Head>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
                    integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
                    crossOrigin="anonymous" referrerPolicy="no-referrer"/>
          </Head>
          {loading && <Loader />}
      <div className='site__wrapper'>
          <Context.Provider value={[context, setContext]}>
            <Component {...pageProps} />
          </Context.Provider>
      </div>
      </>
  )
}

export default MyApp
