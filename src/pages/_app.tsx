import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import "../css/font-awesome.css"


function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Component {...pageProps} />
  )
}
export default  MyApp

