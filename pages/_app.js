import '../styles/globals.scss'

import React, {useState} from "react";
import {Context} from "../context/context";
import Router from "next/router";
import NProgress from "nprogress";
NProgress.configure({ showSpinner: false });

function MyApp({ Component, pageProps }) {
  const [context, setContext] = useState('Test context')
  Router.events.on('routeChangeStart',(url)=>{
      NProgress.start();
  })
  Router.events.on('routeChangeComplete',(url)=>{
    NProgress.done();
  })
  return (
      <>
          <div className='site__wrapper'>
              <Context.Provider value={[context, setContext]}>
                <Component {...pageProps} />
              </Context.Provider>
          </div>
      </>
  )
}

export default MyApp
