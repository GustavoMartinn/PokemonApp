import type { AppProps } from 'next/app'
import Header from '../components/Modules/Header'
import { ThemeContextProvider } from '../providers/ThemeContext'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <>
        <Header />
        <Component {...pageProps} />
      </>
    </ThemeContextProvider>
  )
}
