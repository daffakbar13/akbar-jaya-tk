import { MuiProvider, ReactQueryProvider } from '@akbar/providers'
import { MainLayout } from '@akbar/layouts'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MuiProvider>
      <ReactQueryProvider>
        <Head>
          <title>Akbar Jaya</title>
          <meta name="description" content="Powered by Akbar Jaya" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ReactQueryProvider>
    </MuiProvider>
  )
}
