import { AppProps } from 'next/app'
import '../styles/globals.css'

type CustomPageProps = {
}

export default function MyApp({ Component, pageProps }: AppProps<CustomPageProps>) {
return (
    <Component {...pageProps} />
)}