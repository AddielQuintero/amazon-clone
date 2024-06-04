import type { AppProps } from 'next/app'
import { ThemeProvider, type DefaultTheme } from 'styled-components'
import GlobalStyle from '@/styles/globalstyles'
import { Header } from '@/components/Header'
import Head from 'next/head'
import { Provider } from 'react-redux'
import { store } from '@/lib/redux/store/index.store'
import { ApolloProvider } from '@apollo/client'
import client from '@/lib/graphql/client'

const theme: DefaultTheme = {
  colors: {
    black: '#111',
    white: '#fff',
    background: '#EAEDED',
    orange: 'orange',
    navBg: '#131921',
  },
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <ApolloProvider client={client}>
          <ThemeProvider theme={theme}>
            {/* <Head>
          <title>Amazon Clone</title>
          <meta name="description" content="Amazon Clone" />
          <link rel="icon" href="/favicon.ico" />
        </Head> */}
            <GlobalStyle />
            <Header />
            <Component {...pageProps} />
          </ThemeProvider>
        </ApolloProvider>
      </Provider>
    </>
  )
}
