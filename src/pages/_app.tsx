import { AppProps } from 'next/app'
import React from 'react'

import '../app/globals.css'

type Props = {}

export default function App({Component,pageProps}: AppProps) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  )
}