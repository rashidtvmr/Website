import { AppProps } from 'next/app'
import '../styles/index.css'

export default function ExpanseServices({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
