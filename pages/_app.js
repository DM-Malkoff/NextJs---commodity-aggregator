import '../styles/globals.scss'

import React, {useState} from "react";
import {Context} from "../context/context";

function MyApp({ Component, pageProps }) {
  const [context, setContext] = useState('Test context')

  return (
      <div className='site__wrapper'>
          <Context.Provider value={[context, setContext]}>
            <Component {...pageProps} />
          </Context.Provider>
      </div>
  )
}

export default MyApp
